function pattern(rows){
    for (i =0; i< rows; i++){
        var array='';
        for (j=0; j<rows; j++){
            if(i===0|| i === rows-1|| j===0|| j=== rows-1){
                array+= '1';
                
            }else{
                array+= '0';
            }
        }
        console.log(array);
    }
}
pattern(5);