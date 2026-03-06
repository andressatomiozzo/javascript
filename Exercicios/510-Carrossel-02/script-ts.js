"use strict";
const track = document.querySelector("#track");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const dotsCOntainer = document.querySelector("#dots-container");
if (!track || !prevBtn || !nextBtn || !dotsCOntainer)
    throw new Error("Alguma variável não está ligada ao DOM");
