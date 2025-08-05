function search() {
    const input = document.querySelector('input[type="text"]');
    const query = input.value;
    
    if (query) {
        fetch(`http://www.omdbapi.com/?apikey=24a875a1&t=${query}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    const image = document.getElementById('image');
                    image.style.display='block'
                    image.src = data.Poster;
                    image.alt = data.Title;
                    document.querySelector('p').textContent = `${data.Title} (${data.Year}) - ${data.Plot}`;
                    document.getElementById('video').style.display = 'none'
                } else {
                    console.error("Movie not found:", data.Error);
                    alert("Movie not found. Please try another search.");
                }
            })
            .catch(error => console.error("Error fetching movie data:", error));
    } else {
        window.alert("Please enter a movie name.");
    }
}
function play(){
    const input = document.querySelector('input[type="text"]');
    const query = input.value;
    
    if (query) {
        fetch(`http://www.omdbapi.com/?apikey=24a875a1&t=${query}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    const vid = document.getElementById('video'	);
                    vid.src = `https://vidsrc.to/embed/movie/${data.imdbID}`
                    console.log(data.imdbID);
                    document.getElementById('image').style.display='none';
                    document.querySelector('p').textContent=''
                    vid.style.display = 'block';
                } else {
                    console.error("Movie not found:", data.Error);
                    alert("Movie not found. Please try another search.");
                }
            })
            .catch(error => console.error("Error fetching movie data:", error));
    } else {
        window.alert("Please enter a movie name.");
    }
}
