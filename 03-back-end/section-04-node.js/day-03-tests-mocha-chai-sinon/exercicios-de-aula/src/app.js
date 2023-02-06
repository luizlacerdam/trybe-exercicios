const express = require('express');
const app = express();
app.use(express.json());

const fs = require('fs').promises;
const path = require('path');
const chocoPath = path.resolve(__dirname, './chocolates.json');

const readFile = async () => {
    try {
        const data = await fs.readFile(chocoPath);
        return JSON.parse(data);
    } catch (error) {
        console.error(`Arquivo não pôde ser lido: ${error}`);
    }
};

const writeFile = async () => {
    try {
        const data = await fs.writeFile(chocoPath);
        return JSON.parse(data);
    } catch (error) {
        console.error(`Arquivo não pôde ser lido: ${error}`);
    }
};

readFile().then((data) => console.log(data))
module.exports = app;