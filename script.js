document.getElementById('button').addEventListener('click', (event) => {
  let element_button = document.getElementById('button');
  element_button.innerText = 'add an apple';
  let element_list = document.getElementById('list');
  let new_ul = document.createElement('ul');
  new_ul.innerText = 'apple';

  element_list.appendChild(new_ul);

});
