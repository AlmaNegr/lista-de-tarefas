// Selecionando elementos do DOM
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Função para adicionar uma nova tarefa
addBtn.addEventListener("click", function() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa primeiro!");
        return;
    }

    // Criando o elemento <li>
    const li = document.createElement("li");
    li.textContent = taskText;

    // Botão de concluir
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✔";
    doneBtn.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Botão de remover
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // Adiciona os botões ao li
    li.appendChild(doneBtn);
    li.appendChild(removeBtn);

    // Adiciona o li à lista
    taskList.appendChild(li);

    // Limpa o campo de texto
    input.value = "";
});
