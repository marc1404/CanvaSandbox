var options = require('./options');
var generateCircles = require('./generateCircles');
var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var circles = generateCircles(options, createBoundaries());

window.requestAnimationFrame(animate);

function animate(){
    var boundaries = createBoundaries();

    ctx.clearRect(0, 0, boundaries.width, boundaries.height);

    circles.forEach(circle => {
        circle.update(boundaries);
        circle.draw(ctx);
    });

    window.requestAnimationFrame(animate);
}

function createBoundaries(){
    return {
        width: canvas.width,
        height: canvas.height
    };
}