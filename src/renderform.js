const renderForm = () => {
    let fullCover = document.createElement('div');
    fullCover.classList.add('fullcover');
    let formDiv = document.createElement('div');
    formDiv.classList.add('formDiv');
    formDiv.innerHTML = 
    `
    <form action="./dist/index.html"> 
    <label for="title"></label>
    <input type="text" id="title" name="title" required placeholder="Title">
    <br>
    <label for="description"></label>
    <input id="description" name="description"required placeholder="Description">
    <br>
    <label for="urgency"></label>
    <select id="urgency" name="urgency" required>
        <option value="urgent">Urgent</option>
        <option value="normal">Normal</option>
    </select>
    <br>
    <input type="button" name="submit" id="submitbutton">
    <br>
    </form>
    <button id='x'>x</button>
    `
    fullCover.appendChild(formDiv);
    document.querySelector('body').appendChild(fullCover);

};

const unrenderForm = () => {
    const fullCover = document.querySelector('.fullcover');
    fullCover.remove();
};

export { renderForm, unrenderForm };