var drawCircle = require('./drawCircle');

module.exports = class Circle {

    constructor(position, direction, radius, color){
        this.position = position;
        this.direction = direction;
        this.radius = radius;
        this.color = color;
        this.intendedDirection = this.direction;
        this.isAdjustingDirection = false;
    }

    update(boundaries){
        this.chooseDirection();
        this.adjustDirection();
        this.updatePosition();
    }

    draw(ctx){
        drawCircle(ctx, this.position, this.radius, this.color);
    }

    /* public */
    /* private */

    adjustDirection(){
        if(this.hasIntendedDirection()){
            this.isAdjustingDirection = false;
        }else{
            this.direction.add(this.adjustStep);
        }
    }

    chooseDirection(){
        if(this.isAdjustingDirection || Math.random() > 0.01){
            return;
        }

        this.intendedDirection = new Victor(-2 + Math.random() * 4, -2 + Math.random() * 4);
        this.adjustStep = this.intendedDirection.clone().subtract(this.direction).divide(new Victor(100, 100));
        this.isAdjustingDirection = true;
    }

    updatePosition(){
        this.position.add(this.direction);
    }

    hasIntendedDirection(){
        if(Math.round(this.direction.x) === Math.round(this.intendedDirection.x)){
            if(Math.round(this.direction.y) === Math.round(this.intendedDirection.y)){
                return true;
            }
        }

        return false;
    }

};