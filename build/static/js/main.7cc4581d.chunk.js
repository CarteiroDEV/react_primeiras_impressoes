(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(65)},45:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(28),l=n.n(r),c=n(18),i=n(6),s=n(7),d=n(9),u=n(8),p=n(10),m=n(13),f=n(11);var h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoration:"none"},g=function(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"Todo List"),a.a.createElement(m.b,{style:b,to:"/"},"Home")," | ",a.a.createElement(m.b,{style:b,to:"/about"},"About"))},y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n.toggleComplete=function(e){console.log(n.props)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,t)})," "," ",n,a.a.createElement("button",{style:E,onClick:this.props.deleteTodo.bind(this,t)},"X")))}}]),t}(o.Component),E={background:"#ff0000",color:"white",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right",outline:"none"},v=y,j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).toggleComplete=function(){console.log("HELLO!!")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return a.a.createElement(v,{key:t.id,todo:t,toggleComplete:e.props.toggleComplete,deleteTodo:e.props.deleteTodo})})}}]),t}(o.Component),O=n(31),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},n.onSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(e){return n.setState(Object(O.a)({},e.target.name,e.target.value))},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),t}(o.Component);var x=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"Esse \xe9 a TODO list app v1.0.0 - Crash Course de REACT"))},T=(n(45),n(14)),k=n.n(T),S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[]},n.toggleComplete=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n.deleteTodo=function(e){k.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then(function(t){return n.setState({todos:Object(c.a)(n.state.todos.filter(function(t){return t.id!==e}))})})},n.addTodo=function(e){k.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then(function(e){return n.setState({todos:[].concat(Object(c.a)(n.state.todos),[e.data])})})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(t){return e.setState({todos:t.data})})}},{key:"render",value:function(){var e=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(g,null),a.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{addTodo:e.addTodo}),a.a.createElement(j,{todos:e.state.todos,toggleComplete:e.toggleComplete,deleteTodo:e.deleteTodo}))}}),a.a.createElement(f.a,{path:"/about",component:x}))))}}]),t}(o.Component);l.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.7cc4581d.chunk.js.map