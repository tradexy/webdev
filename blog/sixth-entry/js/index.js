var a = [50,200,80,50,60,88,30,15];

(function() {
  
  // BACKGROUND LINES
  var background = document.querySelector('#background');
  if (background.getContext){
    var b = background.getContext('2d');

    b.lineWidth = 1;
    b.strokeStyle = '#024';
    b.beginPath();
    
    for (var i = 25; i < 300; i += 25) {
      b.moveTo(0, i);
      b.lineTo(800, i);
    }
    b.stroke();
  }
  
  // GRAPH LINE
  var graph = document.querySelector('#canvas');
  if (graph.getContext){
    var g = graph.getContext('2d');
    
    g.lineWidth = 2;
    g.strokeStyle = '#ff0';
    g.shadowColor = '#ff0';
    g.shadowOffsetX = 0;
    g.shadowOffsetY = 0;
    g.shadowBlur = 10;

    g.beginPath();
    g.moveTo(0,300);
    
    for (var i = 0, l = a.length; i < l; i++) {
      g.lineTo((i + 1) * 100,a[i]);
    }
    g.stroke();
  }
  
})();