
// HERE WE NEED TO USE THE SPREADSHEET DATA, INTO THE SELECT GRAPH, BUT HAVE NOT BEEN ABLE TO!!! TRY AGAIN. GRAPH 18 AND 19.

//google.charts.load('current', {'packages':['corechart', 'controls']});
//google.charts.setOnLoadCallback();

/*
function initialize() {
  var queryString = encodeURIComponent('SELECT B, C LIMIT 8929 OFFSET 1');
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1wx9d-9z9R4IS3CwQ-lNDTCTuhHsVSuwz4SNp1J0v4YQ/gviz/tq?sheet=SDRiNAV&headers=1&tq=' + queryString);
  query.send(drawDashboard);
}
function drawDashboard(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }
  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, { height: 400 });
}
*/

google.charts.load('current', {
  
    callback: function () {
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'Crypto8');
      data.addRow([new Date('04/01/2019'), 3]);
      data.addRow([new Date('04/02/2019'), 4]);
      data.addRow([new Date('04/03/2019'), 3]);
      data.addRow([new Date('04/04/2019'), 3]);
      data.addRow([new Date('04/05/2019'), 2]);


      var chart = new google.visualization.ChartWrapper({
        chartType: 'LineChart',
        containerId: 'daily_container_count_lineChart',
        options: {
          theme: 'maximized'
        }
      });
  
      var control = new google.visualization.ControlWrapper({
        controlType: 'ChartRangeFilter',
        containerId: 'control_div',
        options: {
          filterColumnIndex: 0
        }
      });

      var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));
      dashboard.bind([control], [chart]);
      dashboard.draw(data);
      table.draw();
    },
    packages: ['controls', 'corechart']
  });
  