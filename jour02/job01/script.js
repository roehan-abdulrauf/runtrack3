'use strict';
document.addEventListener('DOMContentLoaded', function(){

    
    var btn = document.getElementById('button')
    var citation = document.getElementById('citation').innerHTML

    btn.addEventListener('click', show)

    function show()
    {
        console.log(citation)
    } 

})
    





