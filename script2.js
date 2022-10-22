class Rectangle {
    constructor (height,width) {

        this.height = height;
        this.width = width;
    }

    calcArea() {

        this.area = this.width * this.height;
        return this.area;
    }
}

//extends наследует
class ColoredRectangleWithText extends Rectangle {

    constructor(height,width,text,bgColor) {

        super(height,width); //супер всегда идет первой строчкой дублирует ту часть кода которая была здесь у родителя
        this.text = text;
        this.bgColor = bgColor;

    }

    showMyProps() {

        console.log(`Text - ${this.text}, color - ${this.bgColor}`);
    }

}


const div = new ColoredRectangleWithText(200,200,'Hello','Red');


// const square = new Rectangle(200,200);
// const long = new Rectangle(20,60);

// console.log(square.calcArea());
// console.log(long.calcArea());

div.showMyProps();


