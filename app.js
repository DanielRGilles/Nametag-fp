// grab element ids
const userInput = document.getElementById('user-input-space')


const userButton = document.getElementById('btn-click')


const newName = document.getElementById('new-name')


// create event listener

userButton.addEventListener('click', () => {
newName.textContent = userInput.value;
    
})

// perform an action on click
