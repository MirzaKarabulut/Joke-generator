const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#joke-btn');

  const generateJoke = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {  
        if (xhr.status === 200) {
          joke.innerHTML = JSON.parse(xhr.responseText).value;
        } else {
          joke.textContent = 'Something went wrong (Not funny!)' 
        }
      }
    }

   xhr.send();
  }

  jokeBtn.addEventListener('click', generateJoke);


