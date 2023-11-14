
import { addProject } from "./add";
import { changeTheme } from "./theme";
import { isUrgent } from "./helpers"; 

let urgentProjects = [];
let normalProjects = [];

document.querySelector("#theme").addEventListener('click', changeTheme); 

document.querySelector("#new").addEventListener('click', () => {
    let newProject = addProject();
    if (isUrgent(newProject)) { urgentProjects.append(newProject); }
    else { normalProjects.append(newProject); }
});