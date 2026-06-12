import { describe, it, expect } from "vitest";

import {
    validateTitle,
    createTodo,
    deleteTodoById,
    findTodoById,
    completeTodo,
    uncompleteTodo,
    countTodos,
    countCompletedTodos,
    countPendingTodos
} from "../../src/todo";

// Test Plan
describe("Kiểm thử chức năng quản lý công việc bằng UNIT TEST", () => {

    // TC-UNIT-01: báo lỗi khi bỏ trống tên công việc
    it("TC-UNIT-01: validateTitle trả về lỗi khi bỏ trống", () => {
        const result = validateTitle("");
        expect(result).toBe("Vui lòng nhập tên công việc.");
    });

    // TC-UNIT-02: báo lỗi khi chỉ nhập khoảng trắng
    it("TC-UNIT-02: validateTitle trả về lỗi khi chỉ nhập khoảng trắng", () => {
        const result = validateTitle("    ");
        expect(result).toBe("Vui lòng nhập tên công việc.");
    });

    // TC-UNIT-03: không báo lỗi khi nhập hợp lệ
    it("TC-UNIT-03: validateTitle không báo lỗi khi nhập hợp lệ", () => {
        const result = validateTitle("Học JavaScript");
        expect(result).toBe("");
    });

    // TC-UNIT-04: tạo đúng object công việc
    it("TC-UNIT-04: createTodo tạo đúng object công việc", () => {
        const result = createTodo("Học JavaScript");

        expect(result).toEqual({
            title: "Học JavaScript",
            completed: false
        });
    });

    // TC-UNIT-05: đếm đúng số lượng công việc
    it("TC-UNIT-05: countTodos trả về đúng số lượng công việc", () => {

        const todos = [
            { id: 1, title: "A", completed: false },
            { id: 2, title: "B", completed: true }
        ];

        const result = countTodos(todos);

        expect(result).toBe(2);
    });

    // TC-UNIT-06: tìm đúng công việc theo id
    it("TC-UNIT-06: findTodoById trả về đúng công việc", () => {

        const todos = [
            { id: 1, title: "A", completed: false },
            { id: 2, title: "B", completed: true }
        ];

        const result = findTodoById(todos, 2);

        expect(result).toEqual({
            id: 2,
            title: "B",
            completed: true
        });
    });

    // TC-UNIT-07: trả về undefined khi id không tồn tại
    it("TC-UNIT-07: findTodoById trả về undefined khi id không tồn tại", () => {

        const todos = [
            { id: 1, title: "A", completed: false }
        ];

        const result = findTodoById(todos, 99);

        expect(result).toBeUndefined();
    });

    // TC-UNIT-08: xóa đúng công việc đầu tiên
    it("TC-UNIT-08: deleteTodoById xóa đúng công việc đầu tiên", () => {

        const todos = [
            { id: 1, title: "A" },
            { id: 2, title: "B" }
        ];

        const result = deleteTodoById(todos, 1);

        expect(result).toEqual([
            { id: 2, title: "B" }
        ]);
    });

    // TC-UNIT-09: xóa đúng công việc cuối cùng
    it("TC-UNIT-09: deleteTodoById xóa đúng công việc cuối cùng", () => {

        const todos = [
            { id: 1, title: "A" },
            { id: 2, title: "B" }
        ];

        const result = deleteTodoById(todos, 2);

        expect(result).toEqual([
            { id: 1, title: "A" }
        ]);
    });

    // TC-UNIT-10: giữ nguyên danh sách khi id không tồn tại
    it("TC-UNIT-10: deleteTodoById giữ nguyên danh sách khi id không tồn tại", () => {

        const todos = [
            { id: 1, title: "A" },
            { id: 2, title: "B" }
        ];

        const result = deleteTodoById(todos, 99);

        expect(result).toEqual(todos);
    });

    // TC-UNIT-11: đánh dấu hoàn thành công việc
    it("TC-UNIT-11: completeTodo cập nhật completed thành true", () => {

        const todos = [
            { id: 1, title: "A", completed: false }
        ];

        const result = completeTodo(todos, 1);

        expect(result[0].completed).toBe(true);
    });

    // TC-UNIT-12: đánh dấu chưa hoàn thành công việc
    it("TC-UNIT-12: uncompleteTodo cập nhật completed thành false", () => {

        const todos = [
            { id: 1, title: "A", completed: true }
        ];

        const result = uncompleteTodo(todos, 1);

        expect(result[0].completed).toBe(false);
    });

    // TC-UNIT-13: đếm đúng số công việc đã hoàn thành
    it("TC-UNIT-13: countCompletedTodos trả về đúng số công việc đã hoàn thành", () => {

        const todos = [
            { id: 1, title: "A", completed: true },
            { id: 2, title: "B", completed: false },
            { id: 3, title: "C", completed: true }
        ];

        const result = countCompletedTodos(todos);

        expect(result).toBe(2);
    });

    // TC-UNIT-14: đếm đúng số công việc chưa hoàn thành
    it("TC-UNIT-14: countPendingTodos trả về đúng số công việc chưa hoàn thành", () => {

        const todos = [
            { id: 1, title: "A", completed: true },
            { id: 2, title: "B", completed: false },
            { id: 3, title: "C", completed: false }
        ];

        const result = countPendingTodos(todos);

        expect(result).toBe(2);
    });

});