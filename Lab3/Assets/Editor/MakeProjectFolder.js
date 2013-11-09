// Generate folders in our project

#pragma strict
import System.IO;

function Start () {

}

function Update () {

}

// Add menu item
// Generate folders and names from the script
@MenuItem("Project Tools/Make Folders")

static function MakeFolder()
{
	GenerateFolders();
}

static function GenerateFolders()
{
	Debug.Log("Test GenerateFolders function");
	// CreateDirecotry is a method from MSDN
	Directory.CreateDirectory(Application.dataPath + "/DefaultFolder");
}