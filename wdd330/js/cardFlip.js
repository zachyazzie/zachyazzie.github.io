

const card = document.querySelector(".card__inner");
console.log(card)
card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
    console.log('clicked')
});