console.log('Hello, world');

function addTitle() {
  const title = document.querySelector('title').textContent
  const body = document.querySelector('body')
  body.insertAdjacentHTML("afterbegin", `<h1>${title}</h1>`)
}
addTitle()

const post = new Post('Webpack Post Title');
console.log('Post to String', post.toString());