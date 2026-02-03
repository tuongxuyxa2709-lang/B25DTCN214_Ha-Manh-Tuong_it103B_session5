let booklsd=[];
let booksName=[];
let inventoryQuantity=[];
let count =0;
let flag=true;
let outofstock=[];


let question = prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay");
for(let i=0;i<question;i++){
    let code = prompt("mời bạn nhập mã sách");
    booklsd.push(code);
    let name = prompt("mời bạn nhập tên sách");
    booksName.push(name);
    let quantity = prompt("mời bạn nhập số lượng tồn kho");
    inventoryQuantity.push(quantity);
    if(quantity<=5){
        count++;
    }
    
        
    
}
console.log("Danh sách cần xem xét bổ sung",question,"loại");
for(let i=0;i<question;i++){
    console.log(`${ i+1}. Mã :  ${booklsd[i]} - Tên : ${booksName[i]} - còn : ${inventoryQuantity[i]} bản` );
}

console.log("sách tồn kho <=5 bản :",count);
for(let i=0;i<inventoryQuantity.length;i++){
    if(inventoryQuantity[i] === 0){
        outofstock.push(booklsd[i]);
        
    }
}
if (outofstock.length > 0) {
    console.log(`Các mã sách hết hàng là: ${outofstock.join(", ")}`);
} else {
    console.log("Không có sách nào hết hàng.");
}

