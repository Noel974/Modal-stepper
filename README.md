# Mon Package React
Ce projet est un package npm créé avec React.

### Sommaire
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration du package.json](#configuration-du-packagejson)
- [TsConfig](#tsconfig)
- [Babel](#babel)
- [Compile](#Compile)
- [Test](#test)
- [Publication](#publication)
- [Vérification](#vérification)


## Prérequis
Une version Node JS a jour.
Un compte npm pour publier le package.

## TsConfig
Le fichier tsconfig.json est utilisé pour configurer le compilateur TypeScript (tsc). Il définit les options de compilation pour votre projet.
```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "esnext",
        "declaration": true,
        "declarationDir": "./dist/types",
        "outDir": "./dist",
        "strict": true,
        "jsx": "react",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": [
        "./lib"
    ],
    "exclude": ["node_modules", "dist"]
}
```
## Babel
Babel est un transpileur qui convertit le code JavaScript moderne (par exemple, ES6+) en une version compatible avec les navigateurs plus anciens
# Voici comment il fonctionne :
1. Présentation des presets : Les presets (ensembles de plugins) définissent les transformations à appliquer au code. Par exemple, @babel/preset-env gère la compatibilité avec les navigateurs.
2. Plugins : Les plugins individuels effectuent des transformations spécifiques (par exemple, transformer les classes en fonctions, gérer les opérateurs de décomposition, etc.).
3. Configuration : Vous configurez Babel via un fichier .babelrc ou dans votre package.json.
```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/plugin-transform-typescript"
    ]
}

```