const btn = document.querySelector('.create-btn')

btn.addEventListener('click',()=>{
    const notesContainer = document.querySelector('.notes-container')

    // Create note card
    const noteCard = document.createElement('div')
    noteCard.classList.add('note-card')


    // Add textarea inside note card
    const noteInput = document.createElement('textarea');
    noteInput.classList.add('form-control', 'note-input');
    noteInput.setAttribute('placeholder', 'Enter your note here...')
    noteInput.setAttribute('rows', '3')

    // Add delete button inside note card
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    noteCard.appendChild(deleteBtn)


    // Append the noteInput to the noteCard
    noteCard.appendChild(noteInput);

    // Append the noteCard to the notesContainer
    notesContainer.appendChild(noteCard);


    deleteBtn.addEventListener('click',()=>{
        notesContainer.removeChild(noteCard)
    })
})
