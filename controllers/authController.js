const User = require('../model/User');

module.exports.login_get = (req, res) => {
    res.send('loginget')
}

module.exports.login_post = (req, res) => {
    res.send('loginpost')
}

module.exports.signup_get = (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    res.send(password)
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password});
        res.status(201).json(user);
    } 
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}

function handleErrors (err) {
    let errors = { email: '', password: ''};

    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        });
    }
    return errors;
}