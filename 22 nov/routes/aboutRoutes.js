const express=require("express");
const abtRouter=express.Router();
function router(nav){   

    abtRouter.route("/").get((req,res)=>{res.render("aboutus",{title:"About us",nav})});
    return abtRouter;
}   
module.exports=router;