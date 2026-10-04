const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

// Home
app.get("/", (req, res) => {
    res.send("Restaurant Management System is Running!");
});

// Menu API
app.get("/menu", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Chicken Biryani",
            price: 180
        },
        {
            id: 2,
            name: "Paneer Biryani",
            price: 160
        },
        {
            id: 3,
            name: "Veg Fried Rice",
            price: 120
        }
    ]);
});

// Orders API
app.post("/orders", (req, res) => {
    const { customerName, item, quantity } = req.body;

    if (!customerName || !item || !quantity) {
        return res.status(400).json({
            error: "Customer name, item and quantity are required"
        });
    }

    res.status(201).json({
        message: "Order placed successfully",
        order: {
            customerName,
            item,
            quantity
        }
    });
});

// Tables API
app.get("/tables", (req, res) => {
    res.json([
        {
            tableNumber: 1,
            seats: 4,
            status: "Available"
        },
        {
            tableNumber: 2,
            seats: 2,
            status: "Reserved"
        },
        {
            tableNumber: 3,
            seats: 6,
            status: "Available"
        }
    ]);
});

// Reservation API
app.post("/reservations", (req, res) => {
    const { customerName, tableNumber, date } = req.body;

    if (!customerName || !tableNumber || !date) {
        return res.status(400).json({
            error: "Customer name, table number and date are required"
        });
    }

    res.status(201).json({
        message: "Table reserved successfully",
        reservation: {
            customerName,
            tableNumber,
            date
        }
    });
});

// Inventory API
app.get("/inventory", (req, res) => {
    res.json([
        {
            id: 1,
            item: "Rice",
            quantity: 50,
            unit: "kg"
        },
        {
            id: 2,
            item: "Chicken",
            quantity: 20,
            unit: "kg"
        },
        {
            id: 3,
            item: "Paneer",
            quantity: 15,
            unit: "kg"
        }
    ]);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});