const API = "https://api.github.com/users/Antonio-Carlos-Leite";

const userGitHub = fetch(API)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("fim da requisição"))

console.log();
