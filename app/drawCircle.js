var ARC_SIZE = 2 * Math.PI;

module.exports = (ctx, position, radius, color) => {
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, ARC_SIZE, false);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
};