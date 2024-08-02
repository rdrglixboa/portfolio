const hardskillTitulo = document.querySelectorAll(".hardskills__item section");
const hardskillIcone = document.querySelectorAll(".hardskills__icones ul li");
const hardskillTexto = document.querySelectorAll(".hardskills__texto section");

console.log(hardskillTitulo)
console.log(hardskillIcone);
console.log(hardskillTexto);

hardskillTitulo[0].classList.add("ativo")
hardskillTexto[0].classList.add("ativo");

function activeTab(index) {

  hardskillIcone.forEach((section) => {
    section.classList.remove("ativo");
  });
  hardskillIcone[index].classList.add("ativo");

  hardskillTitulo.forEach((section) => {
    section.classList.remove("ativo");
  });
  hardskillTitulo[index].classList.add("ativo");

  hardskillTexto.forEach((section) => {
    section.classList.remove("ativo");
  });
  hardskillTexto[index].classList.add("ativo");
  
}



hardskillIcone.forEach((icone, index) => {
  icone.addEventListener("click", () => {
    activeTab(index);
  });
});

