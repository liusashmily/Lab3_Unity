// Count Down Time
// Reset the current time or stopped time to zero

var playTime		: float = 0.0;
var countDownDelay	: float = 0.0;
var countDownAmount : float = 0.0;

var timeActive 		: boolean = false;

function Update ()
{
	if (timeActive) {													// enable time
		playTime = countDownDelay - Time.time + countDownAmount;											// playTime is current time since start
	}

	if (Input.GetKeyDown ("7")) {
		countDownDelay = Time.time;
		timeActive = true;
	}

	if (playTime < 0)
	{
		timeActive = false;
		//playTime = 0.0;
	}
}

function OnGUI () {

	GUILayout.Label ("Play Time: " + playTime);


}