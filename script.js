const charactersContainer = document.getElementById('characters-container');

async function fetchCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayCharacters(characters) {
    charactersContainer.innerHTML = ''; // Limpiar contenedor
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character');

        characterDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Especie: ${character.species}</p>
            <p>Estado: ${character.status}</p>
        `;
        
        charactersContainer.appendChild(characterDiv);
    });
}

fetchCharacters();