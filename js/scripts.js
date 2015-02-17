var isTriangle = function(side1,side2,side3) {
  if((side1 >= side2 + side3)||(side2 >= side1 + side3)||(side3 >= side1 + side2)) {
    return false;
  } else {
    return true;
  }
};
var orderSides = function(sides) {
  return sides.sort(function(a,b) { return a - b }).reverse();
};

var drawTriangle = function(sides) {
  var scale = 50/(sides[0]);
  var peakX = (scale * sides[1] * Math.sin(Math.PI / 2 - Math.acos((Math.pow(sides[0],2) + Math.pow(sides[1],2) - Math.pow(sides[2],2)) / (2 * sides[0] * sides[1])))).toFixed(1);
  var peakY = (scale * Math.sqrt(Math.pow(sides[1],2)-Math.pow(peakX / scale,2))).toFixed(1);
  var colors = ['Yellow', 'Magenta', 'Purple', 'Cyan', 'Lime', 'IndianRed', 'Salmon', 'Crimson', 'DeepPink', 'Coral', 'Tomato', 'DarkOrange', 'Gold', 'PaleGoldenrod', 'Lavendar', 'Blue', 'AliceBlue', 'AntiqueWhite', 'OrangeRed'];
  return '<svg height="' + peakY + '" width="50" id="canvas"><polygon points="0,0 50,0 ' + peakX + ',' + peakY + '" style="fill:' + colors[Math.floor(Math.random() * (colors.length + 2) -1)] + ';stroke:purple;stroke-width:1" /></svg>';
};
$(document).ready(function(){
  $("#triangle-form").submit(function(event){
    event.preventDefault();

    var side1 = parseFloat($("#side1").val());
    var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());
    if (!isTriangle(side1,side2,side3)){
      alert('Those sides do not make a triangle! Try different lengths.')
    }
    else {
      var triangle = { side1: side1, side2: side2, side3: side3 };
      triangle['isEquilateral'] = function() {if((this.side1 === this.side2)&&(this.side2 === this.side3)) {return true;} else {return false;}};
      triangle['isIsosceles'] = function() {if((side1 === side2)||(side2 === side3)||(side3 === side1)) {return true;} else {return false;}};
      triangle['isScalene'] = function() {if((side1 === side2)||(side2 === side3)||(side3 === side1)) {return false;} else {return true;}};
      triangle['orderSides'] = function() {

      }

      if (triangle.isEquilateral()) {
        $('ul.equilateral-list').append("<li>" + triangle.side1 + ", " + triangle.side2 + ", " + triangle.side3 + "</li>");
        $('ul.equilateral-list').append(drawTriangle(orderSides([triangle.side1,triangle.side2,triangle.side3])));
      }
      else if (triangle.isIsosceles()){
        $('ul.isosceles-list').append("<li>" + triangle.side1 + ", " + triangle.side2 + ", " + triangle.side3 + "</li>");
        $('ul.isosceles-list').append(drawTriangle(orderSides([triangle.side1,triangle.side2,triangle.side3])));
      }
      else {
        $('ul.scalene-list').append("<li>" + triangle.side1 + ", " + triangle.side2 + ", " + triangle.side3 + "</li>");
        $('ul.scalene-list').append(drawTriangle(orderSides([triangle.side1,triangle.side2,triangle.side3])));
      }
    }
    var side1 = $("input#side1").val("");
    var side2 = $("input#side2").val("");
    var side3 = $("input#side3").val("");
  });
});
