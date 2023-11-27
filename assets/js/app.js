const baseEndpoint = 'https://api.github.com/users'; //agregue users
// const usersEndpoint = `${baseEndpoint}/users`;  no tiene sentido
const name1 = document.querySelector('.name'); // anadi un . para hacer referencia al atributo
//cambie el nombre de variables para que fueran legibles
const blog1 = document.querySelector('#blog');
const location1 = document.querySelector('.location');

async function displayUser(username) { // agregue async ppara que funcione con await
try{ //puse try y catch
  name1.textContent = 'cargando...'; 
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  name1.textContent = `${data.name}`;
  blog1.textContent = `${data.blog}`;
  location1.textContent = `${data.location}`; // cambie las comillas por bactips
} catch { (err) {
  handleError(err);       
}


}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError); 