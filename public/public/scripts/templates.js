const templates = {
    getJojoCard: ({
        name, img
    }) => /*html*/`
    <span>${name}</span>
    <img src=${img} alt=${name}/>
    `
};

export default templates;