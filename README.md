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
`image:` Directory to image being analyzed.<br/>
`callback:` Needed because of async nature of image analysis.
### Dimensions
_Leave blank if whole image is being analyzed_
`sx:` Starting X position.<br/>
`sy:` Startng Y position.<br/>
`sWidth:` Width of desired area to be analyzed.<br/>
`sHeight:` Height of desired area to be analyzed.

## Return Values
`value.brightness:` Brightness level of image.<br/>
`value.opacity:` Opacity level of image.<br/>
`value.r:` Brightness of red levels in the image.<br/>
`value.g:` Brightness of green levels in the image.<br/>
`value.b:` Brightness of blue levels in the image.
