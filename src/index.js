
import { addProject } from "./add";
import { allClicked, normalClicked, urgentClicked } from "./sorting";
import { changeTheme } from "./theme";

document.querySelector("#theme").addEventListener('click', changeTheme); 

document.querySelector("#new").addEventListener('click', async (event) => {
    event.preventDefault();
    let newProject = await addProject();
});

document.querySelector('#all').addEventListener('click', allClicked);

document.querySelector('#urgent').addEventListener('click', urgentClicked);

document.querySelector('#normal').addEventListener('click', normalClicked);