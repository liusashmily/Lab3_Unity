// generate a prefab from the selection

@MenuItem ("Project Tools/Make Prefab")

static function CreatePrefab() {
	// Debug.Log("Prefab");

	var selectedObjects :GameObject[] = Selection.gameObjects;

	for(var go : GameObject in selectedObjects){
		//print(go.name);
		var name : String = go.name;
		var localPath : String = "Assets/Prefabs/" + name + ".prefab";
		createNew(go, localPath);
	}
}

static function createNew (selectedObjects : GameObject, localPath : String) {
	var prefab : Object = PrefabUtility.CreateEmptyPrefab(localPath);
	PrefabUtility.ReplacePrefab(selectedObjects, prefab);
	AssetDatabase.Refresh();


}