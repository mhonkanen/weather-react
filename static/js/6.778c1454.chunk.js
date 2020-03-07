(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[6],{104:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mobile";return{width:"100%",slidesToShow:"time"===e?"tablet"===t?8:3:1,slidesToScroll:"time"===e?"tablet"===t?8:3:1,initialSlideHeight:"time"===e?100:200,slideWidth:"time"===e?"tablet"===t?1:.95:1,speed:1e3,easing:"easeSinInOut",defaultControlsConfig:{prevButtonStyle:{display:"none"},nextButtonStyle:{display:"none"},pagingDotsStyle:{fill:"#A1A6B4",display:"flex",position:"relative",top:"day"===e?"25px":"35px",margin:"10px 5px"}}}}},105:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a(165),r=a(88),c=function(e){return(!Object(n.a)(e.photos)||!Object(r.a)(e.photos))&&e.photos.length>0},l=function(e){var t=(c(e)?e.photos[0]:{mobile:"",web:""}).image,a=c(e)?e.photos[0].attribution:{photographer:"",site:"",source:""};return{image:t,photographer:a.photographer,site:a.site,source:a.source}}},109:function(e,t,a){"use strict";var n=a(91),r=a.n(n),c=a(108),l=a(98),o=a.n(l),s=a(99),i=a.n(s),m=a(165),u=a(88),d=a(92),f=a(7);i()(o.a,{retryDelay:i.a.exponentialDelay});var b=function(e){return"".concat("https://cors-anywhere.herokuapp.com","/https://api.darksky.net/forecast/").concat("4e27157cf1858c6667c07568e8e21a56","/").concat(e,"?extend=hourly&exclude=minutely,flags")};t.a=function(e){var t,a,n;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=e.latlong,a={},n={},Object(m.a)(t)||Object(u.a)(t)){l.next=6;break}return l.next=6,r.a.awrap(o.a.get(b(t)).then((function(e){var t=e.data;if(!Object(u.a)(t)&&!Object(m.a)(t)){var r=t.timezone;a=Object(c.a)({timezone:r},t.currently);var l={};t.hourly.data.forEach((function(e){var t=Object(d.a)(e.time,r,"MM/DD/YYYY");Object.keys(l).includes(t)?l[t].push(Object(c.a)({timezone:r},e)):l[t]=[Object(c.a)({timezone:r},e)]}));var o={};t.daily.data.forEach((function(e){var t=Object(d.a)(e.time,r,"MM/DD/YYYY");o[t]=Object(c.a)({timezone:r},e)})),n={timeFrames:l,days:o}}})).catch((function(e){return f.a(e)})));case 6:return l.abrupt("return",{weatherCurrent:a,weatherForecast:n});case 7:case"end":return l.stop()}}))}},110:function(e,t,a){"use strict";t.a=function(e,t){switch(e){case"favorites":Event({category:"Favorites",action:"Select Favorite",label:t});break;case"explore-life":Event({category:"Explore Life",action:"Click on Explore Life",label:t});break;case"powered-by":Event({category:"Powered By",action:"Click on Powered By",label:t})}}},112:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(113),l=a(45),o=a(97),s=a(12),i=a(105),m=a(168),u=a(165),d=a(88),f=a(28),b=a.n(f),h=a(17),p=function(e){var t=e.address,a=e.latlong,f=e.urbanArea,p=e.weatherCurrent,y=Object(n.useContext)(o.a).updateFavorites,x=Object(n.useState)(""),g=Object(l.a)(x,2),E=g[0],v=g[1],j=Object(n.useState)(""),O=Object(l.a)(j,2),N=O[0],w=O[1],k=Object(n.useContext)(s.a).colorTheme,C=Object(i.a)(f),S=C.image,F=C.photographer,z=C.site,M=C.source,I=function(e,t){Object(h.a)({category:"Favorite City",action:"".concat(e," city"),label:t})},T=Object(n.useRef)(),A=function(){return!!localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.address.cityName===t.cityName})).length>0},Y=function(e){v(Object(u.a)(e)?"":e.format("MMMM Do, YYYY")),w(Object(u.a)(e)?"":e.format("dddd h:mm A")),T.current=e||null};return Object(n.useEffect)((function(){Y(b()(1e3*p.time).tz(p.timezone));var e=setInterval((function(){if(p.time){var e=b.a.tz(T.current,p.timezone).add(1,"s");Y(e)}}),1e3);return function(){clearInterval(e)}}),[p]),r.a.createElement("div",{className:"relative"},r.a.createElement("div",null,Object(i.b)(f)?r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:S.mobile,alt:"city",className:"block sm:hidden h-40 w-full object-cover object-center rounded-t-2xl"}),r.a.createElement("img",{src:S.web,alt:"city",className:"hidden sm:block sm:h-32 md:h-24 xl:h-32 w-full object-cover object-center rounded-t-2xl"})):null),r.a.createElement("div",{className:"".concat(Object(i.b)(f)?"absolute top-0 left-0 right-0 bottom-0 text-light":"text-".concat(k)),style:Object(i.b)(f)?{background:"rgba(0,0,0,0.55)",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"}:null},r.a.createElement("div",{className:"flex justify-between items-start"},r.a.createElement("div",{className:"pt-4 px-4"},r.a.createElement("p",{className:"font-bold ".concat(Object(i.b)(f)?"sm:text-2xl":"")},t.cityName),r.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row ".concat(Object(i.b)(f)?"font-medium":"font-light")},Object(d.a)(E)||Object(d.a)(N)?null:r.a.createElement(n.Fragment,null,r.a.createElement("p",null,E,r.a.createElement("span",{className:"invisible md:visible"},"\xa0|\xa0")),r.a.createElement("p",null,N)))),r.a.createElement("div",{className:"mt-6 mr-4 cursor-pointer text-xl",title:A()?"Remove this city from favorites":"Favorite this city",onClick:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites")),n=Object(m.a)([].concat(Object(c.a)(e),[{address:t,latlong:a,urbanArea:f}]),["address.cityName"]),r=e.filter((function(e){return e.address.cityName===t.cityName}));if(r.length){var l=e.findIndex((function(e){return e.address.cityName===r[0].address.cityName}));if(-1!==l){var o=Object(m.a)(Object(c.a)(e),["address.cityName"]);o.splice(l,1),localStorage.setItem("favorites",JSON.stringify(o)),I("remove",t.cityName),y({favorites:o})}}else localStorage.setItem("favorites",JSON.stringify(n)),I("add",t.cityName),y({favorites:n})}else localStorage.setItem("favorites",JSON.stringify([{address:t,latlong:a,urbanArea:f}])),I("add",t.cityName),y({favorites:[{address:t,latlong:a,urbanArea:f}]})}},A()?r.a.createElement("i",{className:"icon-heart"}):r.a.createElement("i",{className:"icon-heart-empty"}))),r.a.createElement("div",{className:"hidden md:block text-right bottom-0 right-0 xl:mt-8 px-2"},F&&z?r.a.createElement("p",{className:"font-light",style:{fontSize:"0.5rem"}},"Photo by\xa0",r.a.createElement("span",{className:"font-medium"},F),"\xa0on\xa0",r.a.createElement("a",{className:"link z-0 font-medium hover:no-underline hover:font-medium hover:text-light",href:M,target:"_blank",rel:"noreferrer noopener",onClick:function(){Object(h.a)({category:"City Image",action:"Click on Image Source",label:"Image source"})}},z)):null)))},y=a(93),x=function(e){return e>=0&&e<=45?"up":e>=46&&e<=90?"up-right":e>=91&&e<=135?"right":e>=136&&e<=180?"down-right":e>=181&&e<=225?"down":e>=226&&e<=270?"down-left":e>=271&&e<=315?"left":"up-left"},g=a(95),E=a(94),v=function(e){var t=e.weatherCurrent,a=Object(n.useContext)(y.a),c=a.weatherUnit,l=a.updateWeatherUnit,o=function(e){Object(h.a)({category:"Weather Unit",action:"Set Unit",label:e}),l(e)},s=function(e){return"F"===c?Math.round(t["".concat(e)]):Object(E.a)(t["".concat(e)])};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row justify-between mt-5 mb-5 px-4"},r.a.createElement("div",{className:"flex-col sm:w-full lg:w-1/2"},r.a.createElement("div",{className:"flex flex-row items-center"},r.a.createElement("div",null,r.a.createElement("i",{className:"wi wi-".concat(Object(g.a)(t.icon,t.timezone)," text-5xl mt-3 mr-2 mx-3"),title:t.summary})),r.a.createElement("div",{className:"flex justify-start items-center ml-3"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-5xl font-bold"},s("temperature"))),r.a.createElement("div",{className:"-mt-8 mx-2 text-sm"},r.a.createElement("sup",null,"o"),r.a.createElement("span",{className:"cursor-pointer ".concat("F"===c?"font-bold underline":"font-light"),onClick:function(){return o("F")}},"F"),r.a.createElement("span",{className:"mx-1"},"|"),r.a.createElement("sup",null,"o"),r.a.createElement("span",{className:"cursor-pointer ".concat("C"===c?"font-bold underline":"font-light"),onClick:function(){return o("C")}},"C")))),r.a.createElement("p",{className:"font-medium ml-3 capitalize"},t.summary)),r.a.createElement("div",{className:"mt-6 ml-3 sm:mt-1 sm:w-full lg:w-1/2"},r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Humidity:"),"\xa0",Math.round(t.humidity),"%"),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Wind:"),"\xa0",function(){return"F"===c?"".concat(Math.round(t.windSpeed)," mph"):"".concat((e=t.windSpeed,Math.round(1.6*e))," kmph");var e}()," "),r.a.createElement("p",null,r.a.createElement("i",{className:"mx-2 mt-2 text-3xl wi wi-direction-".concat(x(t.windBearing))}))),r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Feels like:"),"\xa0",s("apparentTemperature"),r.a.createElement("sup",null,"o")))))},j=a(44),O=a(100);t.a=function(e){var t=e.weatherCurrent,a=e.address,c=e.latlong,l=e.urbanArea;return r.a.createElement(O.a,null,r.a.createElement(n.Fragment,null,a&&t?r.a.createElement("div",null,r.a.createElement(p,{address:a,latlong:c,urbanArea:l,weatherCurrent:t}),r.a.createElement(v,{weatherCurrent:t})):r.a.createElement(j.a,null)))}},114:function(e,t,a){"use strict";var n=a(91),r=a.n(n),c=a(45),l=a(0),o=a.n(l),s=a(165),i=a(88),m=a(111),u=a(93),d=a(12),f=a(94),b=a(95),h=a(92),p=function(e){var t=e.day,a=e.index,n=e.selectedIndex,r=Object(l.useContext)(u.a).weatherUnit,c=Object(l.useContext)(d.a),s=c.theme,i=c.colorTheme,m=function(e){return"F"===r?Math.round(t["temperature".concat(e)]):Object(f.a)(t["temperature".concat(e)])};return o.a.createElement("div",{className:"sm:border-t sm:border-r sm:border-b-0 sm:border-l-0 sm:border-".concat(i," sm:hover:bg-").concat(i," sm:hover:text-").concat(s," items-center text-center flex-1 py-1 pb-3 cursor-pointer ").concat(a===n?"sm:bg-".concat(i," sm:text-").concat(s):""," transition-colors duration-1000 ease-in-out"),onClick:function(){e.selectedDay({day:t})}},o.a.createElement("p",{className:"font-medium"},Object(h.a)(t.time,t.timezone,"ddd")),o.a.createElement("i",{title:t.summary,className:"mt-1 mb-3 mx-auto text-2xl wi wi-".concat(Object(b.a)(t.icon,t.timezone))}),o.a.createElement("div",{className:"flex flex-row justify-center items-center font-light"},o.a.createElement("p",{className:"mx-2 text-sm"},m("High"),o.a.createElement("sup",null,"o")),o.a.createElement("p",{className:"mx-2 text-xs"},m("Low"),o.a.createElement("sup",null,"o"))),o.a.createElement("div",{className:"flex flex-row justify-center sm:flex-col font-light mt-1"},o.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2"},o.a.createElement("i",{className:"text-sm wi wi-sunrise text-sun mr-2",title:"sunrise"}),o.a.createElement("p",{className:"text-sm"},Object(h.a)(t.sunriseTime,t.timezone,"h:mm"))),o.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2"},o.a.createElement("i",{className:"text-sm wi wi-sunset text-sun mr-1",title:"sunset"}),o.a.createElement("p",{className:"text-sm"},Object(h.a)(t.sunsetTime,t.timezone,"HH:mm")))))},y=function(e){var t=e.Timeframe,a=Object(l.useContext)(u.a).weatherUnit,n=Object(l.useContext)(d.a).theme,r=function(e){return"F"===a?Math.round(t["".concat(e)]):Object(f.a)(t["".concat(e)])};return o.a.createElement("div",{className:"border-none flex flex-col justify-start items-center mx-3 mb-3 pt-2 w-full font-light text-".concat("light"===n?"dark":"light")},o.a.createElement("i",{title:t.summary,className:"wi wi-".concat(Object(b.a)(t.icon,t.timezone)," text-2xl my-1")}),o.a.createElement("p",{className:"text-xl"},r("temperature"),o.a.createElement("sup",null,"o")),o.a.createElement("p",{className:"text-sm"},r("apparentTemperature"),o.a.createElement("sup",null,"o")),o.a.createElement("p",{className:"text-sm font-medium"},Object(h.a)(t.time,t.timezone,"h:mm A")))},x=a(44),g=a(104),E=a(96),v=a(100);t.a=function(e){var t=e.cityName,a=e.weatherCurrent,n=e.weatherForecast,u=Object(l.useState)(""),d=Object(c.a)(u,2),f=d[0],b=d[1],j=a.time,O=a.timezone,N=function(e){b(e)};return Object(l.useEffect)((function(){!function(){var e;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:Object(s.a)(a.time)||(e=Object(h.a)(j,O,"MM/DD/YYYY"),Object(i.a)(n)||Object(s.a)(n)||b(n.days[e]?e:""));case 1:case"end":return t.stop()}}))}()}),[n]),o.a.createElement(v.a,null,o.a.createElement(l.Fragment,null,Object(i.a)(n.days)||Object(i.a)(f)?o.a.createElement("div",{className:"mb-3"},Object(i.a)(n.days)?o.a.createElement(E.a,{errorMessage:"No forecast data available for this city!",showCloseBtn:!1}):o.a.createElement(x.a,{loaderText:"Fetching 7 days weather forecast for ".concat(t)})):o.a.createElement(l.Fragment,null,o.a.createElement("div",{className:"sm:hidden py-3 sm:mb-3"},n.timeFrames[f]?o.a.createElement(m.a,Object(g.a)("time"),n.timeFrames[f].map((function(e,t){return o.a.createElement(y,{Timeframe:e,key:t})}))):o.a.createElement(E.a,{errorMessage:"No hourly forecast available for ".concat(f)})),o.a.createElement("div",{className:"hidden sm:flex py-3 sm:mb-3"},n.timeFrames[f]?o.a.createElement(m.a,Object(g.a)("time","tablet"),n.timeFrames[f].map((function(e,t){return o.a.createElement(y,{Timeframe:e,key:t})}))):o.a.createElement(E.a,{errorMessage:"No hourly forecast available for ".concat(f)})),o.a.createElement("div",{className:"sm:hidden py-3"},o.a.createElement(m.a,Object.assign({},Object(g.a)("day"),{slideIndex:Object.keys(n.days).indexOf(f),afterSlide:function(e){return N(Object.keys(n.days)[e])}}),Object.keys(n.days).map((function(e,t){return o.a.createElement(p,{day:n.days[e],key:t,index:e,selectedIndex:f,selectedDay:function(){return N(e)}})})))),o.a.createElement("div",{className:"hidden sm:flex w-full rounded sm:visible"},Object.keys(n.days).map((function(e,t){return o.a.createElement(p,{day:n.days[e],key:t,index:e,selectedIndex:f,selectedDay:function(){return N(e)}})}))))))}},167:function(e,t,a){"use strict";a.r(t);var n=a(91),r=a.n(n),c=a(45),l=a(0),o=a.n(l),s=a(114),i=a(112),m=a(97),u=a(109),d=a(12),f=a(88),b=a(165),h=a(44),p=a(96),y=a(7),x=a(110);t.default=function(){var e=Object(l.useContext)(m.a),t=Object(l.useContext)(d.a),a=t.theme,n=t.colorTheme,g=Object(l.useState)({}),E=Object(c.a)(g,2),v=E[0],j=E[1],O=Object(l.useState)({}),N=Object(c.a)(O,2),w=N[0],k=N[1],C=Object(l.useState)(!0),S=Object(c.a)(C,2),F=S[0],z=S[1],M=function(){return!Object(f.a)(e.address)&&!Object(b.a)(e.address)&&(!Object(f.a)(e.address.cityName)&&!Object(b.a)(e.address.cityName))},I=function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return z(!0),t.next=3,r.a.awrap(Object(u.a)(e).then((function(e){var t,a,n=e.weatherCurrent,r=e.weatherForecast;t=n,a=r,Object(f.a)(t)||Object(f.a)(a)||(k(t),j(a))})).catch((function(e){y.a(e)})).finally((function(){z(!1)})));case 3:case"end":return t.stop()}}))};return Object(l.useEffect)((function(){I();var e=setInterval((function(){I()}),36e5);return function(){clearInterval(e)}}),[e]),o.a.createElement(l.Fragment,null,Object(b.a)(w)||Object(f.a)(w)?o.a.createElement(l.Fragment,null,F?o.a.createElement(h.a,{loaderText:"Fetching weather forecast ".concat(M()?"for ".concat(e.address.cityName):""," \ud83d\ude0e")}):o.a.createElement("div",null,M()?o.a.createElement("div",{className:"flex justify-center"},o.a.createElement("div",{className:"sm:w-full lg:w-2/3 xl:w-1/2"},o.a.createElement(p.a,{errorMessage:"Something went wrong. Failed to fetch weather forecast ".concat(M()?"for ".concat(e.address.cityName):"","! \ud83d\ude22")}))):null)):o.a.createElement(l.Fragment,null,o.a.createElement("div",{className:"flex justify-center px-5 pt-10 bg-".concat(a)},o.a.createElement("div",{className:"sm:w-full lg:w-5/6 xl:max-w-6xl border border-".concat(n," bg-").concat(a," text-").concat(n," rounded-t-2xl shadow-lg")},o.a.createElement(i.a,{weatherCurrent:w,address:e.address,latlong:e.latlong,urbanArea:e.urbanArea}),o.a.createElement(s.a,{cityName:e.address.cityName,weatherCurrent:w,weatherForecast:v}))),o.a.createElement("p",{className:"mx-auto text-center pt-2 pb-10 text-xs font-light text-".concat(n," bg-").concat(a)},"Powered by\xa0",o.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(a),onClick:function(){return Object(x.a)("powered-by","Dark Sky")}},"Dark Sky")),o.a.createElement("div",{className:"bg-".concat(a)},e.urbanArea.slug?o.a.createElement("div",{className:"mx-auto text-center pb-5"},o.a.createElement("p",null,o.a.createElement("a",{href:"https://teleport.org/cities/".concat(e.urbanArea.slug),target:"_blank",rel:"noreferrer noopener",className:"hover:no-underline",onClick:function(){return Object(x.a)("explore-life",e.urbanArea.name)}},o.a.createElement("button",{className:"bg-".concat(n," text-").concat(a," font-semibold py-3 px-6 rounded-full capitalize")},"Explore life in ",e.urbanArea.name))),o.a.createElement("p",{className:"py-1 text-xs font-light text-".concat(n)},"Powered by\xa0",o.a.createElement("a",{href:"https://teleport.org/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(a),onClick:function(){return Object(x.a)("powered-by","Teleport")}},"Teleport"))):null)))}},92:function(e,t,a){"use strict";var n=a(28),r=a.n(n);t.a=function(e,t,a){return r.a.tz(1e3*e,t).format(a)}},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return Math.round(5*(e-32)/9)}},95:function(e,t,a){"use strict";var n=a(28),r=a.n(n);t.a=function(e,t){var a=r()().tz(t).format("H"),n=a>=6&&a<18?"day":"night-alt";if(e)switch(e){case"clear-day":return"day-sunny";case"clear-night":return"night-clear";case"rain":return"".concat(n,"-rain");case"snow":return"".concat(n,"-snow");case"sleet":return"".concat(n,"-sleet");case"wind":return"".concat("night-alt"===n?"night-alt-cloudy":"day","-windy");case"fog":return"day"===n?"day-fog":"night-fog";case"cloudy":return"cloudy";case"partly-cloudy-day":return"day-cloudy";case"partly-cloudy-night":return"night-alt-cloudy";case"hail":return"".concat(n,"-hail");case"thunderstorm":return"".concat(n,"-thunderstorm");case"tornado":return"tornado";default:return"na"}return"na"}}}]);
//# sourceMappingURL=6.778c1454.chunk.js.map