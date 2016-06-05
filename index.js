function(imageSrc, dimensions, callback) {
    var img = document.createElement("img");
    img.src = imageSrc;
    img.style.display = "none";
    document.body.appendChild(img);

    var colorSum = avgR = avgG = avgB = avgA = 0;

    img.onload = function() {
        // create canvas
        var canvas = document.createElement("canvas");
        var sx,sy,sWidth,sHeight;
        canvas.width = this.width;
        canvas.height = this.height;

        if (dimensions != null) {
            sx = dimensions.sx;
            sy = dimensions.sy;
            sWidth = dimensions.sWidth;
            sHeight = dimensions.sHeight;
        }
        else {
            sx = sy = 0;
            sWidth = canvas.width;
            sHeight = canvas.height;
        }

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        var imageData = ctx.getImageData(sx, sy, sWidth, sHeight);
        var data = imageData.data;
        var r, g, b, a, avg;

        for (var x = 0, len = data.length; x < len; x += 4) {
            r = data[x];
            g = data[x + 1];
            b = data[x + 2];
            a = data[x + 3];

            avgR += r;
            avgG += g;
            avgB += b;
            avgA += a;
            avg = Math.floor((r + g + b) / 3);
            colorSum += avg;
        }

        function average (int) {
            return Math.floor(int / (sWidth * sHeight));
        }

        var values = {
            brightness: average(colorSum),
            opacity: average(avgA)),
            r: average(avgR),
            g: average(avgG),
            b: average(avgB)
        }
        callback(values);
    }
}
