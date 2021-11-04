// fetch api with arrow function

const loadQuotes = ()=> {
 fetch('https://api.kanye.rest')
 .then(res => res.json())
 .then(data => displayQuotes(data));
}
// loadQuotes()

//call to another function 

const displayQuotes = data =>{
    console.log(data.quote);
    const quotesElement = document.getElementById('quote');
    quotesElement.innerText = data.quote ;
}

