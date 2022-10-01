function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('submit').addEventListener('click', (event) => {
  let element_comment = document.getElementById('comment');
  element_comment.innerText = getNumberOrString(document.getElementById('input_comment').value);
  let element_comment2 = document.getElementById('comment2');
  element_comment2.innerText = getNumberOrString(document.getElementById('input_name').value);

});
