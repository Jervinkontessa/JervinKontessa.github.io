const key = 'b84ba1eed1088c2b592b82af06e5e700'; //sesuai API Key Anda
const endpoint_url = 'https://api.themoviedb.org/3/';
const endpoint_url2 = 'https://api.themoviedb.org/3/movie/';

// Blok kode untuk melakukan request API
function getListMovie(services, sectiontitle) {
  fetch(endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data) {
// Objek/array JavaScript dari response.json() masuk lewat data.
// Menyusun komponen card movie secara dinamis
  var moviesHTML = "";
  data.results.forEach(function(movie) {
    moviesHTML += `
        <div class="col m3 s6">
          <div class="card">
            <a href="./movie.html?id=${movie.id}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/>
              </div>
            </a>
              <div class="card-content text-center">
              <strong>Judul:${movie.title}</strong><br>
              <strong>Released : ${movie.release_date}</strong><br>
              <strong>Vote average : ${movie.vote_average}</strong>
              </div>
            </div>
          </div>

    `;


});
    document.getElementById("movie_list").innerHTML = moviesHTML;
    document.getElementById("section_title").innerHTML = sectiontitle;
})
  .catch(error);
}

function getMovie(movie_id){
fetch(endpoint_url2 + movie_id + "?api_key=" + key + "&language=en-US&page=1")
 .then(status)
 .then(json)
 .then(function(data) {
  var moviepit = "";
  //ini hanya test nilainya di dapat atau ndak
  moviepit += `  <img src="https://image.tmdb.org/t/p/w500${data.poster_path}"/>



`;
      document.getElementById("movie_detail").innerHTML = moviepit;
})

  .catch(error);

}
