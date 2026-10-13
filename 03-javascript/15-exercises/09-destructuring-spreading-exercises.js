// 1. Use destructuring to extract the first two elements of an array.

console.log("--Exercise #1--");

let animes = ["Bleach", "Tokyo Ghoul", "Fire Force"];
console.log(animes);
console.log();

let [firstAnime, secondAnime] = animes;

console.log(`First Anime -- ${firstAnime}`);
console.log(`Second Anime -- ${secondAnime}`);

console.log();

// 2. Use destructuring in an array and assign a default value to a variable.

console.log("--Exercise #2--");

let videogames = ["Forza Horizon", "Halo", "Mortal Kombat"];
console.log(videogames);
console.log();

let [firstVideogame, secondVideogame, thirdVideogame, fourthVideogame = "WatchDogs"] = videogames;

console.log(`First Videogame -- ${firstVideogame}`);
console.log(`Second Videogame -- ${secondVideogame}`);
console.log(`Third Videogame --  ${thirdVideogame}`);
console.log(`Fourth Videogame (by default) --  ${fourthVideogame}`);

console.log();

// 3. Use destructuring to extract two properties from an object.

console.log("--Exercise #3--");

let person = {
    name: "Giovanny",
    age: "24",
    alias: "GioDev",
    walk: function () {
        console.log("Walking ...");
    }
};

console.log(person);
console.log();

let { name, age } = person;

console.log(`Extracted first value -- ${name}`);
console.log(`Extracted second value -- ${age}`);

console.log();

// 4. Use destructuring to extract two properties from an object and assign them
//    to new variables with different names.

console.log("--Exercise #4--");

let person2 = {
    name: "Giovanny",
    age: "24",
    alias: "GioDev",
    walk: function () {
        console.log("Walking ...");
    },
    job: {
        name: "Software Developer",
        exp: 2,
        work: function () {
            console.log(` This person with ${this.exp} years of experience is working ...`);
        }
    }
};

console.log(person2);
console.log();

let { name: userName, alias: pseudonym } = person2;

console.log(`User Name -- ${userName}`);
console.log(`Pseudonym -- ${pseudonym}`);

console.log();

// 5. Use destructuring to extract two properties from an nested object.

console.log("--Exercise #5--");

let user = {
    id: 42,
    name: "Alex",
    isOnline: true,
    profile: {
        bio: "Frontend Dev",
        address: {
            city: "Seattle",
            zip: "98101"
        }
    },
    skills: ["JS", "React", "CSS"],
    settings: {
        theme: "dark",
        notifications: {
            email: true,
            push: false
        }
    }
};

console.log(user);
console.log();

let { settings: { theme: background }, skills: [, library] } = user;

console.log(`Background -- ${background}`);
console.log(`Technology -- ${library}`);

console.log();

// 6. Use spreading to combine two arrays into a new one.

console.log("--Exercise #6--");

animes = ["Bleach", "Tokyo Ghoul", "Fire Force"];
videogames = ["Forza Horizon", "Halo", "Mortal Kombat"];

console.log(animes);
console.log(videogames);
console.log();

let animesAndVideogames = [...animes, ...videogames];

console.log("Animes and Videogames:");
console.log(animesAndVideogames);

console.log();

// 7. Use spreading to create a copy of an array.

console.log("--Exercise #7--");

animes = ["Bleach", "Tokyo Ghoul", "Fire Force"];
console.log(animes);
console.log();

let copyArray = [...animes];

console.log("Copy of the Array:");
console.log(copyArray);

console.log();

// 8. Use spreading to combine two objects into a new one.

console.log("--Exercise #8--");

let operator = {
    name: 'Alex',
    role: 'Dev',
    settings: {
        notifications: true
    }
};

console.log("Object operator:");
console.log(operator);
console.log();

let updates = {
    role: 'Lead Dev',
    settings: {
        theme: 'dark'
    }
};

console.log("Object updates:");
console.log(updates);
console.log();

let newObject = { ...operator, ...operator.settings, ...updates, ...updates.settings };

console.log("New Object:");
console.log(newObject);

console.log();

// 9. Use spreading to create a copy of an object.

console.log("--Exercise #9--");

operator = {
    name: 'Alex',
    role: 'Dev',
    settings: {
        notifications: true
    }
};

console.log("Object operator:");
console.log(operator);
console.log();

console.log("Copy of the Object:");
let copyObject = {...operator};

console.log();

// 10. Combine destructuring and spreading.

console.log("--Exercise #10--");
console.log();

console.log("--Situation A--");
console.log();

let costumer = {
  name: "Charles",
  age: 25,
  country: "United Kingdom",
  email: "carlos@example.com"
};

console.log("Object costumer:");
console.log(costumer);
console.log();

let {name: client, ...rest} = costumer


console.log(`Costumer's name -- ${client}`);
console.log(`The rest:`);
console.log(rest);

console.log();

console.log("--Situation B--");
console.log();

let product = {
  id: 101,
  title: "Headphones",
  price: 80,
  tags: ["audio", "tech"]
};

console.log("Object product:");
console.log(product);
console.log();

let {price: cost, tags: labels} = product;

console.log(`Price (cost) -- ${cost}`);
console.log(`Tags (labels) -- ${labels}`);
console.log();

let updatedTags = [...labels, "clearance"];
console.log(`Updated Tags -- [${updatedTags}]`);
console.log();

let featuredProduct = {
    price: cost-15,
    tags: updatedTags
}

console.log("New Object -- featuredProduct");
console.log(featuredProduct);




