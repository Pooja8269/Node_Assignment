function log(req, res, next){
    console.log('Logged In');
    next();
}

module.exports = log;