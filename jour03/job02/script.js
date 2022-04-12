'use strict';


    const hide = document.querySelector("#article");
    const btn = document.getElementById("button");

    let i = 0

    btn.addEventListener('click',function showHide() {
        if(i%2===0){

                hide.style.display ='none'
                i++
        }else{
            hide.style.display ='block'    
            i++ 

        }
        console.log(i)
    })


    //console.log(1);
//});
// function showhide(id){

        
    //         if (hide.style.display === "none") {

    //           hide.style.display = "block";
    //         } else {

    //           hide.style.display = "none";
    //         }

