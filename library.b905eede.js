function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var l=r("aKQqr"),a=r("eJIr6");function i(e){const{original_title:t,release_date:o,id:n,poster_path:r,genre_ids:l}=e,i=(0,a.getGenres)(l,!0),s=new Date(o).getFullYear(),d=r?`<div class="gallery-item__image-wrap">\n              <picture>\n                <source srcset="https://www.themoviedb.org/t/p/w780${r} 1x, https://www.themoviedb.org/t/p/w780${r} 2x" media="(min-width: 768px)" type="image/jpeg">\n                <source srcset="https://www.themoviedb.org/t/p/w300${r} 1x, https://www.themoviedb.org/t/p/w780${r} 2x" media="(min-width: 320px)" type="image/jpeg">                           \n                <img class="gallery-item__image" src="https://www.themoviedb.org/t/p/w300${r}" loading="lazy" alt="${t}" data-id="${n}"/>/>\n              </picture>\n            </div>`:`<div class="gallery-item__placeholder" data-id="${n}">\n                <svg class="gallery-item__placeholder-image" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n                    <title>image</title>\n                    <g id="icomoon-ignore">\n                    </g>\n                    <path d="M479.942 64c0.020 0.017 0.041 0.038 0.058 0.058v383.885c-0.017 0.020-0.038 0.041-0.058 0.058h-447.885c-0.020-0.017-0.041-0.038-0.057-0.058v-383.886c0.017-0.020 0.038-0.041 0.057-0.057h447.885zM480 32h-448c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h448c17.6 0 32-14.4 32-32v-384c0-17.6-14.4-32-32-32v0z"></path>\n                    <path d="M416 144c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z"></path>\n                    <path d="M448 416h-384v-64l112-192 128 160h32l112-96z"></path>\n                </svg>     \n           </div>`,c=(0,a.createElementFromHTML)(`\n        <li class='gallery-item js-item'>\n            ${d}\n            <p class="gallery-item__title">${t.toUpperCase()}</p>\n            <p class="gallery-item__info">${i} | ${s}</p>\n        </li>\n      `);return c.dataset.movie=JSON.stringify(e),c}var s=r("eWCmQ"),d=r("81nB3"),c=r("ayZFN");s=r("eWCmQ"),d=r("81nB3"),c=r("ayZFN");const u={watchedBtn:document.querySelector(".js-watched-list"),queueBtn:document.querySelector(".js-queue-list"),gallery:document.querySelector(".gallery")};let m=null,p=null,v=null,g=null;function y(){g+=1;const e=p.filter(((e,t)=>t>=20*g-20&&t<=20*g-1)).map(i);(0,c.default)(),u.gallery.append(...e),g>=v&&(0,d.removeLoadMoreBtn)(y)}u.queueBtn.addEventListener("click",(e=>{if(u.watchedBtn.classList.remove("active"),u.queueBtn.classList.add("active"),u.gallery.innerHTML="",p=JSON.parse(localStorage.getItem("queue-movies"))||[],v=p.length/20,g=1,0===p.length&&s.Notify.info("There are no movies in your queue yet"),m=p.map(i),(0,d.removeLoadMoreBtn)(F),v>1){(0,d.addLoadMoreBtn)();document.querySelector(".load-more-button").addEventListener("click",y),m=p.filter(((e,t)=>t<20)).map(i)}u.gallery.append(...m)}));const w={watchedBtn:document.querySelector(".js-watched-list"),queueBtn:document.querySelector(".js-queue-list"),gallery:document.querySelector(".gallery")};let h=null,f=null,S=null,q=null;const L=e=>{if(w.queueBtn.classList.remove("active"),w.watchedBtn.classList.add("active"),w.gallery.innerHTML="",f=JSON.parse(localStorage.getItem("watched-movies"))||[],S=f.length/20,q=1,0===f.length&&s.Notify.info("There are no movies in your watched yet"),h=f.map(i),(0,d.removeLoadMoreBtn)(y),S>1){(0,d.addLoadMoreBtn)();document.querySelector(".load-more-button").addEventListener("click",F),h=f.filter(((e,t)=>t<20)).map(i)}w.gallery.append(...h)};function F(){q+=1;const e=f.filter(((e,t)=>t>=20*q-20&&t<=20*q-1)).map(i);(0,c.default)(),w.gallery.append(...e),q>=S&&(0,d.removeLoadMoreBtn)(F)}w.watchedBtn.addEventListener("click",L);var M=r("9B8F0");a=r("eJIr6");const b={gallery:document.querySelector(".gallery"),template:document.querySelector("template")};let _;b.gallery.addEventListener("click",(function(e){const t=e.target.closest(".js-item");if(!t)return;_=JSON.parse(t.dataset.movie);const o=M.create(b.template,{onShow:()=>{document.body.style.overflow="hidden",J.lock()},onClose:()=>{document.body.style.overflow="visible",J.unlock()}});(function(e,t){if(e.querySelector(".movie-title").innerHTML=t.title,e.querySelector(".about-text").innerHTML=t.overview,e.querySelector(".vote").innerHTML=t.vote_average.toFixed(1),e.querySelector(".votes").innerHTML=t.vote_count,e.querySelector(".popularity").innerHTML=t.popularity.toFixed(1),e.querySelector(".original-title").innerHTML=t.title,e.querySelector(".movie-genres").innerHTML=(0,a.getGenres)(t.genre_ids),e.querySelector(".btn.watched").innerHTML="remove from watched",t.poster_path){e.querySelector(".modalfoto-img").src=`https://www.themoviedb.org/t/p/w780${t.poster_path}`}else{e.querySelector(".modalfoto-img").style.display="none";e.querySelector(".gallery-item__placeholder").style.display="flex"}})(o.element(),_),o.show(),window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(o.close(),window.removeEventListener("keydown",e))}));const n=document.querySelector(".modalfilm-button-close");n.addEventListener("click",(function e(){o.close(),n.removeEventListener("click",e)}))}));document.addEventListener("click",(function(e){if("btn watched"===e.target.className){if("remove from watched"===e.target.innerHTML)return void function(){const e=JSON.parse(localStorage.getItem("watched-movies"));localStorage.setItem("watched-movies",JSON.stringify(e.filter((e=>e.id!==_.id)))),document.querySelector(".btn.watched").innerHTML="add to watched"}();document.querySelector(".btn.watched").innerHTML="remove from watched",watchedFilms=localStorage.getItem("watched-movies"),parsedWatchedFilms=JSON.parse(watchedFilms),parsedWatchedFilms?(parsedWatchedFilms.find((e=>e.id===_.id)),parsedWatchedFilms.push(_),dataJson=JSON.stringify(parsedWatchedFilms),localStorage.setItem("watched-movies",dataJson)):(parsedWatchedFilms=[_],dataJson=JSON.stringify(parsedWatchedFilms),localStorage.setItem("watched-movies",dataJson))}}));document.addEventListener("click",(function(e){if("btn queue"===e.target.className){if("remove from queue"===e.target.innerHTML)return void function(){const e=JSON.parse(localStorage.getItem("queue-movies"));localStorage.setItem("queue-movies",JSON.stringify(e.filter((e=>e.id!==_.id)))),document.querySelector(".btn.queue").innerHTML="add to queue"}();document.querySelector(".btn.queue").innerHTML="remove from queue",queueFilms=localStorage.getItem("queue-movies"),parsedQueueFilms=JSON.parse(queueFilms),parsedQueueFilms?(parsedQueueFilms.find((e=>e.id===_.id)),parsedQueueFilms.push(_),dataJson=JSON.stringify(parsedQueueFilms),localStorage.setItem("queue-movies",dataJson)):(parsedQueueFilms=[_],dataJson=JSON.stringify(parsedQueueFilms),localStorage.setItem("queue-movies",dataJson))}})),r("5Fava");M=r("9B8F0");document.querySelector(".footer-students").addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector("template[data-students]");console.log(t);const o=M.create(t,{onShow:()=>{document.body.style.overflow="hidden",J.lock()},onClose:()=>{document.body.style.overflow="visible",J.unlock()}});o.show(),window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(o.close(),window.removeEventListener("keydown",e))}));const n=document.querySelector(".button-close");n.addEventListener("click",(function e(){o.close(),n.removeEventListener("click",e)}))}));c=r("ayZFN");const J=new(e(l))(document.scrollingElement,{damping:.8});L(),(0,c.default)();
//# sourceMappingURL=library.b905eede.js.map