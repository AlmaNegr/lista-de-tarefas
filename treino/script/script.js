const tarefa = document.getElementById('taskInput');
const adicionar = document.getElementById('addBtn');
const lista = document.getElementById('lista-tarefa');

adicionar.addEventListener('click', function() {
    const addTarefa = tarefa.value.trim();
    
    if (addTarefa === '') {
        alert('Preencha corretamente...');
        return;
    }

    // Criando elemento
    const li = document.createElement('li');
    li.textContent = addTarefa;

    // criando o botão de concluir
    const doneBtn = document.createElement('button');
    doneBtn.textContent = '✔'
    doneBtn.addEventListener('click', function() {
        li.classList.toggle("completed");
    })

    // Criando o botão de remover
    const removeBtn = document.createElement("button");
    removeBtn.textContent = '❌';
    removeBtn.addEventListener('click', function() {
        lista.removeChild(li)
    });

    // Adiciona os botões ao li
    li.appendChild(doneBtn);
    li.appendChild(removeBtn);

    // Adiciona o li a lista
    lista.appendChild(li);

    // Limpa o campo do texto
    tarefa.focus();
    tarefa.value = "";


})