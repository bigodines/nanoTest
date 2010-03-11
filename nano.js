/**
	NanoTest:
		a super lightweight js unittesting framework
	author: bigodines gmail com
	url: http://bigodines.com/code/nanoTest
	special thanks to: http://www.jera.com/techinfo/jtns/jtn002.html
*/
var NanoTest = {
	assert : function(message, test)  { if (!(test)) return message; },
	run : function(test) { var message = test(); if (message) return message; },
	runAll : function() { 
		var re = /^nanoTest_*/;
		var fail = new Array();
		for (var d in window) {
			if (re.test(d)) {
				var msg = NanoTest.run(window[d]);
				if (msg) fail.push(msg);
			}
		}
		return fail;
	}
}
