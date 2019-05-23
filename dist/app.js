!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t,o){"use strict";t.__esModule=!0;var n=function(){function e(){}return e.prototype.compare=function(e,t){return e>t?1:t>e?-1:0},e.prototype.check=function(e,t){return"Bad"==e&&("Fair"==t||"Good"==t)||"Fair"==e&&"Good"==t},e}();t.Utility=n},function(e,t,o){"use strict";t.__esModule=!0;var n=new(o(0).Utility),i=o(2),l=function(){function e(){this.root=null}return e.prototype.find=function(e){return this.root.find(e)},e.prototype.add=function(e,t){null==this.root?this.root=new i.Book(e,t):this.root.insert(e,t)},e.prototype.buyOrNot=function(e,t){return null==this.find(e)||!!n.check(this.find(e).getCondition(),t)},e}();t.Shelf=l},function(e,t,o){"use strict";t.__esModule=!0;var n=new(o(0).Utility),i=function(){function e(e,t){this.year=e,this.condition=t}return e.prototype.setLeft=function(e){this.leftChild=e},e.prototype.setRight=function(e){this.rightChild=e},e.prototype.getYear=function(){return this.year},e.prototype.getCondition=function(){return this.condition},e.prototype.find=function(e){return 0==n.compare(this.year,e)?this:1==n.compare(this.year,e)?null==this.leftChild?null:this.leftChild.find(e):null==this.rightChild?null:this.rightChild.find(e)},e.prototype.insert=function(t,o){0!=n.compare(this.year,t)&&(1==n.compare(this.year,t)?null==this.leftChild?this.leftChild=new e(t,o):this.leftChild.insert(t,o):null==this.rightChild?this.rightChild=new e(t,o):this.rightChild.insert(t,o))},e.prototype.logBooks=function(){null!=this.leftChild&&this.leftChild.logBooks(),null!=this.rightChild&&this.rightChild.logBooks(),console.log("Year : "+this.year+" Condition : "+this.condition)},e}();t.Book=i},function(e,t,o){o(2),o(1),o(4),o(0),e.exports=o(5)},function(e,t,o){"use strict";t.__esModule=!0;var n=o(1),i=new(o(0).Utility);!function(){function e(){this.failed=!1;var e=new n.Shelf;e.add(1966,"Fair"),e.add(1970,"Fair"),e.add(1972,"Good"),e.add(1979,"Bad"),e.add(1981,"Fair"),e.add(1983,"Good"),e.add(1985,"Good"),e.add(1990,"Fair"),e.add(1991,"Bad"),e.add(1995,"Good"),console.log("\n-----Test compareInts -----"),console.log("\nThis returns -1 if the second parameter is bigger than first,\n1 if the second param is smaller and 0 if they are equal"),console.log("\n(1,2) Second param is smaller, -1 expected");var t=i.compare(1,2);this.testEqualsInt(t,-1),console.log("\n(2,1) Second param is bigger, 1 expected");var o=i.compare(2,1);this.testEqualsInt(o,1),console.log("\n(1,1) Params are equal, 0 expected");var l=i.compare(1,1);this.testEqualsInt(l,0),console.log("\n-----Test CheckCondition -----"),console.log("\nThis returns true if the book we want to buy is in better condition than ours,\nand false if its worse or false if they are in equal condition\n1st Param = our book, 2nd = Book to buy"),console.log("\n(Bad,Fair)Fair > Bad, true expected");var r=i.check("Bad","Fair");this.testEqualsBool(r,!0),console.log("\n(Bad,Good)Good > Bad, true expected");var s=i.check("Bad","Good");this.testEqualsBool(s,!0),console.log("\n(Fair,Good)Good > Fair, true expected");var a=i.check("Fair","Good");this.testEqualsBool(a,!0),console.log("\n(Bad,Bad)Bad = Bad, false expected");var d=i.check("Bad","Bad");this.testEqualsBool(d,!1),console.log("\n(Fair,Fair)Fair = Fair, false expected");var c=i.check("Fair","Fair");this.testEqualsBool(c,!1),console.log("\n(Good,Good)Good = Good, false expected");var u=i.check("Good","Good");this.testEqualsBool(u,!1),console.log("\n(Fair,Bad)Fair > Bad, false expected");var h=i.check("Fair","Bad");this.testEqualsBool(h,!1),console.log("\n(Good,Bad)Good > Bad, false expected");var p=i.check("Good","Bad");this.testEqualsBool(p,!1),console.log("\n(Good,Fair)Good > Fair, false expected");var f=i.check("Good","Fair");this.testEqualsBool(f,!1),console.log("\n-----Test find() -----"),console.log("\nThis returns the book object if found\nOr null if the book was not found"),console.log("\nFind the first book on the shelf");var m=e.find(1966);this.testEqualsInt(m.getYear(),1966),console.log("\nFind the last book on the shelf");var g=e.find(1995);this.testEqualsInt(g.getYear(),1995),console.log("\nTry to find a book that isn't on the shelf(9001,null expected)");var v=e.find(9001);this.testEqualsNull(v,null),console.log("\n-----Test BuyOrNot() -----"),console.log("\nThis returns true if we do not have the book,\nTrue if we have it, but in worse condition\nOr false if we do have it in equal or better condition"),console.log("\nA book that we do not have");var b=e.buyOrNot(2015,"Good");this.testEqualsBool(b,!0),console.log("\nA book that we do have but in worse condition");var y=e.buyOrNot(1966,"Good");this.testEqualsBool(y,!0),console.log("\nA book that we do have and in better condition");var B=e.buyOrNot(1966,"Bad");this.testEqualsBool(B,!1),this.failed?console.log("\nOne or more tests failed"):console.log("\nAll tests passed")}e.prototype.testEqualsInt=function(e,t){e==t?console.log("The expected value "+t+" matches the result "+e):(this.failed=!0,console.log("ERROR : The expected value does not match the result"))},e.prototype.testEqualsBool=function(e,t){e==t?console.log("The expected value "+t+" matches the result "+e):(this.failed=!0,console.log("ERROR : The expected value does not match the result"))},e.prototype.testEqualsNull=function(e,t){e==t?console.log("The expected value "+t+" matches the result "+e):(this.failed=!0,console.log("ERROR : The expected value does not match the result"))}}()},function(e,t,o){"use strict";o.r(t);var n=o(1);let i=new n.Shelf;i.add(0,"FAIR"),document.getElementById("menu-open").addEventListener("click",()=>document.getElementById("myNav").style.width="100%"),document.getElementById("menu-close").addEventListener("click",()=>document.getElementById("myNav").style.width="0%");let l=document.createElement("div");l.className="container my-3",l.setAttribute("id","form-container");let r=document.createElement("input");r.className="form-control d-inline",r.setAttribute("id","input-box"),r.setAttribute("type","number"),r.setAttribute("placeholder","Enter year");let s=document.createElement("input");s.className="form-control d-inline",s.setAttribute("id","input-box-big"),s.setAttribute("type","number"),s.setAttribute("placeholder","Enter year");let a=document.createElement("select");a.className="form-control d-inline",a.setAttribute("id","dropdown-box"),a.appendChild(new Option("Poor","poor")),a.appendChild(new Option("Fair","fair")),a.appendChild(new Option("Good","good"));let d=document.createElement("input");d.className="form-control d-inline",d.setAttribute("id","submit-button-find"),d.setAttribute("value","Submit");let c=document.createElement("input");function u(){if(document.body.contains(l)){for(;l.firstChild;)l.removeChild(l.firstChild);document.getElementsByTagName("BODY")[0].removeChild(l)}}c.className="form-control d-inline",c.setAttribute("id","submit-button-add"),c.setAttribute("value","Submit"),document.querySelector("#find-book").addEventListener("click",function(){u(),l.appendChild(r),l.appendChild(d),document.body.contains(h)?document.getElementsByTagName("BODY")[0].insertBefore(l,h):document.getElementsByTagName("BODY")[0].insertBefore(l,null);b(),closeNavMenu()}),document.querySelector("#add-book").addEventListener("click",function(){u(),l.appendChild(s),l.appendChild(a),l.appendChild(c),document.body.contains(h)?document.getElementsByTagName("BODY")[0].insertBefore(l,h):document.getElementsByTagName("BODY")[0].insertBefore(l,null);b(),closeNavMenu()}),document.getElementById("should-i-buy-it").addEventListener("click",function(){u(),l.appendChild(s),l.appendChild(a),l.appendChild(c),document.body.contains(h)?document.getElementsByTagName("BODY")[0].insertBefore(l,h):document.getElementsByTagName("BODY")[0].insertBefore(l,null);closeNavMenu()}),d.addEventListener("click",function(e){h.appendChild(p),h.appendChild(f),f.appendChild(m);let t=`img/${e.target.previousSibling.value}.jpg`;null!==i.find(e.target.previousSibling.value)?(m.setAttribute("src",t),"good"===i.find(e.target.previousSibling.value).condition?v.innerHTML=`${e.target.previousSibling.value} is in <span style="color : green;">${i.find(e.target.previousSibling.value).condition}</span> condition`:"fair"===i.find(e.target.previousSibling.value).condition?v.innerHTML=`${e.target.previousSibling.value} is in <span style="color : sienna;">${i.find(e.target.previousSibling.value).condition}</span> condition`:v.innerHTML=`${e.target.previousSibling.value} is in <span style="color : red;">${i.find(e.target.previousSibling.value).condition}</span> condition`):(m.setAttribute("src","img/overlayimg.svg"),v.innerHTML=`<span style="color: red;">${e.target.previousSibling.value} is missing from your collection</span>`);h.appendChild(g),g.appendChild(v),document.getElementsByTagName("BODY")[0].insertBefore(h,null),u()});let h=document.createElement("div");h.className="container-fluid mx-auto",h.setAttribute("id","display-container");let p=document.createElement("br"),f=document.createElement("div");f.className="container";let m=document.createElement("img");m.setAttribute("width","300px"),m.setAttribute("height","400px"),m.className="mx-auto d-block";let g=document.createElement("div");g.className="text-center";let v=document.createElement("p");function b(){if(document.body.contains(h)){for(;h.firstChild;)h.removeChild(h.firstChild);document.getElementsByTagName("BODY")[0].removeChild(h)}}c.addEventListener("click",function(e){i.add(e.target.previousSibling.previousSibling.value,e.target.previousSibling.value);let t=e.target.previousSibling.previousSibling.value;u(),Swal.fire("Success!",`${t} was added to the collection!`,"success")})}]);