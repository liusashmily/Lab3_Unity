// Generate folders in our project

#pragma strict
import System.IO;

// Add menu item
// Generate folders and names from the script
@MenuItem("Project Tools/Make Folders #&_g")

static function MakeFolder()
{
	GenerateFolders();
}

static function GenerateFolders()
{
	// Store the path for the folders
	var projectPath : String = Application.dataPath + "/" ;

	// CreateDirecotry is a method from MSDN
	Directory.CreateDirectory(projectPath + "Audio");
	Directory.CreateDirectory(projectPath + "Materials");
	Directory.CreateDirectory(projectPath + "Meshes");
	Directory.CreateDirectory(projectPath + "Fonts");
	Directory.CreateDirectory(projectPath + "Textures");
	Directory.CreateDirectory(projectPath + "Resources");
	Directory.CreateDirectory(projectPath + "Scripts");
	Directory.CreateDirectory(projectPath + "Shaders");
	Directory.CreateDirectory(projectPath + "Packages");
	Directory.CreateDirectory(projectPath + "Prefabs");
	Directory.CreateDirectory(projectPath + "Physics");

	AssetDatabase.Refresh();

}