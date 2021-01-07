const emailRegex = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
const userNamelength = 10;

export const validateUserNameLength = (val) => {
    let errorText = '';
    let isValid = true;

    if (val.length >= userNamelength) {
        errorText = "Username is too long";
        isValid = false;
    }

    return {
        errorText: errorText,
        isValid: isValid,
    }
}

export const validateUserNameAsEmail = (val) => {
    let errorText = '';
    let isValid = true;

    if (!val.match(emailRegex)) {
        errorText = "Username is not a valid email address";
        isValid = false;
    }

    return {
        errorText: errorText,
        isValid: isValid,
    }
}