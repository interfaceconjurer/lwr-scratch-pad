# LWR Scratch Pad - ☠️⚗️

This Repo is a template for testing concepts in an LWR/LWC environment


### Project Setup

The directory structure looks like this:

```
scripts/
  └── copy-resources.mjs                // copy useful files to assets (ie c360 stylehooks)
src/
  ├── assets/                           // static assets
  │   └── css/
  │       └── preflight.css
  |       └-- hooks.custom-props.css
  └── content/                          // site pages
  │   ├── about.md
  │   └── home.md
  └── layouts/                          // site page layouts
  |   └── main.html
  └-- modules                           // lwc components
      └── components
      └── home
          └── app.js                    // root app file
      └── utils
lwr.config.json                         // lwr configuration
package.json                            // npm packaging configuration
```

### Configuration

The LWR server is configured in `lwr.config.json`, at the root of the project.

```json
// lwr.config.json
{
    "lwc": { "modules": [
        {
            "dir": "$rootDir/src/modules" 
        },
        {
            "name": "@salesforce-ux/c360-grid/dist/index.css",
            "path": "./node_modules/@salesforce-ux/c360-grid/dist/index.css"
        },
        {
        "npm": "@oneappexchange/appx-design-system"
        }
        ]},
    "assets": [
        {
            "alias": "assetsDir",
            "dir": "$rootDir/src/assets",
            "urlPath": "/assets"
        }
    ],
    "routes": [
        {
            "id": "home",
            "path": "/",
            "rootComponent": "home/app",
            "layoutTemplate": "$layoutsDir/main.html"
        }
    ]
}
```

### Running the Project

```bash
yarn install
yarn build
yarn start # prod mode and ESM format
```

Open the site at [http://localhost:3000](http://localhost:3000)

To start the project in a different mode:

-   dev: `yarn dev`
-   compat: `yarn start:compat`
-   prod-compat: `yarn start:prod-compat`