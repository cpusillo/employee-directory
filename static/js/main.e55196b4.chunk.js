(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{56:function(e,t,n){},79:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(0),c=n(17),r=n.n(c),i=(n(56),n(47)),l=n(7),o=n(42),h=n(43),j=n(50),d=n(49),u=n(44),b=n.n(u),O=function(){return b.a.get("https://randomuser.me/api/?results=150&nat=us")},x=(n(39),n(87)),m=n(88),f=n(93),p=n(89),v=n(15),g=n(16);var y=function(e){return Object(a.jsx)("div",{className:"searchbar",children:Object(a.jsx)(x.a,{className:"searchForm",children:Object(a.jsxs)(m.a,{className:"mb-3",children:[Object(a.jsx)(f.a,{onChange:e.handleInputChange,placeholder:"Start typing employee name here, hit refresh button to search again",className:"inputFull"}),Object(a.jsx)(m.a.Append,{children:Object(a.jsx)(p.a,{variant:"secondary",onClick:e.handleRefresh,children:Object(a.jsx)(v.a,{icon:g.b})})})]})})})},C=n(90);n(79);var S=function(e){return Object(a.jsx)("div",{className:"SearchResults",children:Object(a.jsx)(x.a,{children:Object(a.jsxs)(C.a,{striped:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)(v.a,{icon:g.a})}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Phone"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:Object(a.jsx)("button",{className:"sortBtn",onClick:e.handleSort,children:"State Office"})})]})}),Object(a.jsx)("tbody",{children:e.results.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:e.picture.thumbnail,className:"userPhoto",alt:e.name.first})}),Object(a.jsxs)("td",{children:[e.name.title,".",e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.email}),Object(a.jsxs)("td",{children:["+1-",e.cell]}),Object(a.jsx)("td",{children:e.location.state})]},e)}))})]})})})},N=n(91),k=n(92);var w=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)(N.a,{bg:"dark",variant:"dark",expand:"lg",sticky:"top",children:[Object(a.jsxs)(N.a.Brand,{href:"#home",children:[Object(a.jsx)(v.a,{icon:g.c})," Employee Directory"]}),Object(a.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(N.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsx)(k.a,{className:"mr-auto"})})]})})})})},F=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={search:"",users:[],results:[],order:""},e.handleInputChange=function(t){e.setState({search:t.target.value});var n=e.state,a=n.search,s=n.users;if(""!==a){var c=s.filter((function(e){return e.name.first.toLowerCase().includes(a.toLowerCase())}));e.setState({results:c})}},e.handleSort=function(){var t=e.state.results.sort((function(e,t){return e.location.state>t.location.state?1:-1}));e.setState({results:t})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){return e.setState({users:t.data.results,results:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"handleRefresh",value:function(){window.location.reload()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{}),Object(a.jsx)(y,{handleInputChange:this.handleInputChange,handleRefresh:this.handleRefresh}),Object(a.jsx)(S,{results:this.state.results,handleSort:this.handleSort})]})}}]),n}(s.Component);var I=function(){return Object(a.jsx)(i.a,{children:Object(a.jsx)("div",{children:Object(a.jsx)(l.a,{exact:!0,path:"/",component:F})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(a.jsx)(I,{}),document.getElementById("root")),R()}},[[85,1,2]]]);
//# sourceMappingURL=main.e55196b4.chunk.js.map