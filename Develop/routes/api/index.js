const router = require("express").Router()
router.get("/workouts",(req,res)=>{
    res.send("Hello")
})
router.put("/workouts",(req,res)=>{
    res.send("Hello")
})
router.post("/workouts",(req,res)=>{
    res.send("Hello")
})
module.exports = router