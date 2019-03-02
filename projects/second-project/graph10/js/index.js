google.charts.load('current', {
    callback: function () {
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'SDR');
      data.addColumn('number', 'Crypto8');
  
      data.addRow([new Date('04/01/2019'), 3, 3]);
      data.addRow([new Date('04/02/2019'), 4, 6]);
      data.addRow([new Date('04/03/2019'), 3, 4]);
      data.addRow([new Date('04/04/2019'), 3, 4]);
      data.addRow([new Date('04/05/2019'), 2, 3]);
      data.addRow([new Date('04/06/2019'), 4, 3]);
      data.addRow([new Date('04/07/2019'), 4, 2]);
      data.addRow([new Date('04/08/2019'), 3, 2]);
      data.addRow([new Date('04/09/2019'), 4, 3]);
      data.addRow([new Date('04/10/2019'), 5, 1]);
      data.addRow([new Date('04/11/2019'), 5, 2]);
      data.addRow([new Date('04/12/2019'), 3, 2]);
      data.addRow([new Date('04/13/2019'), 4, 4]);
      data.addRow([new Date('04/14/2019'), 4, 4]);
      data.addRow([new Date('04/15/2019'), 3, 3]);
      data.addRow([new Date('04/16/2019'), 4, 5]);
      data.addRow([new Date('04/17/2019'), 3, 4]);
      data.addRow([new Date('04/18/2019'), 3, 4]);
      data.addRow([new Date('04/19/2019'), 2, 3]);
      data.addRow([new Date('04/20/2019'), 4, 3]);
      data.addRow([new Date('04/21/2019'), 4, 2]);
      data.addRow([new Date('04/22/2019'), 3, 2]);
      data.addRow([new Date('04/23/2019'), 4, 3]);
      data.addRow([new Date('04/24/2019'), 5, 1]);
      data.addRow([new Date('04/25/2019'), 5, 2]);
      data.addRow([new Date('04/26/2019'), 3, 2]);
      data.addRow([new Date('04/27/2019'), 4, 4]);
      data.addRow([new Date('04/28/2019'), 4, 4]);
      data.addRow([new Date('04/29/2019'), 2, 3]);
      data.addRow([new Date('04/30/2019'), 4, 3]);

  
      var dataOther = new google.visualization.DataTable();
      dataOther.addColumn('date', 'Date');
      dataOther.addColumn('number', 'S&P 500');
      dataOther.addColumn('number', 'MSCI World');
      dataOther.addColumn('number', 'DAX');
      dataOther.addColumn('number', 'Bitcoin');
  
      dataOther.addRow([new Date('04/01/2001'), 1, 8, 5, 2]);
      dataOther.addRow([new Date('04/02/2001'), 2, 9, 6, 3]);
      dataOther.addRow([new Date('04/03/2001'), 3, 0, 7, 4]);
      dataOther.addRow([new Date('04/04/2001'), 4, 1, 8, 5]);
      dataOther.addRow([new Date('04/05/2001'), 5, 2, 9, 6]);
      dataOther.addRow([new Date('04/06/2001'), 6, 3, 0, 7]);
      dataOther.addRow([new Date('04/07/2001'), 7, 4, 1, 8]);
  
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
  
      var table = new google.visualization.ChartWrapper({
        chartType: 'Table',
        containerId: 'table_div',
        dataTable: dataOther,
        options: {
          sortColumn: 1
        }
      });
  
      google.visualization.events.addListener(control, 'statechange', function () {
        var state = control.getState();
        var view = new google.visualization.DataView(dataOther);
        view.setRows(view.getFilteredRows([{column: 0, minValue: state.range.start, maxValue: state.range.end}]));
        table.setDataTable(view);
        table.draw();
      });
  
      var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));
      dashboard.bind([control], [chart]);
      dashboard.draw(data);
      table.draw();
    },
    packages: ['controls', 'corechart', 'table']
  });
  