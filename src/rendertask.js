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
        //event listener attached here, since attaching in index means 
        // that it is attached before the event exists, which causes problems
        deleteButton.addEventListener('click', () => {
            unrenderTask(deleteButton);
        });

        doneButton.addEventListener('click', (event) => {
            let parent = event.target.parentNode.parentNode.querySelector('.projDiv').classList.toggle("strikethrough");
        });
        doneButton.innerText = 'Completed';
        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttonsDiv');
        buttonsDiv.appendChild(deleteButton);
        buttonsDiv.appendChild(doneButton);
        mDiv.appendChild(buttonsDiv);
        tasks.appendChild(mDiv);
};


const unrenderTask = (clickedButton) => {
    let taskTab = clickedButton.parentNode.parentNode; 
    taskTab.remove();
};

export { renderTask, unrenderTask };


// // helpers.js
// import { isUrgent } from "./helpers";

// const createTaskElement = (newProjectObject) => {
//     const mDiv = document.createElement('div');
//     mDiv.classList.add('mDiv');

//     const projDiv = document.createElement('div');
//     projDiv.classList.add('task', 'projDiv');

//     const title = document.createElement('h3');
//     title.textContent = newProjectObject.name;
//     projDiv.appendChild(title);

//     const desc = document.createElement('p');
//     desc.textContent = newProjectObject.desc;
//     projDiv.appendChild(desc);

//     const priority = document.createElement('p');
//     priority.textContent = newProjectObject.priority;
//     priority.classList.add(isUrgent(newProjectObject) ? 'urgent' : 'normal');
//     projDiv.appendChild(priority);

//     mDiv.appendChild(projDiv);

//     const buttonsDiv = document.createElement('div');
//     buttonsDiv.classList.add('buttonsDiv');

//     const deleteButton = createButton('Delete', 'deleteButton', handleDelete);
//     const doneButton = createButton('Completed', 'doneButton', handleDone);

//     buttonsDiv.appendChild(deleteButton);
//     buttonsDiv.appendChild(doneButton);

//     mDiv.appendChild(buttonsDiv);

//     return mDiv;
// };

// const createButton = (text, className, clickHandler) => {
//     const button = document.createElement('button');
//     button.classList.add(className);
//     button.innerText = text;
//     button.addEventListener('click', clickHandler);
//     return button;
// };

// export { createTaskElement };

// // main.js
// import { createTaskElement } from "./helpers";

// const renderTask = (newProjectObject) => {
//     const tasks = document.querySelector("#tasks");
//     const taskElement = createTaskElement(newProjectObject);
//     tasks.appendChild(taskElement);
// };

// const unrenderTask = (clickedButton) => {
//     const taskTab = clickedButton.parentNode.parentNode;
//     taskTab.remove();
// };

// const handleDelete = () => {
//     unrenderTask(this);
// };

// const handleDone = (event) => {
//     const parent = event.target.parentNode.parentNode.querySelector('.projDiv');
//     parent.classList.add("strikethrough");
// };

// export { renderTask, unrenderTask };
