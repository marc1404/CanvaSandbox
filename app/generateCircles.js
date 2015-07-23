var Circle = require('./Circle');

module.exports = (options, boundaries) => {
    var circles = [];

    for(var i = 0; i < options.circles; i++){
        var radius = options.radius.min + options.radius.max * Math.random();
        var color = randomColor();
        var x = radius + (boundaries.width - radius * 2) * Math.random();
        var y = radius + (boundaries.height - radius * 2) * Math.random();
        var position = new Victor(x, y);
        var direction = new Victor(-2 + Math.random() * 4, -2 + Math.random() * 4);

        circles.push(new Circle(position, direction, radius, color));
    }

    return circles;
};