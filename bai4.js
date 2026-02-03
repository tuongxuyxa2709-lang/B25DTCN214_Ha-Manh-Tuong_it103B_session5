let booklsd=[];
let bookName=[];
let bookStatus=["hỏng nhẹ","hỏng nặng","cần sửa gấp"];

let question = prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay");
for(let i=0;i<question;i++){
    let code ="";
    while (!code || code.trim() === "") {
        code = prompt(`[Sách ${i+1}] Mời bạn nhập mã sách:`);
    }
    booklsd.push(code);
    let name ="";
    while (!name || name.trim() === "") {
        name = prompt(`[Sách ${i+1}] Mời bạn nhập tên sách:`);
    }
    bookName.push(name);
    let status = prompt("mời bạn nhập tình trạng ban đầu (chọn số từ 1 tới 3");
    
    bookStatus.push(status);

}
alert(`danh sách hiện tại ${question} cuốn`);
for(let i=0;i<question;i++){
    alert(`${booklsd[i]} - ${bookName[i]} - ${bookStatus[i]}` );
}

let action=prompt("chọn thao tác:1-sửa tình trạng, 2-xóa sách,0-kết thúc ");
let searchId =prompt("nhập mã cần sửa");
let index = booklsd.indexof(searchId);
if(index !==-1){
    let newStatus ="";
    while(!["1","2""3""4""5"].includes(newStatus)){
        newStatus=prompt("chọn tình trạng mới :1 : hỏng nhẹ,2Hỏng nặng, 3: Cần sửa gấp, 4: Đã sửa xong, 5: Loại bỏ")
    }
    bookStatus[index]=getStatusText(newStatus);
    alert("cập nhật thành công");
}
else{
    alert("không tìm thấy mã sách");
}
else if(action==="2"){
    let searchId = prompt("Nhập mã sách cần xóa:");
        let index = booksId.indexOf(searchId);
        if (index !== -1) {
            booksId.splice(index, 1);
            booksName.splice(index, 1);
            bookStatus.splice(index, 1);
            alert("Đã xóa sách khỏi danh sách!");
        } else {
            alert("Không tìm thấy mã sách!");
        }
    }
let repairedCount = bookStatus.filter(s => s === "Đã sửa xong").length;
let removedCount = bookStatus.filter(s => s === "Loại bỏ").length;

console.log("--- BÁO CÁO CUỐI ---");
console.log(`Tổng số sách còn lại: ${booksId.length}`);
console.log(`Số sách "Đã sửa xong": ${repairedCount}`);
console.log(`Số sách "Loại bỏ": ${removedCount}`);
console.log("Danh sách chi tiết:");
booksId.forEach((id, i) => {
    console.log(`${i + 1}. Mã: ${id} - Tên: ${booksName[i]} - Tình trạng: ${bookStatus[i]}`);
});
