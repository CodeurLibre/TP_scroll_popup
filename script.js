// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

//? -------------------------------------

//! Scrool event
let lastScroll = 0;
window.addEventListener("scroll", () => {
  var currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    navbar.style.height = "60px";
  } else {
    navbar.style.height = "90px";
  }
  lastScroll = currentScroll;

  if (currentScroll >= 450) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0)";
  }
  if (currentScroll >= 1220) {
    popup.classList.add("affichePopup");
  }
});

//! Click event
closeBtn.addEventListener("click", () => {
  console.log("Close");
  popup.style.transform = "translateX(600px)";
  popup.style.transition = "0.6s ease-out";
  //   transform: translateX(400px);
});
