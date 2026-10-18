// AnimeHub must load three things in the correct order:
// 1. The anime catalogue.
// 2. The user's profile.
// 3. The user's watchlist.
// Your job is to ensure each operation finishes before the next one begins, using async and await.


// 1. Your requirements
// - Each function must return a Promise.
// - Use setTimeout() to simulate loading delays.
// - Use await to load the resources sequentially.
// - Display a message when each resource finishes loading.
// - Display "AnimeHub is ready!" only after all three operations finish.

// 2. Expected output
// The messages should appear in this order:
// Starting AnimeHub...
// Anime catalogue loaded!
// User profile loaded!
// Watchlist loaded!
// AnimeHub is ready!

// The simulated loading delays can be one second each, or whatever duration you choose.

async function startAnimeHub() {

    try{
        console.log("Starting AnimeHub ...");

        function loadAnimeCatalogue(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Anime Catalogue loaded!");
                }, 1500);
            });
        }

        function loadUserProfile(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("User profile loaded!");
                }, 1000);
            });
        }

        function loadWatchlist(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Watchlist loaded!");
                }, 500);
            })
        }

        const loadAnimeCatalogueResult = await loadAnimeCatalogue();
        console.log(loadAnimeCatalogueResult);

        const loadUserProfileResult = await loadUserProfile();
        console.log(loadUserProfileResult);

        const loadWatchlistResult = await loadWatchlist();
        console.log(loadWatchlistResult);

        console.log("AnimeHub is ready!");
    }
    catch(error){
        console.error(error);
    }

}

startAnimeHub();
