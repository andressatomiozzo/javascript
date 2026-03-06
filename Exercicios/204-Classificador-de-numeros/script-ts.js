"use strict";
const numeroInput = document.querySelector("#num");
const addBtn = document.querySelector("#addBtn");
const arrayContainer = document.querySelector("#array");
const calcBtn = document.querySelector("#calcBtn");
const resetBtn = document.querySelector("#resetBtn");
if (!numeroInput || !addBtn || !arrayContainer || !calcBtn || !resetBtn)
    throw new Error("ALgum elemento não está ligado ao DOM");
