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

   function translate(translator,from,to,text,callback){
    if(text===String()){
      callback(new Error(`Translate error: No Text`));
    }
      chrome.runtime.sendNativeMessage('com.github.ihlet.translation_aid',
        {
          translator:translator,
          srcLang:from,
          trgLang:to,
          text:text
        },(res)=>{
          if(res["trdText"]){
            callback(res.trdText);
          }
          else{
            callback(new Error(`Translate error: ${res.error}`));
          }
        }
      );
   }

    export default translate;
    
