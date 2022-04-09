document.getElementById('memeScroll')
function fetchMemes(){
  fetch('https://meme-api.herokuapp.com/gimme')
.then(response => response.json())
.then(data => {
    document.getElementById('memeScroll').src=data.url; // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))  
}
fetch('https://meme-api.herokuapp.com/gimme')
.then(response => response.json())
.then(data => {
    document.getElementById('memeScroll').src=data.url; // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))  