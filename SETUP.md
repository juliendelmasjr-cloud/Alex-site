# Setup — Site Alexandre Delovane

Guide pas-à-pas pour rendre la boutique et la prise de RDV opérationnelles.
Temps total estimé : **45 minutes** une fois les comptes créés.

---

## 1. Prérequis

- [x] Compte Stripe actif (validé KYC)
- [ ] Compte Calendly (création gratuite, upgrade Pro recommandé)
- [ ] Projet déployé sur Vercel (ou prêt à l'être)

---

## 2. Architecture mise en place

```
Boutique (Stripe Checkout via serverless function Vercel)
└── /api/create-checkout-session.js  ← crée la session de paiement
    └── redirige vers Stripe Checkout (hosted)
        ├── /success  ← page de confirmation
        └── /cancel   ← page d'annulation

Services / RDV (Calendly avec Stripe intégré)
└── Composant <CalendlyEmbed/> qui ouvre une popup
    └── Calendly gère le créneau + le paiement Stripe nativement
```

Aucun backend à maintenir, aucune base de données. Tout passe par Stripe + Calendly.

---

## 3. Configuration Stripe (15 min)

### 3.1 Récupérer la clé secrète

1. Connexion sur https://dashboard.stripe.com
2. Mode **Test** (toggle en haut à droite) pour commencer
3. Menu **Developers → API keys**
4. Copie la **Secret key** (commence par `sk_test_...`)

### 3.2 Créer les produits dans Stripe

Pour chaque produit du fichier `src/data/products.js` :

1. Dashboard Stripe → **Catalogue → Produits → + Ajouter un produit**
2. **Nom** : reprends exactement le `name` du fichier (ex: "Bracelet Améthyste")
3. **Description** : copie le `description`
4. **Prix** : entre le montant en euros (ex: `19,00 €`), devise EUR, paiement unique
5. Clique **Enregistrer**
6. Sur la page du produit, copie le **Price ID** (commence par `price_...`)
7. Dans `src/data/products.js`, colle ce Price ID dans le champ `stripePriceId` du produit correspondant

Exemple :

```js
{
  id: 'bracelet-amethyste',
  // ...
  stripePriceId: 'price_1Q8aBcDeFgHiJkLmNo', // ← ICI
  // ...
}
```

> **Astuce** : tu peux aussi importer en masse via un CSV.
> Stripe → Produits → Importer.

### 3.3 Activer Apple Pay / Google Pay (optionnel)

Dashboard Stripe → **Settings → Payment methods** → activer Apple Pay et Google Pay.
Ils apparaîtront automatiquement sur le checkout pour les utilisateurs compatibles.

### 3.4 Configurer la TVA / facturation (optionnel)

Si Alexandre est assujetti à la TVA :
- Dashboard Stripe → **Settings → Tax** → activer Stripe Tax
- Les factures sont envoyées automatiquement aux clients

---

## 4. Configuration Calendly (15 min)

### 4.1 Création du compte

1. https://calendly.com/signup avec l'email d'Alexandre
2. Choisir le **handle** : ex `alexandre-delovane`
3. **Plan recommandé : Calendly Standard (12$/mois)** — nécessaire pour collecter le paiement Stripe avant le RDV

### 4.2 Connecter Stripe à Calendly

1. Calendly → **Account → Integrations → Payment**
2. Clique **Connect Stripe**
3. Autorise l'accès au compte Stripe d'Alexandre

### 4.3 Connecter Google Calendar (ou Outlook)

1. Calendly → **Account → Calendar Connection**
2. Connecte le calendrier qu'Alexandre utilise
3. Calendly bloquera automatiquement les créneaux occupés

### 4.4 Créer un Event Type par service

Pour **chaque** service (10 au total), crée un Event Type :

| Service | Durée | Prix | Localisation |
|---|---|---|---|
| S.O.S Urgence | 10 min | 45 € | Téléphone |
| Consultation 1 Domaine | 10 min | 35 € | Téléphone |
| Consultation Flash | 20 min | 70 € | Téléphone |
| Mini-Consultation | 15 min | 55 € | Téléphone |
| Consultation Paris | 30 min | 120 € | Adresse Paris |
| Consultation Région | 30 min | 110 € | Variable |
| Coaching | 40 min | 70 € | Visio (Zoom/Meet) |
| Coaching Couple | 1h | 170 € | Visio ou présentiel |
| Nettoyage Habitat | 1h | 300 € | Sur place |
| Atelier Projet de Vie | 2h | 90 € | Présentiel |

Pour chaque Event Type :

1. Calendly → **Event Types → + New Event Type → One-on-One**
2. Renseigne **Nom**, **Durée**, **Description**
3. Onglet **Location** : choisis Téléphone / Visio / Adresse selon le cas
4. Onglet **Booking page** → **Payments** → **Collect payment** → entre le prix
5. Onglet **Notifications** → personnalise email confirmation
6. **Save**
7. Copie le **Lien public** de l'event (ex: `https://calendly.com/alexandre-delovane/consultation-flash`)

### 4.5 Renseigner les URLs dans le code

Ouvre `src/data/calendly.js` et remplace `alexandre-delovane` (à la ligne `const BASE = ...`) par le vrai handle Calendly.

Si certains slugs d'events sont différents, ajuste-les dans la map `calendlyUrls`.

```js
const BASE = 'https://calendly.com/VRAI-HANDLE'

export const calendlyUrls = {
  sos:               `${BASE}/sos-urgence`,           // ← slug exact de l'event
  consult1Domaine:   `${BASE}/consultation-1-domaine`,
  // etc.
}
```

---

## 5. Variables d'environnement Vercel

Sur https://vercel.com → ton projet → **Settings → Environment Variables** :

| Nom | Valeur (exemple) | Environnements |
|---|---|---|
| `STRIPE_SECRET_KEY` | `sk_test_...` (test) puis `sk_live_...` (prod) | Production + Preview + Development |
| `SITE_URL` | `https://alexandre-delovane.com` | Production |
| `SITE_URL` | `https://nom-projet-git-main.vercel.app` | Preview |

Après avoir ajouté les variables : **Deployments → Redeploy** la branche main.

---

## 6. Test en local

```bash
# Installer les dépendances (incluant le SDK Stripe)
npm install

# Crée un fichier .env.local à la racine avec :
echo "STRIPE_SECRET_KEY=sk_test_TA_CLE" > .env.local
echo "SITE_URL=http://localhost:5173" >> .env.local

# Lancer le dev
npm run dev
```

> **Important** : `npm run dev` (Vite seul) ne fait PAS tourner les serverless functions
> du dossier `/api`. Pour tester le checkout en local, utilise `vercel dev` :
>
> ```bash
> npm install -g vercel
> vercel link              # 1ʳᵉ fois seulement
> vercel dev               # lance Vite + les API routes
> ```
>
> Vercel CLI charge automatiquement `.env.local`.

### Cartes de test Stripe

| Numéro | Comportement |
|---|---|
| `4242 4242 4242 4242` | Paiement réussi |
| `4000 0000 0000 9995` | Paiement refusé (fonds insuffisants) |
| `4000 0025 0000 3155` | Demande de 3D Secure |

Date d'expiration : n'importe quelle date future. CVC : 3 chiffres.

---

## 7. Mise en production

1. Sur Stripe → bascule en mode **Live**
2. Récupère la `sk_live_...`
3. Mets à jour `STRIPE_SECRET_KEY` sur Vercel (env Production uniquement)
4. Sur Calendly → vérifie que l'intégration Stripe est en mode "Live"
5. Push une dernière fois → Vercel redéploie
6. Fais un vrai paiement test (carte personnelle, montant minimum) puis remboursement depuis Stripe

---

## 8. Maintenance courante

### Ajouter un nouveau produit
1. Crée le produit sur Stripe → copie le `price_...`
2. Ajoute un objet dans `products` (fichier `src/data/products.js`)
3. Renseigne le `stripePriceId`
4. Push → déploiement automatique

### Modifier un prix
1. **Ne JAMAIS modifier un Price existant sur Stripe.** Crée un nouveau Price (Stripe historise tout).
2. Remplace le `stripePriceId` dans `products.js`.

### Ajouter un service / RDV
1. Crée l'event sur Calendly (avec prix Stripe)
2. Ajoute le slug dans `calendly.js`
3. Référence-le dans `Services.jsx`

---

## 9. Limites connues / améliorations possibles

- **Pas de webhook Stripe** : si tu veux tracer les commandes côté Notion / Google Sheets, il faudra ajouter `/api/stripe-webhook.js` plus tard.
- **Pas de gestion de stock automatique** : le champ `inStock` dans `products.js` est manuel. Si Alexandre vend des pièces uniques, pense à passer `inStock: false` après vente.
- **Frais de port forfaitaires** : 6,90 € (3–5j) ou 12,90 € (2–3j). Ajustables dans `api/create-checkout-session.js`.
- **Calendly Standard** : le plan gratuit ne permet PAS de collecter du paiement. Le plan Standard à 12$/mois est nécessaire.

---

## 10. Questions / SOS

En cas de souci de configuration : envoie-moi le message d'erreur exact + un screen.
Pour debug le checkout en prod : Stripe Dashboard → **Developers → Logs** affiche
toutes les requêtes API et les erreurs en temps réel.
