import{i as l,S as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();document.getElementById("search-form").addEventListener("submit",n=>{n.preventDefault();const r=document.getElementById("search-query").value;d(r)});function d(n){const i=`https://pixabay.com/api/?key=44974018-ca766bb5bf44f97c206908e6f&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{e.hits.length===0?l.error({title:"Error",message:"Przepraszamy, nie ma obrazów zgodnych z wyszukiwaniem. Spróbuj ponownie!"}):u(e.hits)}).catch(e=>{l.error({title:"Error",message:`There was a problem with the fetch operation: ${e}`}),console.log(e)})}function u(n){const r=document.querySelector(".gallery");r.innerHTML="",n.map(e=>{const t=document.createElement("li");t.classList.add("gallery-item");const s=document.createElement("a");s.classList.add("gallery-link"),s.href=e.largeImageURL,s.setAttribute("data-lightbox","gallery"),s.setAttribute("data-title",`❤️ ${e.likes} 👁️ ${e.views} 💬 ${e.comments} ⬇️ ${e.downloads}`);const o=document.createElement("img");o.classList.add("gallery-image"),o.src=e.webformatURL,o.alt=e.tags;const a=document.createElement("div");return a.classList.add("image-info"),a.innerHTML=`
            <div class = "info"><span>Likes</span> ${e.likes}</div>
            <div class = "info"><span>Views</span> ${e.views}</div>
            <div class = "info"><span>Comments</span> ${e.comments}</div>
            <div class = "info"><span>Downloads</span> ${e.downloads}</div>
        `,s.appendChild(o),t.appendChild(s),t.appendChild(a),t}).forEach(e=>r.appendChild(e)),new c(".gallery a",{captionType:"attr",captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map
