const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");

  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) closeAllSubMenus();
  // a questa funzione viene passato l'elemento button tramite la keywork 'this'.
  // tramite il bottone si può accedere all'elemento successivo (il sub-menu).
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");
  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.toggle("rotate");
  });
}
