module.exports = {
    mongoDbUrl : 'mongodb://127.0.0.1:27017/CMS',
    PORT: process.env.PORT || 5000,
    globalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');        
        
        next();
    }
};