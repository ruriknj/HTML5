let email = 'joao@hcode.com.br';
console.log(email);

email = 'rurknj@homail.com';
console.log('O seu e-mail é:' + email);
console.log(`O seu e-mail é: ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('O botão foi cliacado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O mouse está sobre o formulário');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse está fora do formulário');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

   let json = {
        email, // ou email: email
        password //ou password: password
    };

    console.log(json);

    let StringJSON = JSON.stringify(json); 

    console.log(StringJSON);

    let jsonParse = JSON.parse(StringJSON);

    console.log(jsonParse);
    console.log(jsonParse.email);

    if(!json.email) {
        console.error('O campo e-mail deve ser prenechido');
    } else if (!json.password) {
        console.error('O campo password deve ser prenechido');
    } else {
        console.log('Dados validados com sucesso');
    }

});


