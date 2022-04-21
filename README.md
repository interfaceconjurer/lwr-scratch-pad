# Skeleton POC - ☠️⚗️ - experiments

repo: https://github.com/interfaceconjurer/lwr-scratch-pad

This Repo explores and architecture for component states where loading and error are be handled in a util function separate from the component. This cleans the base component reducing complexity and creates reusable functions that other components can use. The css for the skeleton is driven by the markup provided by the base component. The styles are reusable across any component with markup that provides the correct attributes for the presentationHelper

How to use:
presentationHelper.js
```js
export function presentationHelper() {
        // PRESENTATION TYPE: SKELETON LOADING ///
        const parentElement = this.template.childNodes[0];
        if(this.presentationState.loading){
            parentElement.setAttribute('presentation-provider', 'loading');
            const elements = parentElement.querySelectorAll('[presentation]');
            elements.forEach((item) => {
                item.setAttribute('presentation', 'loading-item');
            });
        }
        if(!this.presentationState.loading){
            parentElement.setAttribute('presentation-provider', 'base');
            const elements = this.template.querySelectorAll('[presentation]');
            elements.forEach((item) => {
                item.setAttribute('presentation', 'base');
            });
        }
}
```
This function provides the presentation for the skeleton. It grabs the parent HTML element and applies the attribute “presentation-provider=‘loading’” if presentationState.loading is true. This creates the skeleton styling for all innerHTML elements with attribute “presentation” present. All HTML elements in the base component that need skeleton styling need this attribute present 

```html
<template>
    <section grid>
        <axds-image loading={loading} class="image" image-src={image}></axds-image>
        <div grid size="auto" axis="column" align-items="center">
            <h1 presentation>{name}</h1>
            <span presentation>{email}</span>
            <p presentation>{body}</p>
        </div>
    </section>
</template>
```
In this base component, `<section>` will get the `“presentation-provider”` attribute added by the function since its the parent HTML element of the component. The `<h1>`, `<span>`, and `<p>` will get skeleton styling since they have the `presentation` attribute added. 


presentationHelper.css
```css
[presentation-provider="loading"] [presentation="loading-item"] {
    background: linear-gradient(110deg, #ececec 18%, #f5f5f5 40%, #ececec 69%);
    color: rgba(0, 0, 0, 0);
    border-radius: 1rem;
    border-color: rgba(0, 0, 0, 0);
    user-select: none;
    cursor: wait;
    animation: 1.5s shine linear infinite;
    background-size: 200% 100%;
  }
  
  [presentation-provider="loading"] [presentation="loading-item"] * {
    visibility: hidden !important;
  }
  
  [presentation-provider="loading"] [presentation="loading-item"]:empty::after,
  [presentation-provider="loading"] [presentation="loading-item"] *:empty::after {
    content: "\00a0";
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
```
The skeleton styles are adaptable to the component’s styling. The skeleton styles will leverage the layout you have already structured in your base components. If an HTML element has attribute `presentation` the css will leverage the layout of that HTML element and create a skeleton presentation in that space. 

How to use it:
Import presentationHelper into your component’s js file
```js
import { presentationHelper } from '../../../utils/presentationHelper';
```
Import presentationHelper.css into your component’s css file
```css
/* //// 🚀 PRESENTATION STATE 🚀 /////// */
@import '../../utils/presentationHelper.css';
```
Declare a presentation stage with loading and error
```js
@api loading;
@api error;
@track presentationState = {};
```
Pass presentationState to presentationHelper with the values of “loading” and “error”
```js
this.presentationState = {
            loading: this.loading,
            error: this.error,
        }
presentationHelper.call(this);
```
If `this.loading` is `true`, the base component will render a skeleton until the presentationHelper is called and `this.loading` is `false`. 

You will notice that `<axds-image>` has its own presentationHelper. This is due to the rendering of an image having two sides, the loading of the data (image src) and the browser rending/painting that image. Only after the image is fully painted by the browser do you want the skeleton to go away. Due to this `<axds-image>` has a slightly more complex loading state. 

### Project Setup

The directory structure looks like this:

```
scripts/
  └── copy-resources.mjs                // copy useful files to assets (ie c360 stylehooks)
src/
  ├── assets/                           // static assets
  │   └── css/
  │       └── main.css
  |       └-- hooks.custom-props.css
  └── content/                          // site pages
  │   ├── about.md
  │   └── home.md
  └── layouts/                          // site page layouts
  |   └── main.html
  └-- modules                           // lwc components
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

test