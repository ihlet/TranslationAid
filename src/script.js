/*
 * This file is part of Translation Aid
 *
 * Copyright (C) 2026 - NAGY, Gábor
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU Library General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Library General Public License for more details.
 *
 *  You should have received a copy of the GNU Library General Public License
 *  along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import translate from "./translate.js";

console.log(browser.i18n.getMessage("LangName_eng"));

document.getElementById("setBtn").innerHTML=browser.i18n.getMessage("setBtn");
document.getElementById("satLabel").innerHTML+=browser.i18n.getMessage("satLabel");
document.getElementById("txbs").innerHTML=browser.i18n.getMessage("txbs");
document.getElementById("originBtn").innerHTML=browser.i18n.getMessage("originBtn");
document.getElementById("trtBtn").innerHTML=browser.i18n.getMessage("trtBtn");
document.getElementById("originBtn").innerHTML=browser.i18n.getMessage("originBtn");
document.getElementById("trtBtn").innerHTML=browser.i18n.getMessage("trtBtn");
document.getElementById("textBox").placeholder=browser.i18n.getMessage("textBoxPlaceholder");
const modeElement=document.getElementById("mode")
modeElement.innerHTML+='<option value="argos" translator selected>'+browser.i18n.getMessage("ArgosTransate")+'</option>';
modeElement.innerHTML+='<option value="google" translator>'+browser.i18n.getMessage("GoogleTranslate")+'</option>';
modeElement.innerHTML+='<option value="sztaki" directory>'+browser.i18n.getMessage("SZTAKI")+'</option>';
document.getElementById("srcLang").innerHTML='<option value="auto">🇺🇳 '+browser.i18n.getMessage("LangDetect")+'</option>'




const basqueFlag=`<?xml version="1.0" encoding="UTF-8"?>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 28" width="1000" height="560">
                        <path d="M0,0 v28 h50 v-28 z" fill="#D52B1E"/>
                        <path d="M0,0 L50,28 M50,0 L0,28" stroke="#009B48" stroke-width="4.3"/>
                        <path d="M25,0 v28 M0,14 h50" stroke="#fff" stroke-width="4.3"/>
                      </svg>`;

    let langs=[{code:"hu",flag: "🇭🇺",name: browser.i18n.getMessage("LangName_hu"),sup:["google","argos"]},
              {code: "en",flag: "🇬🇧",name: browser.i18n.getMessage("LangName_en"),sup:["google","argos"]},
              {code: "de",flag: "🇩🇪",name: browser.i18n.getMessage("LangName_de"),sup:["google","argos"]},
              {code: "jp",flag: "🇯🇵",name: browser.i18n.getMessage("LangName_jp"),sup:["google","argos"]},
              {code: "ko",flag: "🇰🇷",name: browser.i18n.getMessage("LangName_ko"),sup:["google","argos"]},
              {code: "it",flag: "🇮🇹",name: browser.i18n.getMessage("LangName_it"),sup:["google","argos"]},
              {code: "es",flag: "🇪🇸",name: browser.i18n.getMessage("LangName_es"),sup:["google","argos"]},
              {code: "pt",flag: "🇵🇹",name: browser.i18n.getMessage("LangName_pt"),sup:["google","argos"]},
              {code: "fr",flag: "🇫🇷",name: browser.i18n.getMessage("LangName_fr"),sup:["google","argos"]},
              {code: "ro",flag: "🇷🇴",name: browser.i18n.getMessage("LangName_ro"),sup:["google","argos"]},
              {code: "sk",flag: "🇸🇰",name: browser.i18n.getMessage("LangName_sk"),sup:["google","argos"]},
              {code: "cs",flag: "🇨🇿",name: browser.i18n.getMessage("LangName_cs"),sup:["google","argos"]},
              {code: "sl",flag: "🇸🇮",name: browser.i18n.getMessage("LangName_sl"),sup:["google","argos"]},
              {code: "sr",flag: "🇷🇸",name: browser.i18n.getMessage("LangName_sr"),sup:["google","argos"]},
              {code: "hr",flag: "🇭🇷",name: browser.i18n.getMessage("LangName_hr"),sup:["google"]},
              {code: "pl",flag: "🇵🇱",name: browser.i18n.getMessage("LangName_pl"),sup:["google","argos"]},
              {code: "uk",flag: "🇺🇦",name: browser.i18n.getMessage("LangName_uk"),sup:["google","argos"]},
              {code: "ru",flag: "🇷🇺",name: browser.i18n.getMessage("LangName_ru"),sup:["google","argos"]},
              {code: "fi",flag: "🇫🇮",name: browser.i18n.getMessage("LangName_fi"),sup:["google","argos"]},
              {code: "et",flag: "🇪🇪",name: browser.i18n.getMessage("LangName_et"),sup:["google","argos"]},
              {code: "sv",flag: "🇸🇪",name: browser.i18n.getMessage("LangName_sv"),sup:["google","argos"]},
              {code: "no",flag: "🇳🇴",name: browser.i18n.getMessage("LangName_no"),sup:["google","argos"]},
              {code: "da",flag: "🇩🇰",name: browser.i18n.getMessage("LangName_da"),sup:["google","argos"]},
              {code: "nl",flag: "🇳🇱",name: browser.i18n.getMessage("LangName_nl"),sup:["google","argos"]},
              {code: "lv",flag: "🇱🇻",name: browser.i18n.getMessage("LangName_lv"),sup:["google","argos"]},
              {code: "lt",flag: "🇱🇹",name: browser.i18n.getMessage("LangName_lt"),sup:["google","argos"]},
              {code: "eu",flag: '<img src="icons/Basque-flag.png">',name: browser.i18n.getMessage("LangName_eu"),sup:["google","argos"]},
              {code: "ca",flag: '<img src="icons/Catalonia-flag.png">',name: browser.i18n.getMessage("LangName_ca"),sup:["google","argos"]},
              {code: "ga",flag: "🇮🇪",name: browser.i18n.getMessage("LangName_ga"),sup:["google","argos"]},
              {code: "gd",flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",name: browser.i18n.getMessage("LangName_gd"),sup:["google","argos"]},
              {code: "br",flag: '<img src="icons/Brittany-flag.png">',name: browser.i18n.getMessage("LangName_br"),sup:["google"]},
              {code: "zh-CN",flag: "🇨🇳",name: browser.i18n.getMessage("LangName_zh_CN"),sup:["google","argos"]},
              {code: "zh-TW",flag: "🇹🇼",name: browser.i18n.getMessage("LangName_zh_TW"),sup:["google","argos"]},
              {code: "tr",flag: "🇹🇷",name: browser.i18n.getMessage("LangName_tr"),sup:["google","argos"]},
              {code: "ar",flag: "🇸🇦",name: browser.i18n.getMessage("LangName_ar"),sup:["google","argos"]},
              {code: "bg",flag: "🇧🇬",name: browser.i18n.getMessage("LangName_bg"),sup:["google","argos"]},
              {code: "el",flag: "🇬🇷",name: browser.i18n.getMessage("LangName_el"),sup:["google","argos"]},
              {code: "th",flag: "🇹🇭",name: browser.i18n.getMessage("LangName_th"),sup:["google","argos"]},
              {code: "he",flag: "🇮🇱",name: browser.i18n.getMessage("LangName_he"),sup:["google","argos"]},
              {code: "vi",flag: "🇻🇳",name: browser.i18n.getMessage("LangName_vi"),sup:["google","argos"]},
              {code: "ms",flag: "🇲🇾",name: browser.i18n.getMessage("LangName_ms"),sup:["google","argos"]},
              {code: "id",flag: "🇮🇩",name: browser.i18n.getMessage("LangName_id"),sup:["google","argos"]},
              {code: "hy",flag: "🇦🇲",name: browser.i18n.getMessage("LangName_hy"),sup:["google"]},
              {code: "ka",flag: "🇬🇪",name: browser.i18n.getMessage("LangName_ka"),sup:["google"]}
            ];

    const translatorList=["google","argos"];

    const coll=new Intl.Collator()
    langs.sort((a,b)=>coll.compare(a.name,b.name));
    const srcLang=document.getElementById("srcLang");
    const trgLang=document.getElementById("trgLang");

   srcLang.selectedOptions[0].setAttribute("google","")

    for(let x of langs){
      let supLang="";
      for(let y of x.sup){
        supLang+=` ${y}`;
      }
      srcLang.innerHTML+=`<option ${supLang} value="${x.code}">${x.flag} ${x.name}</option>\n`;
      trgLang.innerHTML+=`<option ${supLang} value="${x.code}">${x.flag} ${x.name}</option>\n`;
    }

    class CurrentLang{
      constructor(selectElement,prefix){
        this._prefix=prefix;
        this._parent=selectElement;
        this._set(selectElement);
      }
      get element(){
        return this._elem;
      }
      get text(){
        return this._text;
      }
      _set(sElem){
        this._elem=sElem.selectedOptions[0];
        this._text=this._elem.innerHTML;
        this._elem.innerHTML=`${this._prefix}: ${this._text}`;
      }
      modify(){
        this._elem.innerHTML=this._text;
        this._set(this._parent);
      }
    }

    const currentSrcLang=new CurrentLang(srcLang,browser.i18n.getMessage("srcLang"));
    const currentTrgLang=new CurrentLang(trgLang,browser.i18n.getMessage("trgLang"));

    chrome.storage.local.get(["mode"])
    .then((res)=>{
      if(res.mode){
        modeElement.value=res.mode;
      }
    });

    chrome.storage.local.get(["srcLang","trgLang"])
    .then((res)=>{
      if((res.srcLang!==undefined)&&(res.trgLang!==undefined)){
        srcLang.value=res.srcLang;
        trgLang.value=res.trgLang;
      }
      currentSrcLang.modify();
      currentTrgLang.modify();
      setLangOptions();
    });

    function swapLanguange(srcLang,trgLang){
      if(srcLang.value!="auto"){
        let tmp;
        for(let e of trgLang.children){
          if(e.value==srcLang.value){
            tmp=trgLang.value;
            trgLang.value=e.value;
            currentTrgLang.modify();
            break;
          }
        }
        for(let e of srcLang.children){
          if(e.value==tmp){
            srcLang.value=e.value;
            currentSrcLang.modify();
            break;
          }
        }
      }
      chrome.storage.local.set({srcLang:srcLang.value, trgLang:trgLang.value});
    }

    srcLang.addEventListener("change",(e)=>{
      if(srcLang.value==trgLang.value){
        srcLang.value=currentSrcLang.element.value;
        swapLanguange(srcLang,trgLang);
      }
      else{
        currentSrcLang.element.innerHTML=currentSrcLang.text;
        currentSrcLang.modify();
        chrome.storage.local.set({srcLang:srcLang.value, trgLang:trgLang.value});
      }
        srcLang.removeAttribute("error");
    });

    trgLang.addEventListener("change",(e)=>{
      if(trgLang.value==srcLang.value){
        trgLang.value=currentTrgLang.element.value;
        swapLanguange(srcLang,trgLang);
      }
      else{
        currentTrgLang.element.innerHTML=currentTrgLang.text;
        currentTrgLang.modify();
        chrome.storage.local.set({srcLang:srcLang.value, trgLang:trgLang.value});
      }
        trgLang.removeAttribute("error");
    });


   document.getElementById("swapLang").addEventListener("click",(e)=>{
      swapLanguange(srcLang,trgLang);
    });

    const textObject={
      original:"",
      translated:"",
      translator:"",
      textIsDeleted:false
    };

    const txtarea=document.getElementById("textBox");
    document.getElementById("trtBtn").addEventListener("click",(e)=>{
        let translator=document.getElementById("mode").value;
        if(((txtarea.value==textObject.original)&&(modeElement.value==textObject.translator))||(textObject.textIsDeleted&&!txtarea.value)){
          txtarea.value=textObject.translated;
          textObject.textIsDeleted=false;
        }
        else{
          if(!srcLang.hasAttribute("error")||!trgLang.hasAttribute("error")){
            textObject.original=txtarea.value;
            textObject.translator=translator;
            translate(translator,srcLang.value,trgLang.value,txtarea.value,(res)=>{
              if(typeof res==typeof String()){
                textObject.translated=res;
                textObject.textIsDeleted=false;
                txtarea.value=res;
              }
              else{
                txtarea.value=res.message;
                textObject.original="";
                textObject.translated="";
              }
            });
          }
          else{
            
          }
        }
          
      });

    document.getElementById("originBtn").addEventListener("click",(e)=>{
      document.getElementsByTagName("textarea")[0].value=textObject.original;
    });

      document.getElementById("delBtn").addEventListener("click",(e)=>{
      document.getElementById("textBox").value="";
      textObject.textIsDeleted=true;
    });
    
    modeElement.addEventListener("change",(e)=>{
      if(modeElement.selectedOptions[0].hasAttribute("translator")){
        chrome.storage.local.set({mode:modeElement.value});
        document.getElementById("directory").style="display:none";
        document.getElementById("translator").style="display:flex";
        setLangOptions();
        
        if(textObject.translator!=modeElement.value){
          textObject.translator=translator;
          translate(modeElement.value,srcLang.value,trgLang.value,textObject.original,(res)=>{
              if(typeof res==typeof String()){
                textObject.translated=res;
                textObject.textIsDeleted=false;
                txtarea.value=res;
              }
              else{
                txtarea.value=res.message;
                textObject.original="";
                textObject.translated="";
              }
          });
        }
      }
      
      if(modeElement.selectedOptions[0].hasAttribute("directory")){
        const direct=document.getElementById("directory");
        switch(modeElement.value){
          case "sztaki":
            if(!direct.getAttribute("service","sztaki")){
              direct.setAttribute("service","sztaki");
              direct.innerHTML='<iframe service="sztaki" src="https://szotar.sztaki.hu/"></iframe>';
            }break;
        }
        direct.style="display:flex";
        document.getElementById("translator").style="display:none";
      }
    });

    function setLangOptions(){
      if(modeElement.selectedOptions[0].hasAttribute("translator")){
          for(let y of srcLang.children){
            if(y.hasAttribute(modeElement.value)){
              y.disabled=false;
            }
            else{
              y.disabled=true;
            }
          }
          for(let y of trgLang.children){
            if(y.hasAttribute(modeElement.value)){
              y.disabled=false;
            }
            else{
              y.disabled=true;
            }
          }
      }
      if(srcLang.selectedOptions[0].disabled){
        srcLang.setAttribute("error","");
      }
      else{
        srcLang.removeAttribute("error");
      }
      if(trgLang.selectedOptions[0].disabled){
        trgLang.setAttribute("error","");
      }
      else{
        trgLang.removeAttribute("error");
      }
    }

    //"A kijelölés automatikus fordítása az oldalsávban" értékének elmentése
    const satElement=document.getElementById("sat");
    satElement.addEventListener("change",(e)=>{
        chrome.storage.local.set({sat:satElement.checked});
    });   
    
    chrome.storage.local.get(["sat"])
    .then((res)=>{
        satElement.checked=res.sat;
    });

    const ffs=document.getElementById("font-size-setting");
    ffs.addEventListener("change",(e)=>{
      document.getElementById("textBox").style=`font-size:${ffs.value}px;`;
      chrome.storage.local.set({textBoxFontSize:ffs.value});
    });

    chrome.storage.local.get(["textBoxFontSize"])
    .then((res)=>{
        document.getElementById("textBox").style=`font-size:${res.textBoxFontSize}px;`;
        ffs.value=res.textBoxFontSize;
    });

    chrome.runtime.onMessage.addListener(
      function(msg, sender, send) {
        if(msg.to=="script"&&msg.methode=="translate"&&satElement.checked){
          textObject.original=msg.message;
          textObject.translator=modeElement.value;
          translate(modeElement.value,srcLang.value,trgLang.value,msg.message,(res)=>{
              if(typeof res==typeof String()){
                textObject.translated=res;
                textObject.textIsDeleted=false;
                txtarea.value=res;
              }
              else{
                txtarea.value=res.message;
                textObject.original="";
                textObject.translated="";
              }
          });
        }
      }
    );

