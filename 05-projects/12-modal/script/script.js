let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closebtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
});

closebtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
        console.log(e.target);
    }
});
