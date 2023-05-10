
function validarLogin(){
    let username = document.getElementById('username')
    let labelusername = document.getElementById('username')


    let password = document.getElementById('password');
    let labelpassword = document.getElementById('password')


    let listaUser = [];

    let userValid = {
        email: '',
        password: '',
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(login.value === item.cpfCad && senha.value == item.passwordCad){
            userValid = {
                nome: item.nomeCad,
                senha: item.passwordCad
            }
        }
    })

    if(username.value == userValid.cpf && password.value == userValid.senha ){
        alert('Login realizado com sucesso')
    } else {
        username.setAttribute('style', 'border-color: red')
        labelusername.setAttribute('style', 'color: red')
        username.setAttribute('style', 'border-color: red')
        labelpassword.setAttribute('style', 'color: red')
        senha.focus()

        alert('Senha ou usuário incorretos')

    }
    console.log(userValid)

}