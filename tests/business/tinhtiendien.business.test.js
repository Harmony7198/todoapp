import {describe, it, expect} from "vitest";
import {tinhtiendien} from "../../src/tinhtiendien";
describe("Kiểm thử chức năng tính tiền điện bằng BUSINESS TEST", () => {
    //TC-BUSINESS-01: báo lỗi khi bỏ trống
    it("TC-BUSINESS-01: tinhtiendien trả về lỗi khi bỏ trống", () => {
        const result = tinhtiendien("");
        expect(result).toBe("Vui lòng nhập số kWh tiêu thụ");
    });
    //TC-BUSINESS-02: tính đúng khi 0kwh
    it("TC-BUSINESS-02: tinhtiendien trả về đúng số tiền khi nhập 0 kWh", () => {
        const result = tinhtiendien(0);
        expect(result).toBe("Vui lòng nhập số kWh tiêu thụ");
    });
    //TC-BUSINESS-03: trả về lỗi khi nhập số kwh âm
    it("TC-BUSINESS-03: tinhtiendien trả về lỗi khi nhập số kWh âm", () => {
        const result = tinhtiendien(-5);
        expect(result).toBe("Số kWh tiêu thụ phải lớn hơn 0");
    });
    //TC-BUSINESS-04: trả về lỗi khi nhập số kwh không phải là số
    it("TC-BUSINESS-04: tinhtiendien trả về lỗi khi nhập số kWh không phải là số", () => {
        const result = tinhtiendien("abc");
        expect(result).toBe("Số kWh tiêu thụ phải là một số hợp lệ");
    });
    //TC-BUSINESS-05: tính đúng khi nhập số kwh bậc 1 hợp lệ
    it("TC-BUSINESS-05: tinhtiendien trả về đúng số tiền khi nhập số kWh bậc 1 hợp lệ", () => {
        const result = tinhtiendien(30);
        expect(result).toBe('<span style="color:pink;">Số tiền phải trả là: 54000</span>');
    });
    //TC-BUSINESS-06: tính đúng khi nhập số kwh bậc 2 hợp lệ
    it("TC-BUSINESS-06: tinhtiendien trả về đúng số tiền khi nhập số kWh bậc 2 hợp lệ", () => {
        const result = tinhtiendien(70);
        expect(result).toBe('<span style="color:pink;">Số tiền phải trả là: 130000</span>');
    });
    //TC-BUSINESS-07: tính đúng khi nhập số kwh bậc 3 hợp lệ
    it("TC-BUSINESS-07: tinhtiendien trả về đúng số tiền khi nhập số kWh bậc 3 hợp lệ", () => {
        const result = tinhtiendien(150);
        expect(result).toBe('<span style="color:pink;">Số tiền phải trả là: 315000</span>');
    });
});