#!/usr/bin/node 

exports.converter = function (base) {
    return function convertToBase(num) {
        if (base > 10 && base < 27){
            return num === 0 ? '' : convertToBase(num / base | 0) + (num % base < 10 ? num % base : String.fromCharCode(87 + num % base));
        }
        else{
            if (num < base) {
                return num.toString();
            }
            return convertToBase(num / base | 0) + (num % base).toString();
        }
    };
};
  