# Overview
Rather than having the aim of my game be to catch demons from hell (my first idea), I decided to have the player catch pieces of coursework to reflect how I and many other first year students sometimes struggle with the university workload. I decided on a pixelated aesthetic so that the game looked simple yet visually appealing. To do this, I used an pixel avatar generator to create the game avatar. I designed the other elements, such as the paper, pencil and flames, in a pixel art maker. Furthermore, I downloaded 8-bit music to play in the background and a font that matched the aesthetic to use for the text. 
Originally, I wanted the game to consist of an avatar in the centre of the screen that can shoot pencils (using the arrow keys) at the pieces of paper (white rectangles) rising from the bottom of the screen. Unfortunately, I found it difficult to correctly code the mechanics needed for this idea. I decided to change the game so that the avatar moves horizontally with the use of the right and left arrow keys. When the avatar touches the coursework (white rectangles), they disappear and a point is added to the players score. 
There is a 30 second timer and the aim of the game is to catch as many of the pieces of coursework as possible. Before the game begins, there is a title screen that displays the name and controls of the game; this can be exited by clicking the mouse. When the time limit is up, the players rank and score is displayed. 
I could extend this game by adding multiple rounds that increase in difficulty.

[Start screen](startscreen.png)
[Playing screen](playingscreen.png)
[End screen](endscreen.png)
# Referenced code/images:
Run as fast as you can by Pix used as background music.
Link: https://youtu.be/tQR6jyfK6Ps?feature=shared

04b_30 font by 04  used for all displayed text.
Link: https://www.dafont.com/04b-30.font

Avatar image ('lavatar' and 'ravatar')created using Avatars in Pixels generator.
Link: https://www.avatarsinpixels.com/

Method from random-appearing-blocks-timer used in lines 53-64,143,166,174.
Link: https://github.com/anthillsocial/Coding-for-the-arts/blob/main/GameComponents/random-appearing-blocks-timer/sketch.js

Method from Rectangle Collision by rjgilmour on p5js editor used in lines 145-151.
Link: https://editor.p5js.org/rjgilmour/sketches/F8RUWBXIW
