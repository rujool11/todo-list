import { isUrgent } from "./helpers";

const renderTask = (newProjectObject) => {
    let tasks = document.querySelector("#tasks");

        let mDiv = document.createElement('div');
        mDiv.classList.add('mDiv');
        let projDiv = document.createElement('div');
        projDiv.classList.add('task'); 
        let title = document.createElement('h3');
        title.textContent = `${newProjectObject.name}`; 
        projDiv.appendChild(title);
        let desc = document.createElement('p');
        desc.textContent = `${newProjectObject.desc}`;
        projDiv.appendChild(desc);
        projDiv.classList.add('projDiv');

        let priority = document.createElement('p');
        priority.textContent = `${newProjectObject.priority}`;
        if (isUrgent(newProjectObject)){
            priority.classList.add('urgent');
        } else {
            priority.classList.add('normal');
        }
        projDiv.appendChild(priority);
        mDiv.appendChild(projDiv);
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        let doneButton = document.createElement('button');
        doneButton.classList.add('doneButton');
        deleteButton.innerText = 'Delete';
        doneButton.innerText = 'Completed';
        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttonsDiv');
        buttonsDiv.appendChild(deleteButton);
        buttonsDiv.appendChild(doneButton);
        mDiv.appendChild(buttonsDiv);
        tasks.appendChild(mDiv);
};


const unrenderTask = (newProjectObject) => {

};

export { renderTask, unrenderTask };