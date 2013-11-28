var tileX : int;
var tileY : int;

function Update () {
	renderer.material.mainTextureOffset = Vector2(1, 0);

	var size = Vector2(1.0/tileX, 1.0/tileY);

	print(size);
	renderer.material.mainTextureScale	= size;
}