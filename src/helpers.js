
function choice(items){
    let n = items.length; 
    let randInd = Math.floor(Math.random() * n);

    return items[randInd]; 
}


function remove(items, item){
    let result = undefined;
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            items.splice(i, 1); 
            result = item;
        }
    }
    return result;
}


export {choice, remove}; 