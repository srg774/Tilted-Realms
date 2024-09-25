const draggables = document.querySelectorAll('.draggable-item');
const list = document.getElementById('todo-list');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

list.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(list, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
        list.appendChild(draggable);
    } else {
        list.insertBefore(draggable, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
