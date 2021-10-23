function formulario(){
    let formulario= document.getElementById("contenedor")
        contenedor.innerHTML =
        "<form>"+
                "<h2>Rellename</h2>"+
                "<h3>DNI &nbsp <input type='text' name='DNI' id='DNI' placeholder='DNI'></h3>"+
                "<h3>Nombre &nbsp <input type='text' name='Nombre' id='Nombre' placeholder='Nombre'></h3>"+
                "<h3>Apellidos &nbsp <input type='text' name='Apellidos' id='Apellidos' placeholder='Apellidos'></h3>"+
                "<h3>Dirección &nbsp <input type='text' name='Dirección' id='Dirección' placeholder='Dirección'></h3>"+
                "<h3>Telefono &nbsp <input type='text' name='Telefono' id='Telefono' placeholder='Telefono'></h3>"+
                

                "<h4>Opinion del formulario</h4>"+
                "<label for='opcion1'>"+
                    "<input type='radio' name='opcion1' value='opcion1.1'> Mal"+
                    "<br></br>"+
                    "<input type='radio' name='opcion1' value='opcion1.2'> Bueno"+
                    "<br></br>"+
                    "<input type='radio' name='opcion1' value='opcion1.3'> Los he visto mejores"+
                    "<br></br>"+
                    "<input type='radio' name='opcion1' value='opcion1.4'> Es lo mejor que vi en mi vida voy a poner un 10"+
                    "<br></br>"+
                "</label>"+

                "<h4>Comprobando si has leido las opciones</h4>"+
                "<label for='opcion2'>"+
                    "<input type='radio' name='opcion2' value='opcion2.1'>No"+
                    "<br></br>"+
                    "<input type='radio' name='opcion2' value='opcion2.2'>Por encima"+
                    "<br></br>"+
                    "<input type='radio' name='opcion2' value='opcion2.3'>Lo lei pero no me hizo gracia"+
                    "<br></br>"+
                    "<input type='radio' name='opcion2' value='opcion2.3'>Lo lei, me hizo gracia y ademas os pondre el 10"+
                    "<br></br>"+
                "</label>"+

                "<h4>Lista de checkbox</h4>"+
                "<input type='checkbox' name='chbox' value='chbox.1'>Opcion 1"+
                "<br></br>"+
                "<input type='checkbox' name='chbox' value='chbox.2'>Opcion 2"+
                "<br></br>"+
                "<input type='checkbox' name='chbox' value='chbox.3'>Opcion 3"+
                "<br></br>"+
                "<input type='checkbox' name='chbox' value='chbox.4'>Opcion 4"+

                "<h3 class='Encabezado'>Describe que te transmite las siguientes imagenes</h3>"+
                "<img src='La nota que le pondre a estos alumnos.jpg' id='foto1' alt='Foto en la que te planteas ponernos el 10'>"+
                "<img src='tus alumnos al ver la nota en esta actividad.jpg' id='foto2' alt='Foto en la que se ve a tus alumnos felices al ver el pedazo de 10 que tienen'>"+
                "<br></br>"+
                "<textarea rows='10' cols='50' placeholder='Escribir texto'></textarea>"+
                "<input id='enviar' type='submit' value='Enviar'>"+
            "</form>";
}