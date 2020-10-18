const {DocumentController} = include('/controllers');
const multer = require('multer');
const upload = multer({dest : './images'});
module.exports = router =>{
    router.route('/').post(upload.single('archivito'), DocumentController.success);
    return router;
};
