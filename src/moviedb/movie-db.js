

// const url = `https://api.themoviedb.org/3/movie/popular?api_key=908e7d342facb48032f42b20340155b8&language=en-US&page=${pagesNumber}`;


/**
 * 
 * @param {HTMLElement} element 
 */
const getApi = async( element, pagesNumber ) => {

    try {
        const api  = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=908e7d342facb48032f42b20340155b8&language=en-US&page=${pagesNumber}`);

        if( api.status === 200 ){
            
            const data = await api.json();
                const movies = data.results.forEach( movie => {
                    
                    const template = `
                    <div class="card-movie">
                        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                        <div class="card-title">
                        <h3>${movie.title}</h3>
                        </div>
                    </div>
                    `;
            
                    element.innerHTML += ''
                    element.innerHTML += template
                })
            
                console.log(data);
                return movies;

        } else if( api.status === 401 || api.status === 404 ) return
        

    } catch (error) {
        console.log(error);
    }

    return
    
}



export{
    getApi
}