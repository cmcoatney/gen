## Project
npx create-nx-workspace --preset=angular --name=gen-x --appName=gen --style=scss --packageManager=yarn --nxCloud=false

## Formly
yarn add --dev @angular/forms @ngx-formly/core @ngx-formly/material

## Angular Material
yarn add @angular/material

## Angular Material Library
nx generate @nrwl/angular:lib material 

## Angular CDK
yarn add @angular/cdk

## UI Library
nx generate @nrwl/angular:lib ui --routing

## Generators Library
nx generate @nrwl/angular:lib generators --routing

## Model Form
nx generate @nrwl/angular:component containers/model-form --project=ui 

## Typescript Library
npx nx g lib data