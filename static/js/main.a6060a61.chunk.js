(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3aDZl",labelForm:"ContactForm_labelForm__3xwda",inputForm:"ContactForm_inputForm__sD-Bd",buttonForm:"ContactForm_buttonForm__2hrCj"}},19:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__1NTX9",buttonListItem:"ContactListItem_buttonListItem__2ebam"}},20:function(t,e,n){t.exports={labelFilter:"Filter_labelFilter__34DqY",inputFilter:"Filter_inputFilter__gj8FC"}},31:function(t,e,n){t.exports={contactList:"ContactList_contactList__Ld6TM"}},37:function(t,e,n){},38:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(14),o=n.n(r),s=(n(37),n(6)),u=n(7),i=n(9),b=n(8),l=(n(38),n(17)),j=n(4),d=n(67),f=n(11),m=n.n(f),h=n(10),O=n(13),C=n.n(O),p=n(2),v=Object(p.b)("contacts/fetchContactsRequest"),F=Object(p.b)("contacts/fetchContactsSuccess"),x=Object(p.b)("contacts/fetchContactsError"),_={addContactRequest:Object(p.b)("contacts/addContactRequest"),addContactSuccess:Object(p.b)("contacts/addContactSuccess"),addContactError:Object(p.b)("contacts/addContactError"),deleteContactRequest:Object(p.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(p.b)("contacts/deleteContactSuccess"),deleteContactError:Object(p.b)("contacts/deleteContactError"),filterChange:Object(p.b)("contacts/FilterChange"),fetchContactsRequest:v,fetchContactsSuccess:F,fetchContactsError:x};C.a.defaults.baseURL="http://localhost:4000";var g,y,S=function(t){var e=t.name,n=t.number;return function(t){t(_.addContactRequest()),C.a.post("/contacts",{name:e,number:n}).then((function(e){var n=e.data;return t(_.addContactSuccess(n))})).catch((function(e){return t(_.addContactError(e))}))}},L=function(t){return function(e){e(_.deleteContactRequest()),C.a.delete("/contacts/".concat(t)).then((function(){return e(_.deleteContactSuccess(t))})).catch((function(t){return e(_.deleteContactError(t))}))}},N=function(){return function(t){t(_.fetchContactsRequest()),C.a.get("/contacts").then((function(e){var n=e.data;return t(_.fetchContactsSuccess(n))})).catch((function(e){return t(_.fetchContactsError(e))}))}},k=n(1),q=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.onChange=function(e){e.preventDefault(),console.dir(e.currentTarget);var n=e.currentTarget,c=n.value,a=n.name,r=t.state,o=Object(j.a)({},a,c);t.setState(Object(l.a)(Object(l.a)({},r),o))},t.onSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=Object(d.a)(),e=Object(d.a)();return Object(k.jsxs)("form",{onSubmit:this.onSubmit,className:m.a.contactForm,children:[Object(k.jsxs)("label",{htmlFor:t,className:m.a.labelForm,children:["Name",Object(k.jsx)("input",{type:"text",name:"name",id:t,value:this.state.name,onChange:this.onChange,className:m.a.inputForm})]}),Object(k.jsxs)("label",{htmlFor:e,className:m.a.labelForm,children:["Tel",Object(k.jsx)("input",{type:"tel",name:"number",id:e,value:this.state.number,onChange:this.onChange,className:m.a.inputForm})]}),Object(k.jsx)("button",{type:"submit",className:m.a.buttonForm,children:"Add Contact"})]})}}]),n}(c.Component),E=Object(h.b)(null,(function(t){return{onSubmit:function(e){return t(S(e))}}}))(q),R=n(19),w=n.n(R),I=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.name,c=t.number,a=t.deleteContact;return Object(k.jsxs)("li",{id:e,className:w.a.listItem,children:[n,":",c,Object(k.jsx)("button",{onClick:function(){a(e)},className:w.a.buttonListItem,children:"Delete"})]})}}]),n}(c.Component),D=n(31),T=n.n(D),A=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onLoad()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.deleteContact;return Object(k.jsx)("ul",{children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(k.jsx)(I,{name:e,number:c,id:a,deleteContact:n,className:T.a.ContactList},a)}))})}}]),n}(c.Component),M=function(t){var e=t.filter,n=t.items,c=e.toLowerCase();return n.filter((function(t){var e=t.name;return!!e&&e.toLowerCase().includes(c)}))},B=Object(h.b)((function(t){return{contacts:M(t.contacts)}}),(function(t){return{deleteContact:function(e){return t(L(e))},onLoad:function(){return t(N())}}}))(A),J=n(20),z=n.n(J),P=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=Object(d.a)(),e=this.props,n=e.filterState,c=e.filterChange;return Object(k.jsxs)("label",{htmlFor:t,className:z.a.labelFilter,children:["Search Contacts by Name",Object(k.jsx)("input",{type:"text",name:"filter",id:t,value:n,onChange:c,className:z.a.inputFilter})]})}}]),n}(c.Component),U=Object(h.b)((function(t){return{filterState:t.contacts.filter}}),(function(t){return{filterChange:function(e){return t(_.filterChange(e.target.value))}}}))(P),X=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{children:"Phonebook"}),Object(k.jsx)(E,{}),Object(k.jsx)("h2",{children:"Contacts"}),Object(k.jsx)(U,{}),Object(k.jsx)(B,{})]})}}]),n}(c.Component),Y=(n(64),n(15)),Z=n(3),G=_.addContactRequest,H=_.addContactSuccess,K=_.addContactError,Q=_.deleteContactRequest,V=_.deleteContactSuccess,W=_.deleteContactError,$=(_.fetchContactsRequest,_.fetchContactsSuccess),tt=(_.fetchContactsError,Object(p.c)([],(g={},Object(j.a)(g,$,(function(t,e){return e.payload})),Object(j.a)(g,H,(function(t,e){var n=e.payload;return t.find((function(t){return t.name===n.name}))?(alert("".concat(n.name," is already in contacts.")),t):[].concat(Object(Y.a)(t),[n])})),Object(j.a)(g,V,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),g))),et=Object(p.c)("",{"contacts/FilterChange":function(t,e){return e.payload}}),nt=Object(p.c)(!1,(y={},Object(j.a)(y,G,(function(){return!0})),Object(j.a)(y,H,(function(){return!1})),Object(j.a)(y,K,(function(){return!1})),Object(j.a)(y,Q,(function(){return!0})),Object(j.a)(y,V,(function(){return!1})),Object(j.a)(y,W,(function(){return!1})),y)),ct=Object(Z.b)({items:tt,filter:et,loading:nt}),at=n(32),rt=n.n(at),ot=n(12),st=Object(Z.b)({contacts:ct}),ut=[].concat(Object(Y.a)(Object(p.d)({serializableCheck:{ignoredActions:[ot.a,ot.f,ot.b,ot.c,ot.d,ot.e]}})),[rt.a]),it=Object(p.a)({reducer:st,middleware:ut,devTools:!1});o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(h.a,{store:it,children:Object(k.jsx)(X,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.a6060a61.chunk.js.map