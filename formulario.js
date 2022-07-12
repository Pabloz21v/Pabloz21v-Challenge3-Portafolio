document.querySelector("#btn-submit")
    .addEventListener("submit", e => {
        
         e.preventDefault()
         const data = Object.fromEntries(new FormData(e.target)
            //console.log(e), // todo el evento
            //console.log(e.target), //toma toda la estructura html
            //console.log(FormData), // Los objetos FormData le permiten 
            // compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest
            //console.log(new FormData(e.target)),
          
            )
         //console.log(data) // clave valor producto de Object.fromEntries
         
         //alert(JSON.stringify(data))
    })