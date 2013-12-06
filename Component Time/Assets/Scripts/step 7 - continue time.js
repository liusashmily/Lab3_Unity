// Continue Time
// Continue timer from stopped time

var playTime		: float = 0.0;
var stopTime		: float = 0.0;
var continueTime	: float = 0.0;

var timeActive 		: boolean = true;

function Update ()
{
	if (timeActive) {													// enable time
		playTime = Time.time - continueTime;							// playTime is current time since start
	}
	
	if (Input.GetKeyDown ("3")) {
		stopTime = Time.time;
		timeActive = false;
	}

	if (Input.GetKeyDown ("5")) {
		continueTime = Time.time - playTime;
		timeActive = true;
	}
}

function OnGUI () {
	GUILayout.Label ("PlayTime: " + playTime);
	GUILayout.Label ("Stop Time: " + stopTime);
	GUILayout.Label ("Continue Time: " + continueTime);


}