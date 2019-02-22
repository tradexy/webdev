google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(initialize);


function initialize() {
  var queryString = encodeURIComponent('SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8');
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1kYwBfiLspqpwoupSdJoXoUV9tsNtBfStqNiCsrFQ0Gc/gviz/tq?sheet=Sheet1&headers=1&tq=' + queryString);
  query.send(drawDashboard);
}
function drawDashboard(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }
  var data = response.getDataTable();
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, { height: 400 });

  // below event listener to dynamically re-size as screen size changes
window.addEventListener('resize', initialize, false);
}

