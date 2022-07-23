/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({ message: 'alive' });
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});

app.get('/explorers', async (req, res) => {
    const allExplorers = await prisma.explorer.findMany({});
    res.json(allExplorers);
})