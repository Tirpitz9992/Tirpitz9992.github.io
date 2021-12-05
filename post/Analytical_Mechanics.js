document.getElementById('content').innerHTML =
      marked.parse(`# Analytical Mechanics

------

# Mechanics of a particle

let r be the radius vector of a particle frome some given origin and v its vector velocity:

$$
v=\\frac{dr}{dt}
$$

The linear momentum p

$$
p=mv
$$
    
Because Newton's second law of motion, get

$$
F=\\frac{dp}{dt} \\equiv \\dot{p}
$$

or 

$$
F=\\frac{d}{dt}(mv)
$$

In most instance, the mass of the particle is constant

$$
F=m\\frac{dv}{dt}=ma
$$

then

$$
a=\\frac{d^2r}{dt^2}
$$

In order to facilitate calculations, convert to a rectangular coordinate system.

$$
r=xi+yj+zk
$$
$$
v=\\frac{dr}{dt}=\\dot{x}i+\\dot{y}j+\\dot{z}k
$$
$$
\\begin{matrix}
r=ri \\\\
v=\\frac{r}{t}
\\end{matrix}
$$


`);