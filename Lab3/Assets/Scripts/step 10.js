#pragma strict

function Start () {

}

function Update () {
	var aniPlay : aniSprite = GetComponent("aniSprite");

	if (Input.GetKey("d")){
		aniPlay.aniSprite (8, 2, 0, 0, 16, 12);
	}

}