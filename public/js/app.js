const ReadingItem = function (title, author, category, topic) {
  this.title = title;
  this.author = author;
  this.category = category;
  this.topic = topic;
}

handleBookFormSubmit = function (event) {
  event.preventDefault();
  const readingItem = new ReadingItem(
    this.title.value,
    this.title.author,
  )
}

const bookCollection = [];

document.addEventListener('DOMContentLoaded', () => {
  const bookForm = document.querySelector('#book-form');
  bookForm.addEventListener('submit', handleBookFormSubmit);
});
