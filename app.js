const frase = document.getElementById("frase")

axios.get('https://api.chucknorris.io/jokes/random')
  .then(response => {
    console.log(response.data);
    frase.textContent = response.data.value;
  })
  .catch(error => {
    console.error(error);
  });
  
const botonRefrescar = document.getElementById('botonRefrescar');

botonRefrescar.addEventListener('click', function() {
  location.reload();
});
