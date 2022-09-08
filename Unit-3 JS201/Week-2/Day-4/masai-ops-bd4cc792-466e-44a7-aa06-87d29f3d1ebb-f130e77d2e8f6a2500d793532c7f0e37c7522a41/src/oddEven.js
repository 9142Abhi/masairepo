function getData(data) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let type=data;
            if(isNaN(data)){
            resolve(type);
            }else{
                reject('error');
            }

        },4000)


    });
return getPromise;

}

    // getPromise
    // .then(function(res){
    //     if(res%2==0){
    //         console.log('even')
    //     }else{
    //         console.log('odd')
    //     }
    // })
    // .catch(function(err){
    //     console.log('error');
    // })

export default getData
