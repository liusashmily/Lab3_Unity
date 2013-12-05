// Start Time
// Desc: Start Time simply start playTime at zero and stores current time

var playTime		: float = 0.0;
var startTime		: float = 0.0;
var fromStartTime	: float = 0.0;
var fromLoadTime	: float = 0.0;

var timeActive 		: boolean = true;

function Update ()
{
	if (timeActive) {									// enable time
		playTime = Time.time;							// playTime is current time since start
	}
	
	if (Input.GetKeyDown("1"))							// press a key to active the start time
	{
		startTime = Time.time;
	}

	fromStartTime = Time.time - startTime;				// counting from start time

	if (Input.GetKeyDown("2"))
	{
		fromLoadTime = Time.timeSinceLevelLoad;			// startTime equals original level time
	}
}

function OnGUI () {
	GUILayout.Label ("PlayTime: " + playTime);
	GUILayout.Label ("Start Time: " + startTime);
	GUILayout.Label ("From Start Time: " + fromStartTime);
	GUILayout.Label ("From Load Time: " + fromLoadTime);

}