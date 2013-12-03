/*
Five Step Coding for the Beginner (Artist, Designer)

2D Sprite Animation Sheet

Step 1: Tool Description
- Description: We are creating a script that will animate a 2d sprite sheet
- Functionality: We'll have control of the speed for the animation, the frames, placement,
- Tool side: Accessible through the inspector
- Support for the diffuse, spec and the normal maps
- Tile sheet support for level editing
- Support for individual character pieces
- Any other ideas

Step 2: Research
- List of topics
- 2d sprite textures
- 2d array
- x, y coordinates
- u, v coordinates
- speed maybe fps
- offsetting to move u,v
- Time
- Variables and their type
- Function
- Materials and different textures types or maps
- Words that we don't know

Step 3: Instruction Manual (Step by step)
1. take a texture assign to a material
2. assign the material to a plane (gameObject)
3. assign our script (ani) to our plane and that will provide the options in the inspector
4. input the size of the spriteSheet (width and height)
5. input the start frame location (row and column)
6. input the length of the animation (how many frames long is it)
7. input the speed for the animation (frames per second)

Step 4: Pseudocode (Structured English Style)
need to have a constantly updated script to provide the motion for the animation
we need to offset for the uv's sideways at a controlled speed (frames per second)
then have the ability to 'scale / zoom in' to a specific size on the poly
space in 2 dimensions
be able to choose the frame length (clip length)
make it a function and be able to call it up in other scripts

get the offset of the uv's and move them based on time
figure out how to find the end of the frame...
if at end, then go back to the beginning of the image
- Note: Look up Modulo, check how it works and try
	  : Render.material is where the example is
get column and row frame amount...
then find the size of the frame (just one frame)
create a way to offset the uvs based on the size of a frame and the image
render the texture to the poly at the new offset (uv) location
render the texture to the correct size (scale)

variables - rowSize, columnSize, framesPerSecond, rowFrameStart, colFrameStart, totalFrames

Step 5: Write it already

*/















