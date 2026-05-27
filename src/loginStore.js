// ham kiem tra email hop le
export function checkEmail(email) {

    if(email == "") {
        return false;

    } else if(email.length < 3) {
        return false;
    }

    return true;
}

// ham kiem tra mat khau
export function checkPassword(password) {

    if(password == "") {
        return false;
    }

    return true;
}

// ham login
export function login(emailInput, passwordInput) {

    // kiem tra email
    var isValidEmail = checkEmail(emailInput);

    if(!isValidEmail){
        return "Email khong hop le";
    }

    // kiem tra password
    var isValidPassword = checkPassword(passwordInput);

    if(!isValidPassword) {
        return "Mat khau khong hop le";
    }

    // kiem tra tai khoan
    if(
        emailInput == "admin@gmail.com" &&
        passwordInput == "123456"
    ) {
        return "Đăng nhập thành công";

    } else {
        return "Đăng nhập thất bại";
    }
}
//giữ tương thích với trang HTML đang gọi login(...) từ window
if (typeof window !== "undefined") {
    window.login = login;
}