var Circle = require('./Circle');
var random = require('./random');

module.exports = (options, boundaries) => {
    var circles = [];

    for(var i = 0; i < options.circles; i++){
        var radius = options.radius.min + options.radius.max * Math.random();
        var position = random.position(radius, boundaries);
        var direction = random.direction(2);
        var color = randomColor();

        circles.push(new Circle(position, direction, radius, color));
    }

    return circles;
};