#!/usr/bin/node

const Rectangle = require('./4-rectangle');

class Square extends Rectangle{
    constructor(size){
        super(size, size)

        this.size = size
    }
    charPrint(c){
        let cuadrado = "";
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                if (c === undefined){
                    cuadrado += "X";
                }
                else{
                    cuadrado += c;
                }
            }
            cuadrado += "\n";
        }
        console.log(cuadrado);
    }
}

module.exports = Square;