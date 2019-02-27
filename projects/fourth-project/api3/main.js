var johnContainer = document.getElementById("JJMdata");
var btn = document.getElementById("btn");




btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('Get', 'json.json');

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

