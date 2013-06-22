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

var style = document.createElement("style");
style.setAttribute("type", "text/css");
style.setAttribute("class", "vulcanStyle");
document.head.appendChild(style);

var disableAuto = false;

var extPort = chrome.runtime.connect({name: "emoPage"});
extPort.onMessage.addListener(function(request, sender, respond) {
	if (request.type = "options") {
		style.innerHTML = request.data.css;
		disableAuto = request.data.disableAuto;
	}
});

var currentText = "";
var nbspRE = new RegExp(String.fromCharCode(160), "g");

function sibLen(sib, sibType) {
	var totalSibLen = 0;
	while (sib) {
		if (sib.tagName != "IMG") {
			totalSibLen += sib.textContent.replace(/&/g, "&amp;").replace(nbspRE, "&nbsp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").length;
		}
		else {
			totalSibLen += sib.outerHTML.length;
		}
		if (sibType == "prev") {
			sib = sib.previousSibling;
		}
		else if (sibType == "next") {
			sib = sib.nextSibling;
		}
	}
	return totalSibLen;
}

document.addEventListener("webkitAnimationStart", function (event) {
	if (event.animationName == "vulcanTextbox") {
		var textbox = event.target;
		currentText = textbox.innerHTML;
		event.target.addEventListener("keydown", function(subEvent) {
			var potenEmos = this.getElementsByTagName("img");
			var realEmos = [];
			for (var p = 0; p < potenEmos.length; p++) {
				if (potenEmos[p].getAttribute("data-vulcanpermitted") == "false") {
					realEmos.push(potenEmos[p]);
				}
			}
			if (realEmos.length == 0) {
				setTimeout(function() {
					currentText = textbox.innerHTML;
				}, 1);
			}
			else {
				for (var r = 0; r < realEmos.length; r++) {
					var prevLen = sibLen(realEmos[r].previousSibling, "prev");
					var nextLen = sibLen(realEmos[r].nextSibling, "next");
					this.replaceChild(document.createTextNode(currentText.substr(prevLen, (currentText.length - nextLen - prevLen))), realEmos[r]);
					setTimeout(function() {
						currentText = textbox.innerHTML;
					}, 1);
				}
			}
		});
		event.target.addEventListener("DOMNodeInserted", function(insertEvent) {
			var inserted = insertEvent.target;
			if (inserted.tagName == "BR") {
				inserted.parentNode.removeChild(inserted);
			}
			else if (inserted.tagName == "IMG") {
				if (disableAuto) {
					inserted.setAttribute("data-vulcanpermitted", "pending");
					var modNode = textbox.cloneNode(true);
					var potenImg = modNode.getElementsByTagName("img");
					for (var i = 0; i < potenImg.length; i++) {
						if (potenImg[i].getAttribute("data-vulcanpermitted") == "pending") {
							modNode.removeChild(potenImg[i]);
						}
					}
					if (modNode.innerHTML == currentText) {
						inserted.setAttribute("data-vulcanpermitted", "true");
					}
					else {
						inserted.setAttribute("data-vulcanpermitted", "false");
					}
				}
				else {
					inserted.setAttribute("data-vulcanpermitted", "true");
				}
				setTimeout(function() {
					currentText = textbox.innerHTML;
				}, 1);
			}
		}, false);
	}
}, false);