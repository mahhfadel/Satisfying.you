console.log('teste')

// anychart.onDocumentReady(function () {

//     // create data
//     var data = [
//       {x: "A", value: 637166},
//       {x: "B", value: 721630},
//       {x: "C", value: 148662},
//       {x: "D", value: 78662},
//       {x: "E", value: 90000}
//     ];

//     // create a chart and set the data
//     var chart = anychart.pie(data);

//     // configure outlines
//     chart.normal().outline().enabled(true);
//     chart.normal().outline().width("5%");
//     chart.hovered().outline().width("10%");
//     chart.selected().outline().width("3");
//     chart.selected().outline().fill("#455a64");
//     chart.selected().outline().stroke(null);
//     chart.selected().outline().offset(2);

//     // set the chart title
//     chart.title("Pie Chart: Appearance (Outline)");

//     // set the container id
//     chart.container("container");

//     // initiate drawing the chart
//     chart.draw();
// });