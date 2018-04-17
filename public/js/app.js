const ReadingItem = function (title, author, category, topic) {
  this.title = title;
  this.author = author;
  this.category = category;
  this.topic = topic;
}

handleBookFormSubmit = function (event) {
  event.preventDefault();
  console.dir(this);
  let category = '';
  const radioButtons = document.querySelectorAll("input[name='category']")
  radioButtons.forEach((radioButton) => {
  if (radioButton.checked)
  {category = radioButton.value}})


  const readingItem = new ReadingItem(
    this.title.value,
    this.author.value,
    category,
  )
  console.log(readingItem);
}

const bookCollection = [];

document.addEventListener('DOMContentLoaded', () => {
  const bookForm = document.querySelector('#book-form');
  bookForm.addEventListener('submit', handleBookFormSubmit);
});
