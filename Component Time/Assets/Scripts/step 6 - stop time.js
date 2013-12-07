// Stop Time
// Desc: 1. Stop current playTime, 2. Steps/Pause Game time

var playTime		: float = 0.0;
var stopTime		: float = 0.0;
var pauseGameTime	: float = 0.0;

var timeActive 		: boolean = true;

function Update ()
{
	if (timeActive) {									// enable time
		playTime = Time.time;							// playTime is current time since start
	}
	
	if (Input.GetKeyDown ("3")) {
		stopTime = Time.time;
		timeActive = false;
	}

	if (Input.GetKeyDown ("4")) {
		Time.timeScale = 0.0;
	}
	else if (Input.GetKeyUp ("4")) {
		Time.timeScale = 1.0;
	}

	pauseGameTime = Time.time;
}

function OnGUI () {
	GUILayout.Label ("PlayTime: " + playTime);
	GUILayout.Label ("Stop Time: " + stopTime);
	GUILayout.Label ("Pause Game Time: " + pauseGameTime);


}