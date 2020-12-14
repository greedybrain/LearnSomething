//! Main Logic 
exports.throw404 = (req, res) => {
        return res.status(404).render('404', { title: "Page Not Found" })
}

