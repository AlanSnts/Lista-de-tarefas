const btnAdd = document.querySelector('#btnAdd');
const btnRemov = document.querySelector('#btnRemov');
const inputTxt = document.getElementById('textoDeTarefa');



const lista = document.getElementById('lista');
const listaPrioridade = document.getElementById('prioridade');


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
            ps.classList.add('prioridade');
            listaPrioridade.appendChild(div);
            
        } else if (checkBoxUrgente.checked === true) {
            ps.classList.add('urgente')
            listaPrioridade.appendChild(div);

        } else {
            lista.appendChild(div)
            ps.textContent = inputTxt.value
        }

    checkBoxPrioridade.checked = false;
    checkBoxUrgente.checked = false;
    inputTxt.value = ''
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


