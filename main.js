//nav animation
let nav=document.querySelector('nav');
document.addEventListener('scroll',function(){
if(scrollY >= 100){
  nav.classList.add('nav2')
}
else{
    nav.classList.remove('nav2')
}})
// home animation
let home=document.querySelector('#home');
background()
let rpt=setInterval(background,12000);
function background(){
  setTimeout((function(){home.style.backgroundImage='url(/image/paysage-1.jpg)'}),2000);
  setTimeout((function(){home.style.backgroundImage='url(/image/paysage-2.jpg)'}),4000);
  setTimeout((function(){home.style.backgroundImage='url(/image/paysage-3.jpg)'}),6000);
  setTimeout((function(){home.style.backgroundImage='url(/image/paysage-4.jpg)'}),8000);
  setTimeout((function(){home.style.backgroundImage='url(/image/paysage-5.jpg)'}),10000);
  setTimeout((function(){home.style.backgroundImage='url(/image/paysage-6.jpg)'}),12000);
}
// event section animation
let r=document.querySelector('.right')
let l=document.querySelector('.left')
document.addEventListener('scroll',function(){
  if(scrollY >=2400){
    l.classList.add('activerl')
    r.classList.add('activerl')
  }
  })
  //etat
  let alger=document.querySelector('#DZA2195');
 let algerContent=document.querySelector('.alger')
  alger.addEventListener('click',function(){

algerContent.style.width=('100%')
algerContent.style.top=('0%')
algerContent.style.left=('0%')
algerContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let x= algerContent.querySelector('.fa-xmark')
  x.addEventListener('click',function(){
  
    algerContent.style.width=('0%')
    algerContent.style.top=('61%')
    algerContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let oran=document.querySelector('#DZA2145');
 let oranContent=document.querySelector('.Oran')
  oran.addEventListener('click',function(){

oranContent.style.width=('100%')
oranContent.style.top=('0%')
oranContent.style.left=('0%')
oranContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let x2= oranContent.querySelector('.fa-xmark')
  x2.addEventListener('click',function(){
  
    oranContent.style.width=('0%')
    oranContent.style.top=('61%')
    oranContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let bejaia=document.querySelector('#DZA2208');
 let bejaiaContent=document.querySelector('.bejaia')
  bejaia.addEventListener('click',function(){

bejaiaContent.style.width=('100%')
bejaiaContent.style.top=('0%')
bejaiaContent.style.left=('0%')
bejaiaContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let x3= bejaiaContent.querySelector('.fa-xmark')
  x3.addEventListener('click',function(){
  
    bejaiaContent.style.width=('0%')
    bejaiaContent.style.top=('61%')
    bejaiaContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let Constantine=document.querySelector('#DZA2217');
 let ConstantineContent=document.querySelector('.Constantine')
  Constantine.addEventListener('click',function(){

ConstantineContent.style.width=('100%')
ConstantineContent.style.top=('0%')
ConstantineContent.style.left=('0%')
ConstantineContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let x4= ConstantineContent.querySelector('.fa-xmark')
  x4.addEventListener('click',function(){
  
    ConstantineContent.style.width=('0%')
    ConstantineContent.style.top=('61%')
    ConstantineContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let setif=document.querySelector('#DZA2215');
 let setifContent=document.querySelector('.setif')
  setif.addEventListener('click',function(){

    setifContent.style.width=('100%')
    setifContent.style.top=('0%')
    setifContent.style.left=('0%')
    setifContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let x5= setifContent.querySelector('.fa-xmark')
  x5.addEventListener('click',function(){
  
    setifContent.style.width=('0%')
    setifContent.style.top=('61%')
    setifContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let tipaza=document.querySelector('#DZA2198');
 let tipazaContent=document.querySelector('.Tipaza')
 tipaza.addEventListener('click',function(){

  tipazaContent.style.width=('100%')
  tipazaContent.style.top=('0%')
  tipazaContent.style.left=('0%')
  tipazaContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let x6= tipazaContent.querySelector('.fa-xmark')
  x6.addEventListener('click',function(){
  
    tipazaContent.style.width=('0%')
    tipazaContent.style.top=('61%')
    tipazaContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let Tlemcen=document.querySelector('#DZA2147');
 let TlemcenContent=document.querySelector('.Tlemcen')
 Tlemcen.addEventListener('click',function(){

  TlemcenContent.style.width=('100%')
  TlemcenContent.style.top=('0%')
  TlemcenContent.style.left=('0%')
  TlemcenContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let x7= TlemcenContent.querySelector('.fa-xmark')
  x7.addEventListener('click',function(){
  
    TlemcenContent.style.width=('0%')
    TlemcenContent.style.top=('61%')
    TlemcenContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let Tamanrasset=document.querySelector('#DZA2189');
 let TamanrassetContent=document.querySelector('.Tamanrasset')
 Tamanrasset.addEventListener('click',function(){

  TamanrassetContent.style.width=('100%')
  TamanrassetContent.style.top=('0%')
  TamanrassetContent.style.left=('0%')
  TamanrassetContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let x8= TamanrassetContent.querySelector('.fa-xmark')
  x8.addEventListener('click',function(){
  
    TamanrassetContent.style.width=('0%')
    TamanrassetContent.style.top=('61%')
    TamanrassetContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let Annaba=document.querySelector('#DZA2163');
 let AnnabaContent=document.querySelector('.Annaba')
 Annaba.addEventListener('click',function(){

  AnnabaContent.style.width=('100%')
  AnnabaContent.style.top=('0%')
  AnnabaContent.style.left=('0%')
  AnnabaContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let x9= AnnabaContent.querySelector('.fa-xmark')
  x9.addEventListener('click',function(){
  
    AnnabaContent.style.width=('0%')
    AnnabaContent.style.top=('61%')
    AnnabaContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let Ghardaïa=document.querySelector('#DZA2192');
 let GhardaïaContent=document.querySelector('.Ghardaïa')
 Ghardaïa.addEventListener('click',function(){

  GhardaïaContent.style.width=('100%')
  GhardaïaContent.style.top=('0%')
  GhardaïaContent.style.left=('0%')
  GhardaïaContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let x10= GhardaïaContent.querySelector('.fa-xmark')
  x10.addEventListener('click',function(){
  
    GhardaïaContent.style.width=('0%')
    GhardaïaContent.style.top=('61%')
    GhardaïaContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let eventA=document.querySelector('.main');
 let eventAContent=document.querySelector('.eventA')
eventA.addEventListener('click',function(){

 eventAContent.style.width=('100%')
 eventAContent.style.top=('0%')
 eventAContent.style.left=('0%')
 eventAContent.style.bottom=('0%')
 document.documentElement.style.overflow='hidden'



  })
  let ev=eventAContent.querySelector('.fa-xmark')
  ev.addEventListener('click',function(){
  
   eventAContent.style.width=('0%')
   eventAContent.style.top=('61%')
   eventAContent.style.left=('50%')
   document.documentElement.style.overflow='auto'
    
      })
  let alls=document.querySelectorAll('.willaya');
 let allContent=document.querySelector('.all')
alls.forEach( all=> {
  all.addEventListener('click',function(){

    allContent.style.width=('100%')
    allContent.style.top=('0%')
    allContent.style.left=('0%')
    allContent.style.bottom=('0%')
    document.documentElement.style.overflow='hidden'
   
   
   
     })
     let x11=allContent.querySelector('.fa-xmark')
     x11.addEventListener('click',function(){
     
      allContent.style.width=('0%')
      allContent.style.top=('61%')
      allContent.style.left=('50%')
      document.documentElement.style.overflow='auto'
       
         })
});
let mountain=document.querySelector('.Mountain');
let mountainContent=document.querySelector('.Mountainc')
mountain.addEventListener('click',function(){

mountainContent.style.width=('100%')
mountainContent.style.top=('0%')
mountainContent.style.left=('0%')
mountainContent.style.bottom=('0%')
document.documentElement.style.overflow='hidden'



 })
 let mount=mountainContent.querySelector('.fa-xmark')
 mount.addEventListener('click',function(){
 
  mountainContent.style.width=('0%')
  mountainContent.style.top=('61%')
  mountainContent.style.left=('50%')
  document.documentElement.style.overflow='auto'
   
     })
let Sea=document.querySelector('.sea');
let SeaContent=document.querySelector('.seac')
Sea.addEventListener('click',function(){

SeaContent.style.width=('100%')
SeaContent.style.top=('0%')
SeaContent.style.left=('0%')
SeaContent.style.bottom=('0%')
document.documentElement.style.overflow='hidden'



 })
 let se=SeaContent.querySelector('.fa-xmark')
 se.addEventListener('click',function(){
 
  SeaContent.style.width=('0%')
  SeaContent.style.top=('61%')
  SeaContent.style.left=('50%')
  document.documentElement.style.overflow='auto'
   
     })
let sahara=document.querySelector('.Sahara');
let saharaContent=document.querySelector('.Saharac')
sahara.addEventListener('click',function(){

saharaContent.style.width=('100%')
saharaContent.style.top=('0%')
saharaContent.style.left=('0%')
saharaContent.style.bottom=('0%')
document.documentElement.style.overflow='hidden'



 })
 let sah=saharaContent.querySelector('.fa-xmark')
 sah.addEventListener('click',function(){
 
  saharaContent.style.width=('0%')
  saharaContent.style.top=('61%')
  saharaContent.style.left=('50%')
  document.documentElement.style.overflow='auto'
   
     })
     let barre=document.querySelector('.barre');
     let items=document.querySelector('.items');
     let barre1=document.querySelector('.barre1');
     let barre2=document.querySelector('.barre2');
     let barre3=document.querySelector('.barre3');
     barre.addEventListener('click',function(){
   items.classList.toggle('active-barre')
   barre1.classList.toggle("barre1a")
   barre2.classList.toggle("barre2a")
   barre3.classList.toggle("barre3a")
   
     })

      

  