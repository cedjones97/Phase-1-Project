document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        wordSearch()
    })
})

function wordSearch(){
    let input = document.querySelector('#search').value
    //console.log(input)
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    .then(data => data.json())
    .then(words => words.forEach(word => renderWords(word)))
 }

 function renderWords(_word){
    let newDefinition = document.createElement('li')
    newDefinition.innerText = _word.meanings[0].definitions[0].definition
    let saveBtn = document.createElement('button')
    saveBtn.id = 'save'
    saveBtn.innerText = 'save'
    saveBtn.addEventListener('click', ()=>{
        h3.remove() + newDefinition.remove() + saveBtn.remove() + deleteBtn.remove()
        newBtn(_word)
    })
    let deleteBtn = document.createElement('button')
    deleteBtn.id = 'delete'
    deleteBtn.innerText = 'delete'
    
 }