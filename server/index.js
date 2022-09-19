const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PostModel = require("./models/Posts");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://origami:origami@origami.gop1zxr.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/getPosts", (req, res) => {
    PostModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


app.post("/createPost", async (req, res) => {
    const post = req.body;
    const newPost = new PostModel(post);
    await newPost.save();

    res.json(post);
});

app.delete("/deletePost/:id", async (req, res) => {
    const id = req.params.id;
    await PostModel.findByIdAndRemove(id).exec();
    res.send("delete");
})

app.put("/updatePost/:id",  (req, res) => {
    const id = req.params.id;
    const post = req.body;
    console.log(id,post);
     PostModel.findByIdAndUpdate(id, { content: post.content },
        function(err,user){
            if(err){
                res.json({error :err}) ; 
            } else{
                res.send(user) ; 
            }
        })
})
app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});
