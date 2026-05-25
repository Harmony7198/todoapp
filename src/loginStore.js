//ham kiem tra email hop le//
export function checkEmail(email) {
    if(email == "") {
        return "false";
    } else if(email.length < 3) {
        return "false";
    }
    return "true";
}
//ham UNIT: kiem tra mat khau//
export function checkPassword(password) {    if(password == "") {
        return "false";
    }
    return "true";
}
//ham nghiep vu//

export function login(emailInput, passwordInput) {
    //1. kiem tra email co hop le hay khong
    var isValidEmail = checkEmail(emailInput);
   if(!isValidEmail){
        return "Email khong hop le";
   }

    //2. kiem tra mat khau co hop le hay khong
    var isValidPassword = checkPassword(passwordInput);
    if(!isValidPassword) {
        return "Mat khau khong hop le";
    }
    //3. Kiem tra logic/nghiep vu
    //Tai khoan co dung khong?
    //Gia su: admin@gmail.com va mat khau la 123456 la dung
    if(emailInput == "admin@gmail.com" && passwordInput == "123456") {
        return "Đăng nhập thành công";
    } else {   
        return "Đăng nhập thất bại";
    }
}