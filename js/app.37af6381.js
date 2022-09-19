(function(){"use strict";var e={675:function(e,t,a){var o=a(963),n=a(252);function i(e,t,a,o,i,s){const l=(0,n.up)("google-map");return(0,n.wg)(),(0,n.j4)(l)}var s=a(577);function l(e,t,i,l,c,r){const d=(0,n.up)("address-auto-complete"),m=(0,n.up)("GMapMarker"),p=(0,n.up)("GMapMap"),h=(0,n.up)("location-details-dialog");return(0,n.wg)(),(0,n.iD)("div",{onKeyup:t[3]||(t[3]=(0,o.D2)((e=>r.closeDialog()),["esc"]))},[(0,n.Wm)(d,{onOnSelectLocation:r.selectLocation},null,8,["onOnSelectLocation"]),(0,n.Wm)(p,{onClick:t[1]||(t[1]=e=>r.closeDialog()),center:c.center,zoom:7,"map-type-id":"terrain",style:(0,s.j5)([{width:"100vw",height:"100vh"},c.displayDialog?"pointer-events:none":"pointer-events:all"]),options:c.mapOptions},{default:(0,n.w5)((()=>[c.marker?((0,n.wg)(),(0,n.j4)(m,{key:0,position:c.marker.position,clickable:!0,icon:{url:a(851),scaledSize:{width:20,height:25}},onClick:t[0]||(t[0]=e=>c.displayDialog=!0)},null,8,["position","icon"])):(0,n.kq)("",!0)])),_:1},8,["center","options","style"]),(0,n.Wm)(h,{location:c.searchedLocation,displayDialog:c.displayDialog,onOnClose:t[2]||(t[2]=e=>r.closeDialog())},null,8,["location","displayDialog"])],32)}var c=a(851);const r=e=>((0,n.dD)("data-v-46fe3794"),e=e(),(0,n.Cn)(),e),d={class:"search-input"},m={style:{"background-color":"#4F7DFA",color:"white",padding:"1rem"}},p=["onClick"],h=r((()=>(0,n._)("img",{src:c},null,-1))),u={style:{"margin-left":".5rem"}},g={style:{"font-weight":"bold"}},f={style:{"font-size":"small",color:"gray"}},y={key:0,class:"error-message"};function b(e,t,a,i,l,c){const r=(0,n.up)("auto-complete");return(0,n.wg)(),(0,n.iD)("div",{onKeyup:t[1]||(t[1]=(0,o.D2)((e=>c.selectLocation(l.selectedLocation)),["enter"])),style:{display:"flex"}},[(0,n._)("div",d,[(0,n.Wm)(r,{style:{width:"100%"},modelValue:l.selectedLocation,"onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedLocation=e),suggestions:l.items,onComplete:c.searchLocation,optionLabel:"name"},(0,n.Nv)({header:(0,n.w5)((()=>[(0,n._)("div",m," Found "+(0,s.zw)(l.items.length)+" Results: ",1)])),_:2},[l.items.length?{name:"item",fn:(0,n.w5)((e=>[(0,n._)("span",{style:{display:"flex",cursor:"pointer"},onClick:t=>c.selectLocation(e.item)},[h,(0,n._)("div",u,[(0,n._)("div",g,(0,s.zw)(e.item.name),1),(0,n._)("div",f,(0,s.zw)(c.getLongLat(e.item.location)),1)])],8,p)])),key:"0"}:void 0]),1032,["modelValue","suggestions","onComplete"])]),l.items.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",y," No location found "))],32)}var w=[{id:1,name:"Alberts Bike Shop",location:{lat:42.354022,lon:-71.046245},details:{description:"We buy and sell used bikes and equipment. Contact us today to get moving!",website:"https://groundsignal.com"},images:["http://dspncdn.com/a1/media/692x/f8/58/77/f85877c41fb6147599886048e3582d47.jpg","https://s-media-cache-ak0.pinimg.com/236x/96/f0/c4/96f0c45570b80b7024d3d549509fde4e.jpg","http://68.media.tumblr.com/f62950453d60c9a873b35d7f2fcf4ace/tumblr_mjd4b4nD0q1qakvm6o1_1280.jpg"]},{id:2,name:"Arctic Ice Cream",location:{lat:42.364369,lon:-71.063776},details:{description:"We sell the coldest ice cream you've ever had! It's freezing cold. Literally.",website:"https://groundsignal.com",avgStoreTraffic:{monday:null,tuesday:504,wednesday:607,thursday:705,friday:714,saturday:1918,sunday:1295}},images:["https://s.yimg.com/ny/api/res/1.2/Lqp5sa6BMjWgIpAZGJ9apQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9Mzc4O2g9Mzc4/http://media.zenfs.com/en-US/homerun/spoon_university_184/90c834e4ac8b84e06606743451310bea","https://s3.burpple.com/foods/c9a13bb614df68a09a381856_original.?1363868049","https://s-media-cache-ak0.pinimg.com/736x/88/6c/cd/886ccd8e288e4a83130c7c44582eb618.jpg"]},{id:3,name:"Clems Carwash",location:{lat:42.367793,lon:-71.0812},details:{description:"The nations largest provider of car washes since 1907. Come in and enjoy a car wash that will literally peel the rust right off!",website:"https://groundsignal.com"},images:["https://rainbowgram.files.wordpress.com/2015/03/fe8de-10787805_946218992085237_543029709_n.jpg?w=640","https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/e35/sh0.08/11255060_1622514958029454_1290485308_n.jpg"]},{id:4,name:"Pets Plus",location:{lat:42.331319,lon:-71.044207},details:{description:"We sell pets PLUS almost everything else. Seriously. We're also the largest owner of albino dwarf hamsters in North America.",avgStoreTraffic:{monday:12,tuesday:37,wednesday:117,thursday:197,friday:105,saturday:98,sunday:45}},images:["https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/17438950_343266982735997_4166148432085385216_n.jpg"]},{id:5,name:"Evans Bakery",location:{lat:42.373056,lon:-70.99391},details:{description:"Evan has been baking bread since he was 6 months old. Known around the world for his homemade english muffins, he's been featured in Healthy Living an incredible 118 times. Come in to experience the magic of homemade bread!"},images:["https://s-media-cache-ak0.pinimg.com/736x/4c/0a/c1/4c0ac1e45df77367c680ce4bbf9e1ffc.jpg","http://68.media.tumblr.com/7f8a8514a88c893bac6c6db9b4093627/tumblr_n8j8uuygEf1r1thfzo5_1280.jpg","https://s-media-cache-ak0.pinimg.com/736x/eb/73/09/eb7309d64f419eb7f714ef64dcb65287--sourdough-bread-bread-recipes.jpg"]},{id:6,name:"The Secret Store",location:{lat:42.344516,lon:-70.953655}},{id:7,name:"Shoes on Shoes",location:{lat:42.365066,lon:-71.019402}},{id:8,name:"Bertas Bees",location:{lat:42.368554,lon:-71.038971}},{id:9,name:"The Cranky Elf",location:{lat:42.37572,lon:-71.056395}},{id:10,name:"Nanas Bananas",location:{lat:42.362593,lon:-71.082315}},{id:11,name:"Cycling for Cyclists",location:{lat:42.360129,lon:-71.09416}},{id:12,name:"The Ugly Kitten",location:{lat:42.350669,lon:-71.089354}},{id:13,name:"Family Boots",location:{lat:42.350732,lon:-71.080427}},{id:14,name:"Smoothies 'n Things",location:{lat:42.344204,lon:-71.077423}},{id:15,name:"Johnys Furniture",location:{lat:42.342332,lon:-71.075191}}],v={name:"AddressAutoComplete",data(){return{selectedLocation:null,items:w}},methods:{searchLocation(e){this.items=e.query?w.filter((t=>t.name?.toLowerCase()?.startsWith(e.query.toLowerCase()))):w},selectLocation(e){const t={...e.location},a={id:e.id,latLng:{lat:t.lat,lng:t.lon}};this.$emit("onSelectLocation",a)},getLongLat(e){return`${e.lat}, ${e.lon}`}}},_=a(744);const k=(0,_.Z)(v,[["render",b],["__scopeId","data-v-46fe3794"]]);var D=k,L=a.p+"img/icon-cross.2cd0779c.svg";const C=e=>((0,n.dD)("data-v-1d904b43"),e=e(),(0,n.Cn)(),e),j={style:{display:"flex","justify-content":"space-between","padding-top":"10px"}},x={style:{display:"flex"}},S=C((()=>(0,n._)("img",{src:c},null,-1))),z={style:{"margin-left":"0.5rem"}},O={style:{"font-weight":"bold"}},T={style:{"font-size":"small",color:"gray"}},W={style:{display:"flex"}},q={key:0},B={key:1,style:{"font-size":"small"}},A={style:{display:"flex","margin-top":"1rem"}},M=["src"];function Z(e,t,a,o,i,l){const c=(0,n.up)("Bar"),r=(0,n.up)("Dialog");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(r,{visible:i.showDialog,"onUpdate:visible":t[2]||(t[2]=e=>i.showDialog=e),showHeader:!1,breakpoints:{"960px":"30vw","640px":"90vw"},style:{width:"30vw"},dialog:!0},{default:(0,n.w5)((()=>[(0,n._)("span",j,[(0,n._)("span",x,[S,(0,n._)("div",z,[(0,n._)("div",O,(0,s.zw)(a.location.name),1),(0,n._)("div",T,(0,s.zw)(l.getLongLat(a.location.location)),1)])]),(0,n._)("span",W,[l.currentLocationWebsite?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"btn-primary",style:{"margin-right":".5rem"},onClick:t[0]||(t[0]=e=>l.openURL(l.currentLocationWebsite))}," Visit Website ")):(0,n.kq)("",!0),(0,n._)("img",{height:"20",width:"20",onClick:t[1]||(t[1]=t=>e.$emit("onClose")),style:{cursor:"pointer","margin-top":"2px"},src:L})])]),l.currentLocationDescription||a.location.images?((0,n.wg)(),(0,n.iD)("hr",q)):(0,n.kq)("",!0),l.currentLocationDescription?((0,n.wg)(),(0,n.iD)("span",B,(0,s.zw)(l.currentLocationDescription),1)):(0,n.kq)("",!0),(0,n._)("span",A,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.location.images,((e,t)=>((0,n.wg)(),(0,n.iD)("img",{height:"100",width:"100",key:t,src:e,alt:"image"},null,8,M)))),128))]),l.locationHasChart?((0,n.wg)(),(0,n.j4)(c,{key:2,"chart-id":"bar-chart","dataset-id-key":"label",width:40,height:30,"chart-options":i.chartOptions,"chart-data":i.chartData},null,8,["chart-options","chart-data"])):(0,n.kq)("",!0)])),_:1},8,["visible"])])}var P=a(609),U=a(764),G=a(300);G.kL.register(G.Dx,G.u,G.De,G.ZL,G.uw,G.f$);var E={name:"LocationDetailsDialog",components:{Bar:U.$Q,Dialog:P.Z},data(){return{showDialog:!1,chartOptions:{responsive:!0},chartData:{labels:[],datasets:[]}}},props:{location:{default:null,required:!0},displayDialog:{default:!1,required:!0}},watch:{displayDialog:{handler:function(e){this.showDialog=e,this.$nextTick((()=>{e&&this.manipulateChartData()}))}}},computed:{currentLocationWebsite(){return this.location?.details?.website},currentLocationDescription(){return this.location?.details?.description},locationHasChart(){return!!this.location?.details?.avgStoreTraffic}},methods:{getLongLat(e){return`${e.lat}, ${e.lon}`},openURL(e){window.open(e,"_blank")},manipulateChartData(){let e=this.location?.details?.avgStoreTraffic;this.chartData={labels:e?Object.keys(e):[],datasets:[{backgroundColor:"#f87979",label:"Average Store Traffic values",data:e?Object.values(e):[]}]}}}};const I=(0,_.Z)(E,[["render",Z],["__scopeId","data-v-1d904b43"]]);var $=I,F=[{id:1,name:"Alberts Bike Shop",location:{lat:42.354022,lon:-71.046245},details:{description:"We buy and sell used bikes and equipment. Contact us today to get moving!",website:"https://groundsignal.com"},images:["http://dspncdn.com/a1/media/692x/f8/58/77/f85877c41fb6147599886048e3582d47.jpg","https://s-media-cache-ak0.pinimg.com/236x/96/f0/c4/96f0c45570b80b7024d3d549509fde4e.jpg","http://68.media.tumblr.com/f62950453d60c9a873b35d7f2fcf4ace/tumblr_mjd4b4nD0q1qakvm6o1_1280.jpg"]},{id:2,name:"Arctic Ice Cream",location:{lat:42.364369,lon:-71.063776},details:{description:"We sell the coldest ice cream you've ever had! It's freezing cold. Literally.",website:"https://groundsignal.com",avgStoreTraffic:{monday:null,tuesday:504,wednesday:607,thursday:705,friday:714,saturday:1918,sunday:1295}},images:["https://s.yimg.com/ny/api/res/1.2/Lqp5sa6BMjWgIpAZGJ9apQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9Mzc4O2g9Mzc4/http://media.zenfs.com/en-US/homerun/spoon_university_184/90c834e4ac8b84e06606743451310bea","https://s3.burpple.com/foods/c9a13bb614df68a09a381856_original.?1363868049","https://s-media-cache-ak0.pinimg.com/736x/88/6c/cd/886ccd8e288e4a83130c7c44582eb618.jpg"]},{id:3,name:"Clems Carwash",location:{lat:42.367793,lon:-71.0812},details:{description:"The nations largest provider of car washes since 1907. Come in and enjoy a car wash that will literally peel the rust right off!",website:"https://groundsignal.com"},images:["https://rainbowgram.files.wordpress.com/2015/03/fe8de-10787805_946218992085237_543029709_n.jpg?w=640","https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/e35/sh0.08/11255060_1622514958029454_1290485308_n.jpg"]},{id:4,name:"Pets Plus",location:{lat:42.331319,lon:-71.044207},details:{description:"We sell pets PLUS almost everything else. Seriously. We're also the largest owner of albino dwarf hamsters in North America.",avgStoreTraffic:{monday:12,tuesday:37,wednesday:117,thursday:197,friday:105,saturday:98,sunday:45}},images:["https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/17438950_343266982735997_4166148432085385216_n.jpg"]},{id:5,name:"Evans Bakery",location:{lat:42.373056,lon:-70.99391},details:{description:"Evan has been baking bread since he was 6 months old. Known around the world for his homemade english muffins, he's been featured in Healthy Living an incredible 118 times. Come in to experience the magic of homemade bread!"},images:["https://s-media-cache-ak0.pinimg.com/736x/4c/0a/c1/4c0ac1e45df77367c680ce4bbf9e1ffc.jpg","http://68.media.tumblr.com/7f8a8514a88c893bac6c6db9b4093627/tumblr_n8j8uuygEf1r1thfzo5_1280.jpg","https://s-media-cache-ak0.pinimg.com/736x/eb/73/09/eb7309d64f419eb7f714ef64dcb65287--sourdough-bread-bread-recipes.jpg"]},{id:6,name:"The Secret Store",location:{lat:42.344516,lon:-70.953655}},{id:7,name:"Shoes on Shoes",location:{lat:42.365066,lon:-71.019402}},{id:8,name:"Bertas Bees",location:{lat:42.368554,lon:-71.038971}},{id:9,name:"The Cranky Elf",location:{lat:42.37572,lon:-71.056395}},{id:10,name:"Nanas Bananas",location:{lat:42.362593,lon:-71.082315}},{id:11,name:"Cycling for Cyclists",location:{lat:42.360129,lon:-71.09416}},{id:12,name:"The Ugly Kitten",location:{lat:42.350669,lon:-71.089354}},{id:13,name:"Family Boots",location:{lat:42.350732,lon:-71.080427}},{id:14,name:"Smoothies 'n Things",location:{lat:42.344204,lon:-71.077423}},{id:15,name:"Johnys Furniture",location:{lat:42.342332,lon:-71.075191}}];const H=F[0].location;var K={name:"GoogleMap",components:{AddressAutoComplete:D,LocationDetailsDialog:$},data(){return{center:{lat:H.lat,lng:H.lon},marker:null,searchedLocation:null,displayDialog:!1,mapOptions:{zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1}}},methods:{selectLocation(e){const{id:t,latLng:a}=e;this.searchedLocation=F.find((e=>e.id==t)),this.center=a,this.marker={position:a}},closeDialog(){1==this.displayDialog&&(this.displayDialog=!1)}}};const N=(0,_.Z)(K,[["render",l]]);var J=N,Q={name:"App",components:{GoogleMap:J}};const R=(0,_.Z)(Q,[["render",i]]);var V=R,X=a(995),Y=a(823),ee=a(401);const te=(0,o.ri)(V);te.use(X.ZP,{load:{key:"AIzaSyA1r27YJPTiPeu2MH67ZzbuBXdHyDqX5jc",libraries:"places"}}),te.use(Y.Z),te.component("AutoComplete",ee.Z),te.mount("#app")},851:function(e,t,a){e.exports=a.p+"img/icon-pin.ccbc5487.svg"}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,i){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],i=e[d][2];for(var l=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(l=!1,i<s&&(s=i));if(l){e.splice(d--,1);var r=n();void 0!==r&&(t=r)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,n,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,s=o[0],l=o[1],c=o[2],r=0;if(s.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var d=c(a)}for(t&&t(o);r<s.length;r++)i=s[r],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},o=self["webpackChunkmap_search_test"]=self["webpackChunkmap_search_test"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(675)}));o=a.O(o)})();