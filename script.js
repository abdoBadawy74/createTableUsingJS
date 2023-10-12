let rowsInput = document.getElementById("rows");

let colsInput = document.getElementById("cols");

let btn = document.querySelector("button");

btn.addEventListener("click", createTable);

function createTable() {
  let body = document.body;
  let table = document.createElement("table");
  table.style.cssText = "border:1px solid #000";

  for (let i = 0; i < +(rowsInput.value); i++) {
    let tr = document.createElement("tr");

    table.appendChild(tr);

    for (let j = 0; j < +(colsInput.value); j++) {
      let td = document.createElement("td");
      td.style.cssText = "border:1px solid #000;padding :5px";

      let txt = document.createTextNode("item");

      td.appendChild(txt);
      tr.appendChild(td);
    }
  }
  body.appendChild(table);
}
