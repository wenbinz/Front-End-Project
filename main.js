const person1 = document.getElementById("person-1");
const person2 = document.getElementById("person-2");
const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");

prev[0].addEventListener("click", person1Page);
next[0].addEventListener("click", person2Page);
prev[1].addEventListener("click", person1Page);
next[1].addEventListener("click", person2Page);

function person1Page() {
  person1.style.order = 1;
  person2.style.order = 2;
  person1.style.display = "flex";
  person2.style.display = "none";
}

function person2Page() {
  person1.style.order = 2;
  person2.style.order = 1;
  person1.style.display = "none";
  person2.style.display = "flex";
}
