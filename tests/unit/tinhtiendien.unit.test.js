import {describe, it, expect} from "vitest";
import {validateinputdatakwh, tinhtoan} from "../../src/tinhtiendien";
//test plan
describe("Kiểm thử chức năng tính tiền điện bằng UNIT TEST", () => {
    //TC-UNIT-01: báo lỗi khi bỏ trống
    it("TC-UNIT-01: validateinputdatakwh trả về lỗi khi bỏ trống", () => {
        const result = validateinputdatakwh("");
        expect(result).toBe("Vui lòng nhập số kWh tiêu thụ");
    });
    //TC-UNIT-02: tính đúng khi 0kwh
    it("TC-UNIT-02: tinhtoan trả về đúng số tiền khi nhập 0 kWh", () => {
        const result = tinhtoan(0);
        expect(result).toBe(0);
    });
    //TC-UNIT-03: tính đúng khi 5kwh
    it("TC-UNIT-03: tinhtoan trả về đúng số tiền khi nhập 5 kWh", () => {
        const result = tinhtoan(5);
        expect(result).toBe(9000);
    });
    //TC-UNIT-04: tính đúng khi 27 kwh    
    it("TC-UNIT-04: tinhtoan trả về đúng số tiền khi nhập 27 kWh", () => {
        const result = tinhtoan(27);
        expect(result).toBe(48600);
    });
    //TC-UNIT-05: tính đúng khi 50 kwh
    it("TC-UNIT-05: tinhtoan trả về đúng số tiền khi số kwh ở khung bậc 1", () => {
        const result = tinhtoan(50);
        expect(result).toBe(90000);
    });
    //TC-UNIT-06: tính đúng khi 60 kwh
    it("TC-UNIT-06: tinhtoan trả về đúng số tiền khi số kwh ở khung bậc 2", () => {
        const result = tinhtoan(60);
        expect(result).toBe(110000);
    });
    //TC-UNIT-07: tính đúng khi 80 kwh
    it("TC-UNIT-07: tinhtoan trả về đúng số tiền khi số kwh ở khung bậc 2", () => {
        const result = tinhtoan(80);
        expect(result).toBe(150000);
    });
    //TC-UNIT-08: tính đúng khi 100 kwh
    it("TC-UNIT-08: tinhtoan trả về đúng số tiền khi số kwh ở khung bậc 2", () => {
        const result = tinhtoan(100);
        expect(result).toBe(190000);
    });
    //TC-UNIT-09: tính đúng khi 101 kwh
    it("TC-UNIT-09: tinhtoan trả về đúng số tiền khi số kwh ở khung bậc 3", () => {
        const result = tinhtoan(101);
        expect(result).toBe(192500);
    });
    //TC-UNIT-10: tính đúng khi 120 kwh
    it("TC-UNIT-10: tinhtoan trả về đúng số tiền khi số kwh ở khung bậc 3", () => {
        const result = tinhtoan(120);
        expect(result).toBe(240000);
    });
    //TC-UNIT-11: tính đúng khi 199 kwh
    it("TC-UNIT-11: tinhtoan trả về đúng số tiền khi số kwh ở khung bậc 3", () => {
        const result = tinhtoan(199);
        expect(result).toBe(437500);
    });
});