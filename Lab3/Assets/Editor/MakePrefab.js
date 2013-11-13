// generate a prefab from the selection

@MenuItem ("Project Tools/Make Prefab")

static function CreatePrefab() {
	// Debug.Log("Prefab");

	// Select from the scene view
	var selectedObjects :GameObject[] = Selection.gameObjects;

	// Loop through our selection
	for(var go : GameObject in selectedObjects){
		//print(go.name);

		// Store the name of our selection
		var name : String = go.name;

		// Create the path for the prefab
		var localPath : String = "Assets/Prefabs/" + name + ".prefab";

		// Check for object in project
		if(AssetDatabase.LoadAssetAtPath(localPath, GameObject))
		{
			// Check for user choice
			if(EditorUtility.DisplayDialog("Caution", "Prefab already exits. Overwrite?", "Yes", "No")){
				// Create a new prefab
				createNew(go, localPath);
			}
			print("Do Not Create!");

		}
		else{
				// Create a new prefab
				createNew(go, localPath);
		}
	}
}

// Create a new prefab
static function createNew (selectedObjects : GameObject, localPath : String) {
	// Store prefab
	var prefab : Object = PrefabUtility.CreateEmptyPrefab(localPath);

	// Set prefab to prefab
	PrefabUtility.ReplacePrefab(selectedObjects, prefab);

	// Refresh the database
	AssetDatabase.Refresh();

	// Remove the selected object
	DestroyImmediate(selectedObjects);

	// Replace object with prefab
	var clone: GameObject = PrefabUtility.InstantiatePrefab(prefab) as GameObject;
}