
// ARRAY DE FORM'S

let arrayPosts = [];

function submit(){
    //Informações do Form's
    let inputs = document.querySelectorAll('input');
    let erros = document.querySelectorAll('.error');
    
    let arrayItem = [];

    for (let i = 0; i < inputs.length;i++){
        let input = inputs[i];
        let erro = erros[i];
    

        if (input.value.trim() === ''){
            erro.classList.add('show');
            input.classList.add('show-border');
            input.classList.remove('report-ok');
            console.log(`Vai ativar o input ${input.name} e o erro ${erro.textContent}`);
        }
        else {
            arrayItem.push(input.value);
            erro.classList.remove('show');
            input.classList.add('report-ok');
        }
    }

    console.log('ArrayItem :',arrayItem);

    if (arrayItem.length !== 4){
        console.log('Nada');
    } else {
        arrayPosts.push(arrayItem);
    }

    console.log('Array Posts: ',arrayPosts);
}


