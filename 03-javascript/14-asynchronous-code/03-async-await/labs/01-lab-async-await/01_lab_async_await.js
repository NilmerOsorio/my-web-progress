// Create a function called startAnimeHub() using the async keyword. 
// Inside it, return the message "AnimeHub is starting!".
// - Call the function and inspect its return value.
// - Retrieve the actual message using .then().

async function startAnimeHub() {
    return "AnimeHub is starting!";
}

startAnimeHub().then((message) => {
    console.log(message);
});
