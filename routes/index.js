// IN THIS FILE
// we're making data and pushing it into the index.html template.

var title = 'This is the title';

var message = 'So rad.';

var listOfThings = [ "this", "is", "a", "list", "of", "strings" ];

var person = {
  name: "Noodles",
  job: "Professional Noodler",
  age: 1000,
  disposition: "Sunny",
  nicknames: [ "dude", "bro", "guy", "man1", "sir" ]
};

var imageUrl = "/images/kitten.png";

exports.index = function(req, res){
  res.render('index.html', {
    title: title,
    message: message,
    listOfThings: listOfThings,
    person: person,
    imageUrl: imageUrl,
    aNumber: 42
  });
};