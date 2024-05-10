let saveBtn = document.getElementById("save");
let getBtn = document.getElementById("get");

saveBtn.onclick = function(){
    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;
    localStorage.setItem(key, value);
}

getBtn.onclick = function(){
    let key2 = document.getElementById("key_get").value;
    let outvalue = localStorage.getItem(key2);
    console.log(outvalue);
}
