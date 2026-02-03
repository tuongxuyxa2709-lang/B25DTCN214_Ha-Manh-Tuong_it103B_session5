let readerId = [];
let readerName = [];
let borrowedBooks = [];
let overdueDays = [];

let n = Number(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));
while (isNaN(n) || n <= 0) {
    n = Number(prompt("Vui lòng nhập một số nguyên dương:"));
}

for (let i = 0; i < n; i++) {
    let id = "";
    while (true) {
        id = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`).trim();
        let isDuplicate = false;
        for (let j = 0; j < readerId.length; j++) {
            if (readerId[j] === id) {
                isDuplicate = true;
                break;
            }
        }
        if (!id) {
            alert("Mã thẻ không được để trống!");
        } else if (isDuplicate) {
            alert("Mã thẻ này đã tồn tại!");
        } else {
            break;
        }
    }
    readerId.push(id);

    let name = "";
    while (!name || name.trim() === "") {
        name = prompt(`Nhập tên bạn đọc cho thẻ ${id}:`);
    }
    readerName.push(name);

    let books = "";
    while (!books || books.trim() === "") {
        books = prompt(`Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):`);
    }
    borrowedBooks.push(books);

    let days;
    while (true) {
        days = prompt(`Nhập số ngày quá hạn của ${name}:`);
        if (days !== null && days.trim() !== "" && !isNaN(days) && Number(days) >= 0) {
            days = Number(days);
            break;
        }
        alert("Số ngày quá hạn phải là số nguyên >= 0!");
    }
    overdueDays.push(days);
}

console.log("--- BÁO CÁO VI PHẠM ---");

let countOverdue10 = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) {
        countOverdue10++;
    }
}
console.log(`a. Tổng số bạn đọc quá hạn >= 10 ngày: ${countOverdue10}`);

let jsPytReaders = [];
for (let i = 0; i < borrowedBooks.length; i++) {
    let booksArr = borrowedBooks[i].split(",");
    let hasJS = false;
    let hasPYT = false;
    for (let j = 0; j < booksArr.length; j++) {
        let code = booksArr[j].trim().toUpperCase();
        if (code.startsWith("JS")) hasJS = true;
        if (code.startsWith("PYT")) hasPYT = true;
    }
    if (hasJS && hasPYT) {
        jsPytReaders.push(readerId[i]);
    }
}
console.log(`b. Mã thẻ bạn đọc mượn cả sách JS và PYT: ${jsPytReaders.length > 0 ? jsPytReaders.join(", ") : "Không có"}`);

let maxIndex = 0;
for (let i = 1; i < overdueDays.length; i++) {
    if (overdueDays[i] > overdueDays[maxIndex]) {
        maxIndex = i;
    }
}
console.log(`c. Bạn đọc quá hạn lâu nhất: ${readerName[maxIndex]} (${overdueDays[maxIndex]} ngày)`);

let countOverdue7 = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) {
        countOverdue7++;
    }
}

if (countOverdue7 === 0) {
    console.log("d. Cảnh báo: Tình hình trả sách hôm nay khá tốt!");
} else if (countOverdue7 >= 1 && countOverdue7 <= 4) {
    console.log("d. Cảnh báo: Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("d. Cảnh báo: Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
