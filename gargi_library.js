function click (a,b){
    if(a.x - b.x <= (a.width + b.width)/2 && 
    b.x - a.x <= (a.width + b.width)/2 &&
    a.y - b.y <= (a.height+b.height)/2 &&
    b.y - a.y <= (a.height+b.height)/2){
  
    return true;    
    }

    else {
    return false;
    }


}