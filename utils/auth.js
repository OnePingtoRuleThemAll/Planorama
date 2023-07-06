//Middleware function to check if user is authenticated.
//If the user is not logged in, it redirects to the login page.
const withAuth = (req, res, next) => {
    if(!req.session.logged_in){
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;