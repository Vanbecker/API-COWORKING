// const express = require('express');
// const coworkings = require('./mock-coworkings');
// const app = express();


// const port = 3000;



// respond with "hello world" when a GET request is made to the homepage
// app.get("/api/coworkings/:id", (req, res) => {
//     console.log(parseInt(req.params.id), coworkings[0].id)
//     res.send(`affichage coworking numéro : ${coworkings[3].name}`);
// });

// app.listen(port, () => console.log(
//     `Notre application Node est démarrée sur : http://localhost:${port}`)
// )

/*
    Pourquoi utilise t-on require et non pas import ?
    require() est une fonction native propre à NodeJS,
    elle permet de charger un module entier
*/



///////////////// FONCTIONNE /////////////////


// const express = require('express');
// const coworkings = require('./mock-coworkings');
// const app = express();

// const port = 3000;

// app.get("/api/coworkings/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const coworking = coworkings.find(cow => cow.id === id);

//     if (coworking) {
//         res.send(`Affichage nom coworking: ${coworking.name}`);
//     } else {
//         res.status(404).send("Coworking non trouvé");
//     }
// });

// app.listen(port, () => {
//     console.log(`Notre application Node est démarrée sur : http://localhost:${port}`);
// });

///////////////RÉTRÉCIS//////////

// const express = require('express');
// const coworkings = require('./mock-coworkings');
// const app = express();
// const port = 3000;

// app.get("/api/coworkings/:id", (req, res) => {
//     const id = parseInt(req.params.id);
//     const coworking = coworkings.find(cow => cow.id === id);
//     res.send(coworking ? `Affichage nom coworking : ${coworking.name}` : "Coworking non trouvé");
// });

// app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`));

/////AFFICHAGE GLOBAL/////
// const express = require('express');
// const coworkings = require('./mock-coworkings');
// const app = express();
// const port = 3000;

// app.get("/api/coworkings", (req, res) => {
//     res.send(coworkings);
// });

// app.listen(port, () => {
//     console.log(`Notre application Node est démarrée sur : http://localhost:${port}`);
// });


////////AFFICHAGE CROISSANT GLOBAL/////

// const express = require('express');
// const coworkings = require('./mock-coworkings');
// const app = express();
// const port = 3000;

// app.get("/api/coworkings", (req, res) => {
//     const sortedCoworkings = coworkings.slice().sort((a, b) => a.superficy - b.superficy);
//     res.send(sortedCoworkings);
// });

// app.listen(port, () => {
//     console.log(`Notre application Node est démarrée sur : http://localhost:${port}`);
// });


////////////////////////////////

// const express = require('express');
// const coworkings = require('./mock-coworkings');
// const app = express();
// const port = 3000;

// app.get("/api/coworkings", (req, res) => {
//     const criterium = req.query.criterium || 'superficy'
//     const orderBy = req.query.oderby || 'ASC'
//     res.json(coworkings)
// })
// app.listen(port, () => {
//     console.log('Example app listening on port ${port}')
// })

const express = require('express');
const coworkings = require('./mock-coworkings');
const app = express();
const port = 3000;

app.get("/api/coworkings", (req, res) => {
    let { criterium, orderBy } = req.query;
    criterium = criterium || 'superficy';
    orderBy = orderBy || 'ASC';

    let sortedCoworkings = coworkings.slice();

    if (criterium === 'superficy') {
        sortedCoworkings.sort((a, b) => {
            if (orderBy === 'ASC') {
                return a.superficy - b.superficy;
            } else {
                return b.superficy - a.superficy;
            }
        });
    }

    res.json(sortedCoworkings);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


