const withAuth = (req, res, next) => {
    if(!req.seccion.logged_in){
        res.redirect('/login');
    } else {
        next();
    }
};