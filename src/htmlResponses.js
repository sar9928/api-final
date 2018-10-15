const fs = require('fs');  // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(index);

    console.dir(request.url);

    response.end();
};

const getCardBac = (request, response) => {
    var img = fs.readFileSync('./image/background.png');
    response.writeHead(200, {'Content-Type': 'image/png' });
    response.write(img);
    response.end();
}

const getLogo = (request, response) => {
    var img = fs.readFileSync('./image/logo.png');
    response.writeHead(200, {'Content-Type': 'image/png' });
    response.write(img);
    response.end();
}

const getDruidCard = (request, response) => {
    var img = fs.readFileSync('./image/druidCard.png');
    response.writeHead(200, {'Content-Type': 'image/png' });
    response.write(img);
    response.end();
}

const getQuestionMark = (request, response) => {
    var img = fs.readFileSync('./image/questionMark.png');
    response.writeHead(200, {'Content-Type': 'image/png' });
    response.write(img);
    response.end();
}

const getStartButton = (request, response) => {
    var img = fs.readFileSync('./image/startButton.png');
    response.writeHead(200, {'Content-Type': 'image/png' });
    response.write(img);
    response.end();
}

const getDruidCardBackground = (request, response) => {
    var img = fs.readFileSync('./image/druidCardBackground.png');
    response.writeHead(200, {'Content-Type': 'image/png' });
    response.write(img);
    response.end();
}

const getCSS = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/css' });
    response.write(css);
    response.end();
};

module.exports = {
    getIndex,
    getCSS,
    getCardBac,
    getLogo,
    getDruidCard,
    getQuestionMark,
    getStartButton,
    getDruidCardBackground,
};