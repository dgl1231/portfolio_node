exports.skills = (req, res, next) => {
    res.render('skills.ejs', {
        title: 'skills',
        styleNo: 2
    });
}