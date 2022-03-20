let moviePoster = document.querySelector(".movie-poster");

let modal = document.querySelector("#my_modal");

let closeBtn = document.querySelector(".close_btn");

let modalImage = document.querySelector(".movie_poster_modal");

moviePoster.addEventListener("click", ()=>{
    modal.style.display = "block";
    modalImage.src = moviePoster.src;
});

closeBtn.addEventListener("click", ()=>{
    modal.style.display = "none";
});

window.addEventListener("click", (event)=>{
    if(event.target === modal) {
        modal.style.display = "none";
    };
});