/*
-------Designer notes------
We need a counter that does everything
It should have the ability to count up, down, stop, add to, etc
Needs to be simple to use and lightweight
Example of users:
- I want to be able to take timer, apply it to a gui font,
- have it count down to a number, then trigger an event or game over
- want some form of delay in it for weapons, button pushes, etc
- It should also be easy to add to time if you grab 'extra time' item
- We need to it pause the complete game
- Need to be able to grab time from start, level load at any time
- Make it happen, And quick

Time Component:
Step 1: Tool Description
A set of functions that allow for easy control of time (or class)
"Design a time that wil work with everything"

Step 2: Research
- Time class and everything in it
- Writing time to the screen (gui)
- Making calls to functions
- Stopwatch (www.online-stopwatch.com)

Step 3: The idea
Details:
- Attach the Time script to any object and use its functions to control time
- We nned a set of variables that will hold minutes, seconds and fractions
While writing any game component, we want to use this to creat a simple system that lets us find and use the start, pause...

Functions:
- Start timer
- From Start Timer
- Stop timer
- Continue Timer Up
- Continue Timer Down
- Reset Timer
- Count Down Timer
- Delay Timer
- Add to Timer
- Since Start Up Timer

Variable:
- days
- hours
- 

*/


#pragma strict

function Start () {

}

function Update () {

}