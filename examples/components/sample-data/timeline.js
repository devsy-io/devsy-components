export default [{
  fullname: 'Miguel Ángel',
  username: '@midudev',
  avatar: 'http://gravatar.com/avatar/ab1d28e0c265caf52e6f22b4b1e2ac98',
  message: 'This is an example of tweet mesage talking about code.',
  snippet: {
    language: 'python',
    code: `def openFile(path):
file = open(path, "r")
content = file.read()
file.close()
return content`
  }
}, {
  fullname: 'Zeldman',
  username: '@zedlman',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg',
  message: 'Javascript code to talk about! Amazing!',
  snippet: {
    language: 'js',
    code: `var foo = 'bar'
const sum = (a, b) => a + b;
const total = sum(1, 3);
return total`
  }
}]
