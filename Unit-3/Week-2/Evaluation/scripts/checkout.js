/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/
function submit(){
setTimeout(function(){
    let name=document.getElementById('name');
    let number=document.getElementById('number');
    let address=document.getElementById('address').innerHTML;
    
    alert('Your order is accepted')
    },0)
    
    setTimeout(function(){
        
        alert('Your order is being packed')
        },3000)
        setTimeout(function(){
            
            alert('Your order is in transit')
            },8000)
                    
            setTimeout(function(){
            
                alert('Your order is out for delievery')
                },10000)
                setTimeout(function(){
            
                    alert('Ordered delive')
                    },12000)
                    
}
