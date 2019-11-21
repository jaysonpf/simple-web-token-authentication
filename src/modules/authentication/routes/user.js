const UserService = require('../business/user-service');

exports.get = (req, res, next) => {
    UserService.getAll()
        .then((person) => {
            res.send(200, person);
        }).catch(err => res.send(500, err));
};


exports.getById = (req, res, next) => {
    const _id = req.params.id;

    UserService.getById(_id)
        .then((person) => {
            res.send(200, person);
        }).catch(err => res.send(500, err));
};

exports.post = (req, res, next) => {
    req.log.debug('creating new user');

    const vm = req.body;

    UserService.create(vm)
        .then(() => {
            req.log.debug('user created');
            res.send(200);
            next();
        }).catch(err => res.send(500, err));
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    const model = req.body;

    UserService.update(id, model)
        .then(() => {
            res.send(200, 'User successfully updated');
        }).catch(err => {
            res.send(500, err);
        });

};

exports.delete = (req, res, next) => {
    UserService.delete(id)
        .then(() => {
            res.send(200, 'User successfully created');
        }).catch(err => {
            res.send(500, err)
        });
};