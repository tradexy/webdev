

var spreadsheetId = "10omRLafntSK8cTRDeF4ys3JvvJeO2p6NFnYKXh3ZG7A",
  url = "https://spreadsheets.google.com/feeds/list/" +
  spreadsheetId +
  "/od6/public/basic?alt=json";

  $.get({
    url: url,
    success: function(response) {
      var data = response.feed.entry,
        len = data.length,
        i = 0,
        parsedData = [];
  
      for (i = 0; i < len; i++) {
        parsedData.push({
          label: data[i].title.$t,
          value: data[i].content.$t.replace('income: ', '')
        });
      }
  
      FusionCharts.ready(function() {
        var chart = new FusionCharts({
            type: 'bar2d',
            renderAt: 'chart-container',
            width: '100%',
            height: '400',
            dataFormat: 'json',
            dataSource: {
              "chart": {
                // caption configuration
                "caption": "Highest Paid Actors",
                "captionFontBold": "0",
                "captionFontSize": "20",
  
                // x and y axes configuration
                "xAxisName": "Actor",
                "xAxisNameFontSize": "18",
                "xAxisNameFontBold": "0",
                "yAxisName": "Annual Income (in milion USD)",
                "yAxisNameFontSize": "18",
                "yAxisNameFontBold": "0",
                "showLimits": "0",
  
                // general chart configuration
                "baseFont": "Open Sans",
                "paletteColors": "#2AA992",
                "plotFillAlpha": "70",
                "usePlotGradientColor": "0",
                "numberPrefix": "$",
                "numberSuffix": "M",
                "bgcolor": "#202C3D",
                "bgalpha": "95",
                "canvasbgalpha": "0",
                "basefontcolor": "#F7F3E7",
                "showAlternateHGridColor": "0",
                "divlinealpha": "50",
                "divlinedashed": "0",
                "rotateyaxisname": "1",
                "canvasbordercolor": "#FFF",
                "canvasborderthickness": ".3",
                "canvasborderalpha": "100",
                "showValues": "0",
                "plotSpacePercent": "12",
                "showPlotBorder": "1",
                "plotBorderColor": "#2AA992",
                "plotBorderThickness": "1",
                "labelFontSize": "15",
                "outCnvBaseFontSize": "15",
  
                // tooltip configuration
                "toolTipBgColor": "#000",
                "toolTipPadding": "12",
                "toolTipBorderRadius": "3",
                "toolTipBorderThickness": "1",
                "toolTipBorderColor": "#ccc",
                "toolTipBgAlpha": "60",
                "plotToolText": "<div class='plotToolText'>$label: $dataValue</div>"
              },
  
              "data": parsedData
            }
          })
          .render();
      });
    }
  });