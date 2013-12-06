// Delay Time
// Desc: Continue timer after delayed amount

var playTime		: float = 0.0;
var delayTime		: float = 0.0;
var delayedAmount	: float = 0.0;

var timeActive 		: boolean = true;

function Update ()
{
	if (timeActive) {													// enable time
		playTime =  Time.time;											// playTime is current time since start
	}

	// delayTime = 10 + 3; playTime > 13
	if ( playTime > delayTime ) {
		delayTime = Time.time + delayedAmount;
		timeActive = true;
	}

}

function OnGUI () {

	GUILayout.Label ("Play Time: " + playTime);
	GUILayout.Label ("Delay Time: " + delayTime.ToString("f0"));

}