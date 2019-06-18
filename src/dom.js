let legoList = document.querySelector("#lego-list");

const getLegos = () => {
  fetch("http://localhost:8088/lego")
  .then( legoData => legoData.json())
  .then( legoData => {
    legoData.forEach( lego => {
      legoList.innerHTML += `<li>${lego.creator} made a Lego ${lego.creation} with ${lego.color} ${lego.line} bricks!</li>`;
    });
  });
};
getLegos();

export {getLegos};