# 💻👀 Démarrer le Prompt: On lance le prompt pour que le frérot utilisateur puisse nous donner son nombre.

#

# 🧐 Demander un nombre: On demande à l'utilisateur d'entrer un nombre. On reste en attente jusqu'à ce qu'il tape son chiffre et appuie sur Entrée.

#

# 🎲 Vérifier les erreurs: On vérifie qu'il y a pas d'erreur. Si y'a une galère, on affiche l'erreur et on casse tout.

#

# 🎯 Récupérer le nombre: Si tout est bon, on récupère le nombre que le frérot a tapé. Mais attention, ici le piège c'est que le prompt nous donne une chaîne de #caractères, pas un nombre. Alors on le transforme en nombre avec parseInt.

#

# 💫 Gérer le cas spécial: Avant de faire quoi que ce soit, on check si le nombre qu'on a récupéré c'est '1'. Si c'est le cas, on affiche juste 'A' deux fois et #on se casse. Pourquoi? Parce que c'est comme ça que le frérot a demandé!

#

# 🔄 Boucle du haut: Si le nombre c'est pas '1', on commence notre première boucle. Pour chaque itération, on affiche notre pattern 'Aa' répété un certain nombre #de fois, et ce nombre diminue à chaque fois. On commence à 'n' (le nombre que l'utilisateur a tapé) et on finit à 1.

#

# 🔀 Boucle du bas: Ensuite, on fait une autre boucle. Mais cette fois, on inverse notre pattern pour qu'il devienne 'aA', et on augmente le nombre de #répétitions à chaque itération. On commence à 1 et on finit à 'n'.

#

# Voilà, c'est tout ce qu'on fait! On crée un petit jeu de miroir avec notre pattern, qui diminue puis augmente, et on alterne entre 'Aa' et 'aA' à chaque ligne. C'est un petit jeu sympa pour apprendre à manipuler les chaînes de caractères et les boucles en JavaScript. Et avec prompt, c'est interactif et ça tourne direct dans le terminal! 🎉🔥
