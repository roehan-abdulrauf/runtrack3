document.addEventListener('keydown',function (event){
    let textArea = document.querySelector('#keylogger')
    let touche = event.key
    textArea.append(touche)
    if (textArea.focus){
        textArea.append(touche)
    }
})