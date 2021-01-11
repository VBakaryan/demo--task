const emailRegex = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
const passwordLength = 8;

export const validatePasswordLength = (val) => {
    let errorText = '';
    let isValid = true;

    if (val.length < passwordLength) {
        errorText = "Password should contain more than 8 symbols";
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