let saveBtn = document.getElementById("save");
saveBtn.onclick = function(){
    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;
    localStorage.setItem(key, value);
}