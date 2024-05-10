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

/*
localStorage functions -

setItem(key, value) - This saves the key-value data in the browser. example
setItem("hello", "world") - in the browser this data will be saved as hello:world

getItem(key) - This returns the data that is on the specified key. example
getItem("hello") - world

removeItem(key) - This removes the a specified data on the browser. example
removeItem("hello") - This removes the hello data which is saved in the browser

*/