let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let n = Number(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));
while (isNaN(n) || n <= 0) {
    n = Number(prompt("Vui lòng nhập một số nguyên dương:"));
}

for (let i = 0; i < n; i++) {
    let id = "";
    while (true) {
        id = prompt(`Nhập mã sách thứ ${i + 1}:`).trim();
        if (!id) {
            alert("Mã sách không được để trống!");
        } else if (booksId.includes(id)) {
            alert("Mã sách này đã tồn tại!");
        } else {
            break;
        }
    }
    booksId.push(id);

    let name = "";
    while (!name || name.trim() === "") {
        name = prompt(`Nhập tên sách cho mã ${id}:`);
    }
    booksName.push(name);

    let category = "";
    while (!category || category.trim() === "") {
        category = prompt(`Nhập thể loại cho "${name}" (cách nhau bởi dấu phẩy):`);
    }
    booksCategory.push(category);

    let qty;
    while (true) {
        qty = prompt(`Nhập số lượng tồn kho cho "${name}":`);
        if (qty !== null && qty.trim() !== "" && !isNaN(qty) && Number(qty) >= 0) {
            qty = Number(qty);
            break;
        }
        alert("Số lượng phải là số nguyên >= 0!");
    }
    inventoryQuantity.push(qty);
}

console.log("--- KẾT QUẢ PHÂN TÍCH DỮ LIỆU ---");

let programmingCount = 0;
for (let i = 0; i < booksCategory.length; i++) {
    if (booksCategory[i].toLowerCase().includes("lập trình")) {
        programmingCount++;
    }
}
console.log(`a. Tổng số sách thuộc thể loại "Lập trình": ${programmingCount}`);

let jsWebBooks = [];
for (let i = 0; i < booksCategory.length; i++) {
    let cat = booksCategory[i].toLowerCase();
    if (cat.includes("javascript") && cat.includes("web")) {
        jsWebBooks.push(booksId[i]);
    }
}
console.log(`b. Mã sách thuộc cả "JavaScript" và "Web": ${jsWebBooks.length > 0 ? jsWebBooks.join(", ") : "Không có"}`);

let minIndex = 0;
for (let i = 1; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
        minIndex = i;
    }
}
console.log(`c. Sách có tồn kho thấp nhất: Mã: ${booksId[minIndex]} - Tên: ${booksName[minIndex]} (${inventoryQuantity[minIndex]} bản)`);
