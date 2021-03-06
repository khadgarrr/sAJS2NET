# Angular CLI

```
npm i -g @angular/cli
```

## No \*.spec creation

Method 1:

You can also disable spec generation at the time of creating things using Angular-cli by adding "--no-spec"

```
ng generate component my-component --no-spec
```

Method 2: Permanently disable in `angular.json` file. You can edit the schematics for your project.

```
"schematics": {
    "@schematics/angular:component": {
      "styleext": "scss",
      "spec": false
    },
    "@schematics/angular:class": {
      "spec": false
    },
    "@schematics/angular:directive": {
      "spec": false
    },
    "@schematics/angular:guard": {
      "spec": false
    },
    "@schematics/angular:module": {
      "spec": false
    },
    "@schematics/angular:pipe": {
      "spec": false
    },
    "@schematics/angular:service": {
      "spec": false
    }
  }, ...
```

# Yarn

Set cache location

```
yarn config set cache-folder <path>
```
