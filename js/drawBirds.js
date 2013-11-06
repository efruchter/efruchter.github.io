/*
 * Draw a path.
 */
drawPath = function(ctx, path, closed) {
    ctx.beginPath();
    var i = 0;
    ctx.moveTo(path[0].x, path[0].y);
    for (i = 1; i < path.length; i++) {
        var xc = (path[i].x + path[i - 1].x) / 2;
        var yc = (path[i].y + path[i - 1].y) / 2;
        ctx.quadraticCurveTo(path[i - 1].x, path[i - 1].y, xc, yc);
    }
    if (closed) {
        ctx.closePath();
    }
    ctx.stroke();
};

/*
 * Fuzzify the points a bit.
 */
fuzzify = function(path, randomness) {
    for (var i = 0; i < path.length; i++) {
        path[i].x += -randomness + 2 * Math.random() * randomness;
        path[i].y += -randomness + 2 * Math.random() * randomness;
    }
};

/*
 * Draw a bird
 */
drawBirdAt = function(ctx, x, y, xscale, yscale) {
    var birdPath = new Array();
    birdPath[0] = {x: 6 - 25, y: 11 - 25};
    birdPath[1] = {x: 14 - 25, y: 10 - 25};
    birdPath[2] = {x: 26 - 25, y: 10 - 25};
    birdPath[3] = {x: 33 - 25, y: 16 - 25};
    birdPath[4] = {x: 39 - 25, y: 27 - 25};
    birdPath[5] = {x: 48 - 25, y: 35 - 25};
    birdPath[6] = {x: 38 - 25, y: 43 - 25};
    birdPath[7] = {x: 23 - 25, y: 43 - 25};
    birdPath[8] = {x: 16 - 25, y: 38 - 25};
    birdPath[9] = {x: 12 - 25, y: 23 - 25};
    birdPath[10] = {x: 12 - 25, y: 17 - 25};
    fuzzify(birdPath, 2)

    ctx.save();

    ctx.translate(x, y - 25);
    ctx.scale(xscale, yscale);

    drawPath(ctx, birdPath, true);
    ctx.beginPath();
    ctx.arc(15 - 25, 15 - 25, 2, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-4 + Math.random() * 2 - 1, 15);
    ctx.lineTo(-4 + Math.random() * 2 - 3, 25);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(4 + Math.random() * 2 - 1, 15);
    ctx.lineTo(4 + Math.random() * 2 - 3, 25);
    ctx.stroke();

    ctx.restore();
}

drawPathOnly = function(c, clearAll, fColor) {
    var ctx = c.getContext("2d");

    if (clearAll) {
        ctx.clearRect(0, 0, c.width, c.height);
    }

    if (fColor == undefined) {
        fColor = "#000000"
    }

    ctx.fillStyle = fColor;
    ctx.lineWidth = 2;
    var points = 2 + Math.floor(Math.random() * 4);

    var path = new Array();
    for (var i = 0; i <= points; i++) {
        var x = 10 + ((c.width - 20) / points) * (i);
        var y = (c.height - 20);
        path[i] = {x: x, y: y};
    }
    path[path.length] = path[path.length - 1];

    //Draw the lines
    fuzzify(path, 10);

    return path
}

/*
 * Draw nicely spaced birds.
 */
drawBirds = function(c, clearAll, fColor, noLine) {

    var ctx = c.getContext("2d");
    
    var path = drawPathOnly(c, clearAll, fColor, noLine);

    if (noLine == undefined || noLine == false) {
       drawPath(ctx, path);
    }

    for (var i = 1; i < path.length - 2; i += 1) {
        var sx = Math.random() < .5 ? -1 : 1;
        drawBirdAt(ctx, path[i].x, path[i].y, sx, 1);
    }
}