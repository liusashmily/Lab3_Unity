// Reset Time
// Reset the current time or stopped time to zero

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

	if (Input.GetKeyDown ("6")) {
		playTime = 0.0;
		stopTime = 0.0;
		timeActive = false;
	}
}

function OnGUI () {
	GUILayout.Label ("PlayTime: " + playTime);
	GUILayout.Label ("Stop Time: " + stopTime);
	GUILayout.Label ("Time: " + Time.time);


}