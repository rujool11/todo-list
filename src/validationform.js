
import { renderForm, unrenderForm } from "./renderform";

function makeProject(name,desc,priority) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
}

const parseFormAndMakeObject = () => {
    renderForm();
    document.querySelector("#submit").addEventListener('click', () => {
        unrenderForm();
    })
};

export { parseFormAndMakeObject };