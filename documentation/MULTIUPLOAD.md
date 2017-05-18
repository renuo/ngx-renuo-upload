# Multi Upload Component

![multi-upload](https://cloud.githubusercontent.com/assets/20790833/26152934/7f5a86ae-3b09-11e7-8c1e-7a136d062fa2.gif)

## Simple Usage

```angular2html
  <ru-multi-upload></ru-multi-upload>
```

## Advanced Usage

```angular2html
  <ru-multi-upload acceptedFiles="image/jpeg, image/png, application/zip"
                   maxFilesAllowed="4"
                   (onError)="doSomething()"
                   (onFileRemove)="doSomething()"
                   (onFilesAdd)="doSomething()"
                   (onFilesChange)="doSomething()"
                   (onFileUpload)="doSomething()">
  </ru-multi-upload>
```

## Valid Inputs

* `acceptedFiles`: accepted files to upload

## Ouputs

* `onError`: emits the error when there is an error
* `onFileRemove`: emits the removed file when a file is removed
* `onFilesAdd`: emits the file[] when one ore more file are added **not uploaded**
* `onFilesChange`: emits the file[] when one ore more file are added or removed
* `onFileUpload`: emits the file as soon it is uploaded

## Custom Usage

[Upload with Bootstrap](../src/app/demo/custom-multi-upload)

[Upload with Preview](../src/app/demo/custom-image-multi-upload)
