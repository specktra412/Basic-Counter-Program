const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const labelbtn = document.getElementById("labelbtn");

let count = 0;

decreasebtn.onclick = function() {
    count--;
    labelbtn.textContent = count

}

resetbtn.onclick = function() {
    count = 0;
    labelbtn.textContent = count
}

increasebtn.onclick = function() {
    count++;
    labelbtn.textContent = count
}