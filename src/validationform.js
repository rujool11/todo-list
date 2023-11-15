
import { renderForm, unrenderForm } from "./renderform";

function Project(name,desc,priority) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
}

let newProject;



const parseFormAndMakeObject = () => {
    return new Promise((resolve, reject) => {
        renderForm();

        document.querySelector("#submitbutton").addEventListener('click', () => {
            let title = document.getElementById("title").value;
            let priority = document.getElementById("priority").value;
            let description = document.getElementById("description").value;
            let newProject = new Project(title, description, priority);
            unrenderForm();
            resolve(newProject);
        });

        document.querySelector("#x").addEventListener('click', () => {
            unrenderForm();
            reject(new Error("Form submission canceled."));
        });
    });
};

export { parseFormAndMakeObject };
