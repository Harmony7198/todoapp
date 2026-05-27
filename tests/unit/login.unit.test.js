import {describe, expect, it} from "vitest";
import {checkEmail, checkPassword, login} from "../../src/loginStore";

describe("kiểm thử từng hàm nhỏ của chức năng đăng nhập", () => {
    // Test case 1: Kiểm tra hàm checkEmail với email rỗng
    it("hàm checkEmail trả về false khi email bị trống", () => {
        const result = checkEmail("");
        expect(result).toBe("false");
    });

    // Test case 2: Kiểm tra hàm checkEmail tra ve false với email có độ dài nhỏ hơn 3
    it("hàm checkEmail trả về false khi email có độ dài nhỏ hơn 3 ký tự", () => {
        const result = checkEmail("ab");
        expect(result).toBe("false");
    });
});
