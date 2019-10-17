const key = '$2a$10$DdC1bfLQHUl2UUyOy0kOVu7FxykGTb6/JDKsTi5d52t3apWRUXNyi';
const ul = document.getElementById('characters');
const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key, house:'Gryffindor'}
const characterTable = document.querySelector('form');

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

function createNode(element) {
  return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
fetch(url, {key: key})
  .then((resp) => resp.json()) 
  .then(function(data) {

  let characters = data;
  let charactersRow = document.createElement('tr');
  let charactersName = document.createElement('td');
  let charactersHouse = document.createElement('td');
  let charactersSpecies = document.createElement('td');
  let charactersRole = document.createElement('td');

  	
 
  
  
  //   let =  =false;
  //   if (undefined == false) {
      //       console.log('This character role is undefined');
      //   }
      // console.log(characters);
      
      charactersName.innerText = data.name;
      charactersHouse.innerText = data.house;
      charactersSpecies.innerText = data.species;
      charactersRole.innerText = data.role;
      
      
        
        
        return characters.map(function(characters) {
            console.log(characters);
            let li = createNode('li');
            
            li.innerText = `${characters.name}, ${characters.house}, ${characters.species}, ${characters.role}`;
            append(ul, li);
        
})
})
// characterTable.appendChild(characters);
// characters.appendChild(charactersName);
// characters.appendChild(charactersHouse);
// characters.appendChild(charactersSpecies);
// characters.appendChild(charactersRole);






