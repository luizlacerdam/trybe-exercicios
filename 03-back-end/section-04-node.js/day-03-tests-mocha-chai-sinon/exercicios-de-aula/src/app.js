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

app.get('/chocolates/total', async (req, res) => {
    try {
        const chocolates = await readFile();
        res.status(200).json({ totalChocolates: chocolates.chocolates.length });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});
app.get('/chocolates/search', async (req, res) => {
    try {
        const { name } = req.query;
        const chocolates = await readFile();
        const busca = chocolates.chocolates.filter((chocolate) => chocolate.name
            .toLowerCase()
            .includes(name.toLowerCase()));
        res.status(busca.length === 0 ? 404 : 200)
            .json(busca);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.get('/chocolates/:id', async (req, res) => {
    try {
        const chocolates = await readFile();
        const chocolate = chocolates.chocolates.find(({ id }) => id === Number(req.params.id));
        if (!chocolate) {
            res.status(404).send({ message: 'Chocolate not found' });
        }
        res.status(200).json(chocolate);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
    try {
        const chocolates = await readFile();
        const chocolate = chocolates.chocolates.filter(({ brandId }) => brandId === Number(req.params.brandId));
        // if (!chocolate) {
        //     res.status(404).send('Brand not found');
        // }
        res.status(200).json(chocolate);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});
module.exports = app;