// Main objective: Make your application wait until the anime catalogue has finished loading before displaying the welcome message.
// Concepts: Promise, setTimeout(), async, await

// Your scenario
// Imagine a user opens AnimeHub. Your application needs to load its anime catalogue before welcoming the user.
// The catalogue takes one second to load. While it is loading, the program must not display the final welcome message.

// Your tasks
// Task 1 — Create loadAnimeCatalogue()
// - It must return a Promise.
// - Use setTimeout() to simulate a one-second loading process.
// - Resolve the Promise with "Anime catalogue loaded!".

// Task 2 — Create startAnimeHub()
// - Declare it using async.
// - Use await to wait for loadAnimeCatalogue() to finish.
// - Print the catalogue's returned message.
// - Then print "Welcome to AnimeHub!".

// Task 3 — Test the execution order
// Your output should look like this:
// Loading AnimeHub...
// Anime catalogue loaded!
// Welcome to AnimeHub!

function loadAnimeCatalogue(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Anime catalogue loaded!");
        }, 1000);
    })
}

async function startAnimeHub(){

    try{
        console.log("Loading AnimeHub...");
        
        const loadAnimeCatalogueResult = await loadAnimeCatalogue();

        console.log(loadAnimeCatalogueResult);

        setTimeout(() => {
            console.log("Welcome to AnimeHub!");  
        }, 500);      
    }
    catch(error){
        console.error(error);
    }
}

startAnimeHub();