// Scenario: AnimeHub needs to load its anime catalogue. The operation takes two seconds.
// Requirements:
// - Create a function called loadAnimeCatalogue().
// - Return a new Promise.
// - Use setTimeout() to simulate a two-second delay.
// - Resolve the Promise with "Anime catalogue loaded!" after the delay.
// - Use .then() to display the successful result.
// - Add .catch() to handle potential errors.
// Rules: No async/await. Don't reject the Promise yet; focus on understanding when it resolves.
// Expected output:
// Anime catalogue loaded!
// The message should appear after approximately two seconds, not immediately.

function loadAnimeCatalogue(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Anime catalogue loaded!");
        }, 2000);
    })
}

loadAnimeCatalogue().then(value => console.log(value))
                    .catch(error => console.error(error));