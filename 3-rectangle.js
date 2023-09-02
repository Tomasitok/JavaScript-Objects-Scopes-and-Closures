class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)){
            return {};
        }

        this.width = w;
        this.height = h;
    }
    print() {
        let rect = "";
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                rect += "X";
            }
            rect += "\n";
        }
        console.log(rect)
    }
}
      
  
  module.exports = Rectangle;