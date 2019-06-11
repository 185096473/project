var sd=require("silly-datetime")
var time=sd.format(new Date(),"YYYY-MM-DD hh-mm-ss")
var newtime=sd.fromNow(new Date())
console.log(newtime)