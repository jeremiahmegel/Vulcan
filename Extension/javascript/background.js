/*
    Copyright Jeremiah Megel 2013
    
    Vulcan is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    Vulcan is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    
    You should have received a copy of the GNU General Public License
    along with Vulcan. If not, see <http://www.gnu.org/licenses/>.
*/

chrome.runtime.onMessage.addListener(function(request, sender, respond) {
	if (request == "getJSON"){
		var emoticons = JSON.parse(localStorage["json"]);	
		var css = ["[data-emo]", ""];
		for (var l in emoticons) {
			for (var e in emoticons[l]) {
				if (emoticons[l][e].type == "image") {
					css[0] += ":not([data-emo=\""+e+"\"])";
				}
				else {
					css[1] += "[data-emo=\""+e+"\"]:after{content:\""+((emoticons[l][e].type == "custom")?(emoticons[l][e].custom):(e))+"\";display:inline-block;height:28px;width:31px;}\n";
				}
			}
		}
		css[0] += ">div{display:none!important;}";
		respond(css.join("\n"));
	}
});