function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto da Tainá sorrindo de óculos escuros, com blusa preta e dia ensolarado",
    )
  } else {
    img.setAttribute("src", "./assets/Avatar-Taina.png")
    img.setAttribute(
      "alt",
      "Foto da Tainá com óculos, camisa rosa e fundo branco",
    )
  }
}
