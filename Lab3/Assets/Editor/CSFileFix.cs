/// <summary>
/// CSFileFix.cs
/// This will take the selected files and and change the 'NewBehaviourScript"
/// defualt for CS scripts and change it to the name of the file after a
/// rename.
/// </summary>

using UnityEngine;
using UnityEditor;
using System.Collections;
using System.IO;
using System;

public class CSFileFix : MonoBehaviour 
{
	/// <summary>
	/// Add the menu item and setup the data for fixing CS files
	/// </summary>
	[MenuItem ("Project Tools / Fix CS Files &%f")]
	static void FixCSFiles()
	{
		// get Selected objects from project
		UnityEngine.Object[] selectedObjects = Selection.objects;
		
		// loop through each of the objects
		foreach(UnityEngine.Object temp in selectedObjects)
		{
			string assetLocation = AssetDatabase.GetAssetPath(temp).Remove(0,7);	// get the file location and removed the 'Assets/'
			string assetName = temp.name;								// get the name of the asset selected
			string projectPath = Application.dataPath + "/";			// get the project path
			
			// check to make sure we are dealing with a C# file
			if(assetLocation.EndsWith(".cs"))
			{
				// check for spaces in the Asset Name
				if(assetName.Contains(" "))
				{
					Debug.Log("INVALID FILE NAME FOR C# - REMOVE SPACES");
				}
				else
				{
					StreamReader sr = new StreamReader(projectPath + assetLocation);	// open file for reading
					string text = sr.ReadToEnd();	// read the data to a string
					sr.Close();						// close the file
					
					int firstIndex = text.IndexOf("public class");	// get the index of the class declaration
					int secondIndex = text.IndexOf(":");			// get the index of the :
					
					// get the class name sub string
					string subStr = text.Substring(firstIndex + 13, secondIndex - (firstIndex + 13) - 1);
					
					text = text.Replace(subStr, assetName);						// replace the sub string with the new name
					text = text.Replace("MonoBehaviour {", "MonoBehaviour\n{");	// move the first { to new line
					
					StreamWriter sw = new StreamWriter(projectPath + assetLocation);	// open file for writing
					sw.Write(text);		// write data to file
					sw.Close();			// close the file to save
					
					// tell the user what got replaced
					Debug.Log("Replacing " + subStr + " with " + assetName);
				}
			}
		}
		
		AssetDatabase.Refresh();	// refresh the asset database
		
	}
}
