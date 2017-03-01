var express = require('express');
var app = express();

app.get('/:id', function(req, res) {
  var output = getTheTime(req.params.id);
  res.end(JSON.stringify(output));
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(8080, function() {
  console.log('Example app listening on port 8080!')
});

function getTheTime(timestamp) {
  var theDate = null;
  var dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var output = {
    "unix": null,
    "natural": null
  };

  if (isNaN(timestamp)) {
    timestamp = Date.parse(timestamp);
    if (!isNaN(timestamp)) {
      theDate = new Date(timestamp);
    }
  }
  else {
    theDate = new Date(timestamp * 1000);
  }

  if (theDate !== null) {
    output.unix = theDate.getTime() / 1000;
    output.natural = theDate.toLocaleDateString('en-US', dateOptions);
  }
  console.log(output);
  return output;
}
