




var catContainer = function(){
  var newCat = document.createElement('ul');
  newCat.classList.add('cat');
  return newCat;
}

var listName = function(catName){
    listName = document.createElement('li');
    listName.innerText = catName;
    return listName;
}

var listFavouriteFood = function(food) {
  listFavouriteFood = document.createElement('li');
  listFavouriteFood.innerText = food;
  return listFavouriteFood;
};




var pic = function( image ){
  var fineFrame = document.createElement('img');
  fineFrame.setAttribute( image );
  fineFrame.setAttribute("height", "400");
  fineFrame.setAttribute("width", "500");
  return fineFrame;
};


var addCat = function(catName, favouriteFood, image){
  var catParent = catContainer();
  var catChild = listName(catName);
  var food = listFavouriteFood( favouriteFood );
  var photo = pic(image);
  var cats = document.querySelector('#cats');
  appendElements(cats, catContainer, catChild, food);
}

var appendElements = function(catContainer, listFavouriteFood, image){
  catContainer.appendChild(listName);
  catContainer.appendChild(listFavouriteFood);
  catContainer.appendChild(image);
  cats.append(catContainer);
};


var manyCats = [ {name: "Henryatta", favouriteFood: "gerballs", img: "http://www.catstour.co.uk/wp-content/uploads/2016/10/cat-vs-dog.jpg"},
{name: "shaguar", favouriteFood: "mince", img: "https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg"} ]

var app = function(){
  for (var i = 0; i < manyCats.length; i++) {
    addCat(manyCats[i].name, manyCats[i].favouriteFood, manyCats[i].img);
  }
};


window.onload = app();






































// var appendElements = function(quotes, quoteArticle, quote, cite){
//   quote.appendChild(cite);
//   quoteArticle.appendChild(quote);
//   quotes.append(quoteArticle);
// };
//
// var addQuote = function(text, author){
//   var quoteArticle = createParentTag();
//   var blockquote = createChildTag( text );
//   var cite = createCiteTag( author );
//   var quotes = document.querySelector('#quotes');
//   appendElements(quotes, quoteArticle, blockquote, cite);
// };
//
// var app = function(){
//   for(i = 0; i < manyQuotes.length; i++){
//     addQuote(manyQuotes[i].quote, manyQuotes[i].author);
//   }
// };
//
//
//
//
// var createParentTag = function(){
//   var quoteArticle = document.createElement('article');
//   return quoteArticle;
// };
//
// var createChildTag = function( text ) {
//   var blockquote = document.createElement('blockquote');
//    blockquote.innerText = text;
//    return blockquote;
//  };
//
//  var createCiteTag = function( author ){
//    var cite = document.createElement('cite');
//    cite.innerText = author;
//    return cite;
//  };
