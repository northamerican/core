(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./docz/examples/10-example-component-overriding.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return g});var o=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),r=t.n(o),a=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/classCallCheck.js"),i=t.n(a),l=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/createClass.js"),s=t.n(l),m=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),d=t.n(m),u=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/getPrototypeOf.js"),c=t.n(u),p=t("./node_modules/docz-core/node_modules/@babel/runtime/helpers/inherits.js"),b=t.n(p),h=t("./node_modules/react/index.js"),f=t.n(h),_=t("./node_modules/@mdx-js/tag/dist/index.js"),C=t("./node_modules/docz/dist/index.m.js"),y=t("./src/material-table.js"),g=function(e){function n(e){var t;return i()(this,n),(t=d()(this,c()(n).call(this,e))).layout=null,t}return b()(n,e),s()(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=r()(e,["components"]);return f.a.createElement(_.MDXTag,{name:"wrapper",components:n},f.a.createElement(_.MDXTag,{name:"h2",components:n,props:{id:"component-overriding-example"}},"Component Overriding Example"),f.a.createElement(_.MDXTag,{name:"p",components:n},"You can change all parts of material-table components."),f.a.createElement(C.e,{__codesandbox:"undefined",__position:0,__code:"<MaterialTable\n  components={{\n    Toolbar: props => (\n      <div style={{ backgroundColor: '#e8eaf5' }}>\n        <MTableToolbar {...props} />\n      </div>\n    ),\n  }}\n  columns={[\n    { title: 'Ad\u0131', field: 'name' },\n    { title: 'Soyad\u0131', field: 'surname' },\n    { title: 'Do\u011fum Y\u0131l\u0131', field: 'birthYear', type: 'numeric' },\n    {\n      title: 'Do\u011fum Yeri',\n      field: 'birthCity',\n      lookup: { 34: '\u0130stanbul', 63: '\u015eanl\u0131urfa' },\n    },\n  ]}\n  data={[\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },\n  ]}\n  title=\"Customizing Toolbar\"\n  options={{\n    columnsButton: true,\n    filtering: true,\n  }}\n/>",__scope:{props:this?this.props:t,MaterialTable:y.b,MTableToolbar:y.a}},f.a.createElement(y.b,{components:{Toolbar:function(e){return f.a.createElement("div",{style:{backgroundColor:"#e8eaf5"}},f.a.createElement(y.a,e))}},columns:[{title:"Ad\u0131",field:"name"},{title:"Soyad\u0131",field:"surname"},{title:"Do\u011fum Y\u0131l\u0131",field:"birthYear",type:"numeric"},{title:"Do\u011fum Yeri",field:"birthCity",lookup:{34:"\u0130stanbul",63:"\u015eanl\u0131urfa"}}],data:[{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63},{name:"Mehmet",surname:"Baran",birthYear:1987,birthCity:63}],title:"Customizing Toolbar",options:{columnsButton:!0,filtering:!0}})))}}]),n}(f.a.Component);g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docz-examples-10-example-component-overriding.fa9336432047c07fa7d0.js.map