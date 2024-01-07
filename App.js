
const head1 = React.createElement("h1",{},"I am h1");
const head2 = React.createElement("h2",{},"I am h2");

const child = React.createElement("div" , {id:"child"}, [head1,head2]);
const child1 = React.createElement("div" , {id:"child1"}, [head1,head2]);


const parent = React.createElement("div", {id:"parent"},[child,child1])





// const heading = React.createElement("h1", {id:"heading"}, "hello From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent)