// API key
const key = '$2a$10$DdC1bfLQHUl2UUyOy0kOVu7FxykGTb6/JDKsTi5d52t3apWRUXNyi';

// create the list where we will place our characters in
const ul = document.getElementById('ravenClaw');

// create URL to get all Harry Potter characters
const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key}

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

// create the type of element on page as passed in the parameters
function createNode(element) {
  return document.createElement(element);
}

// Append the second parameter(element) to the first one
function append(parent, el) {
  return parent.appendChild(el);
}

// make API request using Fetch API
fetch(url, {key: key})
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
  // Get the results
  let characters = data;
  // console.log(characters);
  //Map through the results
  return characters.map(function(character) {
    // Create the li's
    let li = createNode('li');
    // Make the HTML of our li the character's name and blood status
    li.innerHTML = `${character.name}, ${character.house}`;
    // Append the li's to the ul
    append(ul, li);
  })
})
.catch(function(error) {
  // Error handling
  let p = "There's an error with the API.";
  append(body, p);
});