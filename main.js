function light()
{
    var img =document.getElementById("lampada")
 if   (img.src.includes("apagada.png")){
        img.src="assets/acesa.png"
 }
 else{
        img.src="assets/apagada.png"
 }
}
