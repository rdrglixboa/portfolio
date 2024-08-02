const hardskillTitulo = document.getElementById("hardskill-titulo");
const hardskillIcone = document.querySelectorAll("#hardskill-icone");
const hardskillTexto = document.getElementById("hardskill-texto");

console.log(hardskillIcone);

hardskillIcone[0].classList.add("ativo");

function activeTab() {
  console.log("icone clicado");
}

hardskillIcone.forEach((icone, index) => {
  icone.addEventListener("click", () => {
    activeTab(index);
  });
});

// function activeTab(index) {
//   tabContent.forEach((icone) => {
//     icone.classList.remove("ativo");
//   });
//   tabContent[index].classList.add("ativo");
// }

// hardskillIcone.forEach((icone) => {
//   icone.addEventListener("click", () => {
//     activeTab(index);
//   });
// });

// activeTab();
