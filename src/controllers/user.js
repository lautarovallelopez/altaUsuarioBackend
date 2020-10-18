const {User} = include('models');

class UserController {
    static async fetch(req, res, next){
        try{
            await User.startTransaction();
            const users = await User.find({
                ...req.query,
                deleted: 0
            });
            await User.commitTransaction();
            res.send(users);
        }catch(err){
            next(err);
        }
    }

    static async create(req, res, next){
        try{
            await User.startTransaction();
            await User.insertOne(req.body);
            await User.commitTransaction();
            res.send({success: true});
        }catch(err){
            next(err);
        }
    }

    static async update(req, res, next){
        try{
            await User.startTransaction();
            await User.updateOne({id: req.params.id}, req.body);
            await User.commitTransaction();
            res.send({success: true});
        }catch(err){
            next(err);
        }
    }

    static async fetchOne(req, res, next){
        try{
            await User.startTransaction();
            const user = await User.findOne({id: req.params.id});
            await User.commitTransaction();
            res.send(user);
        }catch(err){
            next(err);
        }
    }

    static async delete(req, res, next){
        try{
            await User.startTransaction();
            const result = await User.deletedOne(req.params.id);
            await User.commitTransaction();
            res.send({
                success: true,
                ...result
            });
        }catch(err){
            next(err);
        }
    }
    static async undo(req, res, next){
        try{
            await User.startTransaction();
            await User.updateOne({id: req.params.id}, {deleted:false});
            await User.commitTransaction();
            res.send({success: true});
        }catch(err){
            next(err);
        }
    }
}

module.exports = UserController;
