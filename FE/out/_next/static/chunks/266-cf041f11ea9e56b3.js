"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{7785:function(e,o,t){t.r(o),t.d(o,{default:function(){return b}});var l=t(5893);t(7294);var n=t(1953),i=t(1138),a=t(6351),d=t(6798),r=t(4724),s=t(9669),u=t.n(s);function b(e){var o=function(e){e.preventDefault(),u().post("https://orgil.ilearn.mn/v1/books",{book_title:e.target.book_title.value,book_isbn:e.target.book_isbn.value,book_author:e.target.book_author.value,book_publisher:e.target.book_publisher.value,book_published_date:e.target.book_published_date.value,book_price:e.target.book_price.value}).then(function(e){200===e.status&&console.log("book succesfully added"),location.reload()}).catch(function(e){console.error(e)})};return(0,l.jsx)("div",{children:(0,l.jsx)(r.Z,{open:e.openAddBook,onClose:function(){e.setOpenAddBook(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(n.Z,{component:"form",style:{backgroundColor:"white",color:"black",display:"flex",flexDirection:"column",gap:20,padding:20,justifyContent:"center",alignItems:"center",borderRadius:5,margin:"15% 30%"},onSubmit:o,children:[(0,l.jsx)(i.Z,{style:{fontWeight:"bold",fontSize:"1.6rem"},children:"Add Book"}),(0,l.jsx)(a.Z,{label:"Book Name",name:"book_title",required:!0,style:{width:"80%"}}),(0,l.jsx)(a.Z,{label:"Price",name:"book_price",required:!0,style:{width:"80%"}}),(0,l.jsx)(a.Z,{label:"Author",name:"book_author",required:!0,style:{width:"80%"}}),(0,l.jsx)(a.Z,{label:"ISBN",name:"book_isbn",required:!0,style:{width:"80%"},inputProps:{maxLength:10,minLength:10}}),(0,l.jsx)(a.Z,{label:"Publisher",name:"book_publisher",style:{width:"80%"}}),(0,l.jsx)(a.Z,{label:"Published on",name:"book_published_date",style:{width:"80%"},type:"date",required:!0,InputLabelProps:{shrink:!0}}),(0,l.jsx)(d.Z,{variant:"contained",type:"submit",children:"Save"})]})})})}},4266:function(e,o,t){t.r(o);var l=t(7568),n=t(603),i=t(655),a=t(5893),d=t(7294),r=t(8100),s=t(9669),u=t.n(s),b=t(7957),$=t(6540),c=t(8364),h=t(6798),k=t(3214),p=t(381),f=t.n(p),x=t(7785),j=t(4724),v=t(1138),m=t(1953),y=t(8814),g=y.TableContainer,_=y.Table,Z=y.TableHead,w=y.TableRow,C=y.TableCell,B=y.TableBody,S=function(){var e,o=function(e){u().delete("https://orgil.ilearn.mn/v1/books/".concat(e)).then(function(e){200===e.status&&location.reload()})},t=(0,d.useState)(!1),s=t[0],p=t[1],y=(0,d.useState)(!1),S=y[0],P=y[1],W=(0,d.useState)(),A=W[0],N=W[1],Y=(0,n.Z)(d.useState(!1),2),D=Y[0],E=Y[1],V=function(){return E(!0)},I=function(){return E(!1)},T=(e=(0,l.Z)(function(e){return(0,i.__generator)(this,function(o){switch(o.label){case 0:return[4,u().get(e).then(function(e){return e.data})];case 1:return[2,o.sent()]}})}),function(o){return e.apply(this,arguments)}),q=(0,r.ZP)("https://orgil.ilearn.mn/v1/books",T),O=q.data;return q.error,(0,a.jsxs)(g,{variant:"outlined",children:[(0,a.jsxs)(_,{"aria-label":"demo table",children:[(0,a.jsx)(Z,{children:(0,a.jsxs)(w,{children:[(0,a.jsx)(C,{style:{fontWeight:"bold"},children:"#"}),(0,a.jsx)(C,{style:{fontWeight:"bold"},children:"Name"}),(0,a.jsx)(C,{style:{fontWeight:"bold"},children:"Code"}),(0,a.jsx)(C,{style:{fontWeight:"bold"},children:"Price"}),(0,a.jsx)(C,{style:{fontWeight:"bold"},children:"Authors"}),(0,a.jsx)(C,{style:{fontWeight:"bold"},children:"ISBN"}),(0,a.jsx)(C,{style:{fontWeight:"bold"},children:"Publisher"}),(0,a.jsx)(C,{style:{fontWeight:"bold"},children:"Published On"}),(0,a.jsx)(C,{}),(0,a.jsx)(C,{})]})}),(0,a.jsx)(B,{children:(null==O?void 0:O.data)&&(null==O?void 0:O.data.map(function(e,t){return(0,a.jsxs)(w,{children:[(0,a.jsx)(C,{style:{fontWeight:"bold"},children:t+1}),(0,a.jsx)(C,{style:{fontWeight:"bold"},children:e.book_title}),(0,a.jsx)(C,{children:e._id.slice(5,11)}),(0,a.jsxs)(C,{children:[e.book_price,"$"]}),(0,a.jsx)(C,{children:e.book_author}),(0,a.jsx)(C,{children:e.book_isbn}),(0,a.jsx)(C,{children:e.book_publisher}),(0,a.jsx)(C,{children:f()(e.book_published_date).format("YYYY-MM-DD")}),(0,a.jsx)(C,{children:(0,a.jsx)(h.Z,{onClick:function(){p(!0),N(O.data[t])},children:(0,a.jsx)(b.Z,{color:"primary"})})}),(0,a.jsx)(C,{children:(0,a.jsxs)(h.Z,{onClick:V,children:[(0,a.jsx)(c.Z,{}),(0,a.jsx)(j.Z,{open:D,onClose:I,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,a.jsxs)(m.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[(0,a.jsx)(v.Z,{style:{display:"flex",justifyContent:"center",marginBottom:"20px"},children:"Confirm to delete this book"}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[(0,a.jsx)(h.Z,{variant:"contained",onClick:function(){o(e._id)},children:"Yes"}),(0,a.jsx)(h.Z,{variant:"contained",onClick:function(){location.reload()},children:"No"})]})]})})]})})]},t)}))})]}),(0,a.jsxs)(h.Z,{onClick:function(){P(!0)},variant:"contained",style:{margin:"1% 45%",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)($.Z,{}),"Add Book"]}),(0,a.jsx)(x.default,{openAddBook:S,setOpenAddBook:P}),(0,a.jsx)(k.default,{data:A,openEditBook:s,setOpenEditBook:p})]})};o.default=S},3214:function(e,o,t){t.r(o),t.d(o,{default:function(){return c}});var l=t(5893);t(7294);var n=t(1953),i=t(1138),a=t(6351),d=t(6798),r=t(4724),s=t(9669),u=t.n(s),b=t(381),$=t.n(b);function c(e){var o,t,s,b,c,h,k,p=function(e){e.preventDefault(),u().put("https://orgil.ilearn.mn/v1/books".concat(e.target._id.value),{book_title:e.target.book_title.value,book_isbn:e.target.book_isbn.value,book_author:e.target.book_author.value,book_publisher:e.target.book_publisher.value,book_published_date:e.target.book_published_date.value,book_price:e.target.book_price.value}).then(function(e){200===e.status&&console.log("update succesful"),location.reload()}).catch(function(e){console.error(e)})};return(0,l.jsx)("div",{children:(0,l.jsx)(r.Z,{open:e.openEditBook,onClose:function(){e.setOpenEditBook(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(n.Z,{component:"form",style:{backgroundColor:"white",color:"black",display:"flex",flexDirection:"column",gap:20,padding:20,justifyContent:"center",alignItems:"center",borderRadius:5,margin:"15% 30%"},onSubmit:p,children:[(0,l.jsx)(i.Z,{style:{fontWeight:"bold",fontSize:"1.6rem"},children:"Edit Book"}),(0,l.jsx)(a.Z,{label:"Book Name",defaultValue:null==e?void 0:null===(o=e.data)||void 0===o?void 0:o.book_title,name:"book_title",style:{width:"80%"}}),(0,l.jsx)(a.Z,{label:"Code",defaultValue:null==e?void 0:null===(t=e.data)||void 0===t?void 0:t._id.slice(5,11),name:"_id",style:{width:"80%"}}),(0,l.jsx)(a.Z,{label:"Price",defaultValue:null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.book_price,name:"book_price",style:{width:"80%"}}),(0,l.jsx)(a.Z,{label:"Author",defaultValue:null==e?void 0:null===(b=e.data)||void 0===b?void 0:b.book_author,name:"book_author",style:{width:"80%"}}),(0,l.jsx)(a.Z,{label:"ISBN",defaultValue:null==e?void 0:null===(c=e.data)||void 0===c?void 0:c.book_isbn,name:"book_isbn",style:{width:"80%"}}),(0,l.jsx)(a.Z,{label:"Publisher",defaultValue:null==e?void 0:null===(h=e.data)||void 0===h?void 0:h.book_publisher,name:"book_publisher",style:{width:"80%"}}),(0,l.jsx)(a.Z,{label:"Published on",defaultValue:$()(null==e?void 0:null===(k=e.data)||void 0===k?void 0:k.book_published_date).format("YYYY-MM-DD"),name:"book_published_date",style:{width:"80%"}}),(0,l.jsx)(d.Z,{variant:"contained",type:"submit",children:"Save"})]})})})}}}]);