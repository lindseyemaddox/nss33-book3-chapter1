import {addNewLegoCreation} from "./add.js";
import {getLegos} from "./dom.js";

document.querySelector(".btn").addEventListener("click", () => {
  let creator = document.querySelector("#lego__creator").value;
  let color = document.querySelector("#lego__color").value;
  let line = document.querySelector(".lego__line:checked").value;
  let creation = document.querySelector("#lego__creation").value;
  let newLego = buildLegoObj(creator, color, line, creation);
  addNewLegoCreation(newLego)
  .then( data => data.json())
  .then( dataJS => {
    legoList.innerHTML = "";
    getLegos(dataJS);
  });
});

const buildLegoObj = (creator, color, line, creation) => {
  return ({
    creator,
    color,
    line,
    creation
  });
};
