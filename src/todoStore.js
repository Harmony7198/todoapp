// Hàm UNIT: CRUD - READ (ĐỌC)
export async function fetchTodos(apiUrl) {
    //1. gởi request đến API URL
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("ERR001: Không kết nối được API URL.");
    }
    //2. bóc tách dữ liệu, xử lý ...
    const data = await response.json();
    return data;
}

// hàm BUSINESS: load danh sách TODOS và trình diễn
export async function loadTodos(apiUrl) {

}



// Hàm UNIT: CRUD - READ (TẠO MỚI)
export async function addTodos(apiUrl, newTitle) {
    //1. Chuẩn bị dữ liệu gởi đi (payload)
    const payload = {
        title: newTitle,
        completed: false
    };
    //Gởi request POST
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        throw new Error("ERR002: Không thêm mới được dữ liệu.");
    }
    return await response.json();
}
// Hàm UNIT: CRUD - UPDATE (CẬP NHẬT/SỬA) (((bổ sung thêm phần này với xóa - coi hình chụp)))
export async function updateTodo(apiUrl, id, newTitle) {
    //1. chuẩn bị dữ liệu gởi đi (payload)
    const payload = {
        title: newTitle
    };
    //2. gởi request PATCH
    const response = await fetch(`${apiUrl}/${id}`, {
                  method: 'PATCH',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(payload)
                    });
                    if (!response.ok) {
                        document.getElementById('todo-msg').innerHTML = '<b>Không cập nhật được </b>';
                    }
                    document.getElementById('todo-msg').innerHTML = '<b>Đã cập nhật được job ${job.id} thành công!</b>';
                }

















//giữ tương thích với trang html đang gọi login từ window
if(typeof window !== "undefined") {
    window.loadTodos = loadTodos;
}