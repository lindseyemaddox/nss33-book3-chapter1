
const addNewLegoCreation = (creation) => {
  return fetch("http://localhost:8088/lego", {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(creation)
  });
};

export {addNewLegoCreation};