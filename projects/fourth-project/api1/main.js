var johnContainer = document.getElementById("JJMdata");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('Get', 'json.json');
//ourRequest.open('Get', 'https://raw.githubusercontent.com/tradexy/api/master/fx25feb19.json');
//ORIGINAL USE  ourRequest.open('Get', 'https://forex.1forge.com/1.0.3/quotes?pairs=EURUSD,USDGBP,USDCNH,USDJPY,USDEUR&api_key=UQfSlMDB9vZUevh4DvY3Zu5zrga4LCW7');
//ourRequest.open('Get', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json'); GOOG name
//ourRequest.open('Get', 'https://jsonplaceholder.typicode.com/posts');  GOOD  title
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();    
});
function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + data[i].language + 
    data[i].age + data[i].glasses + data[i].day + "</p>";
  }
  johnContainer.insertAdjacentHTML('beforeend', htmlString);
}

