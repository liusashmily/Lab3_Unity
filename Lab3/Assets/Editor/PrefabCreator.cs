/// <summary>
/// PrefabCreator.cs
/// Generate prefab from selection
/// </summary>

using UnityEngine;
using UnityEditor;
using System.Collections;
using System.IO;
using System;

public class PrefabCreator : MonoBehaviour 
{
	/// <summary>
	/// Add the menu item and setup the data for creating the prefab
	/// </summary>
	[MenuItem ("Project Tools / Create Prefabs from Selection &%p")]
	static void CreatePrefab()
	{
		// Get the Selected Game Objects
		GameObject[] selectedObjects = Selection.gameObjects;
		
		// Loop through the Array and create new items
		foreach(GameObject temp in selectedObjects)
		{
			string name = temp.name;							// the name of the object
			string localPath = "Assets/" + name + ".prefab";	// the standard path for the prefab
			string projectPath = Application.dataPath + "/";	// get the project path
			
			// Check to see if the project contains a folder prefab, if it does
			// change the path so that the prefab is created in that folder
			if (Directory.Exists(projectPath + "Prefabs"))
				localPath = "Assets/Prefabs/" + name + ".prefab";
			else if (Directory.Exists(projectPath + "Prefab"))
				localPath = "Assets/Prefab/" + name + ".prefab";
			else if (Directory.Exists(projectPath + "prefab"))
				localPath = "Assets/prefab/" + name + ".prefab";
			else if (Directory.Exists(projectPath + "prefabs"))
				localPath = "Assets/prefabs/" + name + ".prefab";
			    
			// check for existing prefab
			if(AssetDatabase.LoadAssetAtPath(localPath, typeof(GameObject)))
			{
				// display confirmation dialog
				if(EditorUtility.DisplayDialog("Are You Sure?", 
				                               "The prefab already exists. Do you want to overwrite it?",
				                               "Yes",
				                               "No"))
				{
					CreateNew(localPath, temp);	// create the new prefab
				}
			}
			else
				CreateNew(localPath, temp);	// create the new prefab
		}
	}
	
	/// <summary>
	/// Create a new prefab from the paramters passed in
	/// </summary>
	/// <param name="localPath">
	/// 	The path of the variable we are creating <see cref="System.String"/>
	/// </param>
	/// <param name="obj">
	/// 	The game object we are creating the prefab from <see cref="GameObject"/>
	/// </param>
	static void CreateNew(string localPath, GameObject obj)
	{
		// create an empty prefab based on the path variable
		UnityEngine.Object prefab = EditorUtility.CreateEmptyPrefab(localPath);
		
		// replace the empty prefab with the game object
		EditorUtility.ReplacePrefab(obj, prefab);
		
		// refresh the view
		AssetDatabase.Refresh();
		
		// destroy the game object from the Hierarchy
		DestroyImmediate(obj);
		
		// suppress warning for variable not used
#pragma warning disable
		// Create the game object in the Hierarchy
		GameObject clone = EditorUtility.InstantiatePrefab(prefab) as GameObject;
		// restore warnings
#pragma warning restore
		
		// print out to the console what was created
		Debug.Log("Created Prefab: " + localPath);
	}
}
