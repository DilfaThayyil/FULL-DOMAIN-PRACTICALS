const express = require('express')
const app = express()

app.use(express.json())

let Users = [
    {id : 1,name : 'djsh',age : 35},
    {id : 2,name : 'ghjfg',age : 36}
]

//patch
app.patch('/users/:id',(req,res)=>{
    const userId = parseInt(req.params.id)
    const updates = req.body

    const user = Users.find(user=>user.id===userId)
    if(user){
        Object.assign(user,updates)
        res.status(200).json(user)
    }else{
        res.status(404).json('User not fount')
    }
})

//patch
app.patch('/users/:id',(req,res)=>{
    const userId = req.params.id
    const updatedUser = req.body
    const userIndex = Users.findIndex(user=>user.id===userId)
    if(userIndex!==-1){
        Users[userIndex] = {...updatedUser,id:userId}
        res.status(200).json(users[userIndex])
    }else{
        res.status(404).send('User not found')
    }
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})