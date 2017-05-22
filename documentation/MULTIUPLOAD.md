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
* `maxFilesAllowed`: max files allowed to upload

## Ouputs

* `onError`: emits the error when there is an error
* `onFileRemove`: emits the removed file when a file is removed
* `onFilesAdd`: emits the file[] if one or more files are added **not uploaded**
* `onFilesChange`: emits the file[] if one ore more files are added or removed
* `onFileUpload`: emits the file as soon as it is uploaded

## Custom Usage

[Upload with Bootstrap](../src/app/demo/custom-multi-upload)

![Upload with Bootstrap](https://cloud.githubusercontent.com/assets/20790833/26211187/426715c0-3bf2-11e7-8627-b68dd5c823b7.png)

[Upload with Preview](../src/app/demo/custom-image-multi-upload)

![Upload with Preview](https://cloud.githubusercontent.com/assets/20790833/26211270/79524ac8-3bf2-11e7-9b3d-39e79db03b58.png)
