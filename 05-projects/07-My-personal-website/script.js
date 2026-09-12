const button = document.getElementById('join-newsletter');

const email = document.getElementById('email');

const thanks = document.getElementById('joined');

button.addEventListener('click', function(){
    if (email.value === "") {
        alert("Please, enter your email.");
    }
    else {
       // alert(`Thanks for joining, ${email.value}!`);    
       thanks.textContent = `Thanks for joining, ${email.value}!`;   
    }
})

