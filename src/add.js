import { parseFormAndMakeObject } from "./validationform";
import { isUrgent } from "./helpers";

const addProject = () => {
    let newProject = parseFormAndMakeObject();
    newProject.then((newProjectObject) => {
        let tasks = document.querySelector("#tasks");

        let projDiv = document.createElement('div');
        projDiv.classList.add('task'); 
        let title = document.createElement('h3');
        title.textContent = `${newProjectObject.name}`; 
        projDiv.appendChild(title);
        let desc = document.createElement('p');
        desc.textContent = `${newProjectObject.desc}`;
        projDiv.appendChild(desc);

        let priority = document.createElement('p');
        priority.textContent = `${newProjectObject.priority}`;
        if (isUrgent(newProjectObject)){
            priority.classList.add('urgent');
        } else {
            priority.classList.add('normal');
        }
        projDiv.appendChild(priority);
        tasks.appendChild(projDiv);
        return newProjectObject;
    }).catch((error) => {
        console.error(error);
        return null;
    });

};

export { addProject };