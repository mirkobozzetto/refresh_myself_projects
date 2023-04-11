document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("new-task-form");
  const tasks = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-input");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
      return;
    }

    const task = createTask(taskValue);
    tasks.appendChild(task);

    taskInput.value = "";
  });

  function createTask(taskValue) {
    const task = document.createElement("div");
    task.className =
      "task mb-4 p-4 bg-gray-700 bg-opacity-40 rounded shadow flex flex-col";

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.className = "text w-full mb-2 bg-transparent focus:outline-none";
    taskInput.value = taskValue;
    taskInput.readOnly = true;

    const actions = document.createElement("div");
    actions.className = "actions flex justify-end";

    const editButton = document.createElement("button");
    editButton.className =
      "edit px-4 py-1 bg-purple-500 rounded mr-2 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      taskInput.readOnly = !taskInput.readOnly;

      if (taskInput.readOnly) {
        editButton.textContent = "Edit";
      } else {
        editButton.textContent = "Save";
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.className =
      "delete px-4 py-1 bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      tasks.removeChild(task);
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    task.appendChild(taskInput);
    task.appendChild(actions);

    return task;
  }
});
