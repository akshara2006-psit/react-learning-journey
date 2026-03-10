// var h1=document.createElement('h1');
// h1.innerHTML="hello"
// console.log(h1);
// var root=document.querySelector('#root');
// root.appendChild(h1);
// console.log(React)
var h1=React.createElement('h1',null,"hello from react" )
var parent=document.querySelector('#parent')
var root=ReactDOM.createRoot(parent)
root.render(h1)
// console.log(h1);
  