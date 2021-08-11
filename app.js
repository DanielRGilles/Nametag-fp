// grab element ids
const userInput = document.getElementById('user-input-space')


const userButton = document.getElementById('btn-click')


const newName = document.getElementById('new-name')


// create event listener

userButton.addEventListener('click', () => {
// perform an action on click

newName.textContent = userInput.value;
    
});



