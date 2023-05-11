"use strict";

const anim = document.querySelector(".parallax");
const SPEED = 0.01;

function onCardMove(evt) {
  const a = -(evt.offsetY - anim.offsetHeight / 2) * SPEED;
  const b = (evt.offsetX - anim.offsetWidth / 2) * SPEED;

  anim.setAttribute("style", `transform: rotateX(${a}deg) rotateY(${b}deg)`);
}

function onCardOut() {
  anim.removeAttribute("style");
}

anim.addEventListener("mousemove", onCardMove);
anim.addEventListener("mouseout", onCardOut);
