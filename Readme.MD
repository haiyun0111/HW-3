Q: What code draws the blades of grass?

A: line(x, height-10, x+random(-10, 10), height-10-random(h));
    
Q: What code makes the "lawnmower" come by? How often does it come by?

A: if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h=10;
    
    the change the (1000)> 999 is able to draw the blades.
    
    When the grass reach to the point of random(1000)>999, the lawnmovwer will come by.

Q: What's the point of the h variable?

A: h refers to the height of lines.

Q:What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?

A: height-10 refers to the position of the grass height, which is y1, height can determine the grass length.
They can determine the grass's position and the length. 
