

let ids = ['user-email','new-username','new-user-password']
let icons = ['<i class="fas fa-home"></i>'];
let options = ['<i class="fas fa-marker  icons-options"></i>entradas', '<i class="fas fa-photo-video  icons-options"></i>media', '<i class="fas fa-columns  icons-options"></i>paginas', '<i class="far fa-comment  icons-options"></i>comentarios', '<i class="fas fa-pencil-ruler  icons-options"></i>apariencia', '<i class="fas fa-user-friends  icons-options"></i>usuarios', '<i class="fas fa-tools  icons-options"></i>herramientas']

// .................................................................................................. //

// ------------------------------------------------------

for (let i=0; i<options.length; i++){
    document.getElementById('dashboard-options').innerHTML += 
    `
        <a href="#" class="list-group-item list-group-item-action a-list">${options[i]}</a>
    
    `
}

// ------------------------------------------------------

// validando create account 
function registrarUsuario(){
    let persona = {
        email : document.getElementById('user-email').value,
        userName : document.getElementById('new-username').value,
        password : document.getElementById('new-user-password').value
    }
    let emailResult = validarCorreo(persona.email);

    if(emailResult == false || emailResult == "" || emailResult == null){
        document.getElementById('user-email').classList.remove('is-valid');
        document.getElementById('user-email').classList.add('is-invalid');
        document.getElementById('aa').removeAttribute('href');
    }
    else{
        document.getElementById('user-email').classList.remove('is-invalid');
        document.getElementById('user-email').classList.add('is-valid');
        document.getElementById('aa').setAttribute('href');
    }
    
    if (persona.userName == "" || persona.userName == null){
        document.getElementById('new-username').classList.remove('is-valid');        
        document.getElementById('new-username').classList.add('is-invalid');
    }
    else{
        document.getElementById('new-username').classList.remove('is-invalid');
        document.getElementById('new-username').classList.add('is-valid');
    }

    if(persona.password == "" || persona.password == null){
        document.getElementById('new-user-password').classList.remove('is-valid');        
        document.getElementById('new-user-password').classList.add('is-invalid');
    }
    else{
        document.getElementById('new-user-password').classList.remove('is-invalid');        
        document.getElementById('new-user-password').classList.add('is-valid');
    }
    if((persona.password).length < 8){
        document.getElementById('new-user-password').classList.remove('is-valid');        
        document.getElementById('new-user-password').classList.add('is-invalid');
    }
    else{
        document.getElementById('new-user-password').classList.remove('is-invalid');                
        document.getElementById('new-user-password').classList.add('is-valid');            
    }
    return persona;
}


function validarCorreo(loginUser) {   
    correo = loginUser;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let resultado = re.test(correo);
    
    return resultado;
}

function iniciarSesion(){
    let loginUser = {
        userName: document.getElementById('login-user').value,
        password: document.getElementById('password-user').value
    }

    validarCorreo(loginUser);

    if(loginUser.password == "" || loginUser.password == null){
        document.getElementById('password-user').classList.remove('is-valid');
        document.getElementById('password-user').classList.add('is-invalid');
    }
    else{
        document.getElementById('password-user').classList.remove('is-invalid');
        document.getElementById('password-user').classList.add('is-valid');
    }
    
    return loginUser;
}

// document.getElementById('aa').removeAttribute('href');

// function prueba(){
//     var texto = "hola mundo";
//     return texto;
// }

// console.log('resultados: '+prueba());
// resultados = prueba()

// function imprimiendoPrueba(r){
//     console.log('aqui '+r)
// }

// imprimiendoPrueba(resultados);




