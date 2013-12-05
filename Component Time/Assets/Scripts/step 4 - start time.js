// Start Time
// Desc: Start Time simply start playTime at zero and stores current time

var playTime		:float = 0.0;
var startTime		:float = 0.0;
var fromStartTime	:float = 0.0;

var timeActive = true;

function Update ()
{
	// playTime = current Time
	if (timeActive) {
		playTime = Time.time;
	}
	
	// press a key to active the start time
	if (Input.GetKeyDown("1"))
	{
		startTime = Time.time;
	}

	// counting from start time
	fromStartTime = Time.time - startTime;
}

function OnGUI () {
	GUILayout.Label ("PlayTime: " + playTime);
	GUILayout.Label ("Start Time: " + startTime);
	GUILayout.Label ("From Start Time: " + fromStartTime);

}