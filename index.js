// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.chucknorris.io/jokes/random');



// const getJokesOnSubmit  = (e) => {
//   e.preventDefault();
//   document.querySelector('#joke-btn');
//   
// };




// xhr.onreadystatechange = function() {
//   if (this.readyState === 4 && this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     const div = document.querySelector('#joke');
//     div.textContent = `${data.value}`;
    
//   };
// };

// xhr.send();

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = 'Something went wrong (Not Funny)'
      }
    }
  }
  xhr.send();
};

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);