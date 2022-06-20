function carregar() { 
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = '/images/imgmanha.jpg'
        document.body.style.background = '#e9e887'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = '/images/imgtarde.jpg'
        document.body.style.background = '#feab4f'
    } else {
        //BOA NOITE!
        img.src = '/images/imgnoite.jpg'
        document.body.style.background = '#282a41'
    }
}
