let joke = document.getElementById('joke');
joke.style.fontSize = '20px';
joke.style.fontWeight = '300';
let gif = document.getElementById('gif');
const button = document.getElementById('button');

const option = {
    method: 'GET',
    headers: { 'X-Api-Key': 'JS1Sui9GPh6fENZQVjRbMg==sbKeBW0GplTxhVvy'}
};

async function Next(){
    try{
    joke.textContent = "Updating...";
    // if(joke.innerText=''){
    //    gif.innerHTML = <img src="Spinner-1.6s-190px.gif"/>
    // }
    // else{
    //     gif.innerHTML = <p>{data}</p>
    // }
  button.innerText = "Loading..";
  button.disabled = true;
  const response = await fetch('https://api.api-ninjas.com/v1/jokes?limit=1',option);
  const data = await response.json();
  joke.textContent = data[0].joke;
  button.disabled = false;
  button.innerText = "Tell Me A New Joke"
    }
    catch(error){
         joke.textContent = 'There is Some Error please Try Again Later'
         joke.style.color = "red";  
    }
  }
 
