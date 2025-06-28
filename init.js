const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main().then((res)=>{
    console.log("connection successful...");
}).catch((err)=>{
    console.log(err);
});
async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); 
}


let allChats=[
        {
          from: "neha",
          to: "priya",
          msg: "Hello world",
          created_at: new Date()
        },
        {
          from: "rahul",
          to: "amit",
          msg: "What's up?",
          created_at: new Date()
        },
        {
          from: "sara",
          to: "neha",
          msg: "Good morning!",
          created_at: new Date()
        },
        {
          from: "john",
          to: "doe",
          msg: "Meeting at 5 PM",
          created_at: new Date()
        }
      ];
    

      Chat.insertMany(allChats);

// let chat1=new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"Hello world",
//     created_at:new Date()
// });
// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });