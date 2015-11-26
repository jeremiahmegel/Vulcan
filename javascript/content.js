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

var extPort = chrome.runtime.connect({name: "emoPage"});
extPort.onMessage.addListener(function(request, sender, respond) {
	if (request.type = "options") {
		style.innerHTML = request.data.css;
	}
});