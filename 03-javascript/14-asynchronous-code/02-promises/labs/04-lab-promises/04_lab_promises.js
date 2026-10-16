// Scenario: The AnimeHub startup sequence needs to load the catalogue before loading the user's profile.
// Requirements:
// - Create loadAnimeCatalogue(), which resolves with "Catalogue ready!".
// - Create loadUserProfile(), which resolves with "Profile ready!".
// - Use .then() to start loading the profile only after the catalogue has loaded.
// - Return the second Promise from the first .then() callback.
// - Use one .catch() to handle failures in the chain.
// Expected output:
// Catalogue ready!
// Profile ready!
// Important: Don't call both functions independently. The second operation must depend on the first one.

function loadAnimeCatalogue() {
    return new Promise((resolve, reject) => {
        resolve("Catalogue ready!");
    });
}

function loadUserProfile() {
    return new Promise((resolve, reject) => {
        resolve("Profile ready!");
    });
}

loadAnimeCatalogue().then((catalogueResult) => {

    console.log(catalogueResult);
    return loadUserProfile();

}).then((profileResult) => {

    console.log(profileResult);

}).catch(error => console.error(error));