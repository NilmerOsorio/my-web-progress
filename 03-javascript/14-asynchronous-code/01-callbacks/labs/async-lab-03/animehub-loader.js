// Scenario: The application needs to load anime data before loading the user's profile.
// Your program must:
// - Display a startup message.
// - Simulate loading anime data with setTimeout().
// - Execute a callback when the anime data finishes loading.
// - Use that callback to start loading the profile.
// - Display a final message only after both operations finish.

function startAnimeHub(){
    console.log("AnimeHub is starting...");
}

function loadAnimeCatalog(callback){
    console.log("Loading anime catalog ...");
    setTimeout(() => {
        console.log("Anime catalog loaded successfully!");
        callback();
    }, 3000);
}

function loadUserProfile(callback){
    console.log("Loading user profile ...");
    setTimeout(() => {
        console.log("User profile loaded successfully!");
        callback();
    }, 2000);
}

function showWelcomeMessage(){
    console.log("Welcome to AnimeHub!");
}

function finishLoading(){
    console.log("AnimeHub is ready!");
}

startAnimeHub();
loadAnimeCatalog(() => {
    loadUserProfile(() => {
        finishLoading();
        showWelcomeMessage();
    });
}
);