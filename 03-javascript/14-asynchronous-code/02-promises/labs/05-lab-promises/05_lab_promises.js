// Scenario: A user tries to download an anime episode, but the server reports that the episode is unavailable.
// Requirements:
// - Create downloadEpisode(episodeId, availability).
// - Resolve with "Episode downloaded successfully!" when the episode is available.
// - Reject with an Error when it is unavailable.
// - Use .then() for successful downloads and .catch() for failures.
// - Test both outcomes.

function downloadEpisode(episodeId, availability){
    return new Promise((resolve, reject) => {
        if (availability){
            resolve("Episode downloaded successfully!");
        }
        else{
            reject(new Error("Episode unavailable"));
        }
    });
}

downloadEpisode(1524, true).then(value => {console.log(value)})
                           .catch(Error => console.error(Error));

downloadEpisode(1524, false).then(value => {console.log(value)})
                           .catch(Error => console.error(Error));
