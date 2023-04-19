let count = 1;

const getPeople = () => {
    axios
    .get(`https://swapi.dev/api/films/2`)
        .then((resp) => getInfoPeople(resp.data.characters)); 
}

const getInfoPeople = (arr) => {
    document.getElementById('content').innerHTML = '';
    document.body.classList.remove('planets')
    arr.forEach(apiWithName => {
        axios
            .get(apiWithName)
                .then((resp) => {
                    document.getElementById('content').innerHTML += `<div>
                        <h2><span>Name:</span> ${resp.data.name}</h2>
                        <span><span>Happy Birthday:</span> ${resp.data.birth_year}</span>
                        <span><span>Gender:</span> ${resp.data.gender}</span>
                    </div>`;
                });
    });
}

const getPlanets = (countPlanet) => {
    document.getElementById('content').innerHTML = '';
    if(count == 6) document.querySelector(".next").disabled = true;
    else document.querySelector(".next").disabled = false;
    if(count == 1) document.querySelector(".prev").disabled = true;
    else document.querySelector(".prev").disabled = false;
    document.body.classList.add('planets')
    axios
    .get(`https://swapi.dev/api/planets/?page=${countPlanet}`)
        .then((resp) => {
            resp.data.results.forEach((item) => {
                document.getElementById('content').innerHTML += `<div>
                <h2><span>Name:</span> ${item.name}</h2>
                <span><span>Created:</span> ${item.created}</span>
                <span><span>Population:</span> ${item.population}</span>
            </div>`;
            });
        }); 
}

