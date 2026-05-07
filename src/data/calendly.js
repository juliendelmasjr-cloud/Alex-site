// ═══════════════════════════════════════════════════════════════
// CONFIG CALENDLY — URLs des types de RDV
// ═══════════════════════════════════════════════════════════════
//
// Comment utiliser :
// 1. Sur Calendly, crée un Event Type pour chaque service
//    (Account → Event Types → Create New)
// 2. Configure le prix sur Calendly (Stripe doit être connecté)
// 3. Récupère l'URL publique de chaque event (ex: https://calendly.com/ton-compte/consultation-flash)
// 4. Colle-la dans la map ci-dessous
//
// Si une URL est vide (''), le bouton "Réserver" affichera un message
// "Bientôt disponible" et redirigera vers le formulaire de contact.
// ═══════════════════════════════════════════════════════════════

// REMPLACE 'alexandre-delovane' par ton handle Calendly réel.
const BASE = 'https://calendly.com/alexandre-delovane'

export const calendlyUrls = {
  sos:               `${BASE}/sos-urgence`,
  consult1Domaine:   `${BASE}/consultation-1-domaine`,
  consultFlash:      `${BASE}/consultation-flash`,
  miniConsult:       `${BASE}/mini-consultation`,
  consultParis:      `${BASE}/consultation-paris`,
  consultRegion:     `${BASE}/consultation-region`,
  coaching:          `${BASE}/coaching-en-ligne`,
  coachingCouple:    `${BASE}/coaching-couple`,
  nettoyageHabitat:  `${BASE}/nettoyage-energetique`,
  atelierProjet:     `${BASE}/atelier-projet-de-vie`,
  // Pour les ateliers visio sur la page /ateliers
  oracleSouffle:     `${BASE}/oracle-du-souffle`,
  atelierVisio:      `${BASE}/atelier-visio`,
}

// Helper : retourne true si l'URL est valide (pas un placeholder vide)
export function hasUrl(key) {
  const url = calendlyUrls[key]
  return !!url && url.length > 'https://calendly.com/'.length + 5
}
