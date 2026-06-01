//hàm UNIT: kiểm tra giá trị ô nhập liệu inputdatakwh có hợp lệ hay không
export function validateinputdatakwh(inputdatakwh) {
    //RULE 1: bắt buộc nhập - không được để trống
    if(inputdatakwh == "" || inputdatakwh == null || inputdatakwh == undefined) {
        return "Vui lòng nhập số kWh tiêu thụ";
    }
    //RULE 2: phải là số
    const parsedNumber = Number(inputdatakwh);
    if(!Number.isFinite(parsedNumber)) {
        return "Số kWh tiêu thụ phải là một số hợp lệ";
    }
    //RULE 3: phải lớn hơn 0
    if(parsedNumber <= 0) {
        return "Số kWh tiêu thụ phải lớn hơn 0";
    }
return "";
}
/*yêu cầu tính tiền điện theo bậc thang (3 bậc):
0-50 kWh: 1800 đồng/kWh
51-100 kWh: 2000 đồng/kWh
Trên 100 kWh: 2500 đồng/kWh*/
//hàm UNIT: tính ra số tiền
export function tinhtoan(inputdatakwh) {
    var tongtien = 0;
    //trường hợp 1: nếu số kWh tiêu thụ từ 0 đến 50
    if(inputdatakwh <= 50) {
        return inputdatakwh * 1800;
    }
    //trường hợp 2: nếu số kWh tiêu thụ từ 51 đến 100
    if(inputdatakwh <= 100) {
        return 50 * 1800 + (inputdatakwh - 50) * 2000;
    }
    //trường hợp 3: nếu số kWh tiêu thụ trên 100
    if(inputdatakwh > 100) {
        return 50 * 1800 + 50 * 2000 + (inputdatakwh - 100) * 2500;
    }
}

//hàm BUSINESS: tính tiền điện phải trả dựa trên số kWh tiêu thụ
export function tinhtiendien(inputdatakwh) {
    const inputdatakwhError = validateinputdatakwh(inputdatakwh);
    if(inputdatakwhError) {
        return inputdatakwhError;
    }
    var sotien = tinhtoan(inputdatakwh);
    if(sotien <= 20000) {
        return `<span style="color:red;">Số tiền phải trả là: ${sotien}</span>`;
    }
    else if(sotien > 20000 && sotien <= 50000) {
        return `<span style="color:blue;">Số tiền phải trả là: ${sotien}</span>`;
    }
    return `<span style="color:pink;">Số tiền phải trả là: ${sotien}</span>`;
}

//giữ tương thích với trang html đang gọi login từ window
if(typeof window !== "undefined") {
    window.tinhtiendien = tinhtiendien;
}