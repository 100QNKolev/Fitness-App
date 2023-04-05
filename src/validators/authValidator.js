import { authServiceFactory } from "../services/authService";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const validateLogin = async (userData) => {
    const { Login } = authServiceFactory();
    const errors = {};

    const result = await Login(userData);

    if (Object.entries(result).length > 0) {
        return errors;
    }
    else {
        errors['error'] = "Wrong email or password";
    }

    return errors;

};

export const validateUser = async (values) => {
    const { username, email, password, confirmPassword } = values;
    const errors = {};

    try {
        usernameValidator(username);
    }
    catch (err) {
        errors.username = err.message;
    }

    try {
        emailValidator(email);
    }
    catch (err) {
        errors.email = err.message;
    }

    try {
        passwordValidator(password, confirmPassword);
    }
    catch (err) {
        errors.password = err.message;
    }

    return errors;
};

const usernameValidator = (username) => {

    if (username.length < 3) {
        throw new Error("Username length must be at least 3 symbols long");
    }

    if (username.length > 20) {
        throw new Error("Username length can't be more that 20 symbols long");
    }
};

const passwordValidator = (password, confirmPassword) => {

    if (password !== confirmPassword) {
        throw new Error("Passwords must match");
    }

    if (password.length < 8) {
        throw new Error("Password must be at least 8 symbols long");
    }
};

const emailValidator = (email) => {

    if (!emailRegex.test(email)) {
        throw new Error("Invalid Email");
    }
};