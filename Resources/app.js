// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title: 'Sports News',
    backgroundColor:'FFFF00'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Sports News',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'000000',
	text:'Now Or Never: The Lakers Road Back Glory',
	font:{fontSize:25,fontFamily:'Geeza Pro'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Score Board',
    backgroundColor:'660066'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Score Board',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'FFFF00',
	text:'Lakers 118, Celtics 111',
	font:{fontSize:25,fontFamily:'Geeza Pro'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
