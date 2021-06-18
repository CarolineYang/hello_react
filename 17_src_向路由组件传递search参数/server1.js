const express = require('express');
const app = express();
app.use((request,res,next)=>{
    console.log('有人请求服务器了')
    next()
})
app.get('/search/users',(request,res)=>{
    const students = [
        {id:"001",login:'tony',age:18},
        {id:"002",login:'jerry',age:19},
        {id:"003",login:"tom",age:20}
    ]
    res.send(students)
})
app.listen(5000,(err)=>{
    if(!err){
        console.log('服务器启动成功，请求学生的地址为：http://localhost:5000/students')
    }
})