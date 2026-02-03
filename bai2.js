let list = [];
let count=0;
let question =Number(prompt("hôm nay có bao nhiêu người trả muộn"));
for(let i=0;i<question;i++){
    let name = prompt("nhập tên sách");
    list.push(name);
}
console.log("tổng số sách bị trả muộn là :",question);
console.log("danh sách các sách bị trả muộn là :");
for(let i=0;i<question;i++){
    console.log(i+1,list[i]);
}
for(let i=0;i<question;i++){
    if(list[i].length>20){
        count++;
    }
}
console.log("số lượng sách có ký tự dài hơn 20 là :",count);