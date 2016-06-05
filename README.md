# image-luminosity
## Install
```
$ npm i --save image-luminosity
```

## Usage
```
var imgLum = require('image-luminosity');
var image = '/directory/to/img';

imgLum(image, function(value) {
        console.log(value);
    }, {sx: 120,
        sy: 120,
        sWidth: 300,
        sHeight: 300
    });
```

## Syntax
```
imgLum(image, callback, [{sx, sy, sWidth, sHeight}]);
```

## Parameters
*image:* Directory to image being analyzed.
*callback:* Needed because of async nature of image analysis.
### Dimensions
_Leave blank if whole image is being analyzed_
*sx:* Starting X position.
*sy:* Startng Y position.
*sWidth:* Width of desired area to be analyzed.
*sHeight:* Height of desired area to be analyzed.

## Return Values
*value.brightness:* Brightness level of image.
*value.opacity:* Opacity level of image.
*value.r:* Brightness of red levels in the image.
*value.g:* Brightness of green levels in the image.
*value.b:* Brightness of blue levels in the image.
