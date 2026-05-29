//hàm UNIT: kiểm tra số tiền
export function validateSotien(sotien) {
    if (sotien == "" || sotien == null || sotien == undefined) {
        return "Vui lòng nhập số tiền";
    }
    if (sotien <= 0) {
        return "Số tiền phải lớn hơn 0";
    }
    return "";
}
//hàm UNIT: kiểm tra phần trăm
export function validatePhanTram(phantram) {
    if (phantram == "" || phantram == null || phantram == undefined) {
        return "Vui lòng nhập phần trăm giảm giá";
    }
    if (phantram < 0 || phantram > 100) {
        return "Phần trăm giảm giá phải nằm trong khoảng 0-100";
    }
    return "";
}
//hàm UNIT
export function tinhtiengiamgia(sotien, phantram) {
    const giamgia = (sotien * phantram) / 100;
    const kq = sotien - giamgia;
    return kq;
}
//hàm BUSINESS: tính tiền sau giảm giá
export function tinhtien(sotien, giamgia) {
    // 1. Validate số tiền
    const sotienError = validateSotien(sotien);
    if (sotienError != "") {return sotienError;
    }
    // 2. Validate phần trăm
    const giamgiaError = validatePhanTram(giamgia);
    if (giamgiaError != "")
        return giamgiaError;
    // 3. Tính tiền sau giảm giá
    const kq = tinhtiengiamgia(sotien, giamgia);
    return "Số tiền phải trả là: " + kq;
}
//giữ tương thích với trang HTML đang gọi login(...) từ window
if (typeof window !== 'undefined') {
    window.tinhtien = tinhtien;
}