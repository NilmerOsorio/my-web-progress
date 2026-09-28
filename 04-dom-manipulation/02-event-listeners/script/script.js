const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

console.log(hiddenContent);

revealBtn.addEventListener('click', 
    function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn');
    }
    else{
        hiddenContent.classList.add('reveal-btn');
    }
});