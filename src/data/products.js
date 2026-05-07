// ═══════════════════════════════════════════════
// CATALOGUE PRODUITS — Boutique Alexandre Delovane
// ═══════════════════════════════════════════════
//
// Comment utiliser :
// 1. Crée chaque produit sur ton dashboard Stripe (Produits > Ajouter un produit)
// 2. Récupère le "Price ID" (commence par "price_...")
// 3. Colle-le dans le champ `stripePriceId` du produit correspondant ci-dessous
//
// Tant qu'un Price ID n'est pas renseigné, le produit affichera "Bientôt disponible"
// et le bouton "Ajouter au panier" sera désactivé.
//
// Pour ajouter un nouveau produit : copie un objet, change l'id, et complète les champs.
// ═══════════════════════════════════════════════

export const categories = [
  { id: 'bracelets-pierres',     icon: '💎', name: 'Bracelets Pierres' },
  { id: 'duos',                  icon: '✨', name: 'Duos' },
  { id: 'pierres-prestige',      icon: '🔮', name: 'Pierres Semi-Précieuses' },
  { id: 'pendules',              icon: '⚖️', name: 'Pendules Divinatoires' },
  { id: 'bougies',               icon: '🕯️', name: 'Bougies & Parfums' },
  { id: 'oracle',                icon: '☽',  name: "Oracle du Souffle" },
  { id: 'bracelets-cuivre',      icon: '🪬', name: 'Bracelets Cuivre' },
  { id: 'sauge',                 icon: '🌿', name: 'Sauge & Palo Santo' },
]

// Le prix est en CENTIMES d'euros (1900 = 19,00 €)
// Stripe travaille toujours en centimes : on garde la même convention.

