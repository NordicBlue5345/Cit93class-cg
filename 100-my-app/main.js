const formEl = document.getElementById('form');
const output = document.getElementById('output');

let data = [];

function updateDOM() {
  output.innerHTML = '';

  data.forEach((item, index) => {
    const container = document.createElement('div');
    container.classList.add('item');

    const textEl = document.createElement('p');
    textEl.textContent = item.text;
    container.appendChild(textEl);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      const newText = prompt('Enter new text');
      if (newText !== null) {
        data[index].text = newText;
        updateDOM();
      }
    });
    container.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      data.splice(index, 1);
      updateDOM();
    });
    container.appendChild(deleteButton);

    output.appendChild(container);
  });
}

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const text = e.target.text.value;
  data.push({ text });
  updateDOM();
  formEl.reset();
});