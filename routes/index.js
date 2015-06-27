// IN THIS FILE
// we're making data and pushing it into the index.html template.

var title = 'This is the title';

var message = 'This is the message.';

var listOfThings = [ "this", "is", "a", "list", "of", "strings" ];

var person = {
  name: "Person",
  job: "Job Title",
  age: 100,
  disposition: "Sunny"
};

var imageUrl = "/images/kitten.png";

module.exports.index = function(req, res){
  res.render('index.html', {
    title: title,
    message: message,
    listOfThings: listOfThings,
    person: person,
    imageUrl: imageUrl,
    aNumber: 42
  });
};