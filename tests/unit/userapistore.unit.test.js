import {describe, expect, it} from "vitest";
import {fetchUsers, validateUsers} from "../../src/userStore";
const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';
describe("Test plan: Load user via API", async () => {
    it("TC-API-USER-01: Check URL valid", () => {
        const data = await fetchUsers(USER_API_URL);
        expect(data.length > 0);
    });
    it("TC-API-USER-02: Check data", async () => {
        const data = await fetchUsers(USER_API_URL)
        // hàm để kiểm lỗi :           console.log('data >>>>>>', data);
        const msg = validateUsers(data);
        expect(msg).toBe("Dữ liệu hợp lệ");
    });
});