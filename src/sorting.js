function allClicked() {
    const all = document.querySelectorAll('.mDiv');
    all.forEach((task) => {
        task.classList.remove('invisible');
    });
}

function normalClicked() {
    const urgent = document.querySelectorAll('.urgent');
    const normal = document.querySelectorAll('.normal');
    urgent.forEach((task) => {
        task.closest('.mDiv').classList.add('invisible');
    });
    normal.forEach((task) => {
        task.closest('.mDiv').classList.remove('invisible');
    });
}

function urgentClicked() {
    const urgent = document.querySelectorAll('.urgent');
    const normal = document.querySelectorAll('.normal');
    urgent.forEach((task) => {
        task.closest('.mDiv').classList.remove('invisible');
    });
    normal.forEach((task) => {
        task.closest('.mDiv').classList.add('invisible');
    });
}

export { allClicked,normalClicked,urgentClicked };