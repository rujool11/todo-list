const renderForm = () => {
    let fullCover = document.createElement('div');
    fullCover.classList.add('fullcover');
    let formDiv = document.createElement('div');
    formDiv.classList.add('formDiv');
    formDiv.innerHTML = 
    `
    <form action="submit_form.php" method="post">
    <label for="title"></label>
    <input type="text" id="title" name="title" required placeholder="title">
    <br>
    <label for="description"></label>
    <input id="description" name="description"required placeholder="description">
    <br>
    <label for="urgency"></label>
    <select id="urgency" name="urgency" required>
        <option value="urgent">Urgent</option>
        <option value="normal">Normal</option>
    </select>
    <br>
    <button id="submit">Submit</button>
    `
    fullCover.appendChild(formDiv);
    document.querySelector('body').appendChild(fullCover);

};

const unrenderForm = () => {

};

export { renderForm, unrenderForm };