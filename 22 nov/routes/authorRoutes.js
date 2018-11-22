const express=require("express");
const authRouter=express.Router();
function router(nav){                                      
            var author=[{name:"steve bordon",language:"English" },
            {name:"dwayne johnson",language:"Latin"},
            {name:"paul leversque",language:"italia"},
            {name:"keith orton",language:"french"},
            {name:"mike nuzanin",language:"zulu"}];
            authRouter.route("/").get((req,res)=>{res.render("authors",{title:"Authors",author,
                                                                        nav
                                                                            
                                                                        
                                                                    });});
            authRouter.route("/:id").get((req,res)=>{
                const id=req.params.id;
                res.render("author",{title:"Author",nav,author:author}
                                        
            )});return authRouter;
        }   
module.exports=router;   