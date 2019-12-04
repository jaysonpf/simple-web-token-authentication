const User = require('../model/user');

module.exports = new class UserService {

    getAll() {
        return User.find();
    }

    getById(id) {
        return User.findById(id);
    }

    create(person) {
        return User.create(person);
    }

    update(id, person) {
        return User.findByIdAndUpdate(id,person);
    }

    delete(id) {
        return User.findByIdAndDelete(id);
    }
}
