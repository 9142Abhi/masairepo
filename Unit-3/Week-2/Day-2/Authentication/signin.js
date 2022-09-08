 function func(n,p){
    this.name=n;
    this.password=p;
}




function myfun(event){
    event.preventDefault();
    let obj={};
    let form=document.querySelector('form');
    let name =form.name.value;
    let password=form.password.value;
    let output=new func(name,password);
    let data=JSON.parse(localStorage.getItem('sign'))||[];
    // console.log(data);
    data.innerHTML=null;
    data.push(output);
    localStorage.setItem('sign',JSON.stringify(data));
    
}
