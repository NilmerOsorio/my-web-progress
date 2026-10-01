let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "The only thing we have to fear is fear itself.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        person: "Mahatma Gandhi"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        person: "Robert Frost"
    },
    {
        quote: "The journey of a thousand miles begins with a single step.",
        person: "Lao Tzu"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        person: "Thomas Edison"
    },
    {
        quote: "Imagination is more important than knowledge.",
        person: "Albert Einstein"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "Whether you think you can or you think you can't, you're right.",
        person: "Henry Ford"
    }
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
