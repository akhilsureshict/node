const express=require("express");
const addRouter=express.Router();
function router(nav){   

    addRouter.route("/").get((req,res)=>{res.render("addbook",{title:"Add books",nav})});
    return addRouter;
}   
module.exports=router;