using UnityEngine;
using System.Collections;

public class PlatformVisibility : MonoBehaviour
{

	public bool HideOnWeb = false;
	public bool HideOnMobile = false;
	public bool HideInEditor = false;

	void Start()
	{

		var control = GetComponent<dfControl>();
		if( control == null )
			return;

		var hideControl = 
			(HideOnWeb && Application.isWebPlayer) ||
			( HideInEditor && Application.isEditor ) ||
#if UNITY_IPHONE || UNITY_ANDROID
			HideOnMobile;
#else
			false;
#endif

		if( hideControl )
		{
			control.Hide();
		}

	}

}