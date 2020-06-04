// API key
const key = '$2a$10$H1pmgojMlcHoQBh9QhzYYeYnIfKZtYOxZR2FQ6SH0lNbYzgMEQVme';
var currentSelectedHouse;
var characters;
// create the list where we will place our characters in
apiCalls();
function apiCalls()
{
  const ul = document.getElementById('characters');

  let houseRandom = new URL("https://www.potterapi.com/v1/sortingHat/"), param ={key: key}
  //console.log(houseRandom.searchParams);


  Object.keys(param).forEach(key => houseRandom.searchParams.append(key, param[key]));


  // create the type of element on page as passed in the parameters
  function createNode(element) {
    return document.createElement(element);
  }

// Append the second parameter(element) to the first one
  function append(parent, el) {
    return parent.appendChild(el);
  }


fetch(houseRandom, {key: key})
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
  // Get the results
    let house = data;
    currentSelectedHouse = house;
    console.log(currentSelectedHouse);
    test();
  })
}

document.getElementById("attackPlayer").addEventListener("click", function()
{
  apiCalls();
});
document.getElementById("healPlayer").addEventListener("click", function()
{
  apiCalls();
});
document.getElementById("shieldPlayer").addEventListener("click", function()
{
  apiCalls();
});
document.getElementById("randomSpellPlayer").addEventListener("click", function()
{
  apiCalls();
});
function test()
{   // create URL to get all Harry Potter characters based on house selected
    const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key, house: currentSelectedHouse} //, house: 'Sly'
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
   // console.log(currentSelectedHouse);
// make API request using Fetch API
fetch(url, {key: key})
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
  // Get the results
    characters = data;
    console.log(characters);
    giphy();
  //Map through the results
  return characters.map(function(character) {
    // Create the li's
    let li = createNode('div');
    // Make the HTML of our li the character's name and blood status
    li.innerHTML = `${character.name}`;
    // Append the li's to the ul
    append(ul, li);
    
  })
 
})
.catch(function(error) {
  // Error handling
  let p = "There's an error with the API.";
  //append(body, p);
});

}

// below is the giphy api.

 // Event listener for all button elements
 function giphy() {
   
    // In this case, the "this" keyword refers to the button that was clicked
    var person = currentSelectedHouse;
      console.log(person);
    // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=5jBkMFCpE1dsuv6GGczJr18I1H88lzt0&limit=101";

    // Performing our AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API
      .then(function(response) {
        // Storing an array of results in the results variable
        var results = response.data;
          console.log(results);
         
        // Looping over every result item
        //for (var i = 0; i < 20; i++) {

          // Only taking action if the photo has an appropriate rating
          if (results.rating !== "r" && results.rating !== "pg-13") {
            // Creating a div for the gif
            tempNum = Math.floor(Math.random() * 100);
            tempNum2 = Math.floor(Math.random() * 100);
            //var gifDiv = $("<div>");
            document.getElementById("bossPic").src=results[tempNum2].images.fixed_height.url;
            document.getElementById("playerPic").src=results[tempNum].images.fixed_height.url;
            
            // Storing the result item's rating
            //var rating = results[i].rating;

            // Creating a paragraph tag with the result item's rating
           // var p = $("<p>").text("Rating: " + rating);

            // Creating an image tag
            //var personImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            //personImage.attr("src", results[tempNum].images.fixed_height.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created
            //gifDiv.append(p);
            //gifDiv.append(personImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML

            //$("#gifs-appear-here").prepend(gifDiv);
            // .prepend(gifDiv);
          }
        //}
      });
  }
