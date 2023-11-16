import { unrenderTask } from "./rendertask";

const isUrgent = (anyProject) => {
    return (anyProject.priority === 'urgent');
}

function createButton(text,className,clickHandler) {
    let button = document.createElement('button');
    button.innerText = text;
    button.classList.add(className);
    button.addEventListener('click',clickHandler); 
    return button;
}

function handleDone() {
    let projDiv = this.parentNode.parentNode.querySelector('.projDiv');
    projDiv.classList.toggle('strikethrough');
}

function handleDelete () { 
    unrenderTask(this);
}

const createTaskElement = (newProjectObject) => {

    const mDiv = document.createElement('div');
    mDiv.classList.add('mDiv');

    const projDiv = document.createElement('div');
    projDiv.classList.add('task','projDiv');

    const title = document.createElement('h3');
    const desc = document.createElement('p');
    const priority = document.createElement('p');

    title.textContent = `${newProjectObject.name}`;
    desc.textContent = `${newProjectObject.desc}`;
    priority.textContent = `${newProjectObject.priority}`;

    if (isUrgent(newProjectObject)) { priority.classList.add('urgent');}
    else { priority.classList.add('normal')};

    projDiv.appendChild(title);
    projDiv.appendChild(desc);
    projDiv.appendChild(priority);

    const doneButton = createButton('Completed','doneButton',handleDone);
    const deleteButton = createButton('Delete','deleteButton',handleDelete);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttonsDiv');

    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(doneButton);

    mDiv.appendChild(projDiv);
    mDiv.appendChild(buttonsDiv);

    return mDiv;

}

export { isUrgent, createTaskElement };