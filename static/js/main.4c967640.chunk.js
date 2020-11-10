(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),i=c.n(n),s=c(23),r=c.n(s),o=(c(31),c(4)),l=c(11),j=c(12),u=c(9),d=c(14),b=c(13),h=(c(32),c(8)),m=function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(e){return Object(l.a)(this,c),t.call(this,e)}return Object(j.a)(c,[{key:"render",value:function(){var e=this.props,t=e.materialIconName,c=e.clickAction,n=e.title,i=e.linkRoute;return Object(a.jsx)("span",{title:n,className:"icon-container ".concat("home"===t?"home-icon":""),onClick:c,children:Object(a.jsxs)(h.b,{to:i,className:"icon-button",children:[Object(a.jsx)("i",{className:"material-icons-outlined nav-icons",children:t}),this.props.cartAmt?Object(a.jsxs)("span",{className:"cart-amount",children:[" ",this.props.cartAmt," "]}):null]})})}}]),c}(i.a.Component),p=(i.a.Component,function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(e){var a;return Object(l.a)(this,c),(a=t.call(this,e)).state={openMenu:!1,openSearch:!1,searchValue:"",searchQuery:""},a.updateSearchValue=a.updateSearchValue.bind(Object(u.a)(a)),a.handleSearchClick=a.handleSearchClick.bind(Object(u.a)(a)),a}return Object(j.a)(c,[{key:"updateSearchValue",value:function(e){this.setState({searchValue:e.target.value})}},{key:"handleSearchClick",value:function(e){var t=this,c=this.props.searchCallAction;!1===this.state.openSearch?this.setState({openSearch:!0}):(this.setState({searchQuery:this.state.searchValue,searchValue:""}),setTimeout((function(){c(t.state.searchQuery)}),100),this.setState({openSearch:!1}))}},{key:"render",value:function(){var e=this.props,t=e.title,c=e.atHome;return Object(a.jsx)("nav",{className:"navbar",children:Object(a.jsxs)("div",{className:"container navbar-container",children:[Object(a.jsxs)("span",{className:"navbar-title",children:[!1===c?Object(a.jsx)(m,{linkRoute:"/",title:"Home",materialIconName:"home"}):null,t]}),Object(a.jsx)("div",{className:"navbar-dropdown-items",children:Object(a.jsx)(m,{linkRoute:"/cart",title:"Cart",materialIconName:"shopping_cart",cartAmt:this.props.cartAmt})})]})})}}]),c}(i.a.Component)),O=(c(38),function(e){return Object(a.jsx)("button",{className:"Button",children:e.title})}),f=(c(39),c.p+"static/media/Forest.3b9ffdd2.mp4"),x=function(e){return Object(a.jsxs)("div",{className:"Home",children:[Object(a.jsxs)("div",{className:"center",children:[Object(a.jsx)("h1",{className:"home-text",children:" Woodland Cabins. "}),Object(a.jsx)(h.b,{className:"button-link",to:"/shop",children:Object(a.jsx)(O,{title:"Browse"})})]}),Object(a.jsx)("video",{src:f,autoPlay:!0,muted:!0,loop:!0,id:"background-video"}),Object(a.jsxs)("span",{id:"created-by",children:[Object(a.jsx)("a",{id:"portfolio-link",href:"http://www.josiaheakle.com/",children:" Created by Josiah Eakle"})," "]})]})},v=c(25),g=(c(40),function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(0),l=Object(o.a)(r,2),j=l[0],u=l[1],d=function(){var t=document.querySelector("#quantity-".concat(e.id));u(t.value)};return Object(n.useEffect)((function(){s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(e.price)),d()}),[]),Object(a.jsx)("div",{className:"Product",id:e.id,children:Object(a.jsxs)("div",{className:"product-container",children:[Object(a.jsx)("div",{className:"product-image-container",children:Object(a.jsx)("img",{className:"image",src:e.imgSrc})}),Object(a.jsx)("span",{className:"title",children:e.title}),Object(a.jsx)("span",{className:"price",children:"".concat(i)}),Object(a.jsx)("span",{className:"descr",children:e.descr}),Object(a.jsxs)("span",{className:"buy-container",children:[Object(a.jsx)("button",{onClick:function(){console.log("handling click for id ".concat(e.id)),e.clickAction(e.id,j)},children:"Add to Cart"}),Object(a.jsx)("input",{onChange:d,className:"quantity",min:"1",max:"5",defaultValue:1,id:"quantity-".concat(e.id),type:"number"})]})]})})}),N=(c(41),function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(0),l=Object(o.a)(r,2);l[0],l[1];return Object(n.useEffect)((function(){s(new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(e.price))}),[]),Object(a.jsx)("div",{className:"CartProduct",id:e.id,children:Object(a.jsxs)("div",{className:"cart-product-container",children:[Object(a.jsx)("div",{className:"product-image-container",children:Object(a.jsx)("img",{className:"image",src:e.imgSrc})}),Object(a.jsx)("span",{className:"title",children:e.title}),Object(a.jsx)("span",{className:"price",children:"".concat(i)}),Object(a.jsx)("span",{className:"descr",children:e.descr}),Object(a.jsx)("span",{className:"buy-container",children:Object(a.jsx)("button",{onClick:function(){e.clickAction(e.id)},children:"Remove"})})]})})}),S=(c(42),function(e){return Object(a.jsxs)("div",{className:"empty-cart-container",children:[Object(a.jsx)("h1",{className:"empty-cart-text",children:" Your cart is empty. "}),Object(a.jsx)(h.b,{to:"/shop",children:Object(a.jsx)(O,{title:"Browse Homes"})})]})}),y=function(e){var t,c=Object(n.useState)([]),i=Object(o.a)(c,2),s=i[0],r=i[1],l=Object(n.useState)(Object(a.jsx)("span",{})),j=Object(o.a)(l,2),u=j[0],d=j[1],b=Object(n.useState)(0),h=Object(o.a)(b,2),m=h[0],O=h[1],x=function(e){console.log("handling click"),v(e)},v=function(e){console.log("removing from cart");var t=!1,c=s.filter((function(c){var a=!0;return!0===t&&(a=!1),c.id===e&&(t=!0),c.id!==e||!1===a}));g(c)},g=function(e){console.log(e),r(e)},y=function(){for(var e=0,t=0;t<s.length;t++)e+=s[t].price;O(e)},k=function(){d(Object(a.jsx)("div",{className:"cart-list",children:s.map((function(e,t){return Object(a.jsx)(N,{title:e.title,imgSrc:e.imgSrc,price:e.price,id:e.id,clickAction:x},t)}))}))};return Object(n.useEffect)((function(){console.log("shopping cart has mounted"),r(e.cart),k(),y()}),[]),Object(n.useEffect)((function(){console.log("cart has updated in shoping cart"),k(),y(),e.updateCartProp(s)}),[s]),Object(a.jsxs)("div",{className:"ShoppingCart",children:[Object(a.jsx)(p,{title:"Cart",atHome:!1,cartAmt:s.length}),Object(a.jsxs)("div",{className:"cart-container ".concat(0==m?"empty":"full"),children:[0!==m?Object(a.jsxs)("div",{className:"checkout-container",children:[Object(a.jsxs)("span",{className:"cart-total-container",children:[Object(a.jsx)("span",{children:" Cart subtotal:"}),Object(a.jsx)("span",{id:"cart-total",children:(t=m,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(t))})]}),Object(a.jsx)("button",{children:" Proceed to Checkout "})]}):null,s.length<1?Object(a.jsx)(S,{}):null,u]}),Object(a.jsx)("video",{src:f,autoPlay:!0,muted:!0,loop:!0,id:"background-video"})]})},k=(c(43),c.p+"static/media/cabin_01.11406cac.jpg"),C=c.p+"static/media/cabin_02.4d508bec.jpg",w=(c.p,c.p+"static/media/cabin_04.38b6b499.jpg"),A=c.p+"static/media/cabin_05.81483493.jpg",E=c.p+"static/media/cabin_06.941adbb7.jpg",H=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(Object(a.jsx)("span",{})),l=Object(o.a)(r,2),j=l[0],u=l[1],d=Object(n.useState)(e.cart),b=Object(o.a)(d,2),h=b[0],m=b[1],O=0,x=function(e,t,c,a){return{title:e,imgSrc:t,descr:c,price:a,id:O++}},N=function(e,t){for(var c=0;c<i.length;c++)c===e&&function(){for(var e=i[c],a=0;a<t;a++)m((function(t){return[].concat(Object(v.a)(t),[e])}))}()};return Object(n.useEffect)((function(){e.cart!==[]&&m(e.cart),s([x("Mellow Homestead",k,"Located in Northern Utah, this two story is packed with all amenenties needed for a comfortable and lavish live.",25e4),x("Lovers' Hideaway",C,"This secluded studio cabin is ferfect for a couples getaway,",9e4),x("Home away from Home",w,"This cabin could be your home.",14e4),x("Gone Huntin'",A,"While on the smaller side, this warm cabin is perfect for a hunting or fishing trip.",7e4),x("Mountain Shack",E,"This tiny, cozy, rustic cabin is a perfect place for a lone weekend getaway.",5e4)])}),[]),Object(n.useEffect)((function(){u(Object(a.jsx)("div",{className:"list",children:i.map((function(e){return Object(a.jsx)(g,{id:e.id,title:e.title,imgSrc:e.imgSrc,descr:e.descr,price:e.price,clickAction:N},e.id)}))}))}),[i]),Object(n.useEffect)((function(){console.log("updated cart in shop"),console.log(h),e.updateCartProp(h)}),[h]),Object(a.jsxs)("div",{className:"Shop",children:[Object(a.jsx)(p,{atHome:!1,title:"Shop",cartAmt:h.length}),Object(a.jsx)("div",{className:"shop-container",children:j}),Object(a.jsx)("video",{src:f,autoPlay:!0,muted:!0,loop:!0,id:"background-video"})]})},P=c(2),V=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],s=function(e){console.log("updating cart"),i(e)};return Object(n.useEffect)((function(){console.log("cart updated at routes in useEffect"),console.log(c)})),Object(a.jsx)(h.a,{children:Object(a.jsxs)(P.c,{children:[Object(a.jsx)(P.a,{exact:!0,path:"/",children:Object(a.jsx)(x,{cart:c})}),Object(a.jsx)(P.a,{exact:!0,path:"/shop",children:Object(a.jsx)(H,{cart:c,updateCartProp:s})}),Object(a.jsx)(P.a,{exact:!0,path:"/cart",children:Object(a.jsx)(y,{cart:c,updateCartProp:s})})]})})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4c967640.chunk.js.map