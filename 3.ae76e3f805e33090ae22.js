(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{92:function(n,t,e){var o,r,a=this&&this.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},i=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(t,e)};return function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();o=[e,t,e(1),e(33),e(7),e(44),e(107)],void 0===(r=function(n,t,e,o,r,c,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,l,u,d,h=o.default.div(s||(s=a(["\n    width: 100%;\n    max-width: 800px;\n    margin: 0 auto;\n    animation: showPage 1s ease-in-out 0s 1;\n"],["\n    width: 100%;\n    max-width: 800px;\n    margin: 0 auto;\n    animation: showPage 1s ease-in-out 0s 1;\n"]))),x=o.default.h1(l||(l=a(["\n    font: 48px roboto-black;\n    color: white;\n    text-align: center;\n    width: 90%;\n    margin: 16px auto;\n    padding: 16px;\n    text-shadow: 1px 1px 8px black;\n    background-color: #c70039;\n"],["\n    font: 48px roboto-black;\n    color: white;\n    text-align: center;\n    width: 90%;\n    margin: 16px auto;\n    padding: 16px;\n    text-shadow: 1px 1px 8px black;\n    background-color: #c70039;\n"]))),b=o.default(c.Link)(u||(u=a(["\n    display: block;\n    text-decoration: none;\n    color: black;\n    background-color: ",";\n    margin: 16px auto;\n    padding: 16px;\n    width: 90%;\n    opacity: 0.8;\n    & h1, p {\n        margin: 0;\n    }\n    & h1 {\n        font: 36px roboto-black;\n    }\n    & p {\n        margin-top: 8px;\n        font: 24px roboto-thin;\n        font-weight: bold;\n    }\n    &:hover {\n        transform: translateY(3px);\n        opacity: 1;\n    }\n    transition: transform .1s ease-in-out;\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n"],["\n    display: block;\n    text-decoration: none;\n    color: black;\n    background-color: ",";\n    margin: 16px auto;\n    padding: 16px;\n    width: 90%;\n    opacity: 0.8;\n    & h1, p {\n        margin: 0;\n    }\n    & h1 {\n        font: 36px roboto-black;\n    }\n    & p {\n        margin-top: 8px;\n        font: 24px roboto-thin;\n        font-weight: bold;\n    }\n    &:hover {\n        transform: translateY(3px);\n        opacity: 1;\n    }\n    transition: transform .1s ease-in-out;\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n"])),function(n){return f(n.badge)}),g=o.default.div(d||(d=a(["\n    display: inline-block;\n    margin: 0 4px;\n    & label {\n        font: 24px roboto-medium;\n        text-transform: uppercase;\n    }\n    & input {\n        width: 18px;\n        height: 18px;\n    }\n"],["\n    display: inline-block;\n    margin: 0 4px;\n    & label {\n        font: 24px roboto-medium;\n        text-transform: uppercase;\n    }\n    & input {\n        width: 18px;\n        height: 18px;\n    }\n"]))),f=function(n){switch(n){case"web":return"#E18172";case"extension":return"#9569BC";case"game":return"#5AD9F1";default:return"gray"}},m=function(n){function t(t){var e=n.call(this,t)||this;return e.badgeList=["extension","web","game"],e.state={visibleBadges:e.badgeList},e.handleCheckBoxChange=e.handleCheckBoxChange.bind(e),e}return i(t,n),t.prototype.renderProjects=function(){if(!this.props.projects)return e.createElement("div",null,"Getting project list...");var n=this.props.projects,t=this.state.visibleBadges;return n.filter(function(n){return t.includes(n.badge)}).map(function(n){var t=n.name,o=n.badge;return e.createElement(p.CSSTransition,{key:t,classNames:"projectListAnimations",timeout:{enter:200,exit:350}},e.createElement(b,{to:"/project/"+t,badge:o},e.createElement("h1",null,t),e.createElement("p",null,o)))})},t.prototype.renderCheckBoxs=function(){var n=this;return this.badgeList.map(function(t){return e.createElement(g,{key:t},e.createElement("label",null,t),e.createElement("input",{type:"checkbox",value:t,onChange:n.handleCheckBoxChange,defaultChecked:!0}))})},t.prototype.handleCheckBoxChange=function(n){n.persist(),this.setState(function(t){return n.target.checked?{visibleBadges:t.visibleBadges.concat([n.target.value])}:{visibleBadges:t.visibleBadges.filter(function(t){return t!=n.target.value})}})},t.prototype.render=function(){return e.createElement(h,null,e.createElement(x,null,"MY WORK 💾"),e.createElement("div",{style:{textAlign:"center"}},this.renderCheckBoxs()),e.createElement(p.TransitionGroup,null,this.renderProjects()))},t}(e.Component);t.default=r.connect(function(n){return{projects:n.project.projects}})(m)}.apply(t,o))||(n.exports=r)}}]);