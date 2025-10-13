const input = document.getElementById('taskInput');
const botao = document.getElementById('addBtn');
const lista = document.getElementById('lista');

botao.addEventListener("click", function() {
    const taskText = input.value.trim();

    if (taskText === '') {
        alert("Preencha os dados corretamente")
    };

    // Criando o li
    const li = document.createElement('li');
    li.textContent = taskText;

    // Criando o botão de concluir
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'V';
    doneBtn.addEventListener("click", function() {
        li.classList.toggle("completed")
    });

    // Criando o botão de remover
    const removeBtn = document.createElement("button");
    removeBtn.textContent = 'X';
    removeBtn.addEventListener("click", function() {
        lista.removeChild(li);
    })

    // Adicionando os botões ao li;
    li.appendChild(doneBtn);
    li.appendChild(removeBtn);

    lista.appendChild(li);
    input.value = '';
    input.focus();
})