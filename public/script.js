const enterButton = document.getElementById("enter");
const input = document.getElementById("inputText");
const tableSection = document.getElementById("table-section");
const table = document.getElementById("table");
const tbody = document.getElementById("body-table");
const message = document.getElementById("message");

enterButton.addEventListener("click", (event) => {
  //Implementar lógica del button submit
  let inputUsuario = parseInt(input.value);
  getresults(inputUsuario);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.data;
  console.log("data from back", data);
  console.log("Entre a getresults");
  renderParejas(data);
}

const renderParejas = (data) => {
  let id = 0;
  data.forEach((pareja) => {
    const tr = document.createElement("tr");
    tr.innerHTML = renderPareja(++id, pareja);
    console.log(id, tr);
    tbody.appendChild(tr);
  });
};

const renderPareja = (id, pareja) => {
  return `
      <td>${id}</td>
      <td>${pareja[1].first_name} ${pareja[1].last_name}</td>
      <td>${pareja[0].first_name} ${pareja[0].last_name}</td>`;
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
