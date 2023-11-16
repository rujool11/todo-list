import { createTaskElement, isUrgent } from "./helpers";


const renderTask = (newProjectObject) => {
    const tasks = document.querySelector("#tasks"); 
    const taskElement = createTaskElement(newProjectObject);
    tasks.appendChild(taskElement);
};

const unrenderTask = (clickedButton) => {
    const taskTab = clickedButton.parentNode.parentNode;
    taskTab.remove();
}

export { renderTask, unrenderTask };

