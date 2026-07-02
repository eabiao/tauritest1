import { fetch } from '@tauri-apps/plugin-http';

let urlTextEl: HTMLInputElement | null;
let respTextEl: HTMLInputElement | null;

async function sendReq() {
  if(urlTextEl){
    console.log('req url', urlTextEl.value);
    const resp = await fetch(urlTextEl.value);
    if(respTextEl){
      respTextEl.value = await resp.text();
    }
  }else{
    console.log('urlText is null');
  }
}

window.addEventListener("DOMContentLoaded", () => {
  urlTextEl = document.querySelector("#urlText");
  respTextEl = document.querySelector("#respText");
  
  document.querySelector("#sendBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    sendReq();
  });
});