export const products = [
  // ─── BRACELETS PIERRES ──────────────────────────
  {
    id: 'bracelet-amethyste',
    category: 'bracelets-pierres',
    name: 'Bracelet Améthyste',
    short: 'Apaisement · Protection · Intuition',
    description: "Bracelet en perles d'améthyste naturelle. Pierre de spiritualité, elle apaise l'esprit et favorise la méditation. Élastique ajustable, perles 8mm.",
    price: 1900,
    image: '💎',
    stripePriceId: '', // ⚠️ À renseigner depuis Stripe Dashboard
    inStock: true,
    badge: null,
  },
  {
    id: 'bracelet-quartz-rose',
    category: 'bracelets-pierres',
    name: 'Bracelet Quartz Rose',
    short: 'Amour · Douceur · Cœur',
    description: "Bracelet en quartz rose, pierre de l'amour inconditionnel. Adoucit les blessures émotionnelles et ouvre le cœur. Élastique ajustable, perles 8mm.",
    price: 1900,
    image: '💗',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },
  {
    id: 'bracelet-obsidienne',
    category: 'bracelets-pierres',
    name: 'Bracelet Obsidienne Noire',
    short: 'Protection · Ancrage · Bouclier',
    description: "Bracelet en obsidienne noire. Bouclier énergétique puissant, elle protège des énergies négatives et ancre dans le présent. Perles 8mm.",
    price: 1900,
    image: '🖤',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },
  {
    id: 'bracelet-labradorite',
    category: 'bracelets-pierres',
    name: 'Bracelet Labradorite',
    short: 'Médiumnité · Aura · Mystère',
    description: "Bracelet en labradorite, pierre des médiums et des intuitifs. Renforce les capacités psychiques et protège l'aura. Perles 8mm.",
    price: 2200,
    image: '🌌',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },

  // ─── DUOS ──────────────────────────────────────
  {
    id: 'duo-amour',
    category: 'duos',
    name: 'Duo Amour',
    short: 'Quartz Rose + Rhodonite',
    description: "Duo de bracelets : quartz rose pour l'amour de soi, rhodonite pour l'harmonie relationnelle. Présenté en pochette noire.",
    price: 3200,
    image: '💕',
    stripePriceId: '',
    inStock: true,
    badge: 'Duo',
  },
  {
    id: 'duo-protection',
    category: 'duos',
    name: 'Duo Protection',
    short: 'Obsidienne + Œil de Tigre',
    description: "Duo de bracelets : obsidienne pour le bouclier énergétique, œil de tigre pour l'ancrage et la confiance. Pochette noire offerte.",
    price: 3200,
    image: '🛡️',
    stripePriceId: '',
    inStock: true,
    badge: 'Duo',
  },
  {
    id: 'duo-intuition',
    category: 'duos',
    name: 'Duo Intuition',
    short: 'Labradorite + Améthyste',
    description: "Duo puissant pour développer la médiumnité et la connexion spirituelle. Labradorite + améthyste, perles 8mm.",
    price: 3200,
    image: '✨',
    stripePriceId: '',
    inStock: true,
    badge: 'Duo',
  },

  // ─── PIERRES SEMI-PRÉCIEUSES (Prestige) ────────
  {
    id: 'pierre-tourmaline',
    category: 'pierres-prestige',
    name: 'Pierre Brute · Tourmaline Noire',
    short: 'Pièce unique · Décoration énergétique',
    description: "Pierre brute de tourmaline noire, sélectionnée à la main. Pièce unique pour l'autel ou la pièce à vivre. ~5–7cm.",
    price: 4500,
    image: '🪨',
    stripePriceId: '',
    inStock: true,
    badge: 'Prestige',
  },
  {
    id: 'pierre-citrine',
    category: 'pierres-prestige',
    name: 'Géode de Citrine',
    short: 'Abondance · Joie · Énergie solaire',
    description: "Géode de citrine naturelle. Pierre solaire de l'abondance et de la créativité. Pièce unique, ~8–10cm.",
    price: 8500,
    image: '🟡',
    stripePriceId: '',
    inStock: true,
    badge: 'Prestige',
  },
  {
    id: 'pierre-amethyste-geode',
    category: 'pierres-prestige',
    name: 'Géode d\'Améthyste',
    short: 'Méditation · Sanctuaire',
    description: "Géode d'améthyste, pièce unique. Idéale pour créer un espace sacré ou pour la méditation. ~10–15cm.",
    price: 8500,
    image: '💜',
    stripePriceId: '',
    inStock: false,
    badge: 'Prestige',
  },

  // ─── PENDULES DIVINATOIRES ─────────────────────
  {
    id: 'pendule-laiton',
    category: 'pendules',
    name: 'Pendule Égyptien Laiton',
    short: 'Forme classique · Initiation',
    description: "Pendule en laiton de forme égyptienne, idéal pour les débutants en radiesthésie. Livré avec planche d'initiation PDF.",
    price: 2500,
    image: '⚖️',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },
  {
    id: 'pendule-cristal',
    category: 'pendules',
    name: 'Pendule Cristal de Roche',
    short: 'Pierre pure · Précision',
    description: "Pendule en cristal de roche, pierre amplificatrice. Précis et neutre, parfait pour le travail médiumnique.",
    price: 3500,
    image: '🔹',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },
  {
    id: 'pendule-osiris',
    category: 'pendules',
    name: 'Pendule Osiris',
    short: 'Pendule expert · Multi-fonctions',
    description: "Pendule Osiris en laiton, équipé d'un compartiment de témoin. Pour radiesthésistes confirmés.",
    price: 4500,
    image: '🗝️',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },

  // ─── BOUGIES & PARFUMS ─────────────────────────
  {
    id: 'bougie-purification',
    category: 'bougies',
    name: 'Bougie Purification',
    short: 'Sauge blanche · Cire végétale',
    description: "Bougie artisanale à la sauge blanche. Pour purifier un espace ou ancrer une intention. Cire de soja, mèche en coton, durée ~30h.",
    price: 1800,
    image: '🕯️',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },
  {
    id: 'bougie-protection',
    category: 'bougies',
    name: 'Bougie Protection',
    short: 'Encens · Myrrhe · Cèdre',
    description: "Bougie de protection énergétique. Notes d'encens, myrrhe et cèdre. Cire végétale, durée ~30h.",
    price: 1800,
    image: '🕯️',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },
  {
    id: 'parfum-sacre',
    category: 'bougies',
    name: 'Parfum Sacré · Spray',
    short: 'Brume aurique · 100ml',
    description: "Spray d'eau florale et huiles essentielles pour brumiser l'aura ou un espace. Notes de jasmin, rose, encens.",
    price: 2400,
    image: '🌹',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },

  // ─── ORACLE DU SOUFFLE ─────────────────────────
  {
    id: 'oracle-souffle',
    category: 'oracle',
    name: "Oracle du Souffle",
    short: "Le jeu signature d'Alexandre Delovane",
    description: "Le jeu de l'Oracle du Souffle, créé par Alexandre Delovane. 44 cartes illustrées, livret d'accompagnement de 96 pages, boîte cartonnée prestige noir et or.",
    price: 4500,
    image: '☽',
    stripePriceId: '',
    inStock: true,
    badge: "L'S",
  },

  // ─── BRACELETS CUIVRE (sur devis) ──────────────
  {
    id: 'bracelet-cuivre-devis',
    category: 'bracelets-cuivre',
    name: 'Bracelet Cuivre Personnalisé',
    short: 'Sur mesure · Énergisé',
    description: "Bracelet en cuivre travaillé à la main, personnalisé selon votre intention. Tarif sur devis selon les pierres choisies. Contactez Alexandre via le formulaire.",
    price: null, // → devis
    image: '🪬',
    stripePriceId: null, // pas de paiement direct, contact uniquement
    inStock: true,
    badge: 'Sur devis',
  },

  // ─── SAUGE & PALO SANTO ────────────────────────
  {
    id: 'sauge-blanche',
    category: 'sauge',
    name: 'Sauge Blanche · Fagot',
    short: 'Californienne · ~10cm',
    description: "Fagot de sauge blanche californienne pour la purification. Récolte responsable. Brûler en fumigation pour nettoyer un lieu ou un objet.",
    price: 800,
    image: '🌿',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },
  {
    id: 'palo-santo',
    category: 'sauge',
    name: 'Palo Santo · Bâtonnets x3',
    short: "Bois sacré d'Amérique du Sud",
    description: "Lot de 3 bâtonnets de Palo Santo. Bois sacré utilisé pour la purification douce et la méditation. Issu de bois mort, récolte éthique.",
    price: 1200,
    image: '🪵',
    stripePriceId: '',
    inStock: true,
    badge: null,
  },
]

// Helper : formater un prix en centimes en chaîne lisible
export function formatPrice(cents) {
  if (cents == null) return 'Sur devis'
  return (cents / 100).toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + ' €'
}

// Helper : récupérer les produits d'une catégorie
export function productsByCategory(categoryId) {
  return products.filter(p => p.category === categoryId)
}

// Helper : retrouver un produit par id
export function getProduct(id) {
  return products.find(p => p.id === id)
}
