function find_edit() {
    document.getElementById("surname").innerHTML = "<b>Popov</b>";
    document.getElementById("name").innerHTML = "<b>Stanislav</b>";
    document.getElementById("patronymic").innerHTML = "<b>Aleksandrovich</b>";
}
function back_edit() {
    document.getElementById("surname").innerHTML = "Попов";
    document.getElementById("name").innerHTML = "Станислав";
    document.getElementById("patronymic").innerHTML = "Александрович";
}
const node_for_click = document.getElementById("for_click");
node_for_click.addEventListener("click", find_edit);
const node_back_click = document.getElementById("back_click");
node_back_click.addEventListener("click", back_edit);
