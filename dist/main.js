(()=>{"use strict";const e=()=>{document.querySelector(".fullcover").remove()};function t(e,t,n){this.name=e,this.desc=t,this.priority=n}const n=e=>"urgent"===e.priority,l=()=>{new Promise(((n,l)=>{(()=>{let e=document.createElement("div");e.classList.add("fullcover");let t=document.createElement("div");t.classList.add("formDiv"),t.innerHTML='\n    <form action="./index.html">\n    <label for="title"></label>\n    <input type="text" id="title" name="title" required placeholder="Title">\n    <br>\n    <label for="description"></label>\n    <input id="description" name="description"required placeholder="Description">\n    <br>\n    <label for="priority"></label>\n    <select id="priority" name="priority" required>\n        <option value="urgent">Urgent</option>\n        <option value="normal">Normal</option>\n    </select>\n    <br>\n    <input value="Submit" type="button" name="submit" id="submitbutton">\n    <br>\n    </form>\n    <button id=\'x\'>x</button>\n    ',e.appendChild(t),document.querySelector("body").appendChild(e)})(),document.querySelector("#submitbutton").addEventListener("click",(()=>{let l=document.getElementById("title").value,o=document.getElementById("priority").value,d=new t(l,document.getElementById("description").value,o);e(),n(d)})),document.querySelector("#x").addEventListener("click",(()=>{e(),l(new Error("Form submission canceled."))}))})).then((e=>((e=>{let t=document.querySelector("#tasks"),l=document.createElement("div");l.classList.add("mDiv");let o=document.createElement("div");o.classList.add("task");let d=document.createElement("h3");d.textContent=`${e.name}`,o.appendChild(d);let r=document.createElement("p");r.textContent=`${e.desc}`,o.appendChild(r),o.classList.add("projDiv");let i=document.createElement("p");i.textContent=`${e.priority}`,n(e)?i.classList.add("urgent"):i.classList.add("normal"),o.appendChild(i),l.appendChild(o);let c=document.createElement("button");c.classList.add("deleteButton");let a=document.createElement("button");a.classList.add("doneButton"),c.innerText="Delete",c.addEventListener("click",(()=>{console.log("clicked"),c.parentNode.parentNode.remove()})),a.innerText="Completed";let s=document.createElement("div");s.classList.add("buttonsDiv"),s.appendChild(c),s.appendChild(a),l.appendChild(s),t.appendChild(l)})(e),e))).catch((e=>(console.error(e),null)))};function o(e,t){return Math.floor(Math.random()*(t-e+1)+e)}let d=[],r=[];document.querySelector("#theme").addEventListener("click",(()=>{let e=document.querySelector("body").style.backgroundImage.charAt(24),t=o(1,10);for(;e===t;)t=o(1,10);let n="./assets/images/img"+t+".jpg";document.querySelector("body").style.backgroundImage=`url('${n}')`})),document.querySelector("#new").addEventListener("click",(async e=>{e.preventDefault();try{let e=await l();n(e)?d.push(e):r.push(e)}catch(e){console.error(e)}}))})();