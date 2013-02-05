function FLC(str)
{
  return str.charAt(0) + str.slice(str.length);
}

function StrToInt(val)
{  
  var v = val.replace(/[$,]/g, function(d) {
      return { "$" : "", "," : ""  }[d];
  }); return v;
}

function DRange(DV){ 
  
  if(DV < 1000){ var V = d3.scale.linear([0,1]).range([0,1]); objSVG.Color = "#5bb65f";}
  else{ if(DV < 1000000){ var V = d3.scale.linear([0,1]).range([0,1000]); objSVG.Color = "#ff9e48";}
        else{ if(DV < 1000000000){ var V = d3.scale.linear([0,1]).range([0,1000000]);  objSVG.Color = "#bbb";}
              else{ if(DV < 1000000000000){ var V = d3.scale.linear([0,1]).range([0,1000000000]); objSVG.Color = "#cccc00";}
                     else{ var V = d3.scale.linear([0,1]).range([0,1000000000000]); objSVG.Color = "#85fffe"; }
              }
        }    
  }objSVG.Value=d3.round(V.invert(DV));
  return objSVG;
}

function width(n){ 
  var val; n<101 ? val = Math.sqrt(n)*12 : n<201 ? val = Math.sqrt(n)*16 : val = 285; return val;
}

function height(n){ 
  var val; n<201 ? val = 45 : n<501 ? val = 55 : n<751 ? val = 85 : val = 110; return val;
}

var Y1 = d3.range(1, 25, 5); var X1 = d3.merge(d3.transpose([Y1, Y1, Y1, Y1, Y1])); 
var Y2 = d3.range(28, 50, 5); var X2 = d3.merge(d3.transpose([Y2, Y2, Y2, Y2, Y2])); 
var Y3 = d3.range(58, 80, 5); var X3 = d3.merge(d3.transpose([Y3, Y3, Y3, Y3, Y3])); 
var Y4 = d3.range(85, 110, 5); var X4 = d3.merge(d3.transpose([Y4, Y4, Y4, Y4, Y4])); 
var Y5 = d3.range(115, 140, 5); var X5 = d3.merge(d3.transpose([Y5, Y5, Y5, Y5, Y5])); 
var Y6 = d3.range(142, 165, 5); var X6 = d3.merge(d3.transpose([Y6, Y6, Y6, Y6, Y6]));
var Y7 = d3.range(172, 195, 5); var X7 = d3.merge(d3.transpose([Y7, Y7, Y7, Y7, Y7])); 
var Y8 = d3.range(199, 220, 5); var X8 = d3.merge(d3.transpose([Y8, Y8, Y8, Y8, Y8])); 
var Y9 = d3.range(229, 250, 5); var X9 = d3.merge(d3.transpose([Y9, Y9, Y9, Y9, Y9])); 
var Y10 = d3.range(256, 280, 5); var X10 = d3.merge(d3.transpose([Y10, Y10, Y10, Y10, Y10])); 

var XAxis =  d3.merge([X1, X2, X3, X4, X5, X6, X7, X8, X9, X10, X1, X2, X3, X4, X5, X6, X7, X8, X9, X10, X1, X2, X3, X4, X5, X6, X7, X8, X9, X10, X1, X2, X3, X4, X5, X6, X7, X8, X9, X10]);
var YAxis = d3.merge([Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y1, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y2, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y3, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4, Y4,]);