// responsiv menu 
const openSidebarBtn = document.querySelector("#openSidebar");
const closeSidebarBtn = document.querySelector("#closeSidebar");
const sidebar = document.querySelector(".sidebar");

openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});