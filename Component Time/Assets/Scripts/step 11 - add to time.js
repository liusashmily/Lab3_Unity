// Add to Time
// Desc: Add more time to the timer : 1. once; 2. continous adding

var playTime		: float = 0.0;
var addToTimeAmount	: float = 0.0;
var timeAmount      : float = 0.0;

var timeActive 		: boolean = true;

function Update ()
{
	if (timeActive) {													// enable time
		playTime =  Time.time + addToTimeAmount;						// playTime is current time since start
	}

	if ( Input.GetKeyDown("8") ) {										// Add once
		addToTimeAmount = timeAmount;
	}

	if (Input.GetKeyDown("9")) {										// Add continous
		addToTimeAmount += timeAmount;
	}

}

function OnGUI () {

	GUILayout.Label ("Play Time: " + playTime);

}