const http=require("http");
const server=http.createServer(function(req,res){
    if(req.url=='/'){

        res.write("hello world");//write response to client
        res.end();
    }
    if(req.url=='/users'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();   
     }
    if(req.url=='/friends'){
        res.write(JSON.stringify(['radul,ujjwal,ashik,arjun,diyab'])); 
        res.end();// printing names of 5 friends//  
    } 
                               //end the response
});

server.listen(3000);
console.log('listening on 3000');