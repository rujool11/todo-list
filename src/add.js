import { parseFormAndMakeObject } from "./validationform";
import { renderTask } from "./rendertask";

const addProject = () => {
    let newProject = parseFormAndMakeObject();
    newProject.then((newProjectObject) => {
        renderTask(newProjectObject);
        return newProjectObject;
    }).catch((error) => {
        console.error(error);
        return null;
    });

};

export { addProject };