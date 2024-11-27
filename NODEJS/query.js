//query parameters
app.get('/',(req,res)=>{
    console.log(req.query)
})

//URL parameters
app.get('/',(req,res)=>{
    console.log(req.params.id)
})

//URL consist of 
// 1. HTTP (protocol)
// 2. Domain(example.com)
// 3. path(/user)
// 4. query parameters(?=search)
