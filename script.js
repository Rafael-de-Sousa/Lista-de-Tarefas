// Pega os elementos do DOM
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    // Verifica se o campo de entrada está vazio ou só contém espaços; se sim, exibe um alerta e interrompe a função
    if (!newTaskInput.value.trim()) return alert('Por favor, adicione uma tarefa!');

    // Cria um novo elemento <li> que representa a tarefa
    const li = document.createElement('li');

    // Define o conteúdo HTML do <li>: o texto da tarefa e o botão "Remover"
    // O atributo onclick faz com que o item seja removido ao clicar no botão
    li.innerHTML = `${newTaskInput.value.trim()} <button onclick="this.parentElement.remove()">Remover</button>`;

    // Adiciona o novo item de lista à lista de tarefas existente no HTML (<ul>)
    taskList.appendChild(li);

    // Limpa o campo de entrada de texto após adicionar a tarefa
    newTaskInput.value = '';
}

// Adiciona um ouvinte de eventos ao botão "Adicionar", que chama a função adicionarTarefa() quando clicado
addTaskBtn.addEventListener('click', adicionarTarefa);

// Adiciona um ouvinte de eventos ao campo de entrada de texto para adicionar a tarefa ao pressionar "Enter"
newTaskInput.addEventListener('keypress', (e) => e.key === 'Enter' && adicionarTarefa());



