import { parseFormAndMakeObject } from "./validationform";
import { isUrgent } from "./helpers";

const addProject = () => {
    let newProject = parseFormAndMakeObject();
    newProject.then((newProjectObject) => {
        let tasks = document.querySelector("#tasks");

        let projDiv = document.createElement('div');
        projDiv.classList.add('task'); 
        let title = document.createElement('h1');
        title.textContent = `${newProjectObject.name}`; 
        projDiv.appendChild(title);
        let desc = document.createElement('h2');
        desc.textContent = `${newProjectObject.desc}`;
        projDiv.appendChild(desc);

        let priority = document.createElement('h2');
        priority.textContent = `${newProjectObject.priority}`;
        if (isUrgent(newProjectObject)){
            priority.classList.add('red');
        } else {
            priority.classList.add('green');
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