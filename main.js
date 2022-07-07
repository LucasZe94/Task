import './style.css'

const btnForm = document.getElementById('btn-form');
const listTask = document.getElementById('listTask');
const search = document.querySelector('.search');



btnForm.addEventListener('click', (e) => {
  e.preventDefault();
  addTask();
});

document.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.matches('#btn-delete')) {
    deleteTask(e)
  }
});

document.addEventListener('keyup', searchTask);



function addTask() {

  const title = document.getElementById('title');
  const description = document.getElementById('description');



  const div = document.createElement('div');
  div.className = 'border  m-1 p-1';
  div.innerHTML = `
        <li id='itemList' class='d-flex justify-content-between align-items-center items'><span class="text-info">${title.value} - ${description.value}</span>
        <button id='btn-delete' class='btn btn-danger' >x</button></li>`;


  if (title.value.length >= 0 && description.value.length >= 1) {
    listTask.appendChild(div);
    alert('Task success', 'success')
  } else {
    alert('Incomplete fields', 'danger')
  }

  title.value = ''
  description.value = ''

}

function deleteTask(e) {
  if (e.target.matches('#btn-delete')) {
    const itemList = document.getElementById('itemList').parentElement;
    listTask.removeChild(itemList);
  }
}

function alert(text, color) {
  const container = document.querySelector('.container');
  const success = document.createElement('div');
  success.className = `alert alert-${color}`
  success.innerHTML = `${text}`

  container.insertBefore(success, container.firstChild)

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 1500);

}

function searchTask(){
  const items = listTask.getElementsByTagName('li');
  const text = search.value;

  for(let listItem of items){
    let textLower = text.toLowerCase()
    let item = listItem.firstChild;
    if (item.textContent.toLowerCase().indexOf(text) !== -1) {
      item.parentElement.parentElement.style.display = "block"
    }else{
      item.parentElement.parentElement.style.display = "none"
    }

  }
  

}