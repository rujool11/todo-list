import { parseFormAndMakeObject } from "./validationform";


const addProject = () => {
    let newProject = parseFormAndMakeObject();
    console.log(newProject);
    return newProject;

};

export { addProject };