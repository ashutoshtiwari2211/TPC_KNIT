const student = require('../models/student.js')


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        //req.flash('error', 'You must be signed in...')
        return res.redirect('/');
    }
    next();
}

//authorization
module.exports.isAuthor = async (req, res, next) => {
    const user = await student.findById(req.params.id);
    if (user.username != req.user.username) {
        //req.flash("error", "You don't have a permission to do so..");
        return res.redirect('/');
    }
    next();
}

// module.exports.isAdminTpo = async (req, res, next) =>{
//     const user = await adminTpo.findById(req.params.id);
//     if(!user) return res.redirect('/');
//     next();
// }