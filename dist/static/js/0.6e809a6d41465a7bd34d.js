webpackJsonp([0],{219:function(t,e,i){i(722);var o=i(0)(i(720),i(723),null,null);t.exports=o.exports},720:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(38),n=i.n(o);e.default={props:[],findList:[],data:function(){return{findList:[1,2,3]}},components:{headtitle:n.a},methods:{Request:function(){var t=this;t.axios.get("/rest/find/findFeature").then(function(e){t.findList=e.data.data.featureList})}},mounted:function(){this.active("#discovery"),this.Request()},updata:function(){this.Request()}}},721:function(t,e,i){e=t.exports=i(218)(),e.i(i(718),""),e.push([t.i,".discovery .box_list{width:100%;height:8rem;overflow:hidden;margin-bottom:.08rem}.discovery .box_list a{display:block;width:100%;height:8rem;position:relative}.discovery .box_list .text{width:100%;height:2rem;position:absolute;bottom:0;padding-left:.44rem;background:rgba(35,35,35,.5)}.discovery .box_list a .text .icon{font-size:.6rem;color:#fff;padding-top:.35rem;width:85%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:left}.discovery .box_list a .text .time{font-size:.5rem;color:#fff;text-align:left}.discovery .page{margin-top:1.76rem;margin-bottom:2.2rem}.discovery img{width:100%;display:block;height:auto}","",{version:3,sources:["/Users/shaotq.1993/Documents/工作项目/bbcshop/mobile/pinshang/src/pages/discovery.vue"],names:[],mappings:"AAEA,qBACE,WAAY,AACZ,YAAe,AACf,gBAAiB,AACjB,oBAAuB,CACxB,AACD,uBACE,cAAe,AACf,WAAY,AACZ,YAAe,AACf,iBAAmB,CACpB,AACD,2BACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,SAAU,AACV,oBAAsB,AACtB,4BAAkC,CACnC,AACD,mCACE,gBAAkB,AAClB,WAAY,AACZ,mBAAqB,AACrB,UAAW,AACX,gBAAiB,AACjB,mBAAoB,AACpB,uBAAwB,AACxB,eAAiB,CAClB,AACD,mCACE,gBAAkB,AAClB,WAAY,AACZ,eAAiB,CAClB,AACD,iBACE,mBAAoB,AACpB,oBAAsB,CACvB,AACD,eACE,WAAY,AACZ,cAAe,AACf,WAAa,CACd",file:"discovery.vue",sourcesContent:['\n@import "../../reset.css";\n.discovery .box_list {\n  width: 100%;\n  height: 8.0rem;\n  overflow: hidden;\n  margin-bottom: 0.08rem;\n}\n.discovery .box_list a {\n  display: block;\n  width: 100%;\n  height: 8.0rem;\n  position: relative;\n}\n.discovery .box_list .text {\n  width: 100%;\n  height: 2rem;\n  position: absolute;\n  bottom: 0;\n  padding-left: 0.44rem;\n  background: rgba(35, 35, 35, 0.5);\n}\n.discovery .box_list a .text .icon {\n  font-size: 0.6rem;\n  color: #fff;\n  padding-top: 0.35rem;\n  width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: left;\n}\n.discovery .box_list a .text .time {\n  font-size: 0.5rem;\n  color: #fff;\n  text-align: left;\n}\n.discovery .page {\n  margin-top: 1.76rem;\n  margin-bottom: 2.2rem;\n}\n.discovery img {\n  width: 100%;\n  display: block;\n  height: auto;\n}\n'],sourceRoot:""}])},722:function(t,e,i){var o=i(721);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(719)("225bfd95",o,!0)},723:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"discovery"},[i("header",{staticClass:"header"},[i("headtitle")],1),t._v(" "),i("div",{staticClass:"page"},t._l(t.findList,function(e){return i("div",{staticClass:"box_list"},[i("router-link",{attrs:{to:{name:"featureDetail",params:{feature_id:e.id}}}},[i("img",{attrs:{src:e.mimgShow,alt:""}}),t._v(" "),i("div",{staticClass:"text"},[i("p",{staticClass:"icon"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(e.createTime))])])])],1)}))])},staticRenderFns:[]}}});
//# sourceMappingURL=0.6e809a6d41465a7bd34d.js.map