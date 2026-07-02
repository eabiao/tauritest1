import { invoke } from "@tauri-apps/api/core";
import { fetch } from '@tauri-apps/plugin-http';

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsgEl.textContent = await invoke("greet", {
      name: greetInputEl.value,
    });
  }
}

async function test1() {
  const urlText = document.querySelector<HTMLInputElement>('urlText')?.value;
  if(urlText){
    console.log('req url', urlText);
    const res = await fetch(urlText);
    console.log(await res.text());
  }else{
    console.log('urlText is null');
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });

  document.getElementById('testBtn')?.addEventListener("click", (e) => {
    e.preventDefault();
    test1();
  });
});
