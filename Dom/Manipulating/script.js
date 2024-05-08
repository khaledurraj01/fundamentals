let menu = document.querySelector("#menu");

function CreateMenu(name) {
    let li = document.createElement("li");
    li.textContent = name;
    return li;
}
menu.appendChild(CreateMenu("khaled"));
menu.appendChild(CreateMenu("Joy "));
menu.appendChild(CreateMenu("Bijoy"));