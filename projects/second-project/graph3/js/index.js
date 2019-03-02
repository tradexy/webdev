
var chart, chartData, dataView;

var columns = [
  {
    type: 'number',
    label: 'month'
  },
  {
    type: 'number',
    label: 'JPY',
    color: 'red',
    disabledColor: '#FFD9D9',
    visible: true
  },
  {
    type: 'number',
    label: 'EUR',
    color: 'blue',
    disabledColor: '#D9D9FF',
    visible: true,
  },
  {
    type: 'number',
    label: 'CNY',
    color: 'yellow',
    disabledColor: '#C3E6C3',
    visible: true,
  }
];

var nullFunc = function() {return null;};

google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawChart);

function drawChart() {

  if (!chart) {
    chartData = google.visualization.arrayToDataTable([
      ['month', 'JPY', 'EUR', 'CNY'],
      [1, 2, 3, 4],
      [2, 3, 1, 5],
      [3, 1, 4, 2],
      [4, 2, 2, 1],
      [5, 3, 1, 5],
      [6, 3, 1, 1],
      [7, 3, 6, 2]
    ],
                                                      false
                                                     );
    dataView = new google.visualization.DataView(chartData);

    chart = new google.visualization.LineChart(document.getElementById('chart'));

    // Toggle visibility of data series on click of legend.
    google.visualization.events.addListener(chart, 'click', function (target) {
      if (target.targetID.match(/^legendentry#\d+$/)) {    
        var index = parseInt(target.targetID.slice(12)) + 1;
        columns[index].visible = !columns[index].visible;
        drawChart();
      }
    });
  }

  var visibleColumnIndexes = [0];
  var colors = [];

  for (var i = 1; i < columns.length; i++) {
    if (columns[i].visible) {
      colors.push(columns[i].color);

      visibleColumnIndexes.push(i);
    }
    else {
      colors.push(columns[i].disabledColor);

      visibleColumnIndexes.push({
        calc: nullFunc,
        type: columns[i].type,
        label: columns[i].label,
      });
    }
  };
  dataView.setColumns(visibleColumnIndexes);

  chart.draw(
    dataView,
    {
      colors: colors
    }
  );
// below event listener to dynamically re-size as screen size changes
  window.addEventListener('resize', drawChart, false);
};

