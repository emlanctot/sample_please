let width = 8.0;
let length = 20.0;
let height = 8 / 12;
let cubicFeet = Math.round(width * length * height);
let price;

if (0 <= cubicFeet && cubicFeet < 50){
  price = 20;
} else if(50 <= cubicFeet && cubicFeet < 150){
  price = 50;
} else if(150 <= cubicFeet && cubicFeet < 300){
  price = 100;
} else if (300 <= cubicFeet){
  price = 150;
}
console.log('Cubic Feet: ' + cubicFeet);
console.log('Quote Price: $' + price);
