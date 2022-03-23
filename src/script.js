fetch('https://rickandmortyapi.com/api/character', {
  method: 'GET'
})
  .then(response => response.json())
  .then(function(json){
    const ul = document.querySelector('ul');

    json.results.map(function(results){
      ul.innerHTML+=`
      <li class="card">
        <img class="card-image" src= ${results.image}>
        <h2 class= 'card-title'>${results.name}</h2>
        <p class = 'card-subtitle'>${results.status}</p>
        <p class = 'card-subtitle'>${results.origin.name}</p>
      </li>
      `
    })
  });
