var playTime	 : float = 0.0;
var days 		 : float = 0.0;
var hours		 : float = 0.0;
var minutes		 : float = 0.0;
var seconds		 : float = 0.0;
var fractions	 : float = 0.0;

function Update ()
{
	playTime = Time.time;
	seconds = playTime % 60;
	fractions = playTime * 10 % 10;
	minutes = playTime / 60 % 60;
	hours = playTime / 3600 % 24;
	days = hours / 24 % 365;

	// print("Minutes: " + minutes + " Seconds: " + seconds + " Fractions: " + fractions);

	if( seconds >= 10) {
		print("You are at TEN seconds mark.");
	}
	
	if ( minutes >= 1) {
		print("You are at the one munite mark.");
	}

}

function OnGUI () {
	GUILayout.Label ("PlayTime: " + playTime);
	GUILayout.Label ("Minutes: " + minutes.ToString("f0"));
	GUILayout.Label ("Seconds: " + seconds.ToString("f0"));
	GUILayout.Label ("Fractions: " + fractions.ToString("f3"));
}