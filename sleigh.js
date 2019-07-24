function sayYA5(welcome, ...names){   //不訂個數參數傳遞
    for (let name of names)
        document.write(`${welcome} ${name} <br>`);
}
//[a-zA-Z$_]
function checkTWID(id){
   //正規表示法
    let ret =false;
    let record5 ;
    let regex = /^[A-Z][12][0-9]{8}$/;
    let letters='ABCDEFGHJKLMNPQRSTUVXYWZIO' ;
    if(id.match(regex) != null){
    let c1=id.charAt(0) ; 
    let n12= letters.indexOf(c1) + 10 ;  
    let n1= parseInt(n12 / 10) ;
    let n2= n12 % 10 ; 
    let n3= parseInt(id.substr(1,1)); 
    let n4= parseInt(id.substr(2,1));
    let n5= parseInt(id.substr(3,1));
    let n6= parseInt(id.substr(4,1));
    let n7= parseInt(id.substr(5,1));
    let n8= parseInt(id.substr(6,1));
    let n9= parseInt(id.substr(7,1));
    let n10= parseInt(id.substr(8,1));
    let n11= parseInt(id.substr(9,1));
    let sum = n1*1 + n2*9 + n3*8 + n4*7+ n5*6+ n6*5+ n7*4+ n8*3+ n9*2+ n10*1+ n11*1;
    ret = sum %10 == 0;
   }
   return ret;
   document.getElementById("record5").innerHTML = record5;
}

function checkCEL(numb){
    let ret =false;
    let regex = /^09[-][0-9]{8}$/;
    if(numb.match(regex) != null){
        ret = true ;
    }
    return ret;
}

function creatTWID(){
    //身分證隨機產生
    let gender = [1,2];
    let area = ['A','B','C','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let randgender = parseInt(Math.random()*2);
    let randarea = parseInt(Math.random()*26);
    creatTWIDall(area[randarea],gender[randgender]);
}

function creatTWIDV2(area){
    //可指定地區
    let gender = [1,2];
    let rand = parseInt(Math.random()*2);
    creatTWIDall(area,gender[rand]);
}

function creatTWIDV3(gender){
    //可隨機產生男生或女生
    let area = ['A','B','C','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let rand = parseInt(Math.random()*26);
    creatTWIDall(area[rand],gender);
}

function creatTWIDall(area,gender){
//都要 A123456789
    let twID = [];
    twID[0] = area;
    twID[1] = gender;
    let record ;
    for(let i=2 ; i< 10 ; i++){
        twID[i] = parseInt(Math.random()*10);  //隨機產生後8碼;
    }
    let isReal = checkTWID(twID.join(''));     //把陣列列出
    if (!isReal) {
        creatTWIDall(area,gender);
    } else {
        record = twID.join('') + "<br>";
        document.getElementById("record").innerHTML = record;
    }

}