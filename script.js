// =====================================================================
//  Liste des projets
//  Pour ajouter un projet : copier un bloc { ... } et changer les valeurs.
//  - types   : "perso", "ecole" et/ou "equipe" (sert aux compteurs)
//  - liens   : { code: "...", site: "..." } (facultatifs)
//  - image   : capture affichée sur la carte (format 1280x800 conseillé)
//  - video   : chemin d'une vidéo de démo (facultatif)
// =====================================================================
const PROJETS = [
  {
    titre: "Pronostics foot",
    image: "assets/images/projets/pronostics-foot.jpg",
    resume: "Appli web et mobile qui calcule les probabilités des matchs, génère des combinés et suit les scores en direct.",
    types: ["perso"],
    technos: ["TypeScript", "Fastify", "PostgreSQL", "Prisma", "Expo", "WebSocket", "Vitest"],
    statut: "En cours",
    details: [
      "Modèle statistique maison (Dixon-Coles) entraîné sur plus de 10 000 matchs : 53 % de bons pronostics contre 44 % pour la méthode de référence.",
      "9 championnats + Ligue des champions, données importées automatiquement depuis des API gratuites.",
      "Scores, buteurs et minute de jeu en direct grâce aux WebSockets.",
      "Une seule base de code pour le web et le mobile (Expo), 80 tests automatisés.",
    ],
    note: "Code privé, démo possible sur demande.",
  },
  {
    titre: "DÉTOUR — agence de voyage IA",
    image: "assets/images/projets/detour.jpg",
    resume: "Assistant de voyage IA qui propose des offres aux prix vérifiés ; un conseiller humain valide chaque réservation.",
    types: ["ecole", "equipe"],
    technos: ["React", "TypeScript", "Vite", "Node.js", "LLM / OpenRouter", "Figma"],
    statut: "En cours",
    details: [
      "Le client discute avec l'agent IA : destination, dates, offres, puis pré-réservation.",
      "Mon rôle : principalement le frontend. J'ai d'abord conçu les maquettes sur Figma (8 écrans : parcours client, espace conseiller, e-mail), puis je les ai intégrées en React / TypeScript.",
      "Principe : « l'IA propose, le code vérifie, l'humain décide ». Les prix viennent toujours du serveur, jamais de l'IA.",
      "Espace conseiller : liste des dossiers, revérification des prix, blocage des places, confirmation ou refus.",
      "Traces JSON de chaque échange, sans jamais enregistrer les clés secrètes.",
      "Projet en équipe de 4, organisé en Scrum (Trello), une branche Git par fonctionnalité et des Pull Requests relues.",
    ],
    note: "Code privé (dépôt de l'équipe).",
  },
  {
    titre: "AgentScope",
    image: "assets/images/projets/agentscope.jpg",
    resume: "Outil qui importe et normalise des traces d'agents IA, puis les explore dans un tableau de bord.",
    types: ["ecole", "equipe"],
    technos: ["Python", "Streamlit", "SQLite", "pytest"],
    details: [
      "Import de fichiers JSONL, CSV ou Parquet, contrôle de la qualité des données.",
      "Mapping IA explicable pour les formats inconnus : chaque choix est justifié, les mappings douteux sont refusés.",
      "Tableau de bord : sessions, tokens, taux de succès des outils, graphiques par source.",
      "Architecture en couches (domaine, cas d'usage, infrastructure, interface).",
    ],
    liens: { code: "https://github.com/diarrabenm/agentscope" },
  },
  {
    titre: "CinéConnect",
    image: "assets/images/projets/cineconnect.jpg",
    resume: "Réseau social pour cinéphiles inspiré de Letterboxd : critiques, watchlist, amis, recommandations et chat en temps réel.",
    types: ["ecole", "equipe"],
    technos: ["React", "TanStack Router", "TanStack Query", "Zustand", "Tailwind CSS", "Socket.io", "Node.js", "Express", "PostgreSQL"],
    details: [
      "Projet en binôme, en monorepo : j'étais responsable du frontend React, mon binôme du backend Express.",
      "Mon rôle : pages films, profil, amis, chat, recommandations, connexion et inscription, avec routes protégées (TanStack Router).",
      "Appels à l'API avec TanStack Query, état global avec Zustand, interface en Tailwind CSS avec thème clair / sombre.",
      "Chat en temps réel avec Socket.io, catalogue de films via l'API OMDb.",
      "Backend : authentification JWT, base PostgreSQL (Neon) avec Drizzle ORM, e-mails avec Nodemailer, documentation Swagger.",
    ],
    liens: { code: "https://github.com/Cyril-Mathe/Letterboxd-like" },
  },
  {
    titre: "SubTrack",
    image: "assets/images/projets/subtrack.jpg",
    resume: "Site de suivi des abonnements et dépenses fixes, multi-devises, avec rappels avant renouvellement.",
    types: ["perso"],
    technos: ["React", "Vite", "FastAPI", "PostgreSQL"],
    statut: "En cours",
    details: [
      "Total mensuel et annuel, catégories, plusieurs devises.",
      "Rappels par e-mail avant chaque renouvellement.",
      "Pensé pour être en ligne : sécurité et RGPD prévus dès le départ.",
      "Dossier de conception complet (16 pages) rédigé avant le code.",
    ],
    note: "Code privé pour l'instant.",
  },
  {
    titre: "MATRiCE — Docker & cybersécurité",
    image: "assets/images/projets/matrice.jpg",
    resume: "API conteneurisée avec Docker Compose et système de détection d'alertes dans des journaux.",
    types: ["ecole"],
    technos: ["Python", "FastAPI", "Docker", "Docker Compose", "Cybersécurité"],
    details: [
      "API FastAPI avec routes de santé, Dockerfile et Compose avec secret.",
      "Analyse de risques et des frontières de confiance d'un système.",
      "Règles d'alerte (rafales de signatures invalides, quarantaine) et masquage des données sensibles.",
      "Procédure d'incident (runbook) et 14 tests automatisés.",
    ],
    liens: { code: "https://github.com/diarrabenm/matrice-rattrapage" },
  },
  {
    titre: "RPG en Python",
    image: "assets/images/projets/rpg.jpg",
    resume: "Jeu de rôle en console : exploration d'une carte aléatoire, combats, inventaire et sauvegarde.",
    types: ["ecole", "equipe"],
    technos: ["Python", "POO", "JSON"],
    video: "assets/videos/rpg.mp4",
    details: [
      "Projet en équipe de 3.",
      "Mon rôle : classes Personnage et Item (inventaire, statistiques, niveaux, expérience).",
      "Sauvegarde et chargement de la partie en JSON.",
      "Déplacements sur la carte et décors en ASCII art.",
    ],
  },
  {
    titre: "Jeu de mots — Scrabble",
    image: "assets/images/projets/scrabble.jpg",
    resume: "Jeu où l'on reconstitue des mots à partir de lettres mélangées, en trois manches.",
    types: ["ecole"],
    technos: ["Python"],
    video: "assets/videos/scrabble.mp4",
    details: [
      "Sélection aléatoire des mots et mélange des lettres.",
      "Trois manches par partie avec suivi du score.",
      "Chaque mot n'apparaît qu'une fois par partie.",
    ],
  },
  {
    titre: "Générateur de nombres premiers",
    image: "assets/images/projets/nombres-premiers.jpg",
    resume: "Appli React pour générer un nombre premier aléatoire ou vérifier si un nombre est premier.",
    types: ["ecole"],
    technos: ["React", "Tailwind CSS"],
    video: "assets/videos/nombres-premiers.mp4",
    details: [
      "Projet réalisé seul, de la structure des composants à l'algorithme.",
      "Algorithme de test de primalité efficace.",
      "Interface simple et adaptée à tous les écrans.",
    ],
  },
  {
    titre: "IA Analytics",
    image: "assets/images/projets/ia-analytics.jpg",
    resume: "Site qui compare des générateurs d'images IA, avec benchmark, prompts et tutoriel.",
    types: ["ecole", "equipe"],
    technos: ["HTML", "CSS", "JavaScript", "IA générative"],
    video: "assets/videos/ia-analytics.mp4",
    details: [
      "Projet en équipe de 5.",
      "Mon rôle : structure et navigation du site, intégration des contenus et des images.",
      "Comparaison de DALL·E, Bing Image Creator et Leonardo.AI sur un thème « fantastique ».",
    ],
    liens: { code: "https://github.com/diarrabenm/IA-ANALYSTIQUE" },
  },
];

// ---------- Parcours (onglet « Parcours ») ----------
const FORMATION = [
  { date: "2024 — aujourd'hui", titre: "Bachelor développement web", lieu: "HETIC, Montreuil" },
  { date: "2022 — 2024", titre: "Formation informatique", lieu: "EFGT, Côte d'Ivoire" },
  { date: "2021", titre: "Bac scientifique (maths / physique)", lieu: "Lycée moderne d'Abobo" },
];

const PROJETS_HETIC = [
  { date: "Mai — juin 2025", titre: "Application type Reddit", lieu: "Full stack en équipe : React, API REST, base de données, Git." },
  { date: "Mars 2025", titre: "Éditeur Markdown", lieu: "Tableau de bord dynamique et prévisualisation HTML en direct." },
  { date: "Nov. — déc. 2024", titre: "Jeu RPG en Python", lieu: "Combat, progression et sauvegarde, en équipe de 3." },
  { date: "Octobre 2024", titre: "Streaming musical — UI design", lieu: "Analyse concurrentielle, maquettes Figma, intégration CSS." },
];

// ---------- Technologies (onglet « Technologies ») : [nom, couleur du logo] ----------
const TECHNOS = [
  ["HTML", "#e34f26"], ["CSS", "#1572b6"], ["JavaScript", "#d4b106"], ["TypeScript", "#3178c6"],
  ["React", "#0ea5e9"], ["Vite", "#8b5cf6"], ["Expo", "#4630eb"], ["Tailwind CSS", "#06b6d4"],
  ["Node.js", "#3c873a"], ["Express", "#444444"], ["Fastify", "#111111"], ["Socket.io", "#010101"], ["Python", "#3776ab"], ["FastAPI", "#059487"],
  ["PostgreSQL", "#336791"], ["SQLite", "#0f80cc"], ["Prisma", "#2d3748"], ["Docker", "#2496ed"],
  ["Git", "#f05032"], ["Figma", "#a259ff"], ["pytest", "#0a9edc"], ["Vitest", "#729b1b"],
];

// =====================================================================
//  Icônes (dessinées en SVG) : <span data-i="nom"></span> devient l'icône
// =====================================================================
const ICONES = {
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  menu: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
  sparkles: '<path d="M12 3l1.9 5.8L20 10l-6.1 1.2L12 17l-1.9-5.8L4 10l6.1-1.2z"/><path d="M19 3v4M17 5h4"/>',
  ext: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
  arrowur: '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  arrowr: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  arrowl: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  chev: '<polyline points="6 9 12 15 18 9"/>',
  chevr: '<polyline points="9 18 15 12 9 6"/>',
  star: '<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3 12 2"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/>',
  msg: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z"/>',
  send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  play: '<polygon points="6 4 20 12 6 20 6 4"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  school: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  pkg: '<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/>',
};

const icone = (nom) => `<svg class="i" viewBox="0 0 24 24">${ICONES[nom] || ""}</svg>`;

function dessinerIcones(racine) {
  racine.querySelectorAll("[data-i]").forEach((el) => {
    el.innerHTML = icone(el.dataset.i);
    el.removeAttribute("data-i");
  });
}

// Petite aide pour éviter d'injecter du HTML par erreur dans la page
function echapper(texte) {
  const div = document.createElement("div");
  div.textContent = texte;
  return div.innerHTML;
}

document.documentElement.classList.add("js");
dessinerIcones(document);
document.getElementById("annee").textContent = new Date().getFullYear();

// ---------- Écran d'accueil : disparaît après 3,2 secondes ----------
setTimeout(() => document.getElementById("bienvenue").classList.add("parti"), 3200);

// ---------- Menu téléphone ----------
const liens = document.getElementById("liens");
const burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  const ouvert = liens.classList.toggle("ouvert");
  burger.setAttribute("aria-expanded", ouvert);
});
liens.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => liens.classList.remove("ouvert"))
);

// ---------- Lien du menu actif selon la section affichée ----------
const liensMenu = [...liens.querySelectorAll("a")];
const suiviSections = new IntersectionObserver(
  (entrees) =>
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      liensMenu.forEach((a) => a.classList.toggle("actif", a.getAttribute("href") === "#" + entree.target.id));
    }),
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section").forEach((s) => suiviSections.observe(s));

// ---------- Texte qui s'écrit tout seul ----------
const PHRASES = ["Étudiant à HETIC", "Développeur React & TypeScript", "Passionné de Python & FastAPI"];
const zoneTexte = document.getElementById("machine-a-ecrire");
let phrase = 0;
let lettre = 0;
let efface = false;

(function ecrire() {
  const texte = PHRASES[phrase];
  zoneTexte.textContent = texte.slice(0, lettre);
  if (!efface && lettre < texte.length) {
    lettre++;
    setTimeout(ecrire, 90);
  } else if (!efface) {
    efface = true;
    setTimeout(ecrire, 1800); // pause quand la phrase est complète
  } else if (lettre > 0) {
    lettre--;
    setTimeout(ecrire, 45);
  } else {
    efface = false;
    phrase = (phrase + 1) % PHRASES.length;
    setTimeout(ecrire, 300);
  }
})();

// ---------- Chiffres « À propos » (calculés depuis la liste des projets) ----------
document.getElementById("nb-projets").dataset.compte = PROJETS.length;
document.getElementById("nb-equipe").dataset.compte = PROJETS.filter((p) => p.types.includes("equipe")).length;

// ---------- Apparition au défilement + compteurs qui défilent ----------
const observateur = new IntersectionObserver(
  (entrees) =>
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      entree.target.classList.add("visible");
      entree.target.querySelectorAll("[data-compte]").forEach((nombre) => {
        const cible = +nombre.dataset.compte;
        let valeur = 0;
        const minuteur = setInterval(() => {
          valeur++;
          nombre.textContent = valeur;
          if (valeur >= cible) clearInterval(minuteur);
        }, Math.max(40, 900 / cible));
      });
      observateur.unobserve(entree.target);
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".apparition").forEach((el) => observateur.observe(el));

// =====================================================================
//  Onglets du portfolio
// =====================================================================
const panneau = document.getElementById("panneau");
let onglet = "projets";
let toutAfficher = false;

function carteProjet(projet, index) {
  const code = projet.liens && projet.liens.code;
  let lien;
  if (code) lien = `<a class="lien-code" href="${code}" target="_blank" rel="noopener">Code ${icone("ext")}</a>`;
  else if (projet.video) lien = `<span class="lien-code">${icone("play")} Démo vidéo</span>`;
  else lien = `<span class="lien-code prive">${icone("lock")} Code privé</span>`;

  return `
    <article class="carte" data-index="${index}">
      <img class="vignette" src="${projet.image}" alt="Capture du projet ${echapper(projet.titre)}" loading="lazy" width="1280" height="800">
      <h4>${echapper(projet.titre)}</h4>
      <p>${echapper(projet.resume)}</p>
      <div class="ligne">
        ${lien}
        <button class="details">Détails ${icone("arrowr")}</button>
      </div>
    </article>`;
}

function frise(titre, nomIcone, elements) {
  return `
    <div>
      <h3>${icone(nomIcone)} ${titre}</h3>
      <ol class="frise">
        ${elements.map((e) => `<li><time>${e.date}</time><h4>${echapper(e.titre)}</h4><p>${echapper(e.lieu)}</p></li>`).join("")}
      </ol>
    </div>`;
}

function afficherOnglet() {
  let html = "";

  if (onglet === "projets") {
    const liste = toutAfficher ? PROJETS : PROJETS.slice(0, 6);
    html = `
      <div class="cartes">${liste.map((p) => carteProjet(p, PROJETS.indexOf(p))).join("")}</div>
      <button class="voir-plus" id="voir-plus">
        ${toutAfficher ? "Voir moins" : "Voir plus"}
        <span style="display:inline-flex;transform:${toutAfficher ? "rotate(180deg)" : "none"}">${icone("chev")}</span>
      </button>`;
  } else if (onglet === "parcours") {
    html = `<div class="parcours">${frise("Formation", "school", FORMATION)}${frise("Projets à HETIC", "code", PROJETS_HETIC)}</div>`;
  } else {
    html = `<div class="technos">${TECHNOS.map(
      ([nom, couleur]) => `<div class="techno"><div class="logo-techno" style="background:${couleur}">${nom.slice(0, 2).toUpperCase()}</div>${nom}</div>`
    ).join("")}</div>`;
  }

  panneau.innerHTML = `<div class="panneau">${html}</div>`;

  const boutonPlus = document.getElementById("voir-plus");
  if (boutonPlus) {
    boutonPlus.addEventListener("click", () => {
      toutAfficher = !toutAfficher;
      afficherOnglet();
    });
  }
}

document.querySelectorAll(".onglet").forEach((bouton) =>
  bouton.addEventListener("click", () => {
    document.querySelectorAll(".onglet").forEach((b) => b.classList.toggle("actif", b === bouton));
    onglet = bouton.dataset.onglet;
    afficherOnglet();
  })
);

// Toute la carte est cliquable (sauf le lien « Code », qui ouvre GitHub)
panneau.addEventListener("click", (e) => {
  if (e.target.closest("a.lien-code")) return;
  const carte = e.target.closest(".carte");
  if (carte) ouvrirDetail(+carte.dataset.index);
});

afficherOnglet();

// =====================================================================
//  Page de détail d'un projet
// =====================================================================
const detail = document.getElementById("detail");

function ouvrirDetail(index) {
  const p = PROJETS[index];
  const code = p.liens && p.liens.code;
  const media = p.video
    ? `<video class="capture" src="${p.video}" poster="${p.image}" controls preload="none"></video>`
    : `<img class="capture" src="${p.image}" alt="Capture du projet ${echapper(p.titre)}">`;

  document.getElementById("detail-contenu").innerHTML = `
    <div class="fil">
      <button class="retour" id="retour">${icone("arrowl")} Retour</button>
      <span>Projets</span>${icone("chevr")}<span style="color:#fff">${echapper(p.titre)}</span>
    </div>
    <div class="detail-grille">
      <div>
        <h2>${echapper(p.titre)}</h2>
        <div class="trait-degrade"></div>
        <p class="texte">${echapper(p.resume)}</p>
        <div class="mini-chiffres">
          <div><span class="icone">${icone("code")}</span><span><b>${p.technos.length}</b><small>Technologies</small></span></div>
          <div><span class="icone">${icone("layers")}</span><span><b>${p.details.length}</b><small>Points clés</small></span></div>
        </div>
        <div class="boutons" style="margin-top:0">
          ${code ? `<a class="bouton bouton-leger" href="${code}" target="_blank" rel="noopener">${icone("github")} Voir le code</a>` : ""}
          ${p.statut ? `<span class="bouton bouton-leger">${icone("sparkles")} ${echapper(p.statut)}</span>` : ""}
        </div>
        <div class="sous-partie">${icone("code")} Technologies utilisées</div>
        <div class="etiquettes">${p.technos.map((t) => `<span class="etiquette">${icone("pkg")} ${echapper(t)}</span>`).join("")}</div>
        ${p.note ? `<p class="note">${echapper(p.note)}</p>` : ""}
      </div>
      <div>
        ${media}
        <div class="points-cles">
          <div class="sous-partie" style="margin-top:0"><span style="color:#facc15;display:inline-flex">${icone("star")}</span> Points clés</div>
          <ul>${p.details.map((d) => `<li>${echapper(d)}</li>`).join("")}</ul>
        </div>
      </div>
    </div>`;

  detail.classList.add("ouvert");
  detail.scrollTop = 0;
  document.body.style.overflow = "hidden"; // bloque le défilement de la page derrière
  document.getElementById("retour").addEventListener("click", fermerDetail);
}

function fermerDetail() {
  detail.classList.remove("ouvert");
  document.getElementById("detail-contenu").innerHTML = ""; // arrête la vidéo
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && detail.classList.contains("ouvert")) fermerDetail();
});

// =====================================================================
//  Formulaire de contact : ouvre la messagerie avec le message prérempli
// =====================================================================
document.getElementById("formulaire").addEventListener("submit", (e) => {
  e.preventDefault();
  const nom = document.getElementById("f-nom").value.trim();
  const sujet = document.getElementById("f-sujet").value.trim();
  const message = document.getElementById("f-message").value.trim();
  const corps = `${message}\n\n— ${nom}`;
  window.location.href =
    "mailto:diarrabenm@gmail.com?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(corps);
});
