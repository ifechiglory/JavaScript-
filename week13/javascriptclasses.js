class rectangle{
    constructor(length, height, breadth){
        this.length = length;
        this.height = height;
        this.breadth = breadth;
    }

    calcArea() {
        return this.length * this.breadth;
    }

    calcPerimeter() {    
       return 2 * (this.length + this.breadth);
    }
}

var rect = new rectangle(20, 10, 15);

// Length and height are synonyms just as width and breadth are synonyms.
//I used breadth to calculate my area and perimeter.
console.log(rect.calcArea());
console.log(rect.calcPerimeter());
