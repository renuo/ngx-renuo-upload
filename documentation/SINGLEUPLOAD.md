# Single Upload Component

![simple-upload](https://cloud.githubusercontent.com/assets/20790833/26151729/54d950c2-3b04-11e7-83b0-cee18cb44a32.gif)

## Simple Usage

```angular2html
  <ru-single-upload ></ru-single-upload>
```

## Advanced Usage

```angular2html
  <ru-single-upload acceptedFiles="image/jpeg, image/png"
                    (onError)="doSomething()"
                    (onFileAdd)="doSomething()"
                    (onFileChange)="doSomething()"
                    (onFileRemove)="doSomething()"
                    (onFileUpload)="doSomething()">
  </ru-single-upload>
```

## Valid Inputs

* `acceptedFiles`: accepted files to upload

## Ouputs

* `onError`: emits the error when there is an error
* `onFileAdd`: emits the new file when a new file is added **not uploaded**
* `onFileChange`: emits the added or removed file when the file is added or removed
* `onFileRemove`: emits the removed file when the file is removed
* `onFileUpload`: emits the file as soon it is uploaded

## Custom Usage

[Upload with own Button](../src/app/demo/custom-single-upload)

![custom-usage](https://cloud.githubusercontent.com/assets/20790833/26152196/3770b94c-3b06-11e7-8be2-0f4a3db71ce4.gif)
