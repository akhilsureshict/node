const express=require("express");
const contactRouter=express.Router();
function router(nav){
       

    contactRouter.route("/").get((req,res)=>{res.render("contactus",{title:"Contact us",nav})})
    return contactRouter;
}   
module.exports=router;