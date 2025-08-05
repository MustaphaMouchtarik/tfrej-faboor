function search() {
    const input = document.querySelector('input[type="text"]');
    const query = input.value.trim();
  
    if (query) {
      fetch(`https://www.omdbapi.com/?apikey=24a875a1&t=${query}`)
        .then(response => response.json())
        .then(data => {
          if (data.Response === "True") {
            const image = document.getElementById("image");
            image.style.display = "block";
            image.src = data.Poster;
            image.alt = data.Title;
  
            document.querySelector("p").textContent = `${data.Title} (${data.Year}) - ${data.Plot}`;
            document.getElementById("video").style.display = "none";
          } else {
            alert("Movie not found. Please try another search.");
          }
        })
        .catch(error => console.error("Error fetching movie data:", error));
    } else {
      alert("Please enter a movie name.");
    }
  }
  
  function play() {
    const input = document.querySelector('input[type="text"]');
    const query = input.value.trim();
  
    if (query) {
      fetch(`https://www.omdbapi.com/?apikey=24a875a1&t=${query}`)
        .then(response => response.json())
        .then(data => {
          if (data.Response === "True") {
            const vid = document.getElementById("video");
            vid.src = `https://vidsrc.to/embed/movie/${data.imdbID}`;
            vid.style.display = "block";
  
            document.getElementById("image").style.display = "none";
            document.querySelector("p").textContent = "";
          } else {
            alert("Movie not found. Please try another search.");
          }
        })
        .catch(error => console.error("Error fetching movie data:", error));
    } else {
      alert("Please enter a movie name.");
    }
  }
  
