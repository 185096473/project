function showIndex(req,res){
    res.end("index")
}
function showAbout(req,res){
    res.end("about")
}
function showNew(req,res){
    res.end("new")
}
function show404(req,res){
    res.end("404")
}
module.exports={
    showIndex,
    showAbout,
    showNew,
    show404
}