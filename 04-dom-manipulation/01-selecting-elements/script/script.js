const animeList = document.querySelectorAll('.list-items');

animeList.forEach(
    function(anime){
        anime.addEventListener('click', function(){
            let animeLink = anime.dataset.url;

            window.location.href = animeLink;
        })
    }
);