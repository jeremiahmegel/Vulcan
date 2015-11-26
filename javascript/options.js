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

var saveTimeout;

var emoticons = JSON.parse(localStorage["json"]);

var emoList = document.createElement("div");
	emoList.setAttribute("class", "emoList");

var emoItem = document.createElement("div");
	emoItem.setAttribute("class", "emoItem");
	var emoImageCon = document.createElement("label");
		emoImageCon.setAttribute("class", "emoChoiceCon");
		var emoImageRadio = document.createElement("input");
			emoImageRadio.setAttribute("class", "emoRadio");
			emoImageRadio.setAttribute("type", "radio");
			emoImageRadio.setAttribute("value", "image");
			emoImageCon.appendChild(emoImageRadio);
		var emoImage = document.createElement("span");
			emoImage.setAttribute("class", "emoImage");
			emoImageCon.appendChild(emoImage);
		emoItem.appendChild(emoImageCon);
	var emoUniCon = document.createElement("label");
		emoUniCon.setAttribute("class", "emoChoiceCon");
		var emoUniRadio = document.createElement("input");
			emoUniRadio.setAttribute("class", "emoRadio");
			emoUniRadio.setAttribute("type", "radio");
			emoUniRadio.setAttribute("value", "unicode");
			emoUniCon.appendChild(emoUniRadio);
		var emoUni = document.createElement("span");
			emoUni.setAttribute("class", "emoUni");
			emoUniCon.appendChild(emoUni);
		emoItem.appendChild(emoUniCon);
	var emoCustomCon = document.createElement("label");
		emoCustomCon.setAttribute("class", "emoChoiceCon");
		var emoCustomRadio = document.createElement("input");
			emoCustomRadio.setAttribute("class", "emoRadio");
			emoCustomRadio.setAttribute("type", "radio");
			emoCustomRadio.setAttribute("value", "custom");
			emoCustomCon.appendChild(emoCustomRadio);
		var emoCustom = document.createElement("input");
			emoCustom.setAttribute("class", "emoCustom");
			emoCustom.setAttribute("type", "text");
			emoCustomCon.appendChild(emoCustom);
		emoItem.appendChild(emoCustomCon);

var changeEvent = document.createEvent("UIEvents");
changeEvent.initUIEvent("change", true, true);

document.getElementById("allGraphics").addEventListener("click", function() {
	updateAll("image", false);
});
document.getElementById("allUnicode").addEventListener("click", function() {
	updateAll("unicode", false);
});
document.getElementById("allFilled").addEventListener("click", function() {
	updateAll("custom", true);
});
document.getElementById("allEmpty").addEventListener("click", function() {
	updateAll("custom", false);
});
document.getElementById("allDefaults").addEventListener("click", function() {
	if (confirm("Warning! This will reset any and all changes you have made! Do you want to continue?")) {
		localStorage["json"] = "";
		window.location.reload();
	}
});

function updateAll(emoType, onlyFilled) {
	for (var i = 0; i < allItems.length; i++) {
		var potenLabels = allItems[i].getElementsByTagName("label");
		for (var l = 0; l < potenLabels.length; l++) {
			var potenRadio = potenLabels[l].getElementsByTagName("input")[0];
			if ((potenRadio.getAttribute("value") == emoType) && ((!onlyFilled) || (potenLabels[l].getElementsByTagName("input")[1].value))) {
				potenRadio.checked = true;
				potenRadio.dispatchEvent(changeEvent);
			}
		}
	}
	reallySaveEmos();
}

var allItems = new Array();

for (var x in emoticons) {
	var newList = emoList.cloneNode(true);
	for (var y in emoticons[x]) {
		var newItem = emoItem.cloneNode(true);
		newItem.getElementsByClassName("emoImage")[0].style.backgroundPosition = "0px "+emoticons[x][y].backgroundPosition+"px";
		newItem.getElementsByClassName("emoUni")[0].innerHTML = y;
		var radios = newItem.getElementsByClassName("emoRadio");
		for (var r = 0; r < radios.length; r++) {
			radios[r].setAttribute("name", "type-"+y);
			if ((emoticons[x][y].type == radios[r].getAttribute("value")) || ((!emoticons[x][y].type) & (radios[r].getAttribute("value") == "image"))) {
				radios[r].setAttribute("checked", "checked");
				radios[r].parentNode.style.backgroundColor = "#008000";
			}
			radios[r].addEventListener("change", saveEmos);
			radios[r].addEventListener("change", greenify);
		}
		newItem.getElementsByClassName("emoCustom")[0].setAttribute("name", "custom-"+y);
		if (emoticons[x][y].custom) {
			newItem.getElementsByClassName("emoCustom")[0].setAttribute("value", emoticons[x][y].custom);
		}
		newItem.getElementsByClassName("emoCustom")[0].addEventListener("change", saveEmos);
		newItem.getElementsByClassName("emoCustom")[0].addEventListener("keyup", saveEmos);
		allItems.push(newItem);
		newList.appendChild(newItem);
	}
	document.getElementById("main").appendChild(newList);
}

function greenify() {
	var theseSpans = this.parentNode.parentNode.getElementsByClassName("emoChoiceCon");
	for (var s = 0; s < theseSpans.length; s++) {
		if (theseSpans[s].getElementsByTagName("input")[0].checked) {
			theseSpans[s].style.backgroundColor = "#008000";
		}
		else {
			theseSpans[s].style.backgroundColor = "";
		}
	}
}

function saveEmos() {
	if (saveTimeout) {
		clearTimeout(saveTimeout);
	}
	saveTimeout = setTimeout(reallySaveEmos, 3000);
}

function reallySaveEmos() {
	clearTimeout(saveTimeout);
	var newEmoticons = [];
	var css = [":not(button)>[data-emo]", ""];
	for (var l in emoticons) {
		newEmoticons[l] = {};
		for (var e in emoticons[l]) {
			newEmoticons[l][e] = {};
			newEmoticons[l][e].backgroundPosition = emoticons[l][e].backgroundPosition;
			var radios = document.getElementsByName("type-"+e);
			for (var i = 0; i < radios.length; i++) {
				if (radios[i].checked) {
					newEmoticons[l][e].type = radios[i].value;
				}
			}
			newEmoticons[l][e].custom = document.getElementsByName("custom-"+e)[0].value;
			if (newEmoticons[l][e].type == "image") {
				css[0] += ":not([data-emo=\""+e+"\"])";
			}
			else {
				css[1] += ":not(button)>[data-emo=\""+e+"\"]:after{content:\""+String((newEmoticons[l][e].type == "custom")?(newEmoticons[l][e].custom):(e)).replace(/\"/g, "\\\"")+"\";display:inline-block;}\n";
			}
		}
	}
	css[0] += ">div{display:none!important;}";
	var fullCSSStr = css.join("\n");
	
	localStorage["json"] = JSON.stringify(newEmoticons);
	localStorage["css"] = fullCSSStr;
	chrome.runtime.sendMessage({type: "newOptions", data: {css: fullCSSStr}});
	
	document.getElementById("saved").style.opacity = "1";
	setTimeout(function(){
		document.getElementById("saved").style.opacity = "0";		
	}, 2500);
}