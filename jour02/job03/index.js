function addOne() {
  const btn = document.querySelector("#button");
  const compteur = document.getElementById("compteur");
  let i = 0;

  btn.addEventListener("click", () => {
      
    i++;
    compteur.innerHTML = i;
  });
}

addOne();