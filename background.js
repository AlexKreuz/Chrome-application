chrome.browserAction.onClicked.addListener (function () {setTimeout (function () {chrome.notifications.create("msg", {type: "basic",iconUrl: "Up.png",title: "Напоминалка",	message: "Пора делать зарядку!"},
 function () {setTimeout (function () {chrome.notifications.clear("msg"); 	}, 10000)});
},5000)});


