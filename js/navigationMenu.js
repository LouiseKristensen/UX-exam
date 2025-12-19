// responsiv menu 
const openSidebarBtn = document.querySelector("#openSidebar");
const closeSidebarBtn = document.querySelector("#closeSidebar");
const sidebar = document.querySelector(".sidebar");

// open 
openSidebarBtn.addEventListener("click", () => {
  openSidebarBtn.setAttribute("aria-expanded", "true");
  sidebar.classList.add("active");

  closeSidebarBtn.focus();
});

// close 
closeSidebarBtn.addEventListener("click", () => {
  openSidebarBtn.setAttribute("aria-expanded", "false");
  sidebar.classList.remove("active");

  openSidebarBtn.focus();
});