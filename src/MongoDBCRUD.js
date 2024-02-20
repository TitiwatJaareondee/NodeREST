const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(
    "mongodb://",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const Book = mongoose.model("Book", {
    id: {
        type: Number,
        unique: true,
        required : true,
    },
    title: String,
    author: String,
});

const app = express();
app.use(bodyParser.json());

app.post("/books", async (req, res) => {
    try {
        const lastBook = await Book.findOne().sort({ id: -1});
        const nextId = lastBook ? lastBook.id + 1 : 1;

        const book = new Book({
            id: nextId,
            ...req.body,
        });

        await book.save();
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.get("/books" async )