# Multi Upload Component

![simple-upload](https://cloud.githubusercontent.com/assets/20790833/26151729/54d950c2-3b04-11e7-83b0-cee18cb44a32.gif)

## Simple Usage

```angular2html
  <ru-multi-upload ></ru-multi-upload>
```

## Advanced Usage

```angular2html
  <ru-multi-upload acceptedFiles="image/jpeg, image/png, application/zip"
                   maxFilesAllowed="4"
                   (onError)=""
                   (onFileRemove)=""
                   (onFilesAdd)=""
                   (onFilesChange)=""
                   (onFileUpload)="">
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
