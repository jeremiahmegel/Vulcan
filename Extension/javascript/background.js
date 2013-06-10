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

var cssMessage = {type: "css", data: localStorage["css"]};
var allPorts = new Array();

chrome.runtime.onConnect.addListener(function(emoPort) {
	if (emoPort.name == "emoPage") {
		emoPort.postMessage(cssMessage);
		emoPort.onDisconnect.addListener((function (portInd){
			return function () {
				allPorts[portInd] = null;
			}
		})(allPorts.push(emoPort)-1));
	}
});

chrome.runtime.onMessage.addListener(function(request, sender, respond) {
	if (request.type == "newCSS") {
		cssMessage.data = request.data;
		for (var p = 0; p < allPorts.length; p++) {
			if (allPorts[p]) {
				allPorts[p].postMessage(cssMessage);
			}
		}
	}
});