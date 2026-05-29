import {describe, expect, it} from "vitest";
import {tinhtiengiamgia, tinhtien} from "../../src/discountStore";
describe("Kiểm thử chức năng tính tiền sau giảm giá", () => {
    // Test case 1: Kiểm tra hàm tinhtien với số tiền rỗng
    it("hàm tinhtien trả về lỗi khi số tiền bị trống", () => {
        const result = tinhtien("","");
        expect(result).toBe("Vui lòng nhập số tiền");
    });
    // Test case 2: Kiểm tra hàm tinhtien với phần trăm rỗng
    it("hàm tinhtien trả về lỗi khi phần trăm bị trống", () => {
        const result = tinhtien(100,"");
        expect(result).toBe("Vui lòng nhập phần trăm giảm giá");
    });
    // Test case 3: Kiểm tra hàm tinhtien với số tiền âm
    it("hàm tinhtien trả về lỗi khi số tiền âm", () => {
        const result = tinhtien(-100, 10);
        expect(result).toBe("Số tiền phải lớn hơn 0");
    });
    // Test case 4: Kiểm tra hàm tinhtien với phần trăm âm
    
    // Test case 5: Kiểm tra hàm tinhtien với phần trăm lớn hơn 100
    // Test case 6: Kiểm tra hàm tinhtien với số tiền và phần trăm hợp lệ
});