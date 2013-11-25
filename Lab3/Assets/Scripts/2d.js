/*
Five step coding for the beginner

Step 1: Tool Description
- Description: We are creating a script that will animate a 2d sprite sheet
- Functionally, we'll have control of the speed for the animation, the frames, placement,
- Tool side: Accessibe through the inspector
- Support for the diffuse, spec and the normal maps
- Tile sheet support for the level editing
- Support for individual charcter peices
- Any other ideas


Step 2: Research
- List of topics
- 2d sprite textures
- 2d array
- x, y coordinators
- u, v coordinators
- speed maybe fps
- offsetting to move u, v
- Time
- variable and their type
- Function 
- Materials and different types or maps
- Words that we don't know

Step 3: Instruction Manual
1. take a texture assign to a material
2. assign the material to a plane (gameObject)
3. assign our script to our plane and that will provide the options in the inspector
4. input the size of the spritesHEET, width and height
5, input the start frame location (row and column)
6. input the length of the animation
7. input the speed for the animation


Step 4: Pseudocode
need to have a constantly updated script to provide the motion for the animation
We need to offest for the uv's sideways at a controlled speed(framers per second)
then have the ability to "scale / zoom in " to a specific size on the poly
space in 2 dimensions
be able to choose frame length(clip length)
make it a function and be able to call it up in other scripts

get the offset of the uv's and move them based on time
figure out how to find the end of the frame.....
if at end, then go back to the beginning of the image
- Note:
		renderer.material is where we can change the offset 

get column and row frame amount.....
then find the size of the frame(just one frame)
create a way to offset the uvs based on the size of a frame and image
- Note:
		Material.GetTextureOffset

render the texture to the poly at the new offset(uv) location
render the texture to the correct size(size)

variables: columSize, rowSize, framesPerSecond, rowFrameStart, colFrameStart, totalFrames,


Step 5: Write it already


*/