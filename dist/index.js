const burger = document.querySelector("#burger")
const nav = document.querySelector("nav")

burger.addEventListener("click", () => {
  nav.classList.toggle("hidden")
})
