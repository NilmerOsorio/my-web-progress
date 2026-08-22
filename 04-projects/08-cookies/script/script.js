const picture = document.getElementById(`biscuit-picture`);

const biscuitShowingUp = document.getElementById(`biscuit`);

let state = true;

biscuitShowingUp.addEventListener(`click`, function () {

    if (state) {
        picture.innerHTML = `<img src="images/biscuit.png">`;
    }
    else {
        picture.innerHTML = ``;
    }

    state = !state;

})