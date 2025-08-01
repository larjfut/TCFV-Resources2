import { setupSearch } from "./search.js"

async function loadNav() {
  const placeholder = document.getElementById("nav-placeholder")
  if (!placeholder) return
  const res = await fetch("navbar.html")
  placeholder.innerHTML = await res.text()

  const toggle = document.getElementById("nav-toggle")
  const menu = document.getElementById("nav-menu")
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("hidden")
    })
  }

  const input = document.getElementById("site-search")
  const results = document.getElementById("search-results")
  setupSearch(input, results)
}

document.addEventListener("DOMContentLoaded", loadNav)
