(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{wHD8:function(i,t,o){"use strict";o.r(t),o.d(t,"ion_img",(function(){return e}));var s=o("54nT");o("AfW+");const e=class{constructor(i){Object(s.k)(this,i),this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.ionImgWillLoad=Object(s.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(s.e)(this,"ionImgDidLoad",7),this.ionError=Object(s.e)(this,"ionError",7)}srcChanged(){this.addIO()}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(i=>{i[0].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){return Object(s.i)(s.a,{class:Object(s.d)(this)},Object(s.i)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))}get el(){return Object(s.f)(this)}static get watchers(){return{src:["srcChanged"]}}static get style(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}}}]);