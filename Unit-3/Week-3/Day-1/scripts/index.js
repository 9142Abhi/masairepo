let key='AIzaSyCUts-Y7tBnY6RezlVch-TXFnq9valY0KM';
// https//youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=query
// 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]' \
let query =document.getElementById('query').value;
let container=document.getElementById('container');
let loadPage =async ()=>{
    try{
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&chart=mostPopular&key=${key}&maxResults=40`);
    let data = await res.json();
    let popular_data=data.items;
    // console.log(popular_data)
    appendPopularVideo(popular_data);
    }
    catch(err){
        console.log(err);
    }
}

let appendPopularVideo=(data)=>{
   container.innerHTML=null; 
data.forEach(({id,snippet})=>{
    let div=document.createElement('div');
    let image=document.createElement('img');
    image.src=snippet.thumbnails.high.url;
    let p=document.createElement('p');
    p.innerHTML=snippet.title;
    let data={
        id,
        
    }
    div.onclick=()=>{
        storeVideo(data);
    }
    div.append(image,p);
    
    container.append(div);

    
})
}
let storeVideo=(data)=>{
    localStorage.setItem('load',JSON.stringify(data));
    window.location.href='video.html'
}
const getData=async()=>{
    try{
    
   let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${query}&key=${key}`)
   let data =await res.json();
//    console.log(data.items);
let actual_data=data.items;
appendData(actual_data);



    }
    catch(err){
        console.log(err);
    }
}

let appendData =(data)=>{

container.innerHTML=null;

    data.forEach(({id:{videoId},snippet})=>{
        
        // console.log(snippet);
        // let video=document.createElement('iframe');
        // video.src=id.videoId;

        let box=document.createElement('div');
        let image=document.createElement('img');
        image.src=snippet.thumbnails.high.url;
        let title=document.createElement('p');
        title.innerText=snippet.title;
        let data={
            snippet,
            videoId,
        }
        box.onclick=()=>{
            storeClickedVideo(data);
        }  
        box.append(image,title);
        container.append(box);

    })
    

}
let storeClickedVideo = (data)=>{
    localStorage.setItem('clicked_video',JSON.stringify(data));
    window.location.href='video.html';
}

document.getElementById('uploaddate').addEventListener('click',uploadDate);
// &activities?publishedAfter=14-11-2022&publishedBefore=15-11-2022
async function uploadDate(){
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${query}&key=${key}?activities?publishedAfter=14-11-2022&publishedBefore=15-11-2022`)
    let data=await res.json();
    console.log(data);
}