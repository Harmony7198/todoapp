//HÀM UNIT: LẤY DANH SÁCH NGƯỜI DÙNG TỪ API URL
export async function fetchUsers(apiUrl) {
    //1. gởi request đến API URL
        const  response = await fetch(apiUrl);
        if(!response.ok){
              throw new Error("Không kết nối được API URL");
        }
        //2. bóc tách dữ liệu, xử lý...
        const data = await response.json();
        return data;
    }
// hàm UNIT: kiểm tra cục dữ liệu
export function validateUserData(Data) {
    //1. kiểm tra xem có phải là mảng (Array) hay không
    if (!Array.isArray(Data)) {
        return "Dữ liệu không hợp lệ. Dữ liệu phải là dạng mảng.";
    }
    //2. kiểm tra xem mảng có rỗng (vó phần tử) hay không
    if (Data.length <= 0) {
        return "Không có dữ liệu nào.";
    }
    //các phần tử bên trong (element/item) có đúng cấu trúc quy định hay không
    const firstUser = Data[0];
   var isValid = Boolean(firstUser
        && "id" in firstUser
        && "name" in firstUser
        && "email" in firstUser
        && "phone" in firstUser
    );
    if(!isValid) {
        return "Dữ liệu không hợp lệ. Cấu trúc dữ liệu phải có các key id, name, email, phone.";
    }
}

// hàm BUSINESS: lấy dữ liệu user và trình diễn
export async function loadUsers(apiUrl) {
    //1. gọi hàm lấy xử lý api
    const data = await fetchUsers(apiUrl);
    //2. gọi hàm kiểm tra dữ liệu
    const error = validateUserData(data);
    
    if (error != undefined && error != "") {
    return error;
    }
    //3. xử lý dữ liệu, trình diễn dữ liệu dạng LIST
            var html = '<ul>';
            data.forEach(user => {
            html += '<li>';
            html += ` Họ tên: ${user.name} -`;
            html += ` Email: ${user.email} -`;
            html += ` Thành phố: ${user.address.city} -`;
            html += '</li>';
            });
            html += '</ul>';
    return html;
}
//giữ tương thích với trang html đang gọi login từ window
if(typeof window !== "undefined") {
    window.loadUsers = loadUsers;
}