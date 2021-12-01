

// 
var cauThu = [
    {
     id:1,
     name:'nguyễn Thị Thùy Linh',
     age:29,
   
    },
    {
     id:2,
     name:'nguyễn Văn Mạnh',
     age:23,
    
    },
    {
     id:3,
     name:'Thành Trungs',
     age:25,
     
    },
 
 
 
 ]
 var  danhSach = cauThu.filter((item,i)=>{
      return (item.age === 25 )
   

 
 })
 console.log(danhSach)
 