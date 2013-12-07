// Since Start Time
// Desc: Real time since start up

var playTime		: float = 0.0;
var actualTime		: float = 0.0;

var timeActive 		: boolean = true;

function Update ()
{
	if (timeActive) {													// enable time
		playTime =  Time.time;						// playTime is current time since start
	}

	if (Input.GetKeyDown ("0"))
	{
		actualTime = Time.realtimeSinceStartup;
	}

	if (Input.GetKeyDown ("2"))
	{
		Time.timeScale = 0.0;
	}

	if (Input.GetKeyUp ("2"))
	{
		Time.timeScale = 1.0;
	}

}

function OnGUI () {

	GUILayout.Label ("Play Time: " + playTime);
	GUILayout.Label ("Actual Time: " + actualTime);

}