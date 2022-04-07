# sadgen

A shit attempt at making a recursive sob emote in SVG

Failed mainly because the math is super precise (because it's SVG instead of raster) and I couldn't be assed to find out the correct math since the given emote is so garbled.

`sob.svg` is original, `created.svg` is generated with 10 layers of recursion.

To run the code and generate, use `node create.js > created.svg` and look at with liveviewer or something.

![10 layers of sob](./created.svg)