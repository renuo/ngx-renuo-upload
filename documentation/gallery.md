# Simple Usage

```angular2html
<ru-gallery [images]="pictures"></ru-gallery>
```

## Advanced Usage

```angular2html
<ru-gallery [images]="pictures"
    quality="10"
    roundedCorners="60" background="10,10,255"
    showPreview="0"
    spacing="10"
    thumbnailDimensions="250x250"
    watermark="https://www.renuo.ch/images/logo.png">
</ru-gallery>
```

## Valid Inputs

* `background`: the background of thumbnail-image with rounded corners (default: white)
* `pictures`: source array `string[]` of the image uploaded with the renuo upload
* `quality`: change the quality of the thumbnail-image (1-100)
* `roundedCorners`: add rounded corners to the thumbnail-image
* `showPreview`: show a preview of the selected image (like a gallery)
* `spacing`: spacing between the thumbnail-images (default: 10)
* `thumbnailDimensions`: crop (and center) the thumbnail of the gallery to fit the dimensions (default: 250x250)
* `watermark`: add a watermark to the thumbnail-image **image need link with host**
