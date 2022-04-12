


function jourtravaille(year,month,day){

    var moisun = month-1;
    var date = new Date(year,moisun,day);
    joursferies = [2020-01-01,2020-04-13,2020-05-01,2020-05-08,2020-15-02,2020-06-01,2020-07-14,2020-08-15,2020-11-01,2020-11-11,2020-12-25];

    for(var i=0;i<joursferies.length;i++){

        
        if(joursferies[i]==year-month-day){
            
            return console.log('Oui ce jour est un jour ferié');
        }
    }

     if (date.getDay()==0||date.getDay()==6){

        console.log('Non le ' +  day +'/'+ month + '/' + year + ' est un week end');
    }
    else {

        console.log('travail')
    }
}

jourtravaille(2020,04,12);

