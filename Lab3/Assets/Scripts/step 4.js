var column : int;
var row : int;
var index : int = 1;

function Update(){
	// Modulate
	index = index % (column * row);

	// Scale
	var size = Vector2 (1.0 / column, 1.0 / row);

	// Offset
	var offset = Vector2 ( index * size.x, row);

	// Texture Offset
	renderer.material.mainTextureOffset = offset;

	// Texture Scale
	renderer.material.mainTextureScale = size;
}