# Portfolio — Ben Moriba Diarra

Mon portfolio de développeur full stack, en HTML, CSS et JavaScript, sans framework ni installation.

## Voir le site en local

Ouvrir `index.html` dans le navigateur (double-clic), ou avec l'extension **Live Server** de VS Code.

## Organisation

```
index.html        la page : écran de bienvenue, Accueil, À propos, Portfolio (onglets), Contact
style.css         le style (couleurs réglables en haut du fichier, dans :root)
script.js         les données (projets, parcours, technologies) + toutes les animations
assets/images/    photo détourée et captures des projets
assets/videos/    vidéos de démo des projets
```

## Modifier le contenu

Tout se passe en haut de `script.js` :

- **Ajouter un projet** : copier un bloc `{ ... }` du tableau `PROJETS` et changer les valeurs.
  La carte, la page de détail et le compteur « Projets » se mettent à jour tout seuls.
- **Parcours** : tableaux `FORMATION` et `PROJETS_HETIC`.
- **Technologies** : tableau `TECHNOS` (nom + couleur du logo).

## Mise en ligne (GitHub Pages)

1. Pousser le dossier sur un dépôt GitHub public.
2. Sur GitHub : **Settings → Pages → Branch : main / (root) → Save**.
3. Le site est en ligne à l'adresse `https://diarrabenm.github.io/<nom-du-depot>/`.
