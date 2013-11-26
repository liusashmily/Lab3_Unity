function Update () {

	renderer.material.mainTextureOffset = Vector2(1, 0);
	renderer.material.mainTextureScale	= Vector2 (1, 1);

	// Animates main texture scale in a funky way!
	// var scaleX : float = Mathf.Cos (Time.time) * 0.5 + 1;
	// var scaleY : float = Mathf.Sin (Time.time) * 0.5 + 1;
	var scaleX : float = 0.5 ;
	var scaleY : float = 0.5 ;
	var offset : float = 0.25 ;
	//renderer.material.mainTextureOffset = Vector2(0.5, 0);
	//renderer.material.mainTextureScale  = Vector2 (0.05, 1);
}


