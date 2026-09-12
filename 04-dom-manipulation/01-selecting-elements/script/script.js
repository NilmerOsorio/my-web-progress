// DOM Manipulation

//GetElementById()

// const title = document.getElementById('main-heading');

// console.log(title);


//GetElementByClassName()

// const listItem = document.getElementsByClassName('list-items');

// console.log(listItem);


//GetElementByTagName()

// const listItem = document.getElementsByTagName('li');

// console.log(listItem);


//querySelector()

// const container = document.querySelector('div');

// console.log(container);


//querySelectorAll()

// const container = document.querySelectorAll('div');

// console.log(container);



//Styling Elements

// const title = document.querySelector('#main-heading');

// title.style.webkitTextFillColor = 'white';

// console.log(title);


// const listItems = document.querySelectorAll('.list-items');

// for(i=0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '2rem';
// }

// Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements

ul.append(li)

//Modifying the text

li.innerText = 'Jujutsu Kaisen';

//Modifying Attributies & Classes

li.classList.add('list-items');
// li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));

// Remove Elements

li.remove();