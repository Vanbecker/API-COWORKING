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

///



//le type de données :
app.use(express.json())

//////

app.get("/api/coworkings/:id", (req, res) => {
    let targetCoworking = coworkings.find(el => el.id === parseInt(req.params.id))
    if (targetCoworking) {
        return res.json({ message: `L'élément ayant pour id : ${targetCoworking.id} a bien été récupéré`, data: targetCoworking })
    } else {

        return res.json({ message: `L'élément ayant pour id ${req.params.id} n'a pas pu être récupéré.` })
    }
});

app.get("/api/coworkings", (req, res) => {
    let { criterium, orderBy } = req.query;
    criterium = criterium || 'superficy';
    orderBy = orderBy || 'ASC';

    const nosort = req.query.nosort
    const arrTsort = [...coworkings];


    res.json(arrTsort);
});

/////

// app.put('/api/coworkings/:id', (req, res) => {

//     const indexInArray = { ...coworkings[indexInArray], ...req.body }
//     coworkings[indexInArray] = updatedCoworking;


//     return res.json({
//         message: `Le  Coworking ${updateCoworking.name} a été modifié.`,
//         data: updatedCoworking
//     })

// })


////UPDATE//////
app.put('/api/coworkings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indexInArray = coworkings.findIndex((element) => element.id === id);

    if (indexInArray !== -1) {
        let updatedCoworking = { ...coworkings[indexInArray], ...req.body };
        coworkings[indexInArray] = updatedCoworking;

        return res.json({ message: `Le coworking ${updatedCoworking.name} a été modifié`, data: updatedCoworking });
    } else {
        return res.status(404).json({ message: "Coworking non trouvé" });
    }
});



///DELETE///

app.delete('/api/coworkings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const indexInArray = coworkings.findIndex((element) => element.id === id);

    if (indexInArray !== -1) {
        const deletedCoworking = coworkings.splice(indexInArray, 1);
        return res.json({ message: `Le coworking ${deletedCoworking[0].name} a été supprimé.`, data: deletedCoworking });
    } else {
        return res.json({ message: `Element non trouvée.` })
    }
});

///


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.post("/api/coworkings", (req, res) => {
    const newId = coworkings[coworkings.length - 1].id + 1;
    const newCoworking = { id: newId, ...req.body };
    coworkings.push(newCoworking);
    return res.json({
        message: `Un nouveau coworking n° ${newCoworking.id} a été créé.`, data: newCoworking
    });
});




//LIEN:

//http://localhost:3000/api/coworkings?criterium=capacity&orderBy=DESC




