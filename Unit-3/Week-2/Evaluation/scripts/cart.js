

let arr=JSON.parse(localStorage.getItem('items'))||[];
let total= document.getElementById('cart_total');
let sum=0;

let div1=document.createElement('div');
    div1.id='cart';
arr.forEach(function(el){
    
    
    sum+=Number(el.price);
    let div=document.createElement('div');

    let image=document.createElement('img');
    image.src=el.image;
    let name= document.createElement('p');
    name.innerHTML=el.name;
    let price=document.createElement('p');
    price.innerHTML=el.price;
    let btn=document.createElement('button');
    btn.innerHTML='remove';
    btn.className='remove';
    btn.addEventListener('click',function(){
    // image.src=null;
    // name.innerHTML=null;
    // price.innerHTML=null;
    // btn.innerHTML=null;
    div.innerHTML=null;
//    let a= construct(image.src,name.innerHTML,price.innerHTML,btn.innerHTML)
//     arr.push(a)
//     localStorage.setItem('trash',JSON.stringify(arr));
        
    })
    div.append(image,name,price,btn);
    
    div1.append(div);
    document.body.append(div1);
    
    
})

// function construct()

total.innerHTML=sum;



