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

app.get('/chocolates', async (req, res) => {
    try {
        const chocolates = await readFile();
        res.status(200).json(chocolates.chocolates);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.get('/chocolates/:id', async (req, res) => {
    try {
        const chocolates = await readFile();
        const chocolate = chocolates.chocolates.find(({ id }) => id === Number(req.params.id));
        res.status(200).json(chocolate);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
    try {
        const chocolates = await readFile();
        const chocolate = chocolates.brands.find(({ id }) => id === Number(req.params.brandId));
        res.status(200).json(chocolate);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = app;