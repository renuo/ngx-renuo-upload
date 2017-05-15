# ngx-renuo-upload
This is a component for the renuo upload (https://github.com/renuo/renuo-upload)

[![Code Climate](https://codeclimate.com/github/renuo/ngx-renuo-upload.png)](https://codeclimate.com/github/renuo/ngx-renuo-upload)
[![Build Status](https://travis-ci.org/renuo/ngx-renuo-upload.svg?branch=master)](https://travis-ci.org/renuo/ngx-renuo-upload)
[![Build Status](https://travis-ci.org/renuo/ngx-renuo-upload.svg?branch=develop)](https://travis-ci.org/renuo/ngx-renuo-upload)
[![Build Status](https://travis-ci.org/renuo/ngx-renuo-upload.svg?branch=testing)](https://travis-ci.org/renuo/ngx-renuo-upload)

## Important Links
* https://github.com/renuo/ngx-renuo-upload
* https://upload-demo.renuoapp.ch
* https://upload-demo-develop.renuoapp.ch

## How to use?

### Single Image
#### Simple usage

```angular2html
<ru-img [src]="picture"></ru-img>
```

#### Advanced usage
```angular2html
<ru-img [src]="picture"  
    dimensions="400x400" 
    quality="10" 
    roundedCorners="60" background="10,10,255"
    watermark="https://www.renuo.ch/images/logo.png">
</ru-img>
```

#### valid inputs
* `src`: source of the image uploaded with the renuo upload **required**
* `dimension`: crop (and center) the image to fit the dimensions
* `quality`: change the quality of the image (1-100)
* `roundedCorners`: add rounded corners to the image
* `background`: the background of image with rounded corners (default: white)
* `watermark`: add a watermark to the image **image need link with host**


## Developing

### Setup

```sh
git clone git@github.com:renuo/ngx-renuo-upload.git
cd ngx-renuo-upload
bin/setup
```

#### Configuration

```sh
bin/setup
```

### Deployment (Demo Page)

The deployment of the demo page will run automatically on Firebase with Travis.

##### Demo Pages
* https://upload-demo.renuoapp.ch
* https://upload-demo-develop.renuoapp.ch

#### Manual Deployment

```sh
yarn build
firebase deploy
```

See https://firebase.google.com/docs/cli/

### Tests

```sh
bin/check
```

This runs

* keyword check (console.log, ...)
* scss-lint
* tslint
* sorts translations

To develop TDD and restart tests after each change run:

```sh
bin/tdd
```

#### Coverage

To show the graphical coverage report run:

```sh
bin/coverage
```

### bin-scripts

* `bin/check`: runs all checks
* `bin/check-server-start`: subscript of `bin/check` to test to run server
* `bin/coverage`: show coverage report
* `bin/fix` run auto-corrections (`tslint --fix`)
* `bin/generate-i18n`: generate new translation keys
* `bin/prettify-translations`: sorts the translation keys
* `bin/setup`: sets up the project
* `bin/run`: runs a local instance of the server. Accessible via `http://lawoon-frontend.dev:3000/`

### Run server

```sh
bin/run
```

### Maintenance

To update dependencies it's best to use:

```sh
yarn upgrade-interactive
```

## Problems?
If there are problems with the project, feel free to contact Pascal Andermatt.

![Pascal Andermatt](https://s.gravatar.com/avatar/1ee132b4d89f7d2e82db5717eefdcd86?s=80)

## Copyright

Coypright 2017 [Renuo AG](https://www.renuo.ch/).

### MIT License
See [LICENSE](LICENSE) file.
