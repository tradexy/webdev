

// Raw GIST - this will fetch either `text/plain` or `application/json` content-type
var url1 = 'https://gist.githubusercontent.com/cmccormack/69c3152c0b0c8fae9cd82727a86cc5fe/raw/fake.json';
fetch(url1, { 'content-type': 'json' }).
then(function (response) {return document.getElementById('test1-output').textContent = response.headers.get('content-type');});

// https://api.github.com/gists/$GIST_ID - this will fetch the `application/json` or `text/plain` content-type
var url2 = 'https://api.github.com/gists/69c3152c0b0c8fae9cd82727a86cc5fe';
fetch(url2, { 'content-type': 'json' }).
then(function (response) {return document.getElementById('test2-output').textContent = response.headers.get('content-type');});