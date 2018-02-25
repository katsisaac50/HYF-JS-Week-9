function fetchJSONData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            const jsonData = JSON.parse(xhr.responseText);
            resolve(jsonData);
        })

        xhr.open('GET', url);
        xhr.send();
    });
}






const url = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

fetchJSONData(url)
    .then(allMovies => {

        const taggedMovies = tagMovies(allMovies);

        console.log(taggedMovies);



        const form = document.querySelector('#searchForm');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form)
            const searchText = formData.get('searchText').toLocaleLowerCase();
            const selectedTag = formData.get('selectedTag');

            // const searchText = searchInput.value;
            console.log("You're searching for : ", searchText, selectedTag);

            let filteredMovies = taggedMovies.filter(x => x.title.toLocaleLowerCase().includes(searchText));

            if (selectedTag !== 'All') {
                filteredMovies = filteredMovies.filter(x => x.tag === selectedTag);
            }

            renderMovies(filteredMovies);
        });

    })
    .catch(error => console.log('Error', error));



function tagMovies(movies) {
    // Give each movie a tag: Excellent (>=8.5), Very Good (>=8), Good (<8) based on the ratings.
    const taggedMovies = movies.map(movie => {
        // const movie = Object.assign({}, oldMovie);

        if (movie.rating >= 8.5) {
            movie.tag = 'Excellent';
        } else if (movie.rating >= 8) {
            movie.tag = 'Very Good';
        } else {
            movie.tag = 'Good';
        }

        return movie;
    });

    return taggedMovies;

}


function renderMovies(movies) {
    const p = document.querySelector('#searchCount');
    p.style.display = 'block';

    p.innerHTML = movies.length === 0 ? "No movies found" : `${movies.length} movies found`;

    const table = document.querySelector('#moviesList');
    table.style.display = movies.length > 0 ? 'block' : 'none';

    // Render all the movies as a list (similar to how you were presenting Github repositories in the homework before).
    const tbodyElement = document.querySelector('#moviesList > tbody');
    tbodyElement.innerHTML = '';

    for (const movie of movies) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.votes}</td>
                <td>${movie.tag}</td>
            `;
        tbodyElement.appendChild(tr);
    }
}