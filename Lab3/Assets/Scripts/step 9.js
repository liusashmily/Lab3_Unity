var columnSize : int;						// X(u) coordinate
var rowSize : int;							// Y(v) coordinate
var framePerSecond = 8.0;					// Speed of animation

var rowFrameStart : int = 0;
var colFrameStart : int = 0;
var totalFrames : int = 1;


function Update(){
	aniSprite(columnSize, rowSize, colFrameStart, rowFrameStart, totalFrames, framePerSecond);
}

function aniSprite (columnSize, rowSize, colFrameStart, rowFrameStart, totalFrames, framePerSecond) {
	// Time Control fps
	var index : int = Time.time * framePerSecond;

	// Modulate
	index = index % totalFrames;

	print(index);

	// Scale
	var size = Vector2 (1.0 / columnSize, 1.0 / rowSize);

	var u : int = index % columnSize;
	var v : int = index / rowSize;

	// Offset
	var offset = Vector2 ( (u + colFrameStart ) * size.x, ( v + rowFrameStart) * size.y);

	// Texture Offset
	renderer.material.mainTextureOffset = offset;

	// Texture Scale
	renderer.material.mainTextureScale = size;

	renderer.material.SetTextureOffset ("_BumpMap", offset);
	renderer.material.SetTextureScale  ("_BumpMap", size);	
}