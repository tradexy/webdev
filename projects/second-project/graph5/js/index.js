      google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Currency');
        data.addColumn('number', 'Profit/Loss');
        data.addColumn('boolean', 'Realised/Unrealised');
        data.addRows([
          ['EUR',  {v: 10000, f: '$10,000'}, true],
          ['CNY',   {v:8000,   f: '$8,000'},  false],
          ['GBP', {v: 12500, f: '$12,500'}, true],
          ['JPY',   {v: 7000,  f: '$7,000'},  true]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }