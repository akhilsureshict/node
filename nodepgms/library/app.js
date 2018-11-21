const express=require("express");
const chalk=require("chalk");
const path=require("path");
var app=new express();
const booksRouter=express.Router();
const authRouter=express.Router();
app.use(express.static(path.join(__dirname,'/public')))
app.use("/books",booksRouter);
app.use("/authors",authRouter);
app.set("views","./src/views");
app.set("view engine","ejs");
booksRouter.route("/").get((req,res)=>{res.render("books",{title:"Books",
                                                            books:[{name:"Book1",author:"author1",genre:"genre1"},
                                                                    {name:"Book2",author:"author2",genre:"genre2"},
                                                                    {name:"Book3",author:"author3",genre:"genre3"},
                                                                    {name:"Book4",author:"author4",genre:"genre4"},
                                                                    {name:"Book5",author:"author5",genre:"genre5"}
                                                                ],
                                                            nav:[{link:"/books",title:"Books"},//Array of JSON Objects
                                                            {link:"/authors",title:"Authors"}]
                                                            }
                                                )
                                        });
booksRouter.route("/single").get((req,res)=>{res.send("Hello single book")});
authRouter.route("/").get((req,res)=>{res.send("Hello Authors")});
authRouter.route("/single").get((req,res)=>{res.send("Hello single authors")});
app.get('/',function(req,res){
    res.render("index",{title:"Library",
                        nav:[{link:"/books",title:"Books"},//Array of JSON Objects
                            {link:"/authors",title:"Authors"}]
                        });
                        //can concatenate paths using joint func of path module or string oncat
    //res.sendFile(path.join(__dirname,"/views_old/index.html"));

});
app.listen(3001,function(){
    
    console.log("listening to port"+chalk.red("3001"));
});