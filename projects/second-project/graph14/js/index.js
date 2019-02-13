

  // Load the Visualization API and the controls package.
  google.charts.load('current', {'packages':['corechart', 'controls']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawDashboard);

  // Callback that creates and populates a data table,
  // instantiates a dashboard, a range slider and a pie chart,
  // passes in the data and draws it

/*  function drawDashboard() {
    // Create our data table.
    var data = google.visualization.arrayToDataTable([
      ['Name', 'Cells Destruction'],
      ['John' , 65],
      ['Maria', 55],
      ['Eveliina', 35],
      ['Kaspian', 30],
      ['Alarik', 27],
      ['Lilia', 25],
      ['Besa', 8]
    ]);
*/
function drawDashboard() {
  var queryString = encodeURIComponent('SELECT A, B LIMIT 5 OFFSET 1');
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1kYwBfiLspqpwoupSdJoXoUV9tsNtBfStqNiCsrFQ0Gc/gviz/tq?sheet=Sheet3&headers=1&tq=' + queryString);
  query.send(drawDashboard);
}

    // Create a dashboard.
    var dashboard = new google.visualization.Dashboard(
        document.getElementById('dashboard_div'));

    // Create a range slider, passing some options
    var donutRangeSlider = new google.visualization.ControlWrapper({
      'controlType': 'NumberRangeFilter',
      'containerId': 'filter_div',
      'options': {
        'filterColumnLabel': 'Cells Destruction'
      }
    });

    // Create a pie chart, passing some options
    var pieChart = new google.visualization.ChartWrapper({
      'chartType': 'PieChart',
      'containerId': 'chart_div',
      'options': {
        'width': 600,
        'height': 600,
        'pieSliceText': 'value',
        'legend': 'right'
      }
    });

    // Establish dependencies, declaring that 'filter' drives 'pieChart',
    // so that the pie chart will only display entries that are let through
    // given the chosen slider range.
    dashboard.bind(donutRangeSlider, pieChart);

    // Draw the dashboard.
    dashboard.draw(data);
  }
