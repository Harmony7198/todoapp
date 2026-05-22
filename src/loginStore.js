function login(emailInput, passwordInput) {
    //1. kiem tra email co hop le hay khong
    if(!emailInput) {
        return "Vui lòng nhập email";
    }
    //2. kiem tra mat khau co hop le hay khong
    if(!passwordInput) {
        return "Vui lòng nhập mật khẩu";
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