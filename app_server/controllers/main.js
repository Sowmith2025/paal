module.exports.index=(req,res)=>res.render('index',{title:'Home Page'});
module.exports.about=(req,res)=>res.render('about',{title:'About Us'});
module.exports.events=(req,res)=>res.render('events',{title:'Events'}); 
module.exports.dashboard=(req,res)=>res.render('dashboard',{title:'Dashboard'});