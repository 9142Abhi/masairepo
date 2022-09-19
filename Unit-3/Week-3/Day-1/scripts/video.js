
let main=document.getElementById('main');
let container=document.getElementById('container');
function appendVideo(){
    main.innerHTML=null;
    let {videoId} =JSON.parse(localStorage.getItem('clicked_video'))||[];

    let {id} =JSON.parse(localStorage.getItem('load'))||[];
    // console.log(id);
    if(id){
    let iframe1=document.createElement('iframe');
    iframe1.src=`https://www.youtube.com/embed/${id}`;
    iframe1.width='100%';
    iframe1.height='100%';
    iframe1.setAttribute('allowfullscreen',true);
    main.append(iframe1);
    localStorage.clear();
    }
    // let {snippet}=JSON.parse(localStorage.getItem('clicked_video'));
    // let title=document.createElement('p');
    // title.innerHTML=`https://www.youtube.com/embed/${snippet.title}`
    else{
    let iframe=document.createElement('iframe');
    iframe.src=`https://www.youtube.com/embed/${videoId}`;
    iframe.width='100%';
    iframe.height='100%';
    iframe.setAttribute('allowfullscreen',true);
    main.append(iframe);
    localStorage.clear();
    }
}