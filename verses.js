$(document).ready(function () {
			
var cookie1 = $.cookie("cookie1");
var cookie2 = $.cookie("cookie2");
var cookie3 = $.cookie("cookie3");
var cookie4 = $.cookie("cookie4");
var cookie5 = $.cookie("cookie5");
var cookie6 = $.cookie("cookie6");
var cookie7 = $.cookie("cookie7");
var cookie8 = $.cookie("cookie8");
var cookie9 = $.cookie("cookie9");
var cookie10 = $.cookie("cookie10");
var cookie11 = $.cookie("cookie11");
var cookie12 = $.cookie("cookie12");
var cookie13 = $.cookie("cookie13");
var cookie14 = $.cookie("cookie14");
var cookie15 = $.cookie("cookie15");
var cookie16 = $.cookie("cookie16");
var cookie17 = $.cookie("cookie17");
var cookie18 = $.cookie("cookie18");
var cookie19 = $.cookie("cookie19");
var cookie20 = $.cookie("cookie20");
var cookie21 = $.cookie("cookie21");
var cookie22 = $.cookie("cookie22");
var cookie23 = $.cookie("cookie23");
var cookie24 = $.cookie("cookie24");
var cookie25 = $.cookie("cookie25");
var cookie26 = $.cookie("cookie26");
var cookie27 = $.cookie("cookie27");
var cookie28 = $.cookie("cookie28");
var cookie29 = $.cookie("cookie29");
var cookie30 = $.cookie("cookie30");
var cookie31 = $.cookie("cookie31");
var cookie32 = $.cookie("cookie32");
var cookie33 = $.cookie("cookie33");
var cookie34 = $.cookie("cookie34");
var cookie35 = $.cookie("cookie35");
var cookie36 = $.cookie("cookie36");
var cookie37 = $.cookie("cookie37");
var cookie38 = $.cookie("cookie38");
var cookie39 = $.cookie("cookie39");
var cookie40 = $.cookie("cookie40");
var cookie41 = $.cookie("cookie41");
var cookie42 = $.cookie("cookie42");
var cookie43 = $.cookie("cookie43");
var cookie44 = $.cookie("cookie44");
var cookie45 = $.cookie("cookie45");
var cookie46 = $.cookie("cookie46");
var cookie47 = $.cookie("cookie47");
var cookie48 = $.cookie("cookie48");
var cookie49 = $.cookie("cookie49");
var cookie50 = $.cookie("cookie50");
var cookie51 = $.cookie("cookie51");
var cookie52 = $.cookie("cookie52");
var cookie53 = $.cookie("cookie53");
var cookie54 = $.cookie("cookie54");
var cookie55 = $.cookie("cookie55");
var cookie56 = $.cookie("cookie56");
var cookie57 = $.cookie("cookie57");
var cookie58 = $.cookie("cookie58");
var cookie59 = $.cookie("cookie59");
var cookie60 = $.cookie("cookie60");
var cookie61 = $.cookie("cookie61");
var cookie62 = $.cookie("cookie62");
var cookie63 = $.cookie("cookie63");
var cookie64 = $.cookie("cookie64");
var cookie65 = $.cookie("cookie65");
var cookie66 = $.cookie("cookie66");
var cookie67 = $.cookie("cookie67");
var cookie68 = $.cookie("cookie68");
var cookie69 = $.cookie("cookie69");
var cookie70 = $.cookie("cookie70");
var cookie71 = $.cookie("cookie71");
var cookie72 = $.cookie("cookie72");
var cookie73 = $.cookie("cookie73");
var cookie74 = $.cookie("cookie74");
var cookie75 = $.cookie("cookie75");
var cookie76 = $.cookie("cookie76");
var cookie77 = $.cookie("cookie77");
var cookie78 = $.cookie("cookie78");
var cookie79 = $.cookie("cookie79");
var cookie80 = $.cookie("cookie80");
var cookie81 = $.cookie("cookie81");
var cookie82 = $.cookie("cookie82");
var cookie83 = $.cookie("cookie83");
var cookie84 = $.cookie("cookie84");
var cookie85 = $.cookie("cookie85");
var cookie86 = $.cookie("cookie86");
var cookie87 = $.cookie("cookie87");
var cookie88 = $.cookie("cookie88");
var cookie89 = $.cookie("cookie89");
var cookie90 = $.cookie("cookie90");
var cookie91 = $.cookie("cookie91");
var cookie92 = $.cookie("cookie92");
var cookie93 = $.cookie("cookie93");
var cookie94 = $.cookie("cookie94");
var cookie95 = $.cookie("cookie95");
var cookie96 = $.cookie("cookie96");
var cookie97 = $.cookie("cookie97");
var cookie98 = $.cookie("cookie98");
var cookie99 = $.cookie("cookie99");
var cookie100 = $.cookie("cookie100");


// initialize the progress bar
var count = 0
if (cookie1 == "changed"){count = count+1}
if (cookie2 == "changed"){count = count+1}
if (cookie3 == "changed"){count = count+1}
if (cookie4 == "changed"){count = count+1}
if (cookie5 == "changed"){count = count+1}
if (cookie6 == "changed"){count = count+1}
if (cookie7 == "changed"){count = count+1}
if (cookie8 == "changed"){count = count+1}
if (cookie9 == "changed"){count = count+1}
if (cookie10 == "changed"){count = count+1}


var numCheckBoxes = document.querySelectorAll('input[type="checkbox"]').length
var ratioChecked = count/numCheckBoxes * 100
var progressSoFar = count + '/' + numCheckBoxes
	document.getElementById('progressSoFar').innerHTML = progressSoFar + " (" + ratioChecked + "%)";
if (numChecked == numCheckBoxes){
	document.getElementById('progressSoFar').innerHTML = "DONE!";
}
document.getElementById('progress').setAttribute('style', 'width:' + ratioChecked + '%')

// update cookies
!( cookie1 == "changed" ) || $('.Checkbox1').attr('checked',true);
!( cookie2 == "changed" ) || $('.Checkbox2').attr('checked',true);
!( cookie3 == "changed" ) || $('.Checkbox3').attr('checked',true);
!( cookie4 == "changed" ) || $('.Checkbox4').attr('checked',true);
$('.Checkbox1').change(function () {               
	if( this.checked ) {
		$.cookie("cookie1", "changed");
	} else {
		$.cookie("cookie1", null);
	}         
}).change();
$('.Checkbox2').change(function () {
	if( this.checked ) {
		$.cookie("cookie2", "changed");
	} else {
		$.cookie("cookie2", null);
	}         
}).change(); //ensure visible state matches initially
$('.Checkbox3').change(function () {
	if( this.checked ) {
		$.cookie("cookie3", "changed");
	} else {
		$.cookie("cookie3", null);
	}         
}).change(); 
$('.Checkbox4').change(function () {
	if( this.checked ) {
		$.cookie("cookie4", "changed");
	} else {
		$.cookie("cookie4", null);
	}         
}).change(); 
});  //end function