const API_KEY = '7d35a96776msh173b8e3144a5b31p121fe8jsnf7d07fc26f37';
const image = 'https://image.tmdb.org/t/p/w500';

const input = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const main_grid_title = document.querySelector('.favorites h1');
const main_grid = document.querySelector('favorites .movies-grid');


function get_movie_by_search(search_term){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };
    
    fetch(`https://ott-details.p.rapidapi.com/search?title=${search_term}&page=1`, options)
        .then(response => response.json())
        .then(response => {
            for(let i = 0; i < response.results.length; i++){
                const movie = response.results[i].title;
                console.log(movie);
            }

            // const thistitle = response
            // console.log(thistitle);
        })
        .catch(err => console.error(err));
}







btn.addEventListener('click', add_searched_movie_to_dom);
function add_searched_movie_to_dom(){
    const data=input.value;
    get_movie_by_search(data);
    console.log(data);


    main_grid_title.innerHTML = `Search results...`;
}
