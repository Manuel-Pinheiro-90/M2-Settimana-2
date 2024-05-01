const bottoneR = document.getElementById("calcolo-viaggi");

bottoneR.addEventListener("click", function () {
  const tuttiViaggi = document.querySelectorAll(".card");

  var Numviaggi = tuttiViaggi.length;

  alert("Ricorda che offriamo fino a " + Numviaggi + " mete diverse.");
});

// 1) trova tutte le card welcome summer
const allTheWelcomeSummerCards =
  document.getElementsByClassName("welcome-summer");
// 2) per ognuna delle card...
for (let i = 0; i < allTheWelcomeSummerCards.length; i++) {
  // assegno ad ogni card trovata position-relative
  allTheWelcomeSummerCards[i].classList.add("position-relative");
  // ...genero un badge di bootstrap
  // <span class="badge text-bg-danger">HOT</span>
  // genero uno span vuoto
  const hotBadge = document.createElement("span"); // <span></span>
  // assegno le classi CSS
  hotBadge.classList.add(
    "badge",
    "text-bg-danger",
    "position-absolute",
    "top-0",
    "end-0"
  ); // <span class="badge text-bg-danger position-absolute top-0 end-100"></span>
  // inserisco al suo interno la parola "HOT"
  hotBadge.innerText = "HOT";
  // manca da appendere il badge a
  // manca da appendere il badge alla card di turno
  allTheWelcomeSummerCards[i].appendChild(hotBadge);
}
