const tarefa = document.getElementById('taskInput');
const botao = document.getElementById('addBtn');
const lista = document.getElementById('lista-tarefa');

botao.addEventListener("click", function() {
    const tarefaText = tarefa.value.trim();

    if (tarefaText === '') {
        alert('Preencha os dados corretamente!');
        return;
    }

    // criando o li
    const li = document.createElement('li');
    li.textContent = tarefaText;

    //botao de concluir
    const concluirBtn = document.createElement('button');
    concluirBtn.textContent = 'V';
    concluirBtn.addEventListener("click", function() {
        li.classList.toggle("completed");
    })

    //botao de remover
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", function() {
        lista.removeChild(li)
    });

    // Adiciona os botões aos li
    li.appendChild(concluirBtn);
    li.appendChild(removeBtn);

    // Adiciona li a lista ul
    lista.appendChild(li);

    tarefa.value="";
    tarefa.focus();

})