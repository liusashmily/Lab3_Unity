// generate a prefab from the selection

@MenuItem ("Project Tools/Make Prefab")

static function CreatePrefab() {
	// Debug.Log("Prefab");

	var selectedObjects :GameObject[] = Selection.gameObjects;

	for(var go : GameObject in selectedObjects){
		//print(go.name);
		var name : String = go.name;
		var localPath : String = "Assets/" + name + ".prefab";
		print(localPath);
	}
	createNew(localPath);
}

static function createNew (localPath : String) {
	var prefab : Object = PrefabUtility.CreateEmptyPrefab(localPath);


}