var column : int;						// X(u) coordinate
var row : int;							// Y(v) coordinate
// var index : int = 1;
var framePerSecond = 8.0;				// Speed of animation

function Update(){
	// Time Control fps
	var index : int = Time.time * framePerSecond;

	// Modulate
	index = index % (column * row);

	print(index);

	// Scale
	var size = Vector2 (1.0 / column, 1.0 / row);

	var u : int = index % column;
	var v : int = index / row;

	// Offset
	var offset = Vector2 ( u * size.x, v * size.y);

	// Texture Offset
	renderer.material.mainTextureOffset = offset;

	// Texture Scale
	renderer.material.mainTextureScale = size;
}