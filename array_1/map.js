

// 
var cauThu = [
   {
    id:1,
    name:'nguyễn Thị Thùy Linh',
    age:24,
  
   },
   {
    id:2,
    name:'nguyễn Văn Mạnh',
    age:24,
   
   },
   {
    id:3,
    name:'Thành Trungs',
    age:24,
    
   },



]
var  danhSach = cauThu.map((item,i)=>{
    return{
      id:item.id,
      name:'Ten cau thu:'+ item.name,
      age: 'so tuoi :'+ item.age  
    }

})
console.log(danhSach)
