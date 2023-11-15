import { isUrgent } from "./helpers";

const renderTask = (newProjectObject) => {
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
};


const unrenderTask = (newProjectObject) => {

};

export { renderTask, unrenderTask };