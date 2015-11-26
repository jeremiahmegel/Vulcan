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

if (!localStorage["json"]) {
	// To access your personal emoticon JSON data, go to the options page, open
	// the developer console, and enter "localStorage['json']" (excluding the
	// double-quotes). Formatted with Eclipse default JavaScript formatting
	// settings.

	var emoticons = [ {
		"☺" : {
			"backgroundPosition" : "-13572",
			"type" : "custom",
			"custom" : ":)"
		},
		"😊" : {
			"backgroundPosition" : "-17052",
			"type" : "custom",
			"custom" : "^_^"
		},
		"😀" : {
			"backgroundPosition" : "-2088",
			"type" : "custom",
			"custom" : ":D"
		},
		"😁" : {
			"backgroundPosition" : "-23055",
			"type" : "custom",
			"custom" : ":D"
		},
		"😂" : {
			"backgroundPosition" : "-6322",
			"type" : "custom",
			"custom" : "XD"
		},
		"😃" : {
			"backgroundPosition" : "-3190",
			"type" : "custom",
			"custom" : ":)"
		},
		"😄" : {
			"backgroundPosition" : "-15399",
			"type" : "custom",
			"custom" : ":D"
		},
		"😅" : {
			"backgroundPosition" : "-5597",
			"type" : "custom",
			"custom" : "XD"
		},
		"😆" : {
			"backgroundPosition" : "-22359",
			"type" : "custom",
			"custom" : "XD"
		},
		"😇" : {
			"backgroundPosition" : "-20445",
			"type" : "custom",
			"custom" : "0:)"
		},
		"😈" : {
			"backgroundPosition" : "-6409",
			"type" : "custom",
			"custom" : ">:)"
		},
		"😉" : {
			"backgroundPosition" : "-16965",
			"type" : "custom",
			"custom" : ";)"
		},
		"😯" : {
			"backgroundPosition" : "-4727",
			"type" : "custom",
			"custom" : ":-!"
		},
		"😐" : {
			"backgroundPosition" : "-14152",
			"type" : "custom",
			"custom" : ":|"
		},
		"😑" : {
			"backgroundPosition" : "-8932",
			"type" : "custom",
			"custom" : "-_-"
		},
		"😕" : {
			"backgroundPosition" : "-22011",
			"type" : "custom",
			"custom" : ":/"
		},
		"😠" : {
			"backgroundPosition" : "-24302",
			"type" : "custom",
			"custom" : "X("
		},
		"😬" : {
			"backgroundPosition" : "-13746",
			"type" : "custom",
			"custom" : "DX"
		},
		"😡" : {
			"backgroundPosition" : "-870",
			"type" : "custom",
			"custom" : "X("
		},
		"😢" : {
			"backgroundPosition" : "-21257",
			"type" : "custom",
			"custom" : ";("
		},
		"😴" : {
			"backgroundPosition" : "-15776",
			"type" : "custom",
			"custom" : "-_- Zzz"
		},
		"😮" : {
			"backgroundPosition" : "-16878",
			"type" : "custom",
			"custom" : ":o"
		},
		"😣" : {
			"backgroundPosition" : "-6873",
			"type" : "custom",
			"custom" : ">_<"
		},
		"😤" : {
			"backgroundPosition" : "-18154",
			"type" : "custom",
			"custom" : "X("
		},
		"😥" : {
			"backgroundPosition" : "-12006",
			"type" : "custom",
			"custom" : "T_T"
		},
		"😦" : {
			"backgroundPosition" : "-3770",
			"type" : "custom",
			"custom" : "D:"
		},
		"😧" : {
			"backgroundPosition" : "-17980",
			"type" : "custom",
			"custom" : "D:"
		},
		"😨" : {
			"backgroundPosition" : "-18618",
			"type" : "custom",
			"custom" : "D:,"
		},
		"😩" : {
			"backgroundPosition" : "-7975",
			"type" : "custom",
			"custom" : "T_T"
		},
		"😰" : {
			"backgroundPosition" : "-10759",
			"type" : "custom",
			"custom" : "`:o"
		},
		"😟" : {
			"backgroundPosition" : "-20648",
			"type" : "custom",
			"custom" : ":("
		},
		"😱" : {
			"backgroundPosition" : "-4176",
			"type" : "custom",
			"custom" : ":O"
		},
		"😲" : {
			"backgroundPosition" : "-9889",
			"type" : "custom",
			"custom" : "O.o"
		},
		"😳" : {
			"backgroundPosition" : "-4495",
			"type" : "custom",
			"custom" : ":\">"
		},
		"😵" : {
			"backgroundPosition" : "-10411",
			"type" : "custom",
			"custom" : "DX"
		},
		"😶" : {
			"backgroundPosition" : "-12441",
			"type" : "custom",
			"custom" : ":-|"
		},
		"😷" : {
			"backgroundPosition" : "-15370",
			"type" : "custom",
			"custom" : ":-&"
		},
		"😞" : {
			"backgroundPosition" : "-16675",
			"type" : "custom",
			"custom" : ":("
		},
		"😒" : {
			"backgroundPosition" : "-23258",
			"type" : "custom",
			"custom" : "¬_¬"
		},
		"😍" : {
			"backgroundPosition" : "-7627",
			"type" : "custom",
			"custom" : "❤.❤"
		},
		"😛" : {
			"backgroundPosition" : "-5365",
			"type" : "custom",
			"custom" : ":P"
		},
		"😜" : {
			"backgroundPosition" : "-23461",
			"type" : "custom",
			"custom" : ";P"
		},
		"😝" : {
			"backgroundPosition" : "-15834",
			"type" : "custom",
			"custom" : "XP"
		},
		"😋" : {
			"backgroundPosition" : "-16066",
			"type" : "custom",
			"custom" : ":P"
		},
		"😗" : {
			"backgroundPosition" : "-1972",
			"type" : "custom",
			"custom" : ":-*"
		},
		"😙" : {
			"backgroundPosition" : "-18502",
			"type" : "custom",
			"custom" : ":-*"
		},
		"😘" : {
			"backgroundPosition" : "-12151",
			"type" : "custom",
			"custom" : ":-* ❤"
		},
		"😚" : {
			"backgroundPosition" : "-9309",
			"type" : "custom",
			"custom" : ":-*"
		},
		"😎" : {
			"backgroundPosition" : "-19053",
			"type" : "custom",
			"custom" : "B-)"
		},
		"😭" : {
			"backgroundPosition" : "-7888",
			"type" : "custom",
			"custom" : ";>_<;"
		},
		"😌" : {
			"backgroundPosition" : "-9396",
			"type" : "custom",
			"custom" : ":o"
		},
		"😖" : {
			"backgroundPosition" : "-29",
			"type" : "custom",
			"custom" : ":("
		},
		"😔" : {
			"backgroundPosition" : "-18937",
			"type" : "custom",
			"custom" : ":("
		},
		"😪" : {
			"backgroundPosition" : "-20068",
			"type" : "custom",
			"custom" : "|-o"
		},
		"😏" : {
			"backgroundPosition" : "-13137",
			"type" : "custom",
			"custom" : ":)"
		},
		"😓" : {
			"backgroundPosition" : "-19285",
			"type" : "custom",
			"custom" : "`:-|"
		},
		"😫" : {
			"backgroundPosition" : "-8584",
			"type" : "custom",
			"custom" : ">_<"
		},
		"🙋" : {
			"backgroundPosition" : "-21953",
			"type" : "custom",
			"custom" : "(^_^)/"
		},
		"🙌" : {
			"backgroundPosition" : "-464",
			"type" : "custom",
			"custom" : "\\(^_^)/"
		},
		"🙍" : {
			"backgroundPosition" : "-17023",
			"type" : "custom",
			"custom" : "-_-"
		},
		"🙅" : {
			"backgroundPosition" : "-8729",
			"type" : "custom",
			"custom" : "O-&-<"
		},
		"🙆" : {
			"backgroundPosition" : "-3712",
			"type" : "custom",
			"custom" : "\\(^_^)/"
		},
		"🙇" : {
			"backgroundPosition" : "-4582",
			"type" : "custom",
			"custom" : ">.<"
		},
		"🙎" : {
			"backgroundPosition" : "-23548",
			"type" : "custom",
			"custom" : ":-*"
		},
		"🙏" : {
			"backgroundPosition" : "-10324",
			"type" : "custom",
			"custom" : "[-o<"
		},
		"😺" : {
			"backgroundPosition" : "-24389",
			"type" : "custom",
			"custom" : "=^_^="
		},
		"😼" : {
			"backgroundPosition" : "-22620",
			"type" : "custom",
			"custom" : "=^_^="
		},
		"😸" : {
			"backgroundPosition" : "-21054",
			"type" : "custom",
			"custom" : ":3"
		},
		"😹" : {
			"backgroundPosition" : "-1682",
			"type" : "custom",
			"custom" : "=^.^="
		},
		"😻" : {
			"backgroundPosition" : "-11107",
			"type" : "custom",
			"custom" : "=♥w♥="
		},
		"😽" : {
			"backgroundPosition" : "-696",
			"type" : "custom",
			"custom" : "=^3^="
		},
		"😿" : {
			"backgroundPosition" : "-4872",
			"type" : "custom",
			"custom" : "=T_T="
		},
		"😾" : {
			"backgroundPosition" : "-10063",
			"type" : "custom",
			"custom" : "=`n´="
		},
		"🙀" : {
			"backgroundPosition" : "-17922",
			"type" : "custom",
			"custom" : "=´o`="
		},
		"🙈" : {
			"backgroundPosition" : "-11397",
			"type" : "image",
			"custom" : ""
		},
		"🙉" : {
			"backgroundPosition" : "-24650",
			"type" : "image",
			"custom" : ""
		},
		"🙊" : {
			"backgroundPosition" : "-19517",
			"type" : "image",
			"custom" : ""
		},
		"💩" : {
			"backgroundPosition" : "-16385",
			"type" : "image",
			"custom" : ""
		},
		"👶" : {
			"backgroundPosition" : "-15660",
			"type" : "image",
			"custom" : ""
		},
		"👦" : {
			"backgroundPosition" : "-4437",
			"type" : "image",
			"custom" : ""
		},
		"👧" : {
			"backgroundPosition" : "-19691",
			"type" : "image",
			"custom" : ""
		},
		"👨" : {
			"backgroundPosition" : "-7598",
			"type" : "image",
			"custom" : ""
		},
		"👩" : {
			"backgroundPosition" : "-13833",
			"type" : "image",
			"custom" : ""
		},
		"👴" : {
			"backgroundPosition" : "-19604",
			"type" : "image",
			"custom" : ""
		},
		"👵" : {
			"backgroundPosition" : "-17806",
			"type" : "image",
			"custom" : ""
		},
		"💏" : {
			"backgroundPosition" : "-13601",
			"type" : "image",
			"custom" : ""
		},
		"💑" : {
			"backgroundPosition" : "-145",
			"type" : "image",
			"custom" : ""
		},
		"👪" : {
			"backgroundPosition" : "-14732",
			"type" : "image",
			"custom" : ""
		},
		"👫" : {
			"backgroundPosition" : "-6206",
			"type" : "image",
			"custom" : ""
		},
		"👬" : {
			"backgroundPosition" : "-23229",
			"type" : "image",
			"custom" : ""
		},
		"👭" : {
			"backgroundPosition" : "-12180",
			"type" : "image",
			"custom" : ""
		},
		"👤" : {
			"backgroundPosition" : "-13717",
			"type" : "image",
			"custom" : ""
		},
		"👥" : {
			"backgroundPosition" : "-10121",
			"type" : "image",
			"custom" : ""
		},
		"👮" : {
			"backgroundPosition" : "-19720",
			"type" : "image",
			"custom" : ""
		},
		"👷" : {
			"backgroundPosition" : "-18473",
			"type" : "image",
			"custom" : ""
		},
		"💁" : {
			"backgroundPosition" : "-1160",
			"type" : "image",
			"custom" : ""
		},
		"💂" : {
			"backgroundPosition" : "-14790",
			"type" : "image",
			"custom" : ""
		},
		"👯" : {
			"backgroundPosition" : "-16124",
			"type" : "image",
			"custom" : ""
		},
		"👰" : {
			"backgroundPosition" : "-21663",
			"type" : "image",
			"custom" : ""
		},
		"👸" : {
			"backgroundPosition" : "-24099",
			"type" : "image",
			"custom" : ""
		},
		"🎅" : {
			"backgroundPosition" : "-3886",
			"type" : "image",
			"custom" : ""
		},
		"👼" : {
			"backgroundPosition" : "-24853",
			"type" : "image",
			"custom" : ""
		},
		"👱" : {
			"backgroundPosition" : "-7917",
			"type" : "image",
			"custom" : ""
		},
		"👲" : {
			"backgroundPosition" : "-24012",
			"type" : "image",
			"custom" : ""
		},
		"👳" : {
			"backgroundPosition" : "-13224",
			"type" : "image",
			"custom" : ""
		},
		"💃" : {
			"backgroundPosition" : "-4263",
			"type" : "image",
			"custom" : ""
		},
		"💆" : {
			"backgroundPosition" : "-12499",
			"type" : "image",
			"custom" : ""
		},
		"💇" : {
			"backgroundPosition" : "-2552",
			"type" : "image",
			"custom" : ""
		},
		"💅" : {
			"backgroundPosition" : "-3596",
			"type" : "image",
			"custom" : ""
		},
		"👻" : {
			"backgroundPosition" : "-24070",
			"type" : "image",
			"custom" : ""
		},
		"👹" : {
			"backgroundPosition" : "-17719",
			"type" : "image",
			"custom" : ""
		},
		"👺" : {
			"backgroundPosition" : "-6612",
			"type" : "image",
			"custom" : ""
		},
		"👽" : {
			"backgroundPosition" : "-20474",
			"type" : "image",
			"custom" : ""
		},
		"👾" : {
			"backgroundPosition" : "-19256",
			"type" : "image",
			"custom" : ""
		},
		"👿" : {
			"backgroundPosition" : "-522",
			"type" : "image",
			"custom" : ""
		},
		"💀" : {
			"backgroundPosition" : "-17516",
			"type" : "image",
			"custom" : ""
		},
		"💪" : {
			"backgroundPosition" : "-3393",
			"type" : "image",
			"custom" : ""
		},
		"👀" : {
			"backgroundPosition" : "-17864",
			"type" : "image",
			"custom" : ""
		},
		"👂" : {
			"backgroundPosition" : "-13485",
			"type" : "image",
			"custom" : ""
		},
		"👃" : {
			"backgroundPosition" : "-11977",
			"type" : "image",
			"custom" : ""
		},
		"👣" : {
			"backgroundPosition" : "-10730",
			"type" : "image",
			"custom" : ""
		},
		"👄" : {
			"backgroundPosition" : "-8497",
			"type" : "image",
			"custom" : ""
		},
		"👅" : {
			"backgroundPosition" : "-9831",
			"type" : "image",
			"custom" : ""
		},
		"💋" : {
			"backgroundPosition" : "-21170",
			"type" : "image",
			"custom" : ""
		},
		"❤" : {
			"backgroundPosition" : "-17777",
			"type" : "image",
			"custom" : ""
		},
		"💙" : {
			"backgroundPosition" : "-12035",
			"type" : "image",
			"custom" : ""
		},
		"💚" : {
			"backgroundPosition" : "-12064",
			"type" : "image",
			"custom" : ""
		},
		"💛" : {
			"backgroundPosition" : "-7772",
			"type" : "image",
			"custom" : ""
		},
		"💜" : {
			"backgroundPosition" : "-5393",
			"type" : "image",
			"custom" : ""
		},
		"💓" : {
			"backgroundPosition" : "-21112",
			"type" : "image",
			"custom" : ""
		},
		"💔" : {
			"backgroundPosition" : "-22127",
			"type" : "image",
			"custom" : ""
		},
		"💕" : {
			"backgroundPosition" : "-14094",
			"type" : "image",
			"custom" : ""
		},
		"💖" : {
			"backgroundPosition" : "-16037",
			"type" : "image",
			"custom" : ""
		},
		"💗" : {
			"backgroundPosition" : "-19633",
			"type" : "image",
			"custom" : ""
		},
		"💘" : {
			"backgroundPosition" : "-9367",
			"type" : "image",
			"custom" : ""
		},
		"💝" : {
			"backgroundPosition" : "-2378",
			"type" : "image",
			"custom" : ""
		},
		"💞" : {
			"backgroundPosition" : "-23374",
			"type" : "image",
			"custom" : ""
		},
		"💟" : {
			"backgroundPosition" : "-9976",
			"type" : "image",
			"custom" : ""
		},
		"👍" : {
			"backgroundPosition" : "-3103",
			"type" : "image",
			"custom" : ""
		},
		"👎" : {
			"backgroundPosition" : "-23200",
			"type" : "image",
			"custom" : ""
		},
		"👌" : {
			"backgroundPosition" : "-8236",
			"type" : "image",
			"custom" : ""
		},
		"✊" : {
			"backgroundPosition" : "-21837",
			"type" : "image",
			"custom" : ""
		},
		"✌" : {
			"backgroundPosition" : "-12876",
			"type" : "image",
			"custom" : ""
		},
		"✋" : {
			"backgroundPosition" : "-9425",
			"type" : "image",
			"custom" : ""
		},
		"👊" : {
			"backgroundPosition" : "-21460",
			"type" : "image",
			"custom" : ""
		},
		"☝" : {
			"backgroundPosition" : "-21518",
			"type" : "image",
			"custom" : ""
		},
		"👆" : {
			"backgroundPosition" : "-15486",
			"type" : "image",
			"custom" : ""
		},
		"👇" : {
			"backgroundPosition" : "-18183",
			"type" : "image",
			"custom" : ""
		},
		"👈" : {
			"backgroundPosition" : "-11948",
			"type" : "image",
			"custom" : ""
		},
		"👉" : {
			"backgroundPosition" : "-22939",
			"type" : "image",
			"custom" : ""
		},
		"👋" : {
			"backgroundPosition" : "-21489",
			"type" : "image",
			"custom" : ""
		},
		"👏" : {
			"backgroundPosition" : "-20880",
			"type" : "image",
			"custom" : ""
		},
		"👐" : {
			"backgroundPosition" : "-6177",
			"type" : "image",
			"custom" : ""
		}
	}, {
		"🔰" : {
			"backgroundPosition" : "-19169",
			"type" : "image",
			"custom" : ""
		},
		"💄" : {
			"backgroundPosition" : "-4292",
			"type" : "image",
			"custom" : ""
		},
		"👞" : {
			"backgroundPosition" : "-19952",
			"type" : "image",
			"custom" : ""
		},
		"👟" : {
			"backgroundPosition" : "-1247",
			"type" : "image",
			"custom" : ""
		},
		"👑" : {
			"backgroundPosition" : "-7714",
			"type" : "image",
			"custom" : ""
		},
		"👒" : {
			"backgroundPosition" : "-7395",
			"type" : "image",
			"custom" : ""
		},
		"🎩" : {
			"backgroundPosition" : "-15225",
			"type" : "image",
			"custom" : ""
		},
		"🎓" : {
			"backgroundPosition" : "-21373",
			"type" : "image",
			"custom" : ""
		},
		"👓" : {
			"backgroundPosition" : "-15312",
			"type" : "image",
			"custom" : ""
		},
		"⌚" : {
			"backgroundPosition" : "-11484",
			"type" : "image",
			"custom" : ""
		},
		"👔" : {
			"backgroundPosition" : "-17081",
			"type" : "image",
			"custom" : ""
		},
		"👕" : {
			"backgroundPosition" : "-5104",
			"type" : "image",
			"custom" : ""
		},
		"👖" : {
			"backgroundPosition" : "-17429",
			"type" : "image",
			"custom" : ""
		},
		"👗" : {
			"backgroundPosition" : "-18415",
			"type" : "image",
			"custom" : ""
		},
		"👘" : {
			"backgroundPosition" : "-8642",
			"type" : "image",
			"custom" : ""
		},
		"👙" : {
			"backgroundPosition" : "-2900",
			"type" : "image",
			"custom" : ""
		},
		"👠" : {
			"backgroundPosition" : "-20561",
			"type" : "image",
			"custom" : ""
		},
		"👡" : {
			"backgroundPosition" : "-5278",
			"type" : "image",
			"custom" : ""
		},
		"👢" : {
			"backgroundPosition" : "-17487",
			"type" : "image",
			"custom" : ""
		},
		"👚" : {
			"backgroundPosition" : "-6989",
			"type" : "image",
			"custom" : ""
		},
		"👜" : {
			"backgroundPosition" : "-16849",
			"type" : "image",
			"custom" : ""
		},
		"💼" : {
			"backgroundPosition" : "-19923",
			"type" : "image",
			"custom" : ""
		},
		"🎒" : {
			"backgroundPosition" : "-24621",
			"type" : "image",
			"custom" : ""
		},
		"👝" : {
			"backgroundPosition" : "-19749",
			"type" : "image",
			"custom" : ""
		},
		"👛" : {
			"backgroundPosition" : "-10150",
			"type" : "image",
			"custom" : ""
		},
		"💰" : {
			"backgroundPosition" : "-20938",
			"type" : "image",
			"custom" : ""
		},
		"💳" : {
			"backgroundPosition" : "-14036",
			"type" : "image",
			"custom" : ""
		},
		"💲" : {
			"backgroundPosition" : "-19140",
			"type" : "image",
			"custom" : ""
		},
		"💵" : {
			"backgroundPosition" : "-17197",
			"type" : "image",
			"custom" : ""
		},
		"💴" : {
			"backgroundPosition" : "-17400",
			"type" : "image",
			"custom" : ""
		},
		"💶" : {
			"backgroundPosition" : "-4843",
			"type" : "image",
			"custom" : ""
		},
		"💷" : {
			"backgroundPosition" : "-8787",
			"type" : "image",
			"custom" : ""
		},
		"💸" : {
			"backgroundPosition" : "-16530",
			"type" : "image",
			"custom" : ""
		},
		"💱" : {
			"backgroundPosition" : "-19082",
			"type" : "image",
			"custom" : ""
		},
		"💹" : {
			"backgroundPosition" : "-10614",
			"type" : "image",
			"custom" : ""
		},
		"🔫" : {
			"backgroundPosition" : "-15544",
			"type" : "image",
			"custom" : ""
		},
		"🔪" : {
			"backgroundPosition" : "-23722",
			"type" : "image",
			"custom" : ""
		},
		"💣" : {
			"backgroundPosition" : "-4814",
			"type" : "image",
			"custom" : ""
		},
		"💉" : {
			"backgroundPosition" : "-11339",
			"type" : "image",
			"custom" : ""
		},
		"💊" : {
			"backgroundPosition" : "-2320",
			"type" : "image",
			"custom" : ""
		},
		"🚬" : {
			"backgroundPosition" : "-7308",
			"type" : "image",
			"custom" : ""
		},
		"🔔" : {
			"backgroundPosition" : "-9541",
			"type" : "image",
			"custom" : ""
		},
		"🔕" : {
			"backgroundPosition" : "-10382",
			"type" : "image",
			"custom" : ""
		},
		"🚪" : {
			"backgroundPosition" : "-12615",
			"type" : "image",
			"custom" : ""
		},
		"🔬" : {
			"backgroundPosition" : "-14529",
			"type" : "image",
			"custom" : ""
		},
		"🔭" : {
			"backgroundPosition" : "-16820",
			"type" : "image",
			"custom" : ""
		},
		"🔮" : {
			"backgroundPosition" : "-18995",
			"type" : "image",
			"custom" : ""
		},
		"🔦" : {
			"backgroundPosition" : "-12992",
			"type" : "image",
			"custom" : ""
		},
		"🔋" : {
			"backgroundPosition" : "-10556",
			"type" : "image",
			"custom" : ""
		},
		"🔌" : {
			"backgroundPosition" : "-6235",
			"type" : "image",
			"custom" : ""
		},
		"📜" : {
			"backgroundPosition" : "-8874",
			"type" : "image",
			"custom" : ""
		},
		"📗" : {
			"backgroundPosition" : "-12528",
			"type" : "image",
			"custom" : ""
		},
		"📘" : {
			"backgroundPosition" : "-22910",
			"type" : "image",
			"custom" : ""
		},
		"📙" : {
			"backgroundPosition" : "-14500",
			"type" : "image",
			"custom" : ""
		},
		"📚" : {
			"backgroundPosition" : "-5655",
			"type" : "image",
			"custom" : ""
		},
		"📔" : {
			"backgroundPosition" : "-21982",
			"type" : "image",
			"custom" : ""
		},
		"📒" : {
			"backgroundPosition" : "-14587",
			"type" : "image",
			"custom" : ""
		},
		"📑" : {
			"backgroundPosition" : "-1624",
			"type" : "image",
			"custom" : ""
		},
		"📓" : {
			"backgroundPosition" : "-11919",
			"type" : "image",
			"custom" : ""
		},
		"📕" : {
			"backgroundPosition" : "-24534",
			"type" : "image",
			"custom" : ""
		},
		"📖" : {
			"backgroundPosition" : "-14065",
			"type" : "image",
			"custom" : ""
		},
		"📰" : {
			"backgroundPosition" : "-174",
			"type" : "image",
			"custom" : ""
		},
		"📛" : {
			"backgroundPosition" : "-7279",
			"type" : "image",
			"custom" : ""
		},
		"🎃" : {
			"backgroundPosition" : "-5800",
			"type" : "image",
			"custom" : ""
		},
		"🎄" : {
			"backgroundPosition" : "-14268",
			"type" : "image",
			"custom" : ""
		},
		"🎀" : {
			"backgroundPosition" : "-9019",
			"type" : "image",
			"custom" : ""
		},
		"🎁" : {
			"backgroundPosition" : "-22707",
			"type" : "image",
			"custom" : ""
		},
		"🎂" : {
			"backgroundPosition" : "-7192",
			"type" : "image",
			"custom" : ""
		},
		"🎈" : {
			"backgroundPosition" : "-8294",
			"type" : "image",
			"custom" : ""
		},
		"🎆" : {
			"backgroundPosition" : "-232",
			"type" : "image",
			"custom" : ""
		},
		"🎇" : {
			"backgroundPosition" : "-4060",
			"type" : "image",
			"custom" : ""
		},
		"🎉" : {
			"backgroundPosition" : "-14848",
			"type" : "image",
			"custom" : ""
		},
		"🎊" : {
			"backgroundPosition" : "-5771",
			"type" : "image",
			"custom" : ""
		},
		"🎍" : {
			"backgroundPosition" : "-2291",
			"type" : "image",
			"custom" : ""
		},
		"🎏" : {
			"backgroundPosition" : "-22475",
			"type" : "image",
			"custom" : ""
		},
		"🎌" : {
			"backgroundPosition" : "-20358",
			"type" : "image",
			"custom" : ""
		},
		"🎐" : {
			"backgroundPosition" : "-1189",
			"type" : "image",
			"custom" : ""
		},
		"🎋" : {
			"backgroundPosition" : "-21692",
			"type" : "image",
			"custom" : ""
		},
		"🎎" : {
			"backgroundPosition" : "-13688",
			"type" : "image",
			"custom" : ""
		},
		"📱" : {
			"backgroundPosition" : "-5916",
			"type" : "image",
			"custom" : ""
		},
		"📲" : {
			"backgroundPosition" : "-7482",
			"type" : "image",
			"custom" : ""
		},
		"📟" : {
			"backgroundPosition" : "-24244",
			"type" : "image",
			"custom" : ""
		},
		"☎" : {
			"backgroundPosition" : "-1914",
			"type" : "image",
			"custom" : ""
		},
		"📞" : {
			"backgroundPosition" : "-20503",
			"type" : "image",
			"custom" : ""
		},
		"📠" : {
			"backgroundPosition" : "-9947",
			"type" : "image",
			"custom" : ""
		},
		"📦" : {
			"backgroundPosition" : "-11716",
			"type" : "image",
			"custom" : ""
		},
		"✉" : {
			"backgroundPosition" : "-2639",
			"type" : "image",
			"custom" : ""
		},
		"📨" : {
			"backgroundPosition" : "-9280",
			"type" : "image",
			"custom" : ""
		},
		"📩" : {
			"backgroundPosition" : "-7453",
			"type" : "image",
			"custom" : ""
		},
		"📪" : {
			"backgroundPosition" : "-23751",
			"type" : "image",
			"custom" : ""
		},
		"📫" : {
			"backgroundPosition" : "-14413",
			"type" : "image",
			"custom" : ""
		},
		"📭" : {
			"backgroundPosition" : "-11658",
			"type" : "image",
			"custom" : ""
		},
		"📬" : {
			"backgroundPosition" : "-2842",
			"type" : "image",
			"custom" : ""
		},
		"📮" : {
			"backgroundPosition" : "-4988",
			"type" : "image",
			"custom" : ""
		},
		"📤" : {
			"backgroundPosition" : "-14703",
			"type" : "image",
			"custom" : ""
		},
		"📥" : {
			"backgroundPosition" : "-13253",
			"type" : "image",
			"custom" : ""
		},
		"📯" : {
			"backgroundPosition" : "-4466",
			"type" : "image",
			"custom" : ""
		},
		"📢" : {
			"backgroundPosition" : "-11281",
			"type" : "image",
			"custom" : ""
		},
		"📣" : {
			"backgroundPosition" : "-18386",
			"type" : "image",
			"custom" : ""
		},
		"📡" : {
			"backgroundPosition" : "-406",
			"type" : "image",
			"custom" : ""
		},
		"💬" : {
			"backgroundPosition" : "-2204",
			"type" : "image",
			"custom" : ""
		},
		"💭" : {
			"backgroundPosition" : "-3799",
			"type" : "image",
			"custom" : ""
		},
		"✒" : {
			"backgroundPosition" : "-3915",
			"type" : "image",
			"custom" : ""
		},
		"✏" : {
			"backgroundPosition" : "-14964",
			"type" : "image",
			"custom" : ""
		},
		"📝" : {
			"backgroundPosition" : "-12963",
			"type" : "image",
			"custom" : ""
		},
		"📏" : {
			"backgroundPosition" : "-5626",
			"type" : "image",
			"custom" : ""
		},
		"📐" : {
			"backgroundPosition" : "-15167",
			"type" : "image",
			"custom" : ""
		},
		"📍" : {
			"backgroundPosition" : "-7801",
			"type" : "image",
			"custom" : ""
		},
		"📌" : {
			"backgroundPosition" : "-21025",
			"type" : "image",
			"custom" : ""
		},
		"📎" : {
			"backgroundPosition" : "-4379",
			"type" : "image",
			"custom" : ""
		},
		"✂" : {
			"backgroundPosition" : "-11890",
			"type" : "image",
			"custom" : ""
		},
		"💺" : {
			"backgroundPosition" : "-13398",
			"type" : "image",
			"custom" : ""
		},
		"💻" : {
			"backgroundPosition" : "-7250",
			"type" : "image",
			"custom" : ""
		},
		"💽" : {
			"backgroundPosition" : "-15979",
			"type" : "image",
			"custom" : ""
		},
		"💾" : {
			"backgroundPosition" : "-4698",
			"type" : "image",
			"custom" : ""
		},
		"💿" : {
			"backgroundPosition" : "-10962",
			"type" : "image",
			"custom" : ""
		},
		"📆" : {
			"backgroundPosition" : "-12818",
			"type" : "image",
			"custom" : ""
		},
		"📅" : {
			"backgroundPosition" : "-23780",
			"type" : "image",
			"custom" : ""
		},
		"📇" : {
			"backgroundPosition" : "-13543",
			"type" : "image",
			"custom" : ""
		},
		"📋" : {
			"backgroundPosition" : "-24505",
			"type" : "image",
			"custom" : ""
		},
		"📁" : {
			"backgroundPosition" : "-8149",
			"type" : "image",
			"custom" : ""
		},
		"📂" : {
			"backgroundPosition" : "-2668",
			"type" : "image",
			"custom" : ""
		},
		"📃" : {
			"backgroundPosition" : "-8816",
			"type" : "image",
			"custom" : ""
		},
		"📄" : {
			"backgroundPosition" : "-2001",
			"type" : "image",
			"custom" : ""
		},
		"📊" : {
			"backgroundPosition" : "-24592",
			"type" : "image",
			"custom" : ""
		},
		"📈" : {
			"backgroundPosition" : "-6438",
			"type" : "image",
			"custom" : ""
		},
		"📉" : {
			"backgroundPosition" : "-14877",
			"type" : "image",
			"custom" : ""
		},
		"⛺" : {
			"backgroundPosition" : "-24824",
			"type" : "image",
			"custom" : ""
		},
		"🎡" : {
			"backgroundPosition" : "-319",
			"type" : "image",
			"custom" : ""
		},
		"🎢" : {
			"backgroundPosition" : "-13282",
			"type" : "image",
			"custom" : ""
		},
		"🎠" : {
			"backgroundPosition" : "-19430",
			"type" : "image",
			"custom" : ""
		},
		"🎪" : {
			"backgroundPosition" : "-1102",
			"type" : "image",
			"custom" : ""
		},
		"🎨" : {
			"backgroundPosition" : "-7540",
			"type" : "image",
			"custom" : ""
		},
		"🎬" : {
			"backgroundPosition" : "-10643",
			"type" : "image",
			"custom" : ""
		},
		"🎥" : {
			"backgroundPosition" : "-754",
			"type" : "image",
			"custom" : ""
		},
		"📷" : {
			"backgroundPosition" : "-22823",
			"type" : "image",
			"custom" : ""
		},
		"📹" : {
			"backgroundPosition" : "-203",
			"type" : "image",
			"custom" : ""
		},
		"🎦" : {
			"backgroundPosition" : "-13978",
			"type" : "image",
			"custom" : ""
		},
		"🎭" : {
			"backgroundPosition" : "-18096",
			"type" : "image",
			"custom" : ""
		},
		"🎫" : {
			"backgroundPosition" : "-87",
			"type" : "image",
			"custom" : ""
		},
		"🎮" : {
			"backgroundPosition" : "-5684",
			"type" : "image",
			"custom" : ""
		},
		"🎲" : {
			"backgroundPosition" : "-11252",
			"type" : "image",
			"custom" : ""
		},
		"🎰" : {
			"backgroundPosition" : "-6960",
			"type" : "image",
			"custom" : ""
		},
		"🃏" : {
			"backgroundPosition" : "-12093",
			"type" : "image",
			"custom" : ""
		},
		"🎴" : {
			"backgroundPosition" : "-7511",
			"type" : "image",
			"custom" : ""
		},
		"🀄" : {
			"backgroundPosition" : "-6699",
			"type" : "image",
			"custom" : ""
		},
		"🎯" : {
			"backgroundPosition" : "-13166",
			"type" : "image",
			"custom" : ""
		},
		"📺" : {
			"backgroundPosition" : "-15080",
			"type" : "image",
			"custom" : ""
		},
		"📻" : {
			"backgroundPosition" : "-7685",
			"type" : "image",
			"custom" : ""
		},
		"📀" : {
			"backgroundPosition" : "-8120",
			"type" : "image",
			"custom" : ""
		},
		"📼" : {
			"backgroundPosition" : "-1392",
			"type" : "image",
			"custom" : ""
		},
		"🎧" : {
			"backgroundPosition" : "-18763",
			"type" : "image",
			"custom" : ""
		},
		"🎤" : {
			"backgroundPosition" : "-22997",
			"type" : "image",
			"custom" : ""
		},
		"🎵" : {
			"backgroundPosition" : "-9483",
			"type" : "image",
			"custom" : ""
		},
		"🎶" : {
			"backgroundPosition" : "-23490",
			"type" : "image",
			"custom" : ""
		},
		"🎼" : {
			"backgroundPosition" : "-11745",
			"type" : "image",
			"custom" : ""
		},
		"🎻" : {
			"backgroundPosition" : "-19865",
			"type" : "image",
			"custom" : ""
		},
		"🎹" : {
			"backgroundPosition" : "-10498",
			"type" : "image",
			"custom" : ""
		},
		"🎷" : {
			"backgroundPosition" : "-17545",
			"type" : "image",
			"custom" : ""
		},
		"🎺" : {
			"backgroundPosition" : "-3045",
			"type" : "image",
			"custom" : ""
		},
		"🎸" : {
			"backgroundPosition" : "-22156",
			"type" : "image",
			"custom" : ""
		},
		"〽" : {
			"backgroundPosition" : "-21286",
			"type" : "image",
			"custom" : ""
		}
	}, {
		"🐕" : {
			"backgroundPosition" : "-6380",
			"type" : "image",
			"custom" : ""
		},
		"🐶" : {
			"backgroundPosition" : "-9744",
			"type" : "image",
			"custom" : ""
		},
		"🐩" : {
			"backgroundPosition" : "-7830",
			"type" : "image",
			"custom" : ""
		},
		"🐈" : {
			"backgroundPosition" : "-15747",
			"type" : "image",
			"custom" : ""
		},
		"🐱" : {
			"backgroundPosition" : "-19343",
			"type" : "image",
			"custom" : ""
		},
		"🐀" : {
			"backgroundPosition" : "-13340",
			"type" : "image",
			"custom" : ""
		},
		"🐁" : {
			"backgroundPosition" : "-22504",
			"type" : "image",
			"custom" : ""
		},
		"🐭" : {
			"backgroundPosition" : "-11571",
			"type" : "image",
			"custom" : ""
		},
		"🐹" : {
			"backgroundPosition" : "-23403",
			"type" : "image",
			"custom" : ""
		},
		"🐢" : {
			"backgroundPosition" : "-13804",
			"type" : "image",
			"custom" : ""
		},
		"🐇" : {
			"backgroundPosition" : "-20416",
			"type" : "image",
			"custom" : ""
		},
		"🐰" : {
			"backgroundPosition" : "-11455",
			"type" : "image",
			"custom" : ""
		},
		"🐓" : {
			"backgroundPosition" : "-3364",
			"type" : "image",
			"custom" : ""
		},
		"🐔" : {
			"backgroundPosition" : "-2755",
			"type" : "image",
			"custom" : ""
		},
		"🐣" : {
			"backgroundPosition" : "-11049",
			"type" : "image",
			"custom" : ""
		},
		"🐤" : {
			"backgroundPosition" : "-12789",
			"type" : "image",
			"custom" : ""
		},
		"🐥" : {
			"backgroundPosition" : "-11426",
			"type" : "image",
			"custom" : ""
		},
		"🐦" : {
			"backgroundPosition" : "-18212",
			"type" : "image",
			"custom" : ""
		},
		"🐏" : {
			"backgroundPosition" : "-5249",
			"type" : "image",
			"custom" : ""
		},
		"🐑" : {
			"backgroundPosition" : "-8207",
			"type" : "image",
			"custom" : ""
		},
		"🐐" : {
			"backgroundPosition" : "-23896",
			"type" : "image",
			"custom" : ""
		},
		"🐺" : {
			"backgroundPosition" : "-17110",
			"type" : "image",
			"custom" : ""
		},
		"🐃" : {
			"backgroundPosition" : "-16008",
			"type" : "image",
			"custom" : ""
		},
		"🐂" : {
			"backgroundPosition" : "-23171",
			"type" : "image",
			"custom" : ""
		},
		"🐄" : {
			"backgroundPosition" : "-3306",
			"type" : "image",
			"custom" : ""
		},
		"🐮" : {
			"backgroundPosition" : "-22968",
			"type" : "image",
			"custom" : ""
		},
		"🐴" : {
			"backgroundPosition" : "-10846",
			"type" : "image",
			"custom" : ""
		},
		"🐗" : {
			"backgroundPosition" : "-1015",
			"type" : "image",
			"custom" : ""
		},
		"🐖" : {
			"backgroundPosition" : "-15254",
			"type" : "image",
			"custom" : ""
		},
		"🐷" : {
			"backgroundPosition" : "-21199",
			"type" : "image",
			"custom" : ""
		},
		"🐽" : {
			"backgroundPosition" : "-17690",
			"type" : "image",
			"custom" : ""
		},
		"🐸" : {
			"backgroundPosition" : "-24128",
			"type" : "image",
			"custom" : ""
		},
		"🐍" : {
			"backgroundPosition" : "-10585",
			"type" : "image",
			"custom" : ""
		},
		"🐼" : {
			"backgroundPosition" : "-7221",
			"type" : "image",
			"custom" : ""
		},
		"🐧" : {
			"backgroundPosition" : "-12238",
			"type" : "image",
			"custom" : ""
		},
		"🐘" : {
			"backgroundPosition" : "-21402",
			"type" : "image",
			"custom" : ""
		},
		"🐨" : {
			"backgroundPosition" : "-12296",
			"type" : "image",
			"custom" : ""
		},
		"🐒" : {
			"backgroundPosition" : "-4669",
			"type" : "image",
			"custom" : ""
		},
		"🐵" : {
			"backgroundPosition" : "-14384",
			"type" : "image",
			"custom" : ""
		},
		"🐆" : {
			"backgroundPosition" : "-17458",
			"type" : "image",
			"custom" : ""
		},
		"🐯" : {
			"backgroundPosition" : "-22562",
			"type" : "image",
			"custom" : ""
		},
		"🐻" : {
			"backgroundPosition" : "0",
			"type" : "image",
			"custom" : ""
		},
		"🐫" : {
			"backgroundPosition" : "-6902",
			"type" : "image",
			"custom" : ""
		},
		"🐪" : {
			"backgroundPosition" : "-15573",
			"type" : "image",
			"custom" : ""
		},
		"🐊" : {
			"backgroundPosition" : "-21344",
			"type" : "image",
			"custom" : ""
		},
		"🐳" : {
			"backgroundPosition" : "-899",
			"type" : "image",
			"custom" : ""
		},
		"🐋" : {
			"backgroundPosition" : "-22069",
			"type" : "image",
			"custom" : ""
		},
		"🐟" : {
			"backgroundPosition" : "-6003",
			"type" : "image",
			"custom" : ""
		},
		"🐠" : {
			"backgroundPosition" : "-22591",
			"type" : "image",
			"custom" : ""
		},
		"🐡" : {
			"backgroundPosition" : "-9106",
			"type" : "image",
			"custom" : ""
		},
		"🐙" : {
			"backgroundPosition" : "-12760",
			"type" : "image",
			"custom" : ""
		},
		"🐚" : {
			"backgroundPosition" : "-13311",
			"type" : "image",
			"custom" : ""
		},
		"🐬" : {
			"backgroundPosition" : "-17632",
			"type" : "image",
			"custom" : ""
		},
		"🐌" : {
			"backgroundPosition" : "-58",
			"type" : "image",
			"custom" : ""
		},
		"🐛" : {
			"backgroundPosition" : "-2349",
			"type" : "image",
			"custom" : ""
		},
		"🐜" : {
			"backgroundPosition" : "-7163",
			"type" : "image",
			"custom" : ""
		},
		"🐝" : {
			"backgroundPosition" : "-20590",
			"type" : "image",
			"custom" : ""
		},
		"🐞" : {
			"backgroundPosition" : "-9077",
			"type" : "image",
			"custom" : ""
		},
		"🐲" : {
			"backgroundPosition" : "-20706",
			"type" : "image",
			"custom" : ""
		},
		"🐉" : {
			"backgroundPosition" : "-3132",
			"type" : "image",
			"custom" : ""
		},
		"🐾" : {
			"backgroundPosition" : "-17574",
			"type" : "image",
			"custom" : ""
		},
		"🍸" : {
			"backgroundPosition" : "-2523",
			"type" : "image",
			"custom" : ""
		},
		"🍺" : {
			"backgroundPosition" : "-4321",
			"type" : "image",
			"custom" : ""
		},
		"🍻" : {
			"backgroundPosition" : "-21431",
			"type" : "image",
			"custom" : ""
		},
		"🍷" : {
			"backgroundPosition" : "-6090",
			"type" : "image",
			"custom" : ""
		},
		"🍹" : {
			"backgroundPosition" : "-15515",
			"type" : "image",
			"custom" : ""
		},
		"🍶" : {
			"backgroundPosition" : "-21895",
			"type" : "image",
			"custom" : ""
		},
		"☕" : {
			"backgroundPosition" : "-15602",
			"type" : "image",
			"custom" : ""
		},
		"🍵" : {
			"backgroundPosition" : "-21721",
			"type" : "image",
			"custom" : ""
		},
		"🍼" : {
			"backgroundPosition" : "-2784",
			"type" : "image",
			"custom" : ""
		},
		"🍴" : {
			"backgroundPosition" : "-17255",
			"type" : "image",
			"custom" : ""
		},
		"🍨" : {
			"backgroundPosition" : "-10237",
			"type" : "image",
			"custom" : ""
		},
		"🍧" : {
			"backgroundPosition" : "-20851",
			"type" : "image",
			"custom" : ""
		},
		"🍦" : {
			"backgroundPosition" : "-24766",
			"type" : "image",
			"custom" : ""
		},
		"🍩" : {
			"backgroundPosition" : "-13079",
			"type" : "image",
			"custom" : ""
		},
		"🍰" : {
			"backgroundPosition" : "-1769",
			"type" : "image",
			"custom" : ""
		},
		"🍪" : {
			"backgroundPosition" : "-16240",
			"type" : "image",
			"custom" : ""
		},
		"🍫" : {
			"backgroundPosition" : "-3538",
			"type" : "image",
			"custom" : ""
		},
		"🍬" : {
			"backgroundPosition" : "-8004",
			"type" : "image",
			"custom" : ""
		},
		"🍭" : {
			"backgroundPosition" : "-21866",
			"type" : "image",
			"custom" : ""
		},
		"🍮" : {
			"backgroundPosition" : "-6148",
			"type" : "image",
			"custom" : ""
		},
		"🍯" : {
			"backgroundPosition" : "-1334",
			"type" : "image",
			"custom" : ""
		},
		"🍳" : {
			"backgroundPosition" : "-8323",
			"type" : "image",
			"custom" : ""
		},
		"🍔" : {
			"backgroundPosition" : "-10904",
			"type" : "image",
			"custom" : ""
		},
		"🍟" : {
			"backgroundPosition" : "-435",
			"type" : "image",
			"custom" : ""
		},
		"🍝" : {
			"backgroundPosition" : "-13775",
			"type" : "image",
			"custom" : ""
		},
		"🍕" : {
			"backgroundPosition" : "-23432",
			"type" : "image",
			"custom" : ""
		},
		"🍖" : {
			"backgroundPosition" : "-7743",
			"type" : "image",
			"custom" : ""
		},
		"🍗" : {
			"backgroundPosition" : "-12383",
			"type" : "image",
			"custom" : ""
		},
		"🍤" : {
			"backgroundPosition" : "-11803",
			"type" : "image",
			"custom" : ""
		},
		"🍣" : {
			"backgroundPosition" : "-7018",
			"type" : "image",
			"custom" : ""
		},
		"🍱" : {
			"backgroundPosition" : "-17951",
			"type" : "image",
			"custom" : ""
		},
		"🍞" : {
			"backgroundPosition" : "-23026",
			"type" : "image",
			"custom" : ""
		},
		"🍜" : {
			"backgroundPosition" : "-986",
			"type" : "image",
			"custom" : ""
		},
		"🍙" : {
			"backgroundPosition" : "-17139",
			"type" : "image",
			"custom" : ""
		},
		"🍚" : {
			"backgroundPosition" : "-3451",
			"type" : "image",
			"custom" : ""
		},
		"🍛" : {
			"backgroundPosition" : "-3654",
			"type" : "image",
			"custom" : ""
		},
		"🍲" : {
			"backgroundPosition" : "-6525",
			"type" : "image",
			"custom" : ""
		},
		"🍥" : {
			"backgroundPosition" : "-23142",
			"type" : "image",
			"custom" : ""
		},
		"🍢" : {
			"backgroundPosition" : "-8903",
			"type" : "image",
			"custom" : ""
		},
		"🍡" : {
			"backgroundPosition" : "-18531",
			"type" : "image",
			"custom" : ""
		},
		"🍘" : {
			"backgroundPosition" : "-5742",
			"type" : "image",
			"custom" : ""
		},
		"🍠" : {
			"backgroundPosition" : "-24940",
			"type" : "image",
			"custom" : ""
		},
		"🍌" : {
			"backgroundPosition" : "-16443",
			"type" : "image",
			"custom" : ""
		},
		"🍎" : {
			"backgroundPosition" : "-20271",
			"type" : "image",
			"custom" : ""
		},
		"🍏" : {
			"backgroundPosition" : "-12731",
			"type" : "image",
			"custom" : ""
		},
		"🍊" : {
			"backgroundPosition" : "-24215",
			"type" : "image",
			"custom" : ""
		},
		"🍋" : {
			"backgroundPosition" : "-11629",
			"type" : "image",
			"custom" : ""
		},
		"🍄" : {
			"backgroundPosition" : "-22388",
			"type" : "image",
			"custom" : ""
		},
		"🍅" : {
			"backgroundPosition" : "-3335",
			"type" : "image",
			"custom" : ""
		},
		"🍆" : {
			"backgroundPosition" : "-2726",
			"type" : "image",
			"custom" : ""
		},
		"🍇" : {
			"backgroundPosition" : "-6467",
			"type" : "image",
			"custom" : ""
		},
		"🍈" : {
			"backgroundPosition" : "-16936",
			"type" : "image",
			"custom" : ""
		},
		"🍉" : {
			"backgroundPosition" : "-21083",
			"type" : "image",
			"custom" : ""
		},
		"🍐" : {
			"backgroundPosition" : "-7569",
			"type" : "image",
			"custom" : ""
		},
		"🍑" : {
			"backgroundPosition" : "-12934",
			"type" : "image",
			"custom" : ""
		},
		"🍒" : {
			"backgroundPosition" : "-5829",
			"type" : "image",
			"custom" : ""
		},
		"🍓" : {
			"backgroundPosition" : "-12412",
			"type" : "image",
			"custom" : ""
		},
		"🍍" : {
			"backgroundPosition" : "-8352",
			"type" : "image",
			"custom" : ""
		},
		"🌰" : {
			"backgroundPosition" : "-16704",
			"type" : "image",
			"custom" : ""
		},
		"🌱" : {
			"backgroundPosition" : "-22446",
			"type" : "image",
			"custom" : ""
		},
		"🌲" : {
			"backgroundPosition" : "-812",
			"type" : "image",
			"custom" : ""
		},
		"🌳" : {
			"backgroundPosition" : "-18241",
			"type" : "image",
			"custom" : ""
		},
		"🌴" : {
			"backgroundPosition" : "-609",
			"type" : "image",
			"custom" : ""
		},
		"🌵" : {
			"backgroundPosition" : "-23113",
			"type" : "image",
			"custom" : ""
		},
		"🌷" : {
			"backgroundPosition" : "-1943",
			"type" : "image",
			"custom" : ""
		},
		"🌸" : {
			"backgroundPosition" : "-8671",
			"type" : "image",
			"custom" : ""
		},
		"🌹" : {
			"backgroundPosition" : "-18647",
			"type" : "image",
			"custom" : ""
		},
		"🍀" : {
			"backgroundPosition" : "-24157",
			"type" : "image",
			"custom" : ""
		},
		"🍁" : {
			"backgroundPosition" : "-1566",
			"type" : "image",
			"custom" : ""
		},
		"🍂" : {
			"backgroundPosition" : "-17748",
			"type" : "image",
			"custom" : ""
		},
		"🍃" : {
			"backgroundPosition" : "-3277",
			"type" : "image",
			"custom" : ""
		},
		"🌺" : {
			"backgroundPosition" : "-6931",
			"type" : "image",
			"custom" : ""
		},
		"🌻" : {
			"backgroundPosition" : "-9918",
			"type" : "image",
			"custom" : ""
		},
		"🌼" : {
			"backgroundPosition" : "-1856",
			"type" : "image",
			"custom" : ""
		},
		"🌽" : {
			"backgroundPosition" : "-18676",
			"type" : "image",
			"custom" : ""
		},
		"🌾" : {
			"backgroundPosition" : "-23925",
			"type" : "image",
			"custom" : ""
		},
		"🌿" : {
			"backgroundPosition" : "-17371",
			"type" : "image",
			"custom" : ""
		},
		"☀" : {
			"backgroundPosition" : "-21228",
			"type" : "image",
			"custom" : ""
		},
		"🌈" : {
			"backgroundPosition" : "-8526",
			"type" : "image",
			"custom" : ""
		},
		"⛅" : {
			"backgroundPosition" : "-12122",
			"type" : "image",
			"custom" : ""
		},
		"☁" : {
			"backgroundPosition" : "-22098",
			"type" : "image",
			"custom" : ""
		},
		"🌁" : {
			"backgroundPosition" : "-2581",
			"type" : "image",
			"custom" : ""
		},
		"🌂" : {
			"backgroundPosition" : "-9251",
			"type" : "image",
			"custom" : ""
		},
		"☔" : {
			"backgroundPosition" : "-14935",
			"type" : "image",
			"custom" : ""
		},
		"💧" : {
			"backgroundPosition" : "-20735",
			"type" : "image",
			"custom" : ""
		},
		"⚡" : {
			"backgroundPosition" : "-21779",
			"type" : "image",
			"custom" : ""
		},
		"🌀" : {
			"backgroundPosition" : "-23606",
			"type" : "image",
			"custom" : ""
		},
		"❄" : {
			"backgroundPosition" : "-14239",
			"type" : "image",
			"custom" : ""
		},
		"⛄" : {
			"backgroundPosition" : "-12702",
			"type" : "image",
			"custom" : ""
		},
		"🌙" : {
			"backgroundPosition" : "-6757",
			"type" : "image",
			"custom" : ""
		},
		"🌞" : {
			"backgroundPosition" : "-17893",
			"type" : "image",
			"custom" : ""
		},
		"🌝" : {
			"backgroundPosition" : "-6641",
			"type" : "image",
			"custom" : ""
		},
		"🌚" : {
			"backgroundPosition" : "-23838",
			"type" : "image",
			"custom" : ""
		},
		"🌛" : {
			"backgroundPosition" : "-15109",
			"type" : "image",
			"custom" : ""
		},
		"🌜" : {
			"backgroundPosition" : "-12905",
			"type" : "image",
			"custom" : ""
		},
		"🌑" : {
			"backgroundPosition" : "-5945",
			"type" : "image",
			"custom" : ""
		},
		"🌒" : {
			"backgroundPosition" : "-5423",
			"type" : "image",
			"custom" : ""
		},
		"🌓" : {
			"backgroundPosition" : "-19024",
			"type" : "image",
			"custom" : ""
		},
		"🌔" : {
			"backgroundPosition" : "-11774",
			"type" : "image",
			"custom" : ""
		},
		"🌕" : {
			"backgroundPosition" : "-20764",
			"type" : "image",
			"custom" : ""
		},
		"🌖" : {
			"backgroundPosition" : "-17603",
			"type" : "image",
			"custom" : ""
		},
		"🌗" : {
			"backgroundPosition" : "-16211",
			"type" : "image",
			"custom" : ""
		},
		"🌘" : {
			"backgroundPosition" : "-11136",
			"type" : "image",
			"custom" : ""
		},
		"🎑" : {
			"backgroundPosition" : "-10295",
			"type" : "image",
			"custom" : ""
		},
		"🌄" : {
			"backgroundPosition" : "-23867",
			"type" : "image",
			"custom" : ""
		},
		"🌅" : {
			"backgroundPosition" : "-6786",
			"type" : "image",
			"custom" : ""
		},
		"🌇" : {
			"backgroundPosition" : "-1653",
			"type" : "image",
			"custom" : ""
		},
		"🌆" : {
			"backgroundPosition" : "-16501",
			"type" : "image",
			"custom" : ""
		},
		"🌃" : {
			"backgroundPosition" : "-261",
			"type" : "image",
			"custom" : ""
		},
		"🌌" : {
			"backgroundPosition" : "-9686",
			"type" : "image",
			"custom" : ""
		},
		"🌉" : {
			"backgroundPosition" : "-1450",
			"type" : "image",
			"custom" : ""
		},
		"🌊" : {
			"backgroundPosition" : "-15283",
			"type" : "image",
			"custom" : ""
		},
		"🌋" : {
			"backgroundPosition" : "-377",
			"type" : "image",
			"custom" : ""
		},
		"🌎" : {
			"backgroundPosition" : "-24360",
			"type" : "image",
			"custom" : ""
		},
		"🌏" : {
			"backgroundPosition" : "-1131",
			"type" : "image",
			"custom" : ""
		},
		"🌍" : {
			"backgroundPosition" : "-16733",
			"type" : "image",
			"custom" : ""
		},
		"🌐" : {
			"backgroundPosition" : "-4785",
			"type" : "image",
			"custom" : ""
		}
	}, {
		"🏠" : {
			"backgroundPosition" : "-14181",
			"type" : "image",
			"custom" : ""
		},
		"🏡" : {
			"backgroundPosition" : "-20532",
			"type" : "image",
			"custom" : ""
		},
		"🏢" : {
			"backgroundPosition" : "-1073",
			"type" : "image",
			"custom" : ""
		},
		"🏣" : {
			"backgroundPosition" : "-3016",
			"type" : "image",
			"custom" : ""
		},
		"🏤" : {
			"backgroundPosition" : "-20793",
			"type" : "image",
			"custom" : ""
		},
		"🏥" : {
			"backgroundPosition" : "-10005",
			"type" : "image",
			"custom" : ""
		},
		"🏦" : {
			"backgroundPosition" : "-14210",
			"type" : "image",
			"custom" : ""
		},
		"🏧" : {
			"backgroundPosition" : "-14819",
			"type" : "image",
			"custom" : ""
		},
		"🏨" : {
			"backgroundPosition" : "-20126",
			"type" : "image",
			"custom" : ""
		},
		"🏩" : {
			"backgroundPosition" : "-23809",
			"type" : "image",
			"custom" : ""
		},
		"🏪" : {
			"backgroundPosition" : "-13050",
			"type" : "image",
			"custom" : ""
		},
		"🏫" : {
			"backgroundPosition" : "-21634",
			"type" : "image",
			"custom" : ""
		},
		"⛪" : {
			"backgroundPosition" : "-2465",
			"type" : "image",
			"custom" : ""
		},
		"⛲" : {
			"backgroundPosition" : "-20909",
			"type" : "image",
			"custom" : ""
		},
		"🏬" : {
			"backgroundPosition" : "-23635",
			"type" : "image",
			"custom" : ""
		},
		"🏯" : {
			"backgroundPosition" : "-8410",
			"type" : "image",
			"custom" : ""
		},
		"🏰" : {
			"backgroundPosition" : "-20329",
			"type" : "image",
			"custom" : ""
		},
		"🏭" : {
			"backgroundPosition" : "-2494",
			"type" : "image",
			"custom" : ""
		},
		"🗻" : {
			"backgroundPosition" : "-22272",
			"type" : "image",
			"custom" : ""
		},
		"🗼" : {
			"backgroundPosition" : "-5481",
			"type" : "image",
			"custom" : ""
		},
		"🗽" : {
			"backgroundPosition" : "-16269",
			"type" : "image",
			"custom" : ""
		},
		"🗾" : {
			"backgroundPosition" : "-725",
			"type" : "image",
			"custom" : ""
		},
		"🗿" : {
			"backgroundPosition" : "-3422",
			"type" : "image",
			"custom" : ""
		},
		"⚓" : {
			"backgroundPosition" : "-3944",
			"type" : "image",
			"custom" : ""
		},
		"🏮" : {
			"backgroundPosition" : "-18850",
			"type" : "image",
			"custom" : ""
		},
		"💈" : {
			"backgroundPosition" : "-18792",
			"type" : "image",
			"custom" : ""
		},
		"🔧" : {
			"backgroundPosition" : "-6032",
			"type" : "image",
			"custom" : ""
		},
		"🔨" : {
			"backgroundPosition" : "-11194",
			"type" : "image",
			"custom" : ""
		},
		"🔩" : {
			"backgroundPosition" : "-12557",
			"type" : "image",
			"custom" : ""
		},
		"🚿" : {
			"backgroundPosition" : "-1479",
			"type" : "image",
			"custom" : ""
		},
		"🛁" : {
			"backgroundPosition" : "-19488",
			"type" : "image",
			"custom" : ""
		},
		"🛀" : {
			"backgroundPosition" : "-15341",
			"type" : "image",
			"custom" : ""
		},
		"🚽" : {
			"backgroundPosition" : "-9164",
			"type" : "image",
			"custom" : ""
		},
		"🚾" : {
			"backgroundPosition" : "-19227",
			"type" : "image",
			"custom" : ""
		},
		"🎽" : {
			"backgroundPosition" : "-2030",
			"type" : "image",
			"custom" : ""
		},
		"🎣" : {
			"backgroundPosition" : "-24708",
			"type" : "image",
			"custom" : ""
		},
		"🎱" : {
			"backgroundPosition" : "-16762",
			"type" : "image",
			"custom" : ""
		},
		"🎳" : {
			"backgroundPosition" : "-22678",
			"type" : "image",
			"custom" : ""
		},
		"⚾" : {
			"backgroundPosition" : "-11310",
			"type" : "image",
			"custom" : ""
		},
		"⛳" : {
			"backgroundPosition" : "-20097",
			"type" : "image",
			"custom" : ""
		},
		"🎾" : {
			"backgroundPosition" : "-7366",
			"type" : "image",
			"custom" : ""
		},
		"⚽" : {
			"backgroundPosition" : "-17313",
			"type" : "image",
			"custom" : ""
		},
		"🎿" : {
			"backgroundPosition" : "-9512",
			"type" : "image",
			"custom" : ""
		},
		"🏀" : {
			"backgroundPosition" : "-638",
			"type" : "image",
			"custom" : ""
		},
		"🏁" : {
			"backgroundPosition" : "-783",
			"type" : "image",
			"custom" : ""
		},
		"🏂" : {
			"backgroundPosition" : "-15950",
			"type" : "image",
			"custom" : ""
		},
		"🏃" : {
			"backgroundPosition" : "-24418",
			"type" : "image",
			"custom" : ""
		},
		"🏄" : {
			"backgroundPosition" : "-20996",
			"type" : "image",
			"custom" : ""
		},
		"🏆" : {
			"backgroundPosition" : "-19401",
			"type" : "image",
			"custom" : ""
		},
		"🏇" : {
			"backgroundPosition" : "-20213",
			"type" : "image",
			"custom" : ""
		},
		"🐎" : {
			"backgroundPosition" : "-19894",
			"type" : "image",
			"custom" : ""
		},
		"🏈" : {
			"backgroundPosition" : "-6583",
			"type" : "image",
			"custom" : ""
		},
		"🏉" : {
			"backgroundPosition" : "-24273",
			"type" : "image",
			"custom" : ""
		},
		"🏊" : {
			"backgroundPosition" : "-1508",
			"type" : "image",
			"custom" : ""
		},
		"🚂" : {
			"backgroundPosition" : "-9193",
			"type" : "image",
			"custom" : ""
		},
		"🚃" : {
			"backgroundPosition" : "-16646",
			"type" : "image",
			"custom" : ""
		},
		"🚄" : {
			"backgroundPosition" : "-21141",
			"type" : "image",
			"custom" : ""
		},
		"🚅" : {
			"backgroundPosition" : "-23316",
			"type" : "image",
			"custom" : ""
		},
		"🚆" : {
			"backgroundPosition" : "-5191",
			"type" : "image",
			"custom" : ""
		},
		"🚇" : {
			"backgroundPosition" : "-2958",
			"type" : "image",
			"custom" : ""
		},
		"Ⓜ" : {
			"backgroundPosition" : "-15196",
			"type" : "image",
			"custom" : ""
		},
		"🚈" : {
			"backgroundPosition" : "-13021",
			"type" : "image",
			"custom" : ""
		},
		"🚊" : {
			"backgroundPosition" : "-5974",
			"type" : "image",
			"custom" : ""
		},
		"🚋" : {
			"backgroundPosition" : "-24563",
			"type" : "image",
			"custom" : ""
		},
		"🚌" : {
			"backgroundPosition" : "-15718",
			"type" : "image",
			"custom" : ""
		},
		"🚍" : {
			"backgroundPosition" : "-10034",
			"type" : "image",
			"custom" : ""
		},
		"🚎" : {
			"backgroundPosition" : "-2436",
			"type" : "image",
			"custom" : ""
		},
		"🚏" : {
			"backgroundPosition" : "-5133",
			"type" : "image",
			"custom" : ""
		},
		"🚐" : {
			"backgroundPosition" : "-23577",
			"type" : "image",
			"custom" : ""
		},
		"🚑" : {
			"backgroundPosition" : "-5162",
			"type" : "image",
			"custom" : ""
		},
		"🚒" : {
			"backgroundPosition" : "-17835",
			"type" : "image",
			"custom" : ""
		},
		"🚓" : {
			"backgroundPosition" : "-14761",
			"type" : "image",
			"custom" : ""
		},
		"🚔" : {
			"backgroundPosition" : "-5452",
			"type" : "image",
			"custom" : ""
		},
		"🚕" : {
			"backgroundPosition" : "-14355",
			"type" : "image",
			"custom" : ""
		},
		"🚖" : {
			"backgroundPosition" : "-22243",
			"type" : "image",
			"custom" : ""
		},
		"🚗" : {
			"backgroundPosition" : "-4205",
			"type" : "image",
			"custom" : ""
		},
		"🚘" : {
			"backgroundPosition" : "-6061",
			"type" : "image",
			"custom" : ""
		},
		"🚙" : {
			"backgroundPosition" : "-1537",
			"type" : "image",
			"custom" : ""
		},
		"🚚" : {
			"backgroundPosition" : "-9135",
			"type" : "image",
			"custom" : ""
		},
		"🚛" : {
			"backgroundPosition" : "-20242",
			"type" : "image",
			"custom" : ""
		},
		"🚜" : {
			"backgroundPosition" : "-3683",
			"type" : "image",
			"custom" : ""
		},
		"🚝" : {
			"backgroundPosition" : "-6728",
			"type" : "image",
			"custom" : ""
		},
		"🚞" : {
			"backgroundPosition" : "-4524",
			"type" : "image",
			"custom" : ""
		},
		"🚟" : {
			"backgroundPosition" : "-2146",
			"type" : "image",
			"custom" : ""
		},
		"🚠" : {
			"backgroundPosition" : "-21315",
			"type" : "image",
			"custom" : ""
		},
		"🚡" : {
			"backgroundPosition" : "-10701",
			"type" : "image",
			"custom" : ""
		},
		"🚢" : {
			"backgroundPosition" : "-19662",
			"type" : "image",
			"custom" : ""
		},
		"🚣" : {
			"backgroundPosition" : "-14007",
			"type" : "image",
			"custom" : ""
		},
		"🚁" : {
			"backgroundPosition" : "-3219",
			"type" : "image",
			"custom" : ""
		},
		"✈" : {
			"backgroundPosition" : "-7047",
			"type" : "image",
			"custom" : ""
		},
		"🛂" : {
			"backgroundPosition" : "-5510",
			"type" : "image",
			"custom" : ""
		},
		"🛃" : {
			"backgroundPosition" : "-10353",
			"type" : "image",
			"custom" : ""
		},
		"🛄" : {
			"backgroundPosition" : "-14674",
			"type" : "image",
			"custom" : ""
		},
		"🛅" : {
			"backgroundPosition" : "-10266",
			"type" : "image",
			"custom" : ""
		},
		"⛵" : {
			"backgroundPosition" : "-19981",
			"type" : "image",
			"custom" : ""
		},
		"🚲" : {
			"backgroundPosition" : "-22185",
			"type" : "image",
			"custom" : ""
		},
		"🚳" : {
			"backgroundPosition" : "-15022",
			"type" : "image",
			"custom" : ""
		},
		"🚴" : {
			"backgroundPosition" : "-20010",
			"type" : "image",
			"custom" : ""
		},
		"🚵" : {
			"backgroundPosition" : "-21750",
			"type" : "image",
			"custom" : ""
		},
		"🚷" : {
			"backgroundPosition" : "-24476",
			"type" : "image",
			"custom" : ""
		},
		"🚸" : {
			"backgroundPosition" : "-4553",
			"type" : "image",
			"custom" : ""
		},
		"🚉" : {
			"backgroundPosition" : "-7076",
			"type" : "image",
			"custom" : ""
		},
		"🚀" : {
			"backgroundPosition" : "-4408",
			"type" : "image",
			"custom" : ""
		},
		"🚤" : {
			"backgroundPosition" : "-15805",
			"type" : "image",
			"custom" : ""
		},
		"🚶" : {
			"backgroundPosition" : "-2407",
			"type" : "image",
			"custom" : ""
		},
		"⛽" : {
			"backgroundPosition" : "-841",
			"type" : "image",
			"custom" : ""
		},
		"🅿" : {
			"backgroundPosition" : "-4901",
			"type" : "image",
			"custom" : ""
		},
		"🚥" : {
			"backgroundPosition" : "-11020",
			"type" : "image",
			"custom" : ""
		},
		"🚦" : {
			"backgroundPosition" : "-19459",
			"type" : "image",
			"custom" : ""
		},
		"🚧" : {
			"backgroundPosition" : "-12586",
			"type" : "image",
			"custom" : ""
		},
		"🚨" : {
			"backgroundPosition" : "-3567",
			"type" : "image",
			"custom" : ""
		},
		"♨" : {
			"backgroundPosition" : "-7337",
			"type" : "image",
			"custom" : ""
		},
		"💌" : {
			"backgroundPosition" : "-6264",
			"type" : "image",
			"custom" : ""
		},
		"💍" : {
			"backgroundPosition" : "-20387",
			"type" : "image",
			"custom" : ""
		},
		"💎" : {
			"backgroundPosition" : "-24737",
			"type" : "image",
			"custom" : ""
		},
		"💐" : {
			"backgroundPosition" : "-23345",
			"type" : "image",
			"custom" : ""
		},
		"💒" : {
			"backgroundPosition" : "-19807",
			"type" : "image",
			"custom" : ""
		},
		"󾓥" : {
			"backgroundPosition" : "-14645",
			"type" : "image",
			"custom" : ""
		},
		"󾓦" : {
			"backgroundPosition" : "-2175",
			"type" : "image",
			"custom" : ""
		},
		"󾓧" : {
			"backgroundPosition" : "-10817",
			"type" : "image",
			"custom" : ""
		},
		"󾓨" : {
			"backgroundPosition" : "-1740",
			"type" : "image",
			"custom" : ""
		},
		"󾓩" : {
			"backgroundPosition" : "-18734",
			"type" : "image",
			"custom" : ""
		},
		"󾓪" : {
			"backgroundPosition" : "-4089",
			"type" : "image",
			"custom" : ""
		},
		"󾓫" : {
			"backgroundPosition" : "-24795",
			"type" : "image",
			"custom" : ""
		},
		"󾓬" : {
			"backgroundPosition" : "-24679",
			"type" : "image",
			"custom" : ""
		},
		"󾓭" : {
			"backgroundPosition" : "-14906",
			"type" : "image",
			"custom" : ""
		},
		"󾓮" : {
			"backgroundPosition" : "-16095",
			"type" : "image",
			"custom" : ""
		}
	}, {
		"🔝" : {
			"backgroundPosition" : "-22330",
			"type" : "image",
			"custom" : ""
		},
		"🔙" : {
			"backgroundPosition" : "-5568",
			"type" : "image",
			"custom" : ""
		},
		"🔛" : {
			"backgroundPosition" : "-18589",
			"type" : "image",
			"custom" : ""
		},
		"🔜" : {
			"backgroundPosition" : "-10933",
			"type" : "image",
			"custom" : ""
		},
		"🔚" : {
			"backgroundPosition" : "-18009",
			"type" : "image",
			"custom" : ""
		},
		"⏳" : {
			"backgroundPosition" : "-18821",
			"type" : "image",
			"custom" : ""
		},
		"⌛" : {
			"backgroundPosition" : "-8613",
			"type" : "image",
			"custom" : ""
		},
		"⏰" : {
			"backgroundPosition" : "-4756",
			"type" : "image",
			"custom" : ""
		},
		"♈" : {
			"backgroundPosition" : "-6351",
			"type" : "image",
			"custom" : ""
		},
		"♉" : {
			"backgroundPosition" : "-20619",
			"type" : "image",
			"custom" : ""
		},
		"♊" : {
			"backgroundPosition" : "-10991",
			"type" : "image",
			"custom" : ""
		},
		"♋" : {
			"backgroundPosition" : "-16298",
			"type" : "image",
			"custom" : ""
		},
		"♌" : {
			"backgroundPosition" : "-20822",
			"type" : "image",
			"custom" : ""
		},
		"♍" : {
			"backgroundPosition" : "-11165",
			"type" : "image",
			"custom" : ""
		},
		"♎" : {
			"backgroundPosition" : "-1827",
			"type" : "image",
			"custom" : ""
		},
		"♏" : {
			"backgroundPosition" : "-7946",
			"type" : "image",
			"custom" : ""
		},
		"♐" : {
			"backgroundPosition" : "-7656",
			"type" : "image",
			"custom" : ""
		},
		"♑" : {
			"backgroundPosition" : "-6293",
			"type" : "image",
			"custom" : ""
		},
		"♒" : {
			"backgroundPosition" : "-4234",
			"type" : "image",
			"custom" : ""
		},
		"♓" : {
			"backgroundPosition" : "-11600",
			"type" : "image",
			"custom" : ""
		},
		"⛎" : {
			"backgroundPosition" : "-7424",
			"type" : "image",
			"custom" : ""
		},
		"🔱" : {
			"backgroundPosition" : "-1218",
			"type" : "image",
			"custom" : ""
		},
		"🔯" : {
			"backgroundPosition" : "-15863",
			"type" : "image",
			"custom" : ""
		},
		"🚻" : {
			"backgroundPosition" : "-10440",
			"type" : "image",
			"custom" : ""
		},
		"🚮" : {
			"backgroundPosition" : "-5858",
			"type" : "image",
			"custom" : ""
		},
		"🚯" : {
			"backgroundPosition" : "-2610",
			"type" : "image",
			"custom" : ""
		},
		"🚰" : {
			"backgroundPosition" : "-21924",
			"type" : "image",
			"custom" : ""
		},
		"🚱" : {
			"backgroundPosition" : "-14471",
			"type" : "image",
			"custom" : ""
		},
		"🅰" : {
			"backgroundPosition" : "-23954",
			"type" : "image",
			"custom" : ""
		},
		"🅱" : {
			"backgroundPosition" : "-6119",
			"type" : "image",
			"custom" : ""
		},
		"🆎" : {
			"backgroundPosition" : "-18067",
			"type" : "image",
			"custom" : ""
		},
		"🅾" : {
			"backgroundPosition" : "-16907",
			"type" : "image",
			"custom" : ""
		},
		"💮" : {
			"backgroundPosition" : "-15051",
			"type" : "image",
			"custom" : ""
		},
		"💯" : {
			"backgroundPosition" : "-8961",
			"type" : "image",
			"custom" : ""
		},
		"🔠" : {
			"backgroundPosition" : "-2813",
			"type" : "image",
			"custom" : ""
		},
		"🔡" : {
			"backgroundPosition" : "-19836",
			"type" : "image",
			"custom" : ""
		},
		"🔢" : {
			"backgroundPosition" : "-20967",
			"type" : "image",
			"custom" : ""
		},
		"🔣" : {
			"backgroundPosition" : "-21576",
			"type" : "image",
			"custom" : ""
		},
		"🔤" : {
			"backgroundPosition" : "-19575",
			"type" : "image",
			"custom" : ""
		},
		"➿" : {
			"backgroundPosition" : "-957",
			"type" : "image",
			"custom" : ""
		},
		"📶" : {
			"backgroundPosition" : "-11078",
			"type" : "image",
			"custom" : ""
		},
		"📳" : {
			"backgroundPosition" : "-928",
			"type" : "image",
			"custom" : ""
		},
		"📴" : {
			"backgroundPosition" : "-3480",
			"type" : "image",
			"custom" : ""
		},
		"📵" : {
			"backgroundPosition" : "-4930",
			"type" : "image",
			"custom" : ""
		},
		"🚹" : {
			"backgroundPosition" : "-4611",
			"type" : "image",
			"custom" : ""
		},
		"🚺" : {
			"backgroundPosition" : "-8091",
			"type" : "image",
			"custom" : ""
		},
		"🚼" : {
			"backgroundPosition" : "-15689",
			"type" : "image",
			"custom" : ""
		},
		"♿" : {
			"backgroundPosition" : "-24186",
			"type" : "image",
			"custom" : ""
		},
		"♻" : {
			"backgroundPosition" : "-6815",
			"type" : "image",
			"custom" : ""
		},
		"🚭" : {
			"backgroundPosition" : "-15138",
			"type" : "image",
			"custom" : ""
		},
		"🚩" : {
			"backgroundPosition" : "-8381",
			"type" : "image",
			"custom" : ""
		},
		"⚠" : {
			"backgroundPosition" : "-9773",
			"type" : "image",
			"custom" : ""
		},
		"🈁" : {
			"backgroundPosition" : "-4959",
			"type" : "image",
			"custom" : ""
		},
		"🔞" : {
			"backgroundPosition" : "-18879",
			"type" : "image",
			"custom" : ""
		},
		"⛔" : {
			"backgroundPosition" : "-116",
			"type" : "image",
			"custom" : ""
		},
		"🆒" : {
			"backgroundPosition" : "-9570",
			"type" : "image",
			"custom" : ""
		},
		"🆗" : {
			"backgroundPosition" : "-22794",
			"type" : "image",
			"custom" : ""
		},
		"🆕" : {
			"backgroundPosition" : "-22040",
			"type" : "image",
			"custom" : ""
		},
		"🆘" : {
			"backgroundPosition" : "-2262",
			"type" : "image",
			"custom" : ""
		},
		"🆙" : {
			"backgroundPosition" : "-14558",
			"type" : "image",
			"custom" : ""
		},
		"🆓" : {
			"backgroundPosition" : "-10208",
			"type" : "image",
			"custom" : ""
		},
		"🆖" : {
			"backgroundPosition" : "-12644",
			"type" : "image",
			"custom" : ""
		},
		"🆚" : {
			"backgroundPosition" : "-2929",
			"type" : "image",
			"custom" : ""
		},
		"🈲" : {
			"backgroundPosition" : "-2233",
			"type" : "image",
			"custom" : ""
		},
		"🈳" : {
			"backgroundPosition" : "-10527",
			"type" : "image",
			"custom" : ""
		},
		"🈴" : {
			"backgroundPosition" : "-12209",
			"type" : "image",
			"custom" : ""
		},
		"🈵" : {
			"backgroundPosition" : "-12354",
			"type" : "image",
			"custom" : ""
		},
		"🈶" : {
			"backgroundPosition" : "-9599",
			"type" : "image",
			"custom" : ""
		},
		"🈷" : {
			"backgroundPosition" : "-20300",
			"type" : "image",
			"custom" : ""
		},
		"🈸" : {
			"backgroundPosition" : "-9802",
			"type" : "image",
			"custom" : ""
		},
		"🈹" : {
			"backgroundPosition" : "-5046",
			"type" : "image",
			"custom" : ""
		},
		"🈂" : {
			"backgroundPosition" : "-18328",
			"type" : "image",
			"custom" : ""
		},
		"🈺" : {
			"backgroundPosition" : "-1595",
			"type" : "image",
			"custom" : ""
		},
		"🉐" : {
			"backgroundPosition" : "-5017",
			"type" : "image",
			"custom" : ""
		},
		"🉑" : {
			"backgroundPosition" : "-17342",
			"type" : "image",
			"custom" : ""
		},
		"㊙" : {
			"backgroundPosition" : "-493",
			"type" : "image",
			"custom" : ""
		},
		"®" : {
			"backgroundPosition" : "-23693",
			"type" : "image",
			"custom" : ""
		},
		"©" : {
			"backgroundPosition" : "-16153",
			"type" : "image",
			"custom" : ""
		},
		"™" : {
			"backgroundPosition" : "-9222",
			"type" : "image",
			"custom" : ""
		},
		"🈚" : {
			"backgroundPosition" : "-9628",
			"type" : "image",
			"custom" : ""
		},
		"🈯" : {
			"backgroundPosition" : "-19314",
			"type" : "image",
			"custom" : ""
		},
		"㊗" : {
			"backgroundPosition" : "-6496",
			"type" : "image",
			"custom" : ""
		},
		"⭕" : {
			"backgroundPosition" : "-17168",
			"type" : "image",
			"custom" : ""
		},
		"❌" : {
			"backgroundPosition" : "-19111",
			"type" : "image",
			"custom" : ""
		},
		"❎" : {
			"backgroundPosition" : "-23084",
			"type" : "image",
			"custom" : ""
		},
		"ℹ" : {
			"backgroundPosition" : "-24041",
			"type" : "image",
			"custom" : ""
		},
		"🚫" : {
			"backgroundPosition" : "-13369",
			"type" : "image",
			"custom" : ""
		},
		"✅" : {
			"backgroundPosition" : "-16327",
			"type" : "image",
			"custom" : ""
		},
		"✔" : {
			"backgroundPosition" : "-6670",
			"type" : "image",
			"custom" : ""
		},
		"🔗" : {
			"backgroundPosition" : "-19372",
			"type" : "image",
			"custom" : ""
		},
		"✴" : {
			"backgroundPosition" : "-3973",
			"type" : "image",
			"custom" : ""
		},
		"✳" : {
			"backgroundPosition" : "-22765",
			"type" : "image",
			"custom" : ""
		},
		"➕" : {
			"backgroundPosition" : "-19546",
			"type" : "image",
			"custom" : ""
		},
		"➖" : {
			"backgroundPosition" : "-17284",
			"type" : "image",
			"custom" : ""
		},
		"✖" : {
			"backgroundPosition" : "-17226",
			"type" : "image",
			"custom" : ""
		},
		"➗" : {
			"backgroundPosition" : "-8990",
			"type" : "image",
			"custom" : ""
		},
		"💠" : {
			"backgroundPosition" : "-1885",
			"type" : "image",
			"custom" : ""
		},
		"💡" : {
			"backgroundPosition" : "-15631",
			"type" : "image",
			"custom" : ""
		},
		"💤" : {
			"backgroundPosition" : "-14442",
			"type" : "image",
			"custom" : ""
		},
		"💢" : {
			"backgroundPosition" : "-9860",
			"type" : "image",
			"custom" : ""
		},
		"🔥" : {
			"backgroundPosition" : "-13949",
			"type" : "image",
			"custom" : ""
		},
		"💥" : {
			"backgroundPosition" : "-23983",
			"type" : "image",
			"custom" : ""
		},
		"💨" : {
			"backgroundPosition" : "-551",
			"type" : "image",
			"custom" : ""
		},
		"💦" : {
			"backgroundPosition" : "-3248",
			"type" : "image",
			"custom" : ""
		},
		"💫" : {
			"backgroundPosition" : "-3828",
			"type" : "image",
			"custom" : ""
		},
		"🕛" : {
			"backgroundPosition" : "-11513",
			"type" : "image",
			"custom" : ""
		},
		"🕧" : {
			"backgroundPosition" : "-23519",
			"type" : "image",
			"custom" : ""
		},
		"🕐" : {
			"backgroundPosition" : "-14616",
			"type" : "image",
			"custom" : ""
		},
		"🕜" : {
			"backgroundPosition" : "-10179",
			"type" : "image",
			"custom" : ""
		},
		"🕑" : {
			"backgroundPosition" : "-3857",
			"type" : "image",
			"custom" : ""
		},
		"🕝" : {
			"backgroundPosition" : "-4118",
			"type" : "image",
			"custom" : ""
		},
		"🕒" : {
			"backgroundPosition" : "-18444",
			"type" : "image",
			"custom" : ""
		},
		"🕞" : {
			"backgroundPosition" : "-1276",
			"type" : "image",
			"custom" : ""
		},
		"🕓" : {
			"backgroundPosition" : "-6844",
			"type" : "image",
			"custom" : ""
		},
		"🕟" : {
			"backgroundPosition" : "-2697",
			"type" : "image",
			"custom" : ""
		},
		"🕔" : {
			"backgroundPosition" : "-10875",
			"type" : "image",
			"custom" : ""
		},
		"🕠" : {
			"backgroundPosition" : "-15457",
			"type" : "image",
			"custom" : ""
		},
		"🕕" : {
			"backgroundPosition" : "-7105",
			"type" : "image",
			"custom" : ""
		},
		"🕡" : {
			"backgroundPosition" : "-15921",
			"type" : "image",
			"custom" : ""
		},
		"🕖" : {
			"backgroundPosition" : "-24911",
			"type" : "image",
			"custom" : ""
		},
		"🕢" : {
			"backgroundPosition" : "-23664",
			"type" : "image",
			"custom" : ""
		},
		"🕗" : {
			"backgroundPosition" : "-22736",
			"type" : "image",
			"custom" : ""
		},
		"🕣" : {
			"backgroundPosition" : "-16588",
			"type" : "image",
			"custom" : ""
		},
		"🕘" : {
			"backgroundPosition" : "-16617",
			"type" : "image",
			"custom" : ""
		},
		"🕤" : {
			"backgroundPosition" : "-13659",
			"type" : "image",
			"custom" : ""
		},
		"🕙" : {
			"backgroundPosition" : "-18125",
			"type" : "image",
			"custom" : ""
		},
		"🕥" : {
			"backgroundPosition" : "-20155",
			"type" : "image",
			"custom" : ""
		},
		"🕚" : {
			"backgroundPosition" : "-15428",
			"type" : "image",
			"custom" : ""
		},
		"🕦" : {
			"backgroundPosition" : "-14993",
			"type" : "image",
			"custom" : ""
		},
		"↕" : {
			"backgroundPosition" : "-16414",
			"type" : "image",
			"custom" : ""
		},
		"⬆" : {
			"backgroundPosition" : "-8439",
			"type" : "image",
			"custom" : ""
		},
		"↗" : {
			"backgroundPosition" : "-8555",
			"type" : "image",
			"custom" : ""
		},
		"➡" : {
			"backgroundPosition" : "-11223",
			"type" : "image",
			"custom" : ""
		},
		"↘" : {
			"backgroundPosition" : "-21808",
			"type" : "image",
			"custom" : ""
		},
		"⬇" : {
			"backgroundPosition" : "-22301",
			"type" : "image",
			"custom" : ""
		},
		"↙" : {
			"backgroundPosition" : "-15892",
			"type" : "image",
			"custom" : ""
		},
		"⬅" : {
			"backgroundPosition" : "-9048",
			"type" : "image",
			"custom" : ""
		},
		"↖" : {
			"backgroundPosition" : "-24331",
			"type" : "image",
			"custom" : ""
		},
		"↔" : {
			"backgroundPosition" : "-8700",
			"type" : "image",
			"custom" : ""
		},
		"⤴" : {
			"backgroundPosition" : "-3741",
			"type" : "image",
			"custom" : ""
		},
		"⤵" : {
			"backgroundPosition" : "-16791",
			"type" : "image",
			"custom" : ""
		},
		"⏪" : {
			"backgroundPosition" : "-2117",
			"type" : "image",
			"custom" : ""
		},
		"⏫" : {
			"backgroundPosition" : "-18038",
			"type" : "image",
			"custom" : ""
		},
		"⏬" : {
			"backgroundPosition" : "-3625",
			"type" : "image",
			"custom" : ""
		},
		"⏩" : {
			"backgroundPosition" : "-8265",
			"type" : "image",
			"custom" : ""
		},
		"◀" : {
			"backgroundPosition" : "-3074",
			"type" : "image",
			"custom" : ""
		},
		"▶" : {
			"backgroundPosition" : "-8468",
			"type" : "image",
			"custom" : ""
		},
		"🔽" : {
			"backgroundPosition" : "-13891",
			"type" : "image",
			"custom" : ""
		},
		"🔼" : {
			"backgroundPosition" : "-12847",
			"type" : "image",
			"custom" : ""
		},
		"❇" : {
			"backgroundPosition" : "-12325",
			"type" : "image",
			"custom" : ""
		},
		"✨" : {
			"backgroundPosition" : "-19778",
			"type" : "image",
			"custom" : ""
		},
		"🔴" : {
			"backgroundPosition" : "-12673",
			"type" : "image",
			"custom" : ""
		},
		"🔵" : {
			"backgroundPosition" : "-18966",
			"type" : "image",
			"custom" : ""
		},
		"⚪" : {
			"backgroundPosition" : "-12470",
			"type" : "image",
			"custom" : ""
		},
		"⚫" : {
			"backgroundPosition" : "-13427",
			"type" : "image",
			"custom" : ""
		},
		"🔳" : {
			"backgroundPosition" : "-18705",
			"type" : "image",
			"custom" : ""
		},
		"🔲" : {
			"backgroundPosition" : "-13514",
			"type" : "image",
			"custom" : ""
		},
		"⭐" : {
			"backgroundPosition" : "-13108",
			"type" : "image",
			"custom" : ""
		},
		"🌟" : {
			"backgroundPosition" : "-8758",
			"type" : "image",
			"custom" : ""
		},
		"🌠" : {
			"backgroundPosition" : "-18299",
			"type" : "image",
			"custom" : ""
		},
		"▫" : {
			"backgroundPosition" : "-14326",
			"type" : "image",
			"custom" : ""
		},
		"▪" : {
			"backgroundPosition" : "-7134",
			"type" : "image",
			"custom" : ""
		},
		"◽" : {
			"backgroundPosition" : "-6554",
			"type" : "image",
			"custom" : ""
		},
		"◾" : {
			"backgroundPosition" : "-13862",
			"type" : "image",
			"custom" : ""
		},
		"◻" : {
			"backgroundPosition" : "-5336",
			"type" : "image",
			"custom" : ""
		},
		"◼" : {
			"backgroundPosition" : "-13456",
			"type" : "image",
			"custom" : ""
		},
		"⬜" : {
			"backgroundPosition" : "-18270",
			"type" : "image",
			"custom" : ""
		},
		"⬛" : {
			"backgroundPosition" : "-22214",
			"type" : "image",
			"custom" : ""
		},
		"🔸" : {
			"backgroundPosition" : "-20677",
			"type" : "image",
			"custom" : ""
		},
		"🔹" : {
			"backgroundPosition" : "-18908",
			"type" : "image",
			"custom" : ""
		},
		"🔶" : {
			"backgroundPosition" : "-11368",
			"type" : "image",
			"custom" : ""
		},
		"🔷" : {
			"backgroundPosition" : "-16182",
			"type" : "image",
			"custom" : ""
		},
		"🔺" : {
			"backgroundPosition" : "-5713",
			"type" : "image",
			"custom" : ""
		},
		"🔻" : {
			"backgroundPosition" : "-580",
			"type" : "image",
			"custom" : ""
		},
		"🔟" : {
			"backgroundPosition" : "-16356",
			"type" : "image",
			"custom" : ""
		},
		"⃣" : {
			"backgroundPosition" : "-2871",
			"type" : "image",
			"custom" : ""
		},
		"❔" : {
			"backgroundPosition" : "-2059",
			"type" : "image",
			"custom" : ""
		},
		"❓" : {
			"backgroundPosition" : "-10672",
			"type" : "image",
			"custom" : ""
		},
		"❕" : {
			"backgroundPosition" : "-4350",
			"type" : "image",
			"custom" : ""
		},
		"❗" : {
			"backgroundPosition" : "-9454",
			"type" : "image",
			"custom" : ""
		},
		"‼" : {
			"backgroundPosition" : "-11687",
			"type" : "image",
			"custom" : ""
		},
		"⁉" : {
			"backgroundPosition" : "-1421",
			"type" : "image",
			"custom" : ""
		},
		"〰" : {
			"backgroundPosition" : "-8062",
			"type" : "image",
			"custom" : ""
		},
		"➰" : {
			"backgroundPosition" : "-2987",
			"type" : "image",
			"custom" : ""
		},
		"♠" : {
			"backgroundPosition" : "-14123",
			"type" : "image",
			"custom" : ""
		},
		"♥" : {
			"backgroundPosition" : "-17661",
			"type" : "image",
			"custom" : ""
		},
		"♣" : {
			"backgroundPosition" : "-22852",
			"type" : "image",
			"custom" : ""
		},
		"♦" : {
			"backgroundPosition" : "-24882",
			"type" : "image",
			"custom" : ""
		},
		"🆔" : {
			"backgroundPosition" : "-667",
			"type" : "image",
			"custom" : ""
		},
		"🔑" : {
			"backgroundPosition" : "-22417",
			"type" : "image",
			"custom" : ""
		},
		"↩" : {
			"backgroundPosition" : "-16559",
			"type" : "image",
			"custom" : ""
		},
		"🆑" : {
			"backgroundPosition" : "-21547",
			"type" : "image",
			"custom" : ""
		},
		"🔍" : {
			"backgroundPosition" : "-290",
			"type" : "image",
			"custom" : ""
		},
		"🔒" : {
			"backgroundPosition" : "-22533",
			"type" : "image",
			"custom" : ""
		},
		"🔓" : {
			"backgroundPosition" : "-8033",
			"type" : "image",
			"custom" : ""
		},
		"↪" : {
			"backgroundPosition" : "-5307",
			"type" : "image",
			"custom" : ""
		},
		"🔐" : {
			"backgroundPosition" : "-7859",
			"type" : "image",
			"custom" : ""
		},
		"☑" : {
			"backgroundPosition" : "-9657",
			"type" : "image",
			"custom" : ""
		},
		"🔘" : {
			"backgroundPosition" : "-13195",
			"type" : "image",
			"custom" : ""
		},
		"🔎" : {
			"backgroundPosition" : "-348",
			"type" : "image",
			"custom" : ""
		},
		"🔖" : {
			"backgroundPosition" : "-4640",
			"type" : "image",
			"custom" : ""
		},
		"🔏" : {
			"backgroundPosition" : "-18357",
			"type" : "image",
			"custom" : ""
		},
		"🔃" : {
			"backgroundPosition" : "-5539",
			"type" : "image",
			"custom" : ""
		},
		"🔀" : {
			"backgroundPosition" : "-3509",
			"type" : "image",
			"custom" : ""
		},
		"🔁" : {
			"backgroundPosition" : "-4031",
			"type" : "image",
			"custom" : ""
		},
		"🔂" : {
			"backgroundPosition" : "-10469",
			"type" : "image",
			"custom" : ""
		},
		"🔄" : {
			"backgroundPosition" : "-8845",
			"type" : "image",
			"custom" : ""
		},
		"📧" : {
			"backgroundPosition" : "-18560",
			"type" : "image",
			"custom" : ""
		},
		"🔅" : {
			"backgroundPosition" : "-22649",
			"type" : "image",
			"custom" : ""
		},
		"🔆" : {
			"backgroundPosition" : "-20184",
			"type" : "image",
			"custom" : ""
		},
		"🔇" : {
			"backgroundPosition" : "-5075",
			"type" : "image",
			"custom" : ""
		},
		"🔈" : {
			"backgroundPosition" : "-5220",
			"type" : "image",
			"custom" : ""
		},
		"🔉" : {
			"backgroundPosition" : "-10092",
			"type" : "image",
			"custom" : ""
		},
		"🔊" : {
			"backgroundPosition" : "-23287",
			"type" : "image",
			"custom" : ""
		}
	} ];
	localStorage["json"] = JSON.stringify(emoticons);
	var css = [":not(button)>[data-emo]", ""];
	for (var l in emoticons) {
		for (var e in emoticons[l]) {
			if (emoticons[l][e].type == "image") {
				css[0] += ":not([data-emo=\""+e+"\"])";
			}
			else {
				css[1] += ":not(button)>[data-emo=\""+e+"\"]:after{content:\""+String((emoticons[l][e].type == "custom")?(emoticons[l][e].custom):(e)).replace(/\"/g, "\\\"")+"\";display:inline-block;}\n";
			}
		}
	}
	css[0] += ">div{display:none!important;}";
	var fullCSSStr = css.join("\n");
	localStorage["css"] = fullCSSStr;
	chrome.runtime.sendMessage({type: "newOptions", data: {css: fullCSSStr}});
}