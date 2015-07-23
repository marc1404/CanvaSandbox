var drawCircle = require('./drawCircle');
var uniqueId = require('./uniqueId');

module.exports = class Circle {

    constructor(position, direction, radius, color){
        this.id = uniqueId();
        this.position = position;
        this.direction = direction;
        this.radius = radius;
        this.color = color;
    }

    update(boundaries, circles){
        this.applyForceToOther(circles);
        this.position.add(this.direction);
        this.checkBoundaries(this.radius, boundaries.width - this.radius, this.radius, boundaries.height - this.radius);
    }

    draw(ctx){
        drawCircle(ctx, this.position, this.radius, this.color);
    }

    checkBoundaries(minX, maxX, minY, maxY){
        var bounceForce = 0.005;

        if(this.position.x < minX){
            this.direction.x += (minX - this.position.x) * bounceForce;
        }else if(this.position.x > maxX){
            this.direction.x += (maxX - this.position.x) * bounceForce;
        }

        if(this.position.y < minY){
            this.direction.y += (minY - this.position.y) * bounceForce;
        }else if(this.position.y > maxY){
            this.direction.y += (maxY - this.position.y) * bounceForce;
        }
    }

    applyForceToOther(circles){
        circles.forEach(circle => {
           if(circle.id !== this.id){
               var distance = circle.position.distance(this.position);
               var minDistance = circle.radius + this.radius;

               if(distance < minDistance){
                   circle.direction.add(circle.position.clone().subtract(this.position).multiply(new Victor(0.0005, 0.0005)));

                   if(this.radius > circle.radius && circle.radius > 0){
                       circle.radius -= 0.5;

                       if(circle.radius < 0){
                           this.radius += circle.radius * -1;
                           circle.radius = 0;
                           return;
                       }

                       this.radius += 0.5;
                   }
               }
           }
        });
    }

};