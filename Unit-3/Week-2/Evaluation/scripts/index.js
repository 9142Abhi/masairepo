

// The items should be stored in local storage with key :- “items”

// API :- https://grocery-mock-api.herokuapp.com/items

    async function getItem(){
        let res=await fetch(`https://grocery-mock-api.herokuapp.com/items`);
        let data= await res.json();
        let actual_data=data.data;
        console.log(actual_data);
        append(actual_data)
    }

    function append(data){
        let container= document.getElementById('items');
        container.innerHTML=null;
        let arr=JSON.parse(localStorage.getItem('items'))||[];
        data.forEach(function(el){
        
        let div=document.createElement('div');
        div.className='item';
        let img=document.createElement('img');
        img.src=el.image;
        let name=document.createElement('p');
        name.innerText=el.name;
        let price=document.createElement('p');
        price.innerHTML=el.price;
        
        let btn = document.createElement('button');
        btn.innerText='Add to cart';
        btn.className='add_to_cart';
        
        btn.addEventListener('click',function() {
            let a= new construct(img.src,name.innerText,price.innerHTML,btn.innerHTML);
            arr.push(a);
    localStorage.setItem('items',JSON.stringify(arr));
            
    
        })
        div.append(img,name,price,btn);
        
        container.append(div);


        })
    }
    function construct(i,n,p,b){
        this.image=i;
        this.name=n;
        this.price=p;
        this.button=b;
    }

    











    getItem();