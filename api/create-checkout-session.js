// ═══════════════════════════════════════════════════════════════
// VERCEL SERVERLESS FUNCTION — Stripe Checkout
// ═══════════════════════════════════════════════════════════════
//
// Endpoint : POST /api/create-checkout-session
// Body : { items: [{ priceId: "price_xxx", quantity: 1 }, ...] }
// Réponse : { url: "https://checkout.stripe.com/..." }
//
// Variables d'environnement Vercel requises :
//   STRIPE_SECRET_KEY   → clé secrète Stripe (sk_live_... en prod, sk_test_... en test)
//   SITE_URL            → URL publique du site, ex: https://alexandre-delovane.com
//                         (sans slash final). Utilisé pour les pages success/cancel.
// ═══════════════════════════════════════════════════════════════

import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY manquante')
    return res.status(500).json({ error: 'Configuration paiement manquante côté serveur.' })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
  })

  try {
    const { items } = req.body || {}
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Panier vide ou invalide.' })
    }

    // Validation basique
    for (const item of items) {
      if (!item.priceId || typeof item.priceId !== 'string' || !item.priceId.startsWith('price_')) {
        return res.status(400).json({ error: `Identifiant produit invalide : ${item.priceId}` })
      }
      if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) {
        return res.status(400).json({ error: 'Quantité invalide.' })
      }
    }

    const siteUrl = (process.env.SITE_URL || `https://${req.headers.host}`).replace(/\/$/, '')

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price: item.priceId,
        quantity: item.quantity,
      })),
      // Stripe collecte l'adresse de livraison côté checkout
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'CH', 'LU', 'MC'],
      },
      // Frais de port forfaitaires (à ajuster selon tes envois réels)
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 690, currency: 'eur' },
            display_name: 'Colissimo France (3–5 jours ouvrés)',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 3 },
              maximum: { unit: 'business_day', value: 5 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 1290, currency: 'eur' },
            display_name: 'Colissimo Suivi (2–3 jours)',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 2 },
              maximum: { unit: 'business_day', value: 3 },
            },
          },
        },
      ],
      phone_number_collection: { enabled: true },
      locale: 'fr',
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
      // Métadonnées utiles pour le suivi
      metadata: {
        source: 'website-boutique',
      },
    })

    return res.status(200).json({ url: session.url, id: session.id })
  } catch (err) {
    console.error('Stripe error:', err)
    return res.status(500).json({
      error: err.message || 'Erreur lors de la création de la session de paiement.',
    })
  }
}
