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
    let h3 = document.createElement('h3')
    h3.innerText = _word.word.toUpperCase().charAt(0) + _word.word.slice(1).toLowerCase()
    const wordList = document.querySelector('#wordList')
    wordList.append(h3, newDefinition, saveBtn, deleteBtn)
    deleteBtn.addEventListener('click', ()=>{
        h3.remove() + newDefinition.remove() + saveBtn.remove() + deleteBtn.remove()
    })
}

function newBtn(_word){
     let header = document.createElement('h4')
     header.innerText = _word.word.toUpperCase()
     let def = document.createElement('li')
     def.innerText = _word.meanings[0].definitions[0].definition
     let hoverBtn = document.createElement('button')
     let audio = document.createElement('audio')
     audio.src = _word.phonetics[0].audio
     hoverBtn.addEventListener('mouseover', ()=>{
        audio.play()
     })
     const wordContainer = document.querySelector('#wordContainer')
     hoverBtn.append(header)
     wordContainer.append(hoverBtn)
}