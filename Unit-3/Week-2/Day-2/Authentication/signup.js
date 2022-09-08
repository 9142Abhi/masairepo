let data =JSON.parse(localStorage.getItem('sign'))||[];

function clicksignup(event){
    event.preventDefault();
data.forEach(el => {
    let form=document.getElementById('form');
    let name=form.name.value;
    let password=form.password.value;
    if(name===el.name && password==el.password){
        alert('Signup Successfull');
    }else{
        alert('Authentication rejected');
    }
});
}