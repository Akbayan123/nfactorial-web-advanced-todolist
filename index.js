const express = require('express');
const app = express();
const port = 3000;
const Todo = require('./model/model')

app.use(express.json());


app.get("/", async (request, response) => {
    const ToDo = await Todo.find();
    response.send(ToDo)
});

app.post("/", async (request, response) => {
    const todo = new Todo({
        title: request.body.title,
        isDone: request.body.isDone
    });
    todo.save()
        .then(result => {
            response.redirect("/")
        });
});

app.put("/update/:id", async (request, response) => {
    Todo.findByIdAndUpdate(request.params.id)
    .then(()=>response.set(200).send("update"))
    .catch((err)=>console.log(err))
});

app.delete("/delete/:id", async (request, response) => {
    Todo.findByIdAndDelete(request.params.id)
    .then(()=>response.set(200).send("delete"))
    .catch((err)=>console.log(err))
});




app.listen(port, () => {
    console.log("listening on port " + port)
});

