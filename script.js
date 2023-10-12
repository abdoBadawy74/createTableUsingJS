let body = document.body;

body.style.cssText= "background-color:#333;"

let myDiv = document.querySelector("div");

myDiv.style.cssText = "position:absolute; top:20%; left:50%; transform:translate(-50%,-50%);display:flex;flex-direction:column;gap:10px;align-items:center;"

let rowsInput = document.getElementById("rows");

let colsInput = document.getElementById("cols");

rowsInput.style.cssText = colsInput.style.cssText = "padding:5px 10px; background-color:#F2ECFF; border:1px solid #eee; outline:none; border-radius:5px"

let btn = document.querySelector("button");

btn.style.cssText  = "max-width:120px; background-color:#00C896; padding:5px; border: 1px solid #00c896;border-radius:5px;color:white"

btn.addEventListener("click", createTable);

function createTable() {
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
  table.style.cssText = "position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); border:1px solid #000; background-color:white;"
  
  body.appendChild(table);

}
