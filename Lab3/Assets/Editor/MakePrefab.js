// generate a prefab from the selection

@MenuItem ("Project Tools/Make Prefab")

static function CreatePrefab()
{
	Debug.Log("Prefab");

	var selectedObjects :GameObject[] = Selection.gameObjects;

	for(var go : GameObject in selectedObjects){
		print(go.name);
	}
}