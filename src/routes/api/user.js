const {UserController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(UserController.fetch)
        .post(UserController.create);
    router.route('/:id')
        .put(UserController.update)
        .get(UserController.fetchOne)
        .delete(UserController.delete)
        .post(UserController.undo);
    return router;
};
