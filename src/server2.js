const express = require('express');
const app = express();
app.use((request,res,next)=>{
    console.log('有人请求服务器2',request.get('Host'))
    console.log('有人请求的是',request.url)
    next()
})
app.get('/cars',(request,res)=>{
    const cars = [
        {id:"0001",name:'丰田',price:199},
        {id:"0002",name:'奔驰',price:200},
        {id:"0003",name:'宝马',price:300}
    ]
    // const cars={"mine":{"mine_footprint":{"mine_footprint_city":{},"mine_footprint_town":{},"mine_footprint_tips":{}},"mine_myorder":{"order_hotel":{},"order_ticket":{},"order_insurance":{},"mine_myorder_more":{"order_charge_station":{},"order_scenic_voice_play":{}}},"mine_myfamily":{"mine_myfamily_membercard":{}},"mine_store":{"mine_store_more":{}}}}

    res.send(cars)
})
app.listen('5001',(err)=>{
    if(!err){
        console.log('您访问的地址为：http://localhost:5001/cars')
    }
})