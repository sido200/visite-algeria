let shopbtn=document.querySelector('.logo-nav');
let shop=document.querySelector('.shop-cart');
let closebtn=document.querySelector('.close');
let favbtn=document.querySelectorAll('.fav');
var grid=document.querySelectorAll('.grid');
let buy=document.querySelector('.buy')


for (var k = 0 ; k < favbtn.length; k++){
grid[k].addEventListener('mouseover',function(){
    let img=this.querySelectorAll('img')
    img[0].style.display='none'
    img[1].style.display='block'
    
},true)
grid[k].addEventListener('mouseout',function(){
    let img=this.querySelectorAll('img')
    img[0].style.display='block'
    img[1].style.display='none'
    
},true)}

//panier btn
shopbtn.addEventListener('click',function(){
    shop.style.transform='translateX(0)';
});
//close btn
closebtn.addEventListener('click',function(){
    shop.style.transform='translateX(100%)';
});
   
 //add btn
   
 const modal = document.querySelector(".cart-product");
 let cartItems = [];
 
 const addbtns=document.querySelectorAll('.add');
 addbtns.forEach((addbtn) => {
  
   addbtn.addEventListener("click", (event) => {
     let cartItem = {
       title: event.target.parentNode.parentNode.querySelector(".name").innerText,
       price:Number(event.target.parentNode.parentNode.querySelector(".price").innerText.slice(0,-1)),
       image:event.target.parentNode.parentNode.parentNode.querySelector("img").src,
       quantity: 1,
     };
     if (cartItems.find((e) => e.title === cartItem.title)) {
       alert("Item already in your cart!");
     } else {
        let cnt=document.querySelector('nav p')
        cnt.innerText=Number(cnt.innerText)+1;
       cartItems.push(cartItem);
       modal.innerHTML +=' <div class="box"><img src='+cartItem.image +' alt="" class="image"><div class="detail"><h3 class="names">'+cartItem.title +'</h3><h5 class="price">'+ cartItem.price+"€" +'</h5><div class="input"> <i class="fa-solid fa-minus"></i><p>'+cartItem.quantity+'</p><i class="fa-solid fa-plus"></i></div> </div><i class="fa-solid fa-trash dlt"></i></div>'
       const pluses = document.querySelectorAll(".fa-plus");

       pluses.forEach((plus) => {
         plus.addEventListener("click", function (event) {
            event.target.parentNode.parentNode.querySelector("p").innerText =
             Number(event.target.parentNode.parentNode.querySelector("p").innerText) + 1;
             let total=document.querySelector('.totalprice');
             let prix=Number(event.target.parentNode.parentNode.querySelector('.price').innerText.slice(0,-1))
             
             total.innerHTML=(Number(total.innerHTML.slice(0,-1))+prix)+'€'
         });
       });
       const minuses = document.querySelectorAll(".fa-minus");
       minuses.forEach((plus) => {
         plus.addEventListener("click", function (event) {
           if (event.target.parentNode.parentNode.querySelector("p").innerText > 1) {
             event.target.parentNode.parentNode.querySelector("p").innerText =
               Number(event.target.parentNode.parentNode.querySelector("p").innerText) - 1;
               let total=document.querySelector('.totalprice');
               let prix=Number(event.target.parentNode.parentNode.querySelector('.price').innerText.slice(0,-1))
               total.innerHTML=(Number(total.innerHTML.slice(0,-1))-prix)+'€'
           }
         });
       });
       let total=document.querySelector('.totalprice');
     total.innerHTML=(Number(total.innerHTML.slice(0,-1))+(cartItem.price*cartItem.quantity))+'€'
      //dlt btn
  const dltbtns=document.querySelectorAll('.dlt');
  dltbtns.forEach((dltbtn)=>{
dltbtn.addEventListener('click',function(event){
    let cnt=document.querySelector('nav p')
    cnt.innerText=Number(cnt.innerText)-1;
    let total=document.querySelector('.totalprice');
    let prix=Number(event.target.parentNode.querySelector('.price').innerText.slice(0,-1))
    let qnt=Number(event.target.parentNode.querySelector('p').innerText)
    console.log(qnt,prix);
    total.innerHTML=(Number(total.innerHTML.slice(0,-1))-(prix*qnt))+'€'

  let i=cartItems.indexOf(cartItems.find((e) => e.title ===event.target.parentNode.querySelector('.names').innerText));
  cartItems.splice(i,1)
    
 event.target.parentNode.remove();

})

 

  })
     } 

    
    
   });
 });
 
 //buy
 buy.addEventListener('click',function(){
    let cnt=document.querySelector('nav p')
    cnt.innerText='';
    elm=this.parentElement.querySelectorAll('.box');
      if(elm.length!=0){
       alert("successful purchase")
       for (var s = 0 ; s < (elm.length); s++){
           elm[s].remove();
           let ttl=document.querySelector('.totalprice')
           ttl.innerHTML=0+'€'
           cartItems = [];
          }
          
      }
      else{alert("add product")}
     })