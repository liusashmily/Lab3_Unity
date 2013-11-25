/// <summary>
/// FolderCreator.cs
/// Generate default folders in our project
/// </summary>

using UnityEngine;
using UnityEditor;
using System.Collections;
using System.IO;
using System;

public class FolderCreator : MonoBehaviour 
{
	/// <summary>
	/// add a menu item
	/// </summary>
	[MenuItem ("Project Tools / Generate Default Folders &%g")]
	static void MakeFolders()
	{
		GenerateFolders();
	}
	
	/// <summary>
	/// Generate the folders for the project
	/// </summary>
	static void GenerateFolders()
	{
		// use try block to catch excpetions
		try
		{
			// get the project path from Unity and append the '/' character
			string projectPath = Application.dataPath + "/";
			
			// add directories. feel free to change the folder names
			// or add your own.
			Directory.CreateDirectory(projectPath + "Audio");
			Directory.CreateDirectory(projectPath + "Font");
			Directory.CreateDirectory(projectPath + "Materials");
			Directory.CreateDirectory(projectPath + "Meshes");
			Directory.CreateDirectory(projectPath + "Models");
			Directory.CreateDirectory(projectPath + "Prefabs");
			Directory.CreateDirectory(projectPath + "Packages");
			Directory.CreateDirectory(projectPath + "Physics");
			Directory.CreateDirectory(projectPath + "Resources");
			Directory.CreateDirectory(projectPath + "Textures");
			Directory.CreateDirectory(projectPath + "Scenes");
			Directory.CreateDirectory(projectPath + "Scripts");
			Directory.CreateDirectory(projectPath + "Shaders");
			
			// print to the console that we did things right
			Debug.Log("Added Folders");
			
			// refresth the scene
			AssetDatabase.Refresh();
		}
		catch (Exception e)
		{
			// print the error that occured
			Debug.Log("The Process Failed: " + e.ToString());
		}
	}
}
