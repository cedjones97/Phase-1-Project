document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) =>{
        
        wordSearch()
    })
})

function wordSearch(){
    let input = document.querySelector('#search').value
    //console.log(input)
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    .then(data => data.json())
    .then(words => console.log(words))
 }