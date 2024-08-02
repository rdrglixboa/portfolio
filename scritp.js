const hardskillTitulo = document.getElementById("hardskill-titulo");
const hardskillIcone = document.querySelectorAll(".hardskills__icones ul li");
const hardskillTexto = document.querySelectorAll(".hardskills__texto section");

console.log(hardskillIcone);
console.log(hardskillTexto);

hardskillTexto[0].classList.add("ativo");

function activeTab(index) {
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

