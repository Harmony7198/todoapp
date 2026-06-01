import {describe, expect, it} from "vitest";
import {tinhtiengiamgia, tinhtien} from "../../src/discountStore";
describe("Kiểm thử chức năng tính tiền sau giảm giá", () => {
//validate so tien//
    // Test case 1: Kiểm tra hàm tinhtien với số tiền rỗng
    it("TC01: hàm tinhtien trả về lỗi khi số tiền bị trống", () => {
        const result = tinhtien("","");
        expect(result).toBe("Vui lòng nhập số tiền");
    });
    // Test case 2: Kiểm tra hàm tinhtien với số tiền âm
    it("TC02: hàm tinhtien trả về lỗi khi số tiền âm", () => {
        const result = tinhtien(-100, 10);
        expect(result).toBe("Số tiền phải lớn hơn 0");
    });
    // Test case 3: Kiểm tra hàm tinhtien với số tiền null
    it("TC03: tinhtien trả về lỗi khi số tiền null", () => {
        const result = tinhtien(null, 10);
        expect(result).toBe("Vui lòng nhập số tiền");
    });
    // Test case 4: Kiểm tra hàm tinhtien với số tiền undefined
    it("TC04: tinhtien trả về lỗi khi số tiền undefined", () => {
        const result = tinhtien(undefined, 10);
        expect(result).toBe("Vui lòng nhập số tiền");
    });
    // Test case 5: Kiểm tra hàm tinhtien với số tiền bằng 0
    it("TC05: tinhtien trả về lỗi khi số tiền bằng 0", () => {
        const result = tinhtien(0, 10);
        expect(result).toBe("Vui lòng nhập số tiền");
    });
    // Test case 6: Kiểm tra hàm tinhtien với số tiền và phần trăm hợp lệ
    it("TC06: tinhtien tính đúng khi dữ liệu hợp lệ", () => {
        const result = tinhtien(100000, 10);
        expect(result).toBe("Số tiền phải trả là: 90000");
    });
//validate phan tram//
    // Test case 7: Kiểm tra hàm tinhtien với phần trăm rỗng
    it("TC07: hàm tinhtien trả về lỗi khi phần trăm bị trống", () => {
        const result = tinhtien(100,"");
        expect(result).toBe("Vui lòng nhập phần trăm giảm giá");
    });
    // Test case 8: Kiểm tra hàm tinhtien với phần trăm âm
    it("TC08: phần trăm âm", () => {
    const result = tinhtien(100000, -10);
    expect(result).toBe("Phần trăm giảm giá phải nằm trong khoảng 0-100");
    });
    // Test case 9: Kiểm tra hàm tinhtien với phần trăm lớn hơn 100
    it("TC09: phần trăm lớn hơn 100", () => {
        const result = tinhtien(100000, 120);
        expect(result).toBe("Phần trăm giảm giá phải nằm trong khoảng 0-100");
    });
    // Test case 10: Kiểm tra hàm tinhtien với phần trăm bằng 100
    it("TC10: phần trăm bằng 100", () => {
        const result = tinhtien(100000, 100);
        expect(result).toBe("Số tiền phải trả là: 0");
    });
    // Test case 11: Kiểm tra hàm tinhtien với phần trăm bằng 0
    it("TC11: phần trăm bằng 0", () => {
        const result = tinhtien(100000, 0);
        expect(result).toBe("Vui lòng nhập phần trăm giảm giá");
    }); 
    // Test case 12: Kiểm tra hàm tinhtien với số tiền và phần trăm hợp lệ
    it("TC12: tinhtien tính đúng khi dữ liệu hợp lệ", () => {
        const result = tinhtien(100000, 10);
        expect(result).toBe("Số tiền phải trả là: 90000");
    });
    // Test case 13: phần trăm = 1
it("TC13: phần trăm bằng 1", () => {
    const result = tinhtien(100000, 1);
    expect(result).toBe("Số tiền phải trả là: 99000");
});

// Test case 14: phần trăm = 99
it("TC14: phần trăm bằng 99", () => {
    const result = tinhtien(100000, 99);
    expect(result).toBe("Số tiền phải trả là: 1000");
});

// Test case 15: số tiền nhỏ nhất hợp lệ
it("TC15: số tiền bằng 1", () => {
    const result = tinhtien(1, 100);
    expect(result).toBe("Số tiền phải trả là: 0");
});

// Test case 16: số tiền lớn
it("TC16: số tiền rất lớn", () => {
    const result = tinhtien(1000000000, 10);
    expect(result).toBe("Số tiền phải trả là: 900000000");
});

// Test case 17: giảm giá 50%
it("TC17: giảm giá 50 phần trăm", () => {
    const result = tinhtien(200000, 50);
    expect(result).toBe("Số tiền phải trả là: 100000");
});

// Test case 18: số tiền và phần trăm đều không hợp lệ
it("TC18: số tiền âm và phần trăm âm", () => {
    const result = tinhtien(-100, -10);
    expect(result).toBe("Số tiền phải lớn hơn 0");
});
// Test case 19: số tiền rỗng và phần trăm hợp lệ
it("TC19: số tiền rỗng, phần trăm hợp lệ", () => {
    const result = tinhtien("", 10);
    expect(result).toBe("Vui lòng nhập số tiền");
});

// Test case 20: số tiền hợp lệ, phần trăm undefined
it("TC20: phần trăm undefined", () => {
    const result = tinhtien(100000, undefined);
    expect(result).toBe("Vui lòng nhập phần trăm giảm giá");
});
});