const btnAdd = document.querySelector('#btnAdd');
const btnRemov = document.querySelector('#btnRemov');
const btnFeito = document.querySelector('#btnFeito');
const inputTxt = document.getElementById('textoDeTarefa');



const lista = document.getElementById('lista');
const listaPrioridade = document.getElementById('prioridade');
const listaFeitos = document.getElementById('lista-feitos');


const checkBoxPrioridade = document.getElementById('cb-prioridade');
const checkBoxUrgente = document.getElementById('cb-urgente');





btnAdd.addEventListener('click', function() {
    const ps = document.createElement('p');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const div = document.createElement('div');
    div.classList.add('divList')

    div.appendChild(ps);
    div.appendChild(checkBox);
    ps.textContent = inputTxt.value

    const span = document.getElementById('spanDeAvisos');

    if(inputTxt.value === '') {
        span.textContent = 'Você não digitou nada'
    } else {
        if (checkBoxPrioridade.checked === true) {
            div.classList.add('prioridade');
            listaPrioridade.appendChild(div);
            
        } else if (checkBoxUrgente.checked === true) {
            div.classList.add('urgente')
            listaPrioridade.appendChild(div);

        } else {
            lista.appendChild(div)
            ps.textContent = inputTxt.value
        }

    checkBoxPrioridade.checked = false;
    checkBoxUrgente.checked = false;
    inputTxt.value = ''
    span.textContent = ''
    }

    
});


btnRemov.addEventListener('click', function() {
    const todaAsDivs = document.querySelectorAll('.divList');
    todaAsDivs.forEach(function(div) {
        const checkbox = div.querySelector('input[type="checkbox"]')
        if(checkbox.checked === true) {
            div.remove();
        }
    });
});

btnFeito.addEventListener('click', function() {
    const todasAsDivs = document.querySelectorAll('.divList');
    todasAsDivs.forEach(function(div) {
        const checkbox = div.querySelector('input[type="checkbox"]');
        
        if(checkbox.checked === true) {
            listaFeitos.appendChild(div)
            div.classList.add('feito')
        }
        checkbox.checked = false
    })
})
