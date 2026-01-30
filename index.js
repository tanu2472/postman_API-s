import express from 'express'

const app = express();

app.get('/Coffee', (req, res) => {
    res.json({
        message: "Coffee is ready!",
        toppings: ["milk", "sugar", "cinnamon"]

    });
});

app.put('/Tea', (req,res) => {
    res.json({
        message: "Tea is ready!",
        toppings: ["lemon", "honey", "ginger"]
    });
})

app.patch('/Server', (req,res) => {
    res.json({
        message: "Server is running on port 5178"
    });
});

app.post('/Latte', (req,res) => {
    res.json({
        message: "Latte is ready!",
        toppings: ["vanilla", "caramel", "whipped cream"]
    });
});

app.delete('/Mocha', (req,res) => {
    res.json({
        message: "Mocha has been deleted from the menu."
    });
});

app.listen(5178, () => {
    console.log('Server is running on port 5178');
});
