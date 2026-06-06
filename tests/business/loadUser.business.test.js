import {describe, expect, it} from "vitest"; 
import {loadUsers} from "../../src/userStore";
const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';
//arrow function
describe("Test plan: Test nghiệp vụ tải danh sách user", () => {
    it("TC-BUS-01: Lấy dữ liệu người dùng và tạo thành danh sách không thứ tự", async () => {
        const html = await loadUsers(USER_API_URL);
        expect(html).toContain('<ul>');
        expect(html).toContain('</ul>');
        expect(html).toContain('<li>');
    });
    it("TC_BUS_02: Lấy đủ số lượng người dùng không?", async () => {
        const html = await loadUsers(USER_API_URL);
        //dem the html bang bieu thuc chinh quy regex
        const soluongLi = (html.match(/<li>/g) || []).length;
        expect(soluongLi).toBe(10);
    });
        it("TC-BUS-03: Đủ số lượng và đúng thông tin", async () => {
        const dhtml = await loadUsers(USER_API_URL);
        expect(html).toContain("Leanne Graham");
        expect(html).toContain("Chelsey Dietrich");
        expect(html).toContain("Clementina DuBuque");
});
});