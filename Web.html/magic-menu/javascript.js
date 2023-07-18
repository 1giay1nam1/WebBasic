const btnToggle = document.getElementsByClassName("toggle")[0];
btnToggle.onclick = function () {
  const lists = document.getElementsByTagName("li");

  if (btnToggle.className.includes("active")) {
    btnToggle.className = "toggle";
  } else {
    btnToggle.className = "toggle active";
  }
};
const list = document.querySelectorAll('li');
function activeLink(){
  list.forEach((item) =>
  item.classList.remove('active'));
  this.classList.add('active')
}
list.forEach((item) =>
item.addEventListener('click',activeLink))