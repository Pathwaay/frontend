webpackJsonp([1],{"0Ht+":function(t,e,a){"use strict";e.a={props:["zoom"],data:function(){return{meterHeight:70}}}},"2C1S":function(t,e,a){"use strict";function s(t){a("kEm/")}var n=a("0Ht+"),i=a("PpX7"),o=a("VU/8"),r=s,c=o(n.a,i.a,!1,r,"data-v-863506d4",null);e.a=c.exports},"3GDu":function(t,e,a){"use strict";function s(t){a("d+SX")}var n=a("fGNU"),i=a("QnF/"),o=a("VU/8"),r=s,c=o(n.a,i.a,!1,r,"data-v-111f83cd",null);e.a=c.exports},"4x6I":function(t,e,a){"use strict";e.a={props:["search","changeSearch"],methods:{updateSearch:function(t){this.$emit("input",t)}},data:function(){return{searchText:""}}}},FTuW:function(t,e){},Fs8J:function(t,e,a){"use strict";var s=a("O4Lo"),n=a.n(s);e.a={name:"Home",data:function(){return{search:"",location:"",suggestions:[],submitted:!1,missingKeyword:!1,missingLocation:!1,isOpen:!1}},methods:{pickLocation:function(t){window.ga("send","event","pickLocation",t._id),this.location=t._id,this.isOpen=!1},onSearch:function(){var t=this;this.submitted=!0,this.search?this.missingKeyword=!1:this.missingKeyword=!0,this.location?this.missingLocation=!1:this.missingLocation=!0,this.getSuggestions().then(function(e){if(e.length>0){var a=e[0].location.coordinates,s=t.search;window.ga("send","event","search",s+" | "+a[0]+", "+a[1]),t.$router.push({path:"/map",query:{lat:a[1],lng:a[0],search:s,zoom:10}})}})},debounceSuggestions:n()(function(){var t=this;this.getSuggestions().then(function(e){e.length>0&&(t.isOpen=!0),t.suggestions=e})},500),getSuggestions:function(){return fetch("http://104.236.76.175/suggestion?location="+this.location).then(function(t){return t.json()})}},watch:{location:function(){this.location.length>1&&this.debounceSuggestions()}},mounted:function(){window.ga("send","pageview","/")}}},M93x:function(t,e,a){"use strict";function s(t){a("fIyt")}var n=a("xJD8"),i=a("Vq/C"),o=a("VU/8"),r=s,c=o(n.a,i.a,!1,r,null,null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("M93x"),i=a("YaEn");s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},PpX7:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zmm"},[t._m(0),t._v(" "),a("div",{staticClass:"zmm__indicator",style:{bottom:Math.round(t.meterHeight/12)*t.zoom+"px"}})])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zmm__bar"},[a("div",{staticClass:"zmm__ok"}),t._v(" "),a("div",{staticClass:"zmm__good"})])}],i={render:s,staticRenderFns:n};e.a=i},"QnF/":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix layout"},[a("toolbar",{attrs:{changeSearch:t.changeSearch,search:t.search},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t.cacheMessage&&!t.cacheMessage.inCache?a("div",{staticClass:"cache"},[a("i",{staticClass:"fa fa-spin fa-circle-o-notch"}),t._v("\n    "+t._s(t.cacheMessage.message)+"\n  ")]):t._e(),t._v(" "),a("div",{staticClass:"layout__content"},[a("div",{staticClass:"layout__map"},[a("zoom-match-meter",{attrs:{zoom:t.zoom}}),t._v(" "),a("div",{attrs:{id:"mapid"}})],1)])],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},TF2e:function(t,e,a){"use strict";a.d(e,"a",function(){return m}),a.d(e,"b",function(){return _});var s=a("Dd8w"),n=a.n(s),i=a("nrd6"),o=a.n(i),r=a("309y"),c=a.n(r),u={popupAnchor:[0,-5]},l=o.a.icon(n()({iconUrl:"http://pathwaay.io/markers/good_match_circle.svg",iconSize:[25,25]},u)),h=o.a.icon(n()({iconUrl:"http://pathwaay.io/markers/ok_match_circle.svg",iconSize:[18,18]},u)),d=function(t){return Math.floor(.75*t.length)},m=function(t,e){var a=d(t);return t.forEach(p.bind(null,e,a)),e},p=function(t,e,a,s){t[a.id]=n()({},t[a.id],a,{index:s,status:s<e?"ok":"good"}),t[a.id].marker=g(a,e,s)},g=function(t,e,a){var s=t.location.coordinates,n=o.a.marker([s[1],s[0]],{icon:a<e?h:l,score:t.score});return n.bindPopup('\n    <div class="marker">\n      <h5 class="marker__title">\n        <a class="marker__title__link" href="https://indeed.com'+t.link+"\" target=\"_blank\" onclick=\"ga('send', 'event', 'title', 'click', '"+t.title+"')\">\n          "+t.title+'\n        </a>\n      </h5>\n      <a class="marker__company" href="https://indeed.com'+t.link+"\" target=\"_blank\" onclick=\"ga('send', 'event', 'company', 'click', '"+t.title+"')\">"+t.company+'</a>\n      <p class="marker__description">'+t.description+"</p>\n    </div>\n  "),n},_=function(t,e,a){c()(t,function(t){t.score<a&&e.removeLayer(t.marker)})}},"Vq/C":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),n=a("/ocq"),i=a("3GDu"),o=a("lO7g");s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:o.a},{path:"/map",name:"Map",component:i.a}]})},"d+SX":function(t,e){},djO7:function(t,e,a){"use strict";function s(t){a("FTuW")}var n=a("4x6I"),i=a("qcAB"),o=a("VU/8"),r=s,c=o(n.a,i.a,!1,r,"data-v-6a28adec",null);e.a=c.exports},fGNU:function(t,e,a){"use strict";var s=a("Dd8w"),n=a.n(s),i=a("mvHQ"),o=a.n(i),r=a("nrd6"),c=a.n(r),u=a("O4Lo"),l=a.n(u),h=a("2C1S"),d=a("djO7"),m=a("309y"),p=a.n(m),g=a("TF2e");e.a={name:"map",data:function(){return{zoom:0,oldZoom:0,search:decodeURIComponent(this.getQueryString("search")),isShowingGoodMatches:!0,isShowingOkMatches:!1,map:null,markerLayer:null,jobs:{},socket:{},totalJobs:0,host:"104.236.76.175",cacheMessage:null,jobScoreAverage:0}},methods:{getMessage:function(){var t=this.map.getBounds(),e=this.map.getCenter(),a=[e.lng,e.lat];return{type:"mapMove",data:{keyword:this.search,within:[[t._southWest.lng,t._northEast.lat],[t._northEast.lng,t._northEast.lat],[t._northEast.lng,t._southWest.lat],[t._southWest.lng,t._southWest.lat],[t._southWest.lng,t._northEast.lat]],center:a}}},panToCompanyOnMap:function(t){this.map.panTo(new c.a.LatLng(t.location.coordinates[1],t.location.coordinates[0]))},debouncedSendCoords:l()(function(){var t=this.getMessage();window.ga("send","event","mapSearch",t.data.keyword,t.data.center[0]+", "+t.data.center[1]),this.socket.send(o()(t))},500),changeSearch:function(){this.sendCoords()},sendCoords:function(){this.map.getZoom()>=5&&this.search.length>2&&this.debouncedSendCoords(),this.updateQueryString()},updateQueryString:function(){var t=this.map.getCenter(),e=this.search,a=this.map.getZoom();this.$router.replace({path:"/map",query:{lat:t.lat,lng:t.lng,search:e,zoom:a}})},getQueryString:function(t){var e=window.location.href,a=new RegExp("[?&]"+t+"=([^&#]*)","i"),s=a.exec(e);return s?s[1]:null},populateJobs:function(t){var e=this;this.map.removeLayer(this.markerLayer),this.markerLayer.clearLayers();var s=a.i(g.a)(t,n()({},this.jobs));this.jobs={},p()(s,function(t){e.zoom<11&&"ok"===t.status||t.marker.addTo(e.markerLayer)}),this.markerLayer.addTo(this.map),this.jobs=s}},created:function(){var t=this;this.socket=new WebSocket("ws://"+this.host+"/ws"),this.socket.onmessage=function(e){var a=e.data,s=JSON.parse(a);switch(s.type){case"jobs":"indeed"===s.from&&(t.cacheMessage=null),t.populateJobs(s.message);break;case"cache":t.cacheMessage=s}}},mounted:function(){var t=this;document.getElementById("mapid").setAttribute("style","height:"+(window.innerHeight-20)+"px;position:relative"),this.map=c.a.map("mapid"),this.markerLayer=c.a.layerGroup().addTo(this.map);var e=this.getQueryString("lat")||47.65878,s=this.getQueryString("lng")||-117.426046,n=this.getQueryString("zoom")||10;this.zoom=n,window.ga("send","pageview","/map"),c.a.tileLayer("https://api.mapbox.com/styles/v1/snippyboons/cj9z60tsd89lw2sphcbqnd0x4/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic25pcHB5Ym9vbnMiLCJhIjoiY2o4YXBpOThmMDRqMjMycDZhOGt6dTVibCJ9.dTxAsWgm-MNT-wBTVCBODg",{maxZoom:16,id:"mapbox.streets",accessToken:"pk.eyJ1Ijoic25pcHB5Ym9vbnMiLCJhIjoiY2o4YXBpOThmMDRqMjMycDZhOGt6dTVibCJ9.dTxAsWgm-MNT-wBTVCBODg"}).addTo(this.map),this.map.setView([e,s],n),this.map.on("moveend",this.sendCoords),this.map.on("zoomend",function(){t.zoom=t.map.getZoom(),t.zoom<12&&a.i(g.b)(t.jobs,t.map,t.jobScoreAverage),t.oldZoom=t.zoom}),this.sendCoords()},components:{ZoomMatchMeter:h.a,Toolbar:d.a}}},fIyt:function(t,e){},"kEm/":function(t,e){},lO7g:function(t,e,a){"use strict";function s(t){a("nue+")}var n=a("Fs8J"),i=a("llp2"),o=a("VU/8"),r=s,c=o(n.a,i.a,!1,r,null,null);e.a=c.exports},llp2:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",{staticClass:"home__title"},[t._v("\n    Pathwaay\n  ")]),t._v(" "),a("h2",{staticClass:"home__subtitle"},[t._v("\n    Find your next career move the right way\n  ")]),t._v(" "),a("div",{staticClass:"search"},[a("div",{staticClass:"search__fields"},[a("div",{staticClass:"sm-flex"},[a("label",{staticClass:"search__keyword"},[a("p",{staticClass:"search__label-text"},[t._v("\n              Keyword:\n              "),t.submitted&&t.missingKeyword?a("small",{staticClass:"search__error"},[t._v("(required)")]):t._e()]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],class:{search__input:!0,"search__input--error":t.submitted&&t.missingKeyword},attrs:{type:"text",placeholder:"Plumber"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),a("label",{staticClass:"search__location"},[a("p",{staticClass:"search__label-text"},[t._v("City, State:\n              "),t.submitted&&t.missingLocation?a("small",{staticClass:"search__error"},[t._v("(required)")]):t._e()]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],class:{search__input:!0,"search__input--error":t.submitted&&t.missingLocation},attrs:{type:"text",placeholder:"New York, NY",list:"suggestions"},domProps:{value:t.location},on:{input:function(e){e.target.composing||(t.location=e.target.value)}}}),t._v(" "),t.isOpen&&t.suggestions.length>0&&(1!==t.suggestions.length||t.suggestions[0]._id!==t.location)?a("div",{staticClass:"suggestions"},t._l(t.suggestions,function(e){return a("div",{staticClass:"suggestions__suggestion",on:{click:function(a){t.pickLocation(e)}}},[t._v("\n                "+t._s(e._id)+"\n              ")])})):t._e()])])]),t._v(" "),a("div",{staticClass:"search__actions"},[a("button",{staticClass:"search__submit",on:{click:t.onSearch}},[t._v("\n        Find my next career\n      ")])])]),t._v(" "),a("img",{staticClass:"home__hero",attrs:{src:"/static/home_map.svg"}})])},n=[],i={render:s,staticRenderFns:n};e.a=i},"nue+":function(t,e){},qcAB:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toolbar"},[a("div",{staticClass:"titlebar"},[a("router-link",{staticClass:"titlebar__router-link",attrs:{to:"/"}},[a("img",{staticClass:"titlebar__icon",attrs:{src:"/static/map.svg"}})]),t._v(" "),a("h1",{staticClass:"titlebar__title"},[t._v("Pathwaay")]),t._v(" "),a("p",{staticClass:"titlebar__search-label"},[t._v("Search:")])],1),t._v(" "),a("div",{staticClass:"search"},[a("form",{staticClass:"search__form",on:{submit:function(e){e.preventDefault(),t.changeSearch(e)}}},[a("input",{staticClass:"search__textbox",attrs:{type:"text"},domProps:{value:t.search},on:{input:function(e){t.updateSearch(e.target.value)}}})])])])},n=[],i={render:s,staticRenderFns:n};e.a=i},xJD8:function(t,e,a){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.5d3db5d8740f9a52f8ad.js.map