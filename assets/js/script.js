const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Botão concluir
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Botão remover
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // evira marcar como concluída no botão
        li.remove();
    })    

    li.appendChild(removeBtn);
    list.appendChild(li);

    input.value = "";
    
});