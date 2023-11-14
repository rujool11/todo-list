
import { addProject } from "./add";
import { changeTheme } from "./theme";
import { isUrgent } from "./helpers"; 
import events from "inquirer/lib/utils/events";

let urgentProjects = [];
let normalProjects = [];

document.querySelector("#theme").addEventListener('click', changeTheme); 

// document.querySelector("#new").addEventListener('click', () => {
//     let newProject = addProject();
//     if (isUrgent(newProject)) { urgentProjects.append(newProject); }
//     else { normalProjects.append(newProject); }
// });

document.querySelector("#new").addEventListener('click', async (event) => {
    event.preventDefault();
    try {
        let newProject = await addProject();
        if (isUrgent(newProject)) {
            urgentProjects.push(newProject);
        } else {
            normalProjects.push(newProject);
        }
    } catch (error) {
        console.error(error);
    }
});
