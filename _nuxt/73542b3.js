(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{359:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxMSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeT0iNS42NTcyMyIgd2lkdGg9IjgiIGhlaWdodD0iOCIgcng9IjEiIHRyYW5zZm9ybT0icm90YXRlKC00NSAwIDUuNjU3MjMpIiBmaWxsPSIjNjI1RDVEIi8+Cjwvc3ZnPgo="},363:function(t,e,n){"use strict";var r=n(2),l=n(401);r({target:"String",proto:!0,forced:n(402)("link")},{link:function(t){return l(this,"a","href",t)}})},400:function(t,e,n){"use strict";n.r(e);n(363);var r={props:{item:{type:Object,required:!0}},computed:{textSize:function(){return(this.item.source+this.item.date).length>27?"text-[10px]":"text-[12px]"}}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-backgroundgrey border-t-4 border-lightbrown news-card"},[e("h1",{staticClass:"satoshi-bold font-black font-16px underline",attrs:{tabindex:"1"}},[e("a",{attrs:{target:"_blank",href:t.item.link}},[t._v(t._s(t.item.title))])]),t._v(" "),e("h2",{class:"flex py-2 font-bold text-newsgrey sm:text-[16px] "+t.textSize,attrs:{tabindex:"1"}},[t._v("\n    "+t._s(t.item.source)+"\n    "),e("img",{staticClass:"px-2",attrs:{src:n(359)}}),t._v("\n    "+t._s(t.item.date)+"\n  ")]),t._v(" "),e("p",{attrs:{tabindex:"1"}},[t._v(t._s(t.item.summary))])])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){var r=n(5),l=n(22),o=n(13),c=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var x=o(l(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+d(o(r),c,"&quot;")+'"'),m+">"+x+"</"+e+">"}},402:function(t,e,n){var r=n(3);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},436:function(t,e,n){"use strict";n.r(e);var r={props:{newsItems:{type:Array,required:!0}}},l=n(12),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col px-2 justify-center sm:px-16 md:px-32 lg:px-4 xl:px-16 lg:grid lg:grid-cols-3 lg:gap-x-4 xl:gap-x-6 hidden lg:block"},t._l(t.newsItems,(function(n,r){return e("div",{key:r,class:["mb-8 xl:mb-0",{"xl:pr-2":0==r,"xl:pl-2":r==t.newsItems.length-1}]},[e("news-item",{attrs:{item:n}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NewsItem:n(400).default})}}]);