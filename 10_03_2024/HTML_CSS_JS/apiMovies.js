const url = `https://cors-anywhere.herokuapp.com/gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json`;

const fetchedData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

fetchedData(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
