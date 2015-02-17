var isTriangle = function(side1,side2,side3) {
  if((side1 >= side2 + side3)||(side2 >= side1 + side3)||(side3 >= side1 + side2)) {
    return false;
  } else {
    return true;
  }
};

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();
    if (isTriangle(side1,side2,side3)){
     var triangle = { side1: side1, side2: side2, side3: side3 };

   } else {
     alert('Those sides do not make a triangle! Try different lengths.')
   }

  });
});


var isEquilateral = function(side1,side2,side3) {
  if((side1 === side2)&&(side2 === side3)) {
    return true;
  } else {
    return false;
  }
};
var isIsosceles = function(side1,side2,side3) {
  if((side1 === side2)||(side2 === side3)||(side3 === side1)) {
    return true;
  } else {
    return false;
  }
};
var isScalene = function(side1,side2, side3) {
  if((side1 === side2)||(side2 === side3)||(side3 === side1)) {
    return false;
  } else {
    return true;
  }
};
var orderSides = function(sides) {
  return sides.sort().reverse()
};
var drawTriangle = function(sides) {
  var scale = 200/(sides[0]);
  var peakX = (scale * sides[1] * Math.sin(Math.PI / 2 - Math.acos((Math.pow(sides[0],2) + Math.pow(sides[1],2) - Math.pow(sides[2],2)) / (2 * sides[0] * sides[1])))).toFixed(1);
  var peakY = (scale * Math.sqrt(Math.pow(sides[1],2)-Math.pow(peakX / scale,2))).toFixed(1);
  return '<svg height="' + peakY + '" width="200" id="canvas"><polygon points="0,0 200,0 ' + peakX + ',' + peakY + '" style="fill:lime;stroke:purple;stroke-width:1" /></svg>';
};
