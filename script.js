
function priGe(){
    let k = +2;
    let num = parseInt(document.getElementById('priNum').value);
    let doc = "1. 2 <br> 2. 3 <br>";
    for(i=4; k < num; i++){
        for(j=2; j< Math.sqrt(i); j++){
            if (i%j==0) break;
            else if ((j+1)> Math.sqrt(i)){
                k+=1;
                doc += k +". "+ i +"<br>";
            }
        }
    }
    document.getElementById('layout').innerHTML= doc;
}
