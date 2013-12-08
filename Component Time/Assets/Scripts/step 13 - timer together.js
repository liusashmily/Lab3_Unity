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
var addToTime	 	: float = 0.0;
var addToTimeAmount	: float = 10.0;
var timeAmount      : float = 0.0;
var actualTime		: float = 0.0;

var playTimeEnabled 		: boolean = false;
var realTimeEnabled			: boolean = false;
var fromLoadTimeEnabled	 	: boolean = false;
var continueTimeEnabled	 	: boolean = false;
var countDownEnabled 		: boolean = false;


function Update ()
{
	seconds = playTime % 60;
	fractions = playTime * 10 % 10;
	minutes = playTime / 60 % 60;
	hours = playTime / 3600 % 24;
	days = hours / 24 % 365;

	if (playTimeEnabled && !countDownEnabled) {													// enable time
		playTime = Time.time - startTime - continueTime + addToTime;
	}

/// Step 1 - start time: press a key to active the start time
	if (Input.GetKeyDown("1"))
	{
		startTime = Time.time;
		addToTime = 0;
		continueTime = 0;
		playTimeEnabled = true;
		countDownEnabled = false;
	}

/// Step 2 - from load time
	if (Input.GetKeyDown("2"))
	{
		fromLoadTime = Time.timeSinceLevelLoad;			// startTime equals original level time
		startTime = 0;
		addToTime = 0;
		playTimeEnabled = false;
		realTimeEnabled = false;
		countDownEnabled = false;
		fromLoadTimeEnabled = true;
	}
	if (fromLoadTimeEnabled && !playTimeEnabled)
		playTime = Time.timeSinceLevelLoad + addToTime;

/// Step 3 - stop time (stopping play time)
	if (Input.GetKeyDown ("3")) {
		stopTime = playTime;
		addToTime = 0;
		playTimeEnabled = false;
		continueTimeEnabled = false;
		realTimeEnabled = false;
		countDownEnabled = false;
		fromLoadTimeEnabled = false;
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
		startTime = 0;
		addToTime = 0;
		playTimeEnabled = true;
		countDownEnabled = false;
	}

/// Step 6 - reset time
	if (Input.GetKeyDown ("6")) {
		startTime = 0;
		playTime = 0.0;
		continueTime = 0.0;
		addToTime = 0.0;
		continueTimeEnabled = false;
		realTimeEnabled = false;
		fromLoadTimeEnabled = false;
		countDownEnabled = false;
		playTimeEnabled = false;
	}

/// Step 7 - Count down
	if (playTimeEnabled && countDownEnabled)
	{
		playTime = countDownDelay - Time.time + countDownAmount;
	}
	if (Input.GetKeyDown ("7")) {
		countDownEnabled = true;
		playTimeEnabled = true;
		countDownDelay = Time.time;
		addToTime = 0;
	}
	if (playTime < 0)
	{
		playTimeEnabled = false;
		countDownEnabled = false;
	}

/// Step 8 - add to time (single/once)
	if ( Input.GetKeyDown("8") ) {										// Add once
		addToTime = addToTimeAmount;
	}

/// Step 9 - add to time (continous)
	if (Input.GetKeyDown("9")) {										// Add continous
		addToTime += addToTimeAmount;
	}

/// Step 0 - actual time since game start
	if (Input.GetKeyDown ("0"))
	{
		actualTime = Time.realtimeSinceStartup;
		startTime = 0;
		addToTime = 0;
		playTimeEnabled = false;
		realTimeEnabled = true;
		fromLoadTimeEnabled = false;
	}
	if (realTimeEnabled && !playTimeEnabled && !fromLoadTimeEnabled) {
		playTime = Time.realtimeSinceStartup + addToTime;
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
	
	GUILayout.Label ("1 - Start Time: " 		+ startTime);
	GUILayout.Label ("2 - From Load Time: " 	+ fromLoadTime);

	GUILayout.Label ("3 - Stop Time: " 			+ stopTime);
	GUILayout.Label ("4 - Pause Game Time: " 	+ pauseGameTime);

	GUILayout.Label ("5 - Continue Time: " 		+ continueTime);

	GUILayout.Label ("6 - Reset Time: " 		+ delayTime.ToString("f0"));
	GUILayout.Label ("7 - Count Down Time: " 		+ delayTime.ToString("f0"));
	GUILayout.Label ("8 - Add to Time/Once: " 		+ delayTime.ToString("f0"));
	GUILayout.Label ("9 - Add to Time/Continous: " 		+ delayTime.ToString("f0"));

	GUILayout.Label ("0 - Actual Time: " 		+ actualTime);

}