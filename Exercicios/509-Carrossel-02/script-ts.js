"use strict";
const track = document.querySelector(".track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots-container");
if (!track || !prevBtn || !nextBtn || !dotsContainer)
    throw new Error("Algum elemento não está ligado ao DOM");
let indexAtual = 0;
const indexTotal = Array.from(track.children);
