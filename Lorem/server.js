require('dotenv/config');
const express = require('express');
const cors = require('cors');
const faker = require('@faker-js/faker').default;

const app = express();
const port = process.env.PORT || 80;

app.use(cors());

function getFn() {
    const fns = Object.values(faker.lorem).filter(f => typeof f === 'function');
    const randomFn = fns[Math.floor(Math.random() * fns.length)];

    return randomFn;
}

app.get('*', (_, res) => {
    const fn = getFn();
    return res.json({
        data: fn()
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));