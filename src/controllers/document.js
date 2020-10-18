class DocumentController {
    static success(req, res, next){
        try{
            console.log(req.file);
            res.send({message : 'esta todo okkk'});
        }catch(error){
            next(error);
        }
    }

}
module.exports = DocumentController;
