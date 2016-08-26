webpackJsonp([1,0],[function(s,a,n){"use strict";function p(s){return s&&s.__esModule?s:{"default":s}}var e=n(12),t=p(e),l=n(9),c=p(l),o=n(1),i=p(o);t["default"].use(i["default"]),new t["default"]({el:"body",components:{App:c["default"]}})},function(s,a,n){"use strict";function p(s){return s&&s.__esModule?s:{"default":s}}var e=n(11),t=p(e);s.exports.install=function(s){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=null;s.mixin({created:function(){n||this===this.$root&&(n=this,s.set(n,"RADON_LOADING_BAR",{percent:0,options:{canSuccess:!0,show:!1,color:a.color||"rgb(143, 255, 199)",failedColor:a.failedColor||"red",height:a.height||"2px"}}),s.component("vue-progress-bar",t["default"]))}}),s.prototype.$Progress={timer:null,cut:0,start:function(s){var a=this;s||(s=3e3),n.RADON_LOADING_BAR.percent=0,n.RADON_LOADING_BAR.options.show=!0,n.RADON_LOADING_BAR.options.canSuccess=!0,this.cut=1e4/Math.floor(s),this.timer=setInterval(function(){a.increase(a.cut*Math.random()),n.RADON_LOADING_BAR.percent>95&&a.finish()},100)},set:function(s){n.RADON_LOADING_BAR.options.show=!0,n.RADON_LOADING_BAR.options.canSuccess=!0,n.RADON_LOADING_BAR.percent=Math.floor(s)},get:function(){return Math.floor(n.RADON_LOADING_BAR.percent)},increase:function(s){n.RADON_LOADING_BAR.percent=n.RADON_LOADING_BAR.percent+Math.floor(s)},decrease:function(s){n.RADON_LOADING_BAR.percent=n.RADON_LOADING_BAR.percent-Math.floor(s)},hide:function(){clearInterval(this.timer),this.timer=null,setTimeout(function(){n.RADON_LOADING_BAR.options.show=!1,s.nextTick(function(){setTimeout(function(){n.RADON_LOADING_BAR.percent=0},100)})},800)},finish:function(){n.RADON_LOADING_BAR.percent=100,this.hide()},fail:function(){n.RADON_LOADING_BAR.options.canSuccess=!1,n.RADON_LOADING_BAR.percent=100,this.hide()}}}},function(s,a,n){"use strict";function p(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(a,"__esModule",{value:!0});var e=n(10),t=p(e);a["default"]={components:{docsContent:t["default"]}}},function(s,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={ready:function(){this.$Progress.start()},methods:{start:function(){this.$Progress.start()},set:function(s){this.$Progress.set(s)},increase:function(s){this.$Progress.increase(s)},decrease:function(s){this.$Progress.decrease(s)},finish:function(){this.$Progress.finish()},fail:function(){this.$Progress.fail()}}}},function(s,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={computed:{progress:function(){return this.$root.RADON_LOADING_BAR}}}},function(s,a){},function(s,a){s.exports=" <div id=app> <docs-content></docs-content> <vue-progress-bar></vue-progress-bar> </div> "},function(s,a){s.exports=' <section class=page-header> <h1 class=project-name>Vue-progressbar</h1> <h2 class=project-tagline>A lightweight progress bar for vue</h2> <p> <button class=btn @click=start>Start</button> <button class=btn @click=increase(10)>Increase(10)</button> <button class=btn @click=decrease(10)>Decrease(10)</button> <button class=btn @click=finish>Finish</button> <button class=btn @click=fail>Fail</button> <a href=https://github.com/hilongjw/vue-progressbar class=btn>View on GitHub</a> </p> </section> <section class=main-content> <h1> <a id=vue-progressbar class=anchor href=#vue-progressbar aria-hidden=true><span aria-hidden=true class="octicon octicon-link"></span></a>vue-progressbar</h1> <h1> <a id=demo class=anchor href=#demo aria-hidden=true><span aria-hidden=true class="octicon octicon-link"></span></a>Demo</h1> <p>The demo page is <a href=http://hilongjw.github.io/vue-progressbar/index.html>HERE</a>.</p> <h1> <a id=requirements class=anchor href=#requirements aria-hidden=true><span aria-hidden=true class="octicon octicon-link"></span></a>Requirements</h1> <ul> <li> <a href=https://github.com/yyx990803/vue>Vue.js</a> <code>^1.0.0</code> </li> </ul> <h1> <a id=installation class=anchor href=#installation aria-hidden=true><span aria-hidden=true class="octicon octicon-link"></span></a>Installation</h1> <h2> <a id=npm class=anchor href=#npm aria-hidden=true><span aria-hidden=true class="octicon octicon-link"></span></a>npm</h2> <div class="highlight highlight-source-shell"><pre>$ npm install vue-progressbar</pre></div> <h1> <a id=usage class=anchor href=#usage aria-hidden=true><span aria-hidden=true class="octicon octicon-link"></span></a>Usage</h1> <p>main.js</p> <div class="highlight highlight-source-js"><pre>\n<span class=pl-k>import</span> <span class=pl-smi>VueProgressBar</span> <span class=pl-k>from</span> <span class=pl-s><span class=pl-pds>\'</span>vue-progressbar<span class=pl-pds>\'</span></span>\n\n<span class=pl-smi>Vue</span>.<span class=pl-en>use</span>(VueProgressBar, {\n  color<span class=pl-k>:</span> <span class=pl-s><span class=pl-pds>\'</span>rgb(143, 255, 199)<span class=pl-pds>\'</span></span>,\n  failedColor<span class=pl-k>:</span> <span class=pl-s><span class=pl-pds>\'</span>red<span class=pl-pds>\'</span></span>,\n  height<span class=pl-k>:</span> <span class=pl-s><span class=pl-pds>\'</span>2px<span class=pl-pds>\'</span></span>\n})\n</pre></div> <p>Root App.vue</p> <div class="highlight highlight-text-html-basic"><pre>&lt;<span class=pl-ent>template</span>&gt;\n    &lt;<span class=pl-ent>div</span> <span class=pl-e>id</span>=<span class=pl-s><span class=pl-pds>"</span>app<span class=pl-pds>"</span></span>&gt;\n        <span class=pl-c>&lt;!-- for example router view --&gt;</span>\n        &lt;<span class=pl-ent>router</span><span class=pl-e>-view</span>&gt;&lt;/<span class=pl-ent>router</span><span class=pl-e>-view</span>&gt;\n        <span class=pl-c>&lt;!-- set progressbar --&gt;</span>\n        &lt;<span class=pl-ent>vue</span><span class=pl-e>-progress-bar</span>&gt;&lt;/<span class=pl-ent>vue</span><span class=pl-e>-progress-bar</span>&gt;\n    &lt;/<span class=pl-ent>div</span>&gt;\n&lt;/<span class=pl-ent>template</span>&gt;</pre></div> <p>Any child </p> <div class="highlight highlight-text-html-basic"><pre>\n<span class=pl-s1>&lt;<span class=pl-ent>script</span>&gt;</span>\n<span class=pl-s1><span class=pl-k>export</span> <span class=pl-v>default</span> {</span>\n<span class=pl-s1>  methods<span class=pl-k>:</span>{</span>\n<span class=pl-s1>    <span class=pl-en>start</span> () {</span>\n<span class=pl-s1>        <span class=pl-v>this</span>.<span class=pl-smi>$Progress</span>.<span class=pl-c1>start</span>()</span>\n<span class=pl-s1>    },</span>\n<span class=pl-s1>    <span class=pl-en>set</span> (<span class=pl-smi>num</span>) {</span>\n<span class=pl-s1>        <span class=pl-v>this</span>.<span class=pl-smi>$Progress</span>.<span class=pl-en>set</span>(num)</span>\n<span class=pl-s1>    },</span>\n<span class=pl-s1>    <span class=pl-en>increase</span> (<span class=pl-smi>num</span>) {</span>\n<span class=pl-s1>        <span class=pl-v>this</span>.<span class=pl-smi>$Progress</span>.<span class=pl-en>increase</span>(num)</span>\n<span class=pl-s1>    },</span>\n<span class=pl-s1>    <span class=pl-en>decrease</span> (<span class=pl-smi>num</span>) {</span>\n<span class=pl-s1>        <span class=pl-v>this</span>.<span class=pl-smi>$Progress</span>.<span class=pl-en>decrease</span>(num)</span>\n<span class=pl-s1>    },</span>\n<span class=pl-s1>    <span class=pl-en>finish</span> () {</span>\n<span class=pl-s1>        <span class=pl-v>this</span>.<span class=pl-smi>$Progress</span>.<span class=pl-en>finish</span>()</span>\n<span class=pl-s1>    },</span>\n<span class=pl-s1>    <span class=pl-en>fail</span> () {</span>\n<span class=pl-s1>        <span class=pl-v>this</span>.<span class=pl-smi>$Progress</span>.<span class=pl-en>fail</span>()</span>\n<span class=pl-s1>    },</span>\n<span class=pl-s1>    <span class=pl-en>test</span>(){</span>\n<span class=pl-s1>      <span class=pl-v>this</span>.<span class=pl-smi>$Progress</span>.<span class=pl-c1>start</span>()</span>\n<span class=pl-s1></span>\n<span class=pl-s1>      <span class=pl-v>this</span>.<span class=pl-smi>$http</span>.<span class=pl-en>jsonp</span>(<span class=pl-s><span class=pl-pds>\'</span>http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz<span class=pl-pds>\'</span></span>)</span>\n<span class=pl-s1>      .<span class=pl-en>then</span>((<span class=pl-smi>response</span>) <span class=pl-k>=&gt;</span> {</span>\n<span class=pl-s1>          <span class=pl-v>this</span>.<span class=pl-smi>$Progress</span>.<span class=pl-en>finish</span>()</span>\n<span class=pl-s1>      }, (<span class=pl-smi>response</span>) <span class=pl-k>=&gt;</span> {</span>\n<span class=pl-s1>          <span class=pl-v>this</span>.<span class=pl-smi>$Progress</span>.<span class=pl-en>fail</span>()</span>\n<span class=pl-s1>      })</span>\n<span class=pl-s1>    }</span>\n<span class=pl-s1>  }</span>\n<span class=pl-s1>}</span>\n<span class=pl-s1>&lt;/<span class=pl-ent>script</span>&gt;</span>\n</pre></div> <h1> <a id=license class=anchor href=#license aria-hidden=true><span aria-hidden=true class="octicon octicon-link"></span></a>License</h1> <p><a href=http://opensource.org/licenses/MIT>The MIT License</a></p> <footer class=site-footer> <span class=site-footer-owner><a href=https://github.com/hilongjw/vue-progressbar>Vue-progressbar</a> is maintained by <a href=https://github.com/hilongjw>hilongjw</a>.</span> <span class=site-footer-credits>This page was generated by <a href=https://pages.github.com>GitHub Pages</a> using the <a href=https://github.com/jasonlong/cayman-theme>Cayman theme</a> by <a href=https://twitter.com/jasonlong>Jason Long</a>.</span> </footer> </section> '},function(s,a){s.exports=" <div class=cov-progress :style=\"{\n  'width': progress.percent+'%',\n  'height': progress.options.height,\n  'background-color': progress.options.canSuccess? progress.options.color : progress.options.failedColor,\n  'opacity': progress.options.show ? 1 : 0\n}\" _v-79894762=\"\"> </div> "},function(s,a,n){var p,e;p=n(2),e=n(6),s.exports=p||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)},function(s,a,n){var p,e;p=n(3),e=n(7),s.exports=p||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)},function(s,a,n){var p,e;n(5),p=n(4),e=n(8),s.exports=p||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)}]);
//# sourceMappingURL=app.74cfad8bf04655cb5fc1.js.map