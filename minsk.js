const addFavourites = document.querySelector(".add");

addFavourites.addEventListener("click", function (event) {
  let targetAdd = event.target.remove(".add");
  if (targetAdd) return targetAdd.classList.add("selectedAdd");
});
