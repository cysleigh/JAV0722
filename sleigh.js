function sayYA5(welcome, ...names){   //不訂個數參數傳遞
    for (let name of names)
        document.write(`${welcome} ${name} <br>`);
}
//[a-zA-Z$_]
function checkTWID(id){
   //正規表適法
   let ret =false;
   let regex = /^[A-Z][12][0-9]{8}$/;
   if(id.match(regex) != null){
       ret = true ;
   }
   //document.write(id.match(regex));
   return ret;
}

function checkCEL(numb){
    let ret =false;
    let regex = /^09[-][0-9]{8}$/;
    if(numb.match(regex) != null){
        ret = true ;
    }
    return ret;
}