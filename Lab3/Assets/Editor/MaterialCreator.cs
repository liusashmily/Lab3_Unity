/// <summary>
/// MaterialCreator.cs
/// Generate Material from texture selection
/// </summary>

using UnityEngine;
using UnityEditor;
using System.Collections;
using System.IO;
using System;


public class MaterialCreator : MonoBehaviour 
{
	/// <summary>
	/// Add the menu item and setup the data for creating the material
	/// </summary>
	[MenuItem ("Project Tools / Create Materials from Selection &%m")]
	static void CreateMaterial()
	{
		// get Selected objects from project
		UnityEngine.Object[] selectedObjects = Selection.objects;
		
		// loop through each of the objects
		foreach(UnityEngine.Object temp in selectedObjects)
		{
			// check to see if the object is a texture
			if(temp is Texture)
			{
				string name = temp.name;							// the name of the object
				string localPath = "Assets/" + name + ".mat";		// the standard path for the prefab
				string projectPath = Application.dataPath + "/";	// get the project path
			
				// Check to see if the project contains a folder material, if it does
				// change the path so that the material is created in that folder
				if (Directory.Exists(projectPath + "Materials"))
					localPath = "Assets/Materials/" + name + ".mat";
				else if (Directory.Exists(projectPath + "Material"))
					localPath = "Assets/Material/" + name + ".mat";
				else if (Directory.Exists(projectPath + "material"))
					localPath = "Assets/material/" + name + ".mat";
				else if (Directory.Exists(projectPath + "materials"))
					localPath = "Assets/materials/" + name + ".mat";
				
				// check for existing material
				if(AssetDatabase.LoadAssetAtPath(localPath, typeof(UnityEngine.Object)))
				{
					// display confirmation dialog
					if(EditorUtility.DisplayDialog("Are You Sure?  " + name, 
					                               "The material already exists. Do you want to overwrite it?",
					                               "Yes",
					                               "No"))
					{
						CreateNew(localPath, temp);	// create the new material
					}
				}
				else
					CreateNew(localPath, temp);	// create the new material
			}
		}
		
		AssetDatabase.Refresh();
	}
	
	/// <summary>
	/// Create a new material from the paramters passed in
	/// </summary>
	/// <param name="localPath">
	/// 	The path of the variable we are creating <see cref="System.String"/>
	/// </param>
	/// <param name="temp">
	/// 	The object we are creating the material from <see cref="Object"/>
	/// </param>
	static void CreateNew(string localPath, UnityEngine.Object temp)
	{
		Material newMat = new Material(Shader.Find("Diffuse"));	// create a default diffuse material
		
		newMat.mainTexture = (Texture) temp;					// set the main texture
		
		AssetDatabase.CreateAsset(newMat, localPath);			// create the new asset
		
		Debug.Log("Material Created: " + localPath);			// send debug message
	}
}
