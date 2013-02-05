var objSVG=new Object(), unId = [], Dollars = [];
    objSVG.Value=0; objSVG.Unid=unId; objSVG.Color="";
    
var viz = d3.select("body").append("div")
      .attr("id","main_container");

d3.csv("org_chart.csv", function(data){

var nested_data = d3.nest()
      .key(function(d){ return [d.Order, d.Group];}).sortKeys(d3.ascending)
      .key(function(d){ return d.Category;}).sortKeys(d3.ascending)
      .entries(data);
      
var group = viz.selectAll("div")
      .data(nested_data)
    .enter().append("div").classed("group", true)
      .text(function(d, i){  return nested_data[i].values[0].values[0].Group; });
      
var category = group.selectAll("div")
      .data(function(d, i){ return nested_data[i].values; })
    .enter().append("div").classed("category", true)
      .text(function(d, i){ return d.values[i].Category; });
      
var category_data = d3.nest()
      .key(function(d){ return [d.Order, d.Group, d.Category];})
      .sortKeys(d3.ascending)
      .entries(data.sort(function(a, b){ return StrToInt(a.Value) - StrToInt(b.Value); }));
      
var title = category.selectAll("div")
      .data(function(d, i){ return category_data[i].values; }) 
    .enter().append("div").style("background-color","#fff")
      .attr("id", function(d, i){ unId.push(FLC(d.Group)+FLC(d.Category) + FLC(d.Title) + i); 
                                  return FLC(d.Group)+FLC(d.Category) + FLC(d.Title) + i; });
      
    console.log(unId); 
     
    title.append("div").classed("title_div", true)
      .text(function(d){ Dollars.push(StrToInt(d.Value)); return d.Title + " : " + d.Value; });
  
    title.append("svg").classed("svg", true)
            .attr("width", 115).attr("height", 1);

for(x in Dollars){
  objSVG = DRange(Dollars[x]); 
  objSVG.Unid = unId[x];
  redraw(objSVG);
}
        
function redraw(objSVG){ 
    var svg = d3.select("#"+objSVG.Unid).append("svg").classed("title", true)
            .attr("width", width(objSVG.Value))
            .attr("height", height(objSVG.Value));

        svg.selectAll("rect")
            .data(d3.range(objSVG.Value))
           .enter().append("rect")
            .attr("width", 4)
            .attr("height", 4)
            .attr("x", function(d, i){ return XAxis[i]; })  
            .attr("y", function(d, i){ return YAxis[i]; })
            .attr("fill", objSVG.Color);
}
});