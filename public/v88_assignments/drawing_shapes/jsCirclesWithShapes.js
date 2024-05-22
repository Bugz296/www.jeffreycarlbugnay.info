class Shapes{
    constructor(posX, posY, color){
        this.x = posX;
        this.y = posY;
        this.color = color;
    }
}
class Circle extends Shapes{
    constructor(posX, posY, color){
        super(posX, posY, color);
        this.diameter = Math.floor(Math.random()*200);
        this.x = (posX-(this.diameter/2))+"px";
        this.y = (posY-(this.diameter/2))+"px";
        let p = document.createElement('p');
        p.style = `width: ${this.diameter}px;`+
            `height: ${this.diameter}px;`+
            `top: ${this.y};`+
            `left: ${this.x};`+
            `background-color: ${color};`+
            `border-radius: 100px`;
        document.getElementById('main-container').appendChild(p);
    }
}
class Square extends Shapes{
    constructor(posX, posY, color){
        super(posX, posY, color);
        this.side = Math.floor(Math.random()*200);
        this.x = (posX-(this.side/2))+"px";
        this.y = (posY-(this.side/2))+"px";
        let p = document.createElement('p');
        p.style = `width: ${this.side}px;`+
            `height: ${this.side}px;`+
            `top: ${this.y};`+
            `left: ${this.x};`+
            `background-color: ${color};`;
        document.getElementById('main-container').appendChild(p);
    }
}
class Rectangle extends Shapes{
    constructor(posX, posY, color){
        super(posX, posY, color);
        this.shapeWidth = Math.floor(Math.random()*200);
        this.shapeLength = this.shapeWidth + (this.shapeWidth)*0.4;
        this.x = (posX-(this.shapeLength/2))+"px";
        this.y = (posY-(this.shapeWidth/2))+"px";
        let p = document.createElement('p');
        p.style = `width: ${this.shapeLength}px;`+
            `height: ${this.shapeWidth}px;`+
            `top: ${this.y};`+
            `left: ${this.x};`+
            `background-color: ${color};`;
        document.getElementById('main-container').appendChild(p);
    }
}