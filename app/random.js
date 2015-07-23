exports.position = position;
exports.direction = direction;

function position(radius, boundaries){
    var x = randomBetween(radius, boundaries.width - radius * 2);
    var y = randomBetween(radius, boundaries.height - radius * 2);

    return new Victor(x, y);
}

function direction(force = 1){
    var x = randomBetween(-force, force);
    var y = randomBetween(-force, force);

    return new Victor(x, y);
}

function randomBetween(min, max){
    return min + Math.abs(min - max) * Math.random();
}