# Image

![image-with-filter](https://cloud.githubusercontent.com/assets/20790833/26243895/c27e84d2-3c8d-11e7-88c2-a0834e012ab1.png)

## Simple Usage

```angular2html
<ru-img [src]="picture"></ru-img>
```

## Advanced Usage

```angular2html
<ru-img [src]="picture"
    dimensions="400x400"
    quality="10"
    roundedCorners="60" background="10,10,255"
    watermark="https://www.renuo.ch/images/logo.png">
</ru-img>
```

## Valid Inputs

* `src`: source of the image uploaded with the renuo upload
* `dimension`: crop (and center) the image to fit the dimensions
* `quality`: change the quality of the image (1-100)
* `roundedCorners`: add rounded corners to the image
* `background`: the background of image with rounded corners (default: white)
* `watermark`: add a watermark to the image **image needs link with host**
