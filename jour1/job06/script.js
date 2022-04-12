function fizzbuzz(){
    for(var i =0;i<=151;i++){
        
        if(i%3== 0 && i%5== 0){

        document.write('FIZZBUZZ'+' ');

        } else if(i%3== 0){

            document.write('FIZZ'+' ');
        
        } else if(i%5== 0){

            document.write('BUZZ'+'');
        } else {
            document.write(i+' ');
        }
        
    }
}

fizzbuzz();

