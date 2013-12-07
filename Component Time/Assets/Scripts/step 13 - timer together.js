var playTime	 : float = 0.0;
var days 		 : float = 0.0;
var hours		 : float = 0.0;
var minutes		 : float = 0.0;
var seconds		 : float = 0.0;
var fractions	 : float = 0.0;

var startTime		:float = 0.0;
var fromStartTime	:float = 0.0;
var fromLoadTime	: float = 0.0;
var stopTime		: float = 0.0;
var pauseGameTime	: float = 0.0;
var continueTime	: float = 0.0;
var countDownDelay	: float = 0.0;
var countDownAmount : float = 0.0;

var delayTime		: float = 0.0;
var delayedAmount	: float = 0.0;

var addToTimeAmount	: float = 0.0;
var timeAmount      : float = 0.0;

var actualTime		: float = 0.0;

var timeActive 		 : boolean = true;
var countDownEnabled : boolean = false;

function Update ()
{
	playTime = Time.time;
	seconds = playTime % 60;
	fractions = playTime * 10 % 10;
	minutes = playTime / 60 % 60;
	hours = playTime / 3600 % 24;
	days = hours / 24 % 365;

	// playTime = current Time
	if (timeActive) {
		playTime = Time.time - continueTime + addToTimeAmount;
	}

	if (!timeActive && countDownEnabled) {													// enable time
		playTime = countDownDelay - Time.time + countDownAmount;											// playTime is current time since start
	}

/// Step 1 - start time: press a key to active the start time
	if (Input.GetKeyDown("1"))
	{
		startTime = Time.time;
	}
	// counting from start time
	fromStartTime = Time.time - startTime;

/// Step 2 - from load time
	if (Input.GetKeyDown("2"))
	{
		fromLoadTime = Time.timeSinceLevelLoad;			// startTime equals original level time
	}

/// Step 3 - stop time (stopping play time)
	if (Input.GetKeyDown ("3")) {
		stopTime = Time.time;
		timeActive = false;
	}

/// Step 4 - stop game (pause game)
	if (Input.GetKeyDown ("4")) {
		Time.timeScale = 0.0;
	}
	else if (Input.GetKeyUp ("4")) {
		Time.timeScale = 1.0;
	}

	pauseGameTime = Time.time;

/// Step 5 - continue time
	if (Input.GetKeyDown ("5")) {
		continueTime = Time.time - playTime;
		timeActive = true;
	}

/// Step 6 - reset time
	if (Input.GetKeyDown ("6")) {
		playTime = 0.0;
		stopTime = 0.0;
		timeActive = false;
	}

/// Step 7 - Count down
	if (Input.GetKeyDown ("7")) {
		countDownEnabled = true;
		countDownDelay = Time.time;
		timeActive = false;
	}
	if (playTime < 0)
	{
		timeActive = false;
		//playTime = 0.0;
	}

/// Step 8 - add to time (single/once)
	if ( Input.GetKeyDown("8") ) {										// Add once
		addToTimeAmount = timeAmount;
	}

/// Step 9 - add to time (continous)
	if (Input.GetKeyDown("9")) {										// Add continous
		addToTimeAmount += timeAmount;
	}

/// Step 0 - actual time since game start
	if (Input.GetKeyDown ("0"))
	{
		actualTime = Time.realtimeSinceStartup;
	}

/// Step 10 -  delayTime = 10 + 3; playTime > 13
	if ( playTime > delayTime ) {
		delayTime = Time.time + delayedAmount;
		// timeActive = true;
	}

}

function OnGUI () {
	GUILayout.Label ("PlayTime: " 			+ playTime);
	GUILayout.Label ("Minutes: " 			+ minutes.ToString("f0"));
	GUILayout.Label ("Seconds: " 			+ seconds.ToString("f0"));
	GUILayout.Label ("Fractions: "			+ fractions.ToString("f3"));
	
	GUILayout.Label ("Start Time: " 		+ startTime);
	GUILayout.Label ("From Start Time: " 	+ fromStartTime);
	GUILayout.Label ("From Load Time: " 	+ fromLoadTime);

	GUILayout.Label ("Stop Time: " 			+ stopTime);
	GUILayout.Label ("Pause Game Time: " 	+ pauseGameTime);

	GUILayout.Label ("Continue Time: " 		+ continueTime);

	GUILayout.Label ("Delay Time: " 		+ delayTime.ToString("f0"));
	GUILayout.Label ("Actual Time: " 		+ actualTime);

}