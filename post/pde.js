

document.getElementById('content').innerHTML =
marked.parse(`# Partial differential equation

------------

> * 由于tiz要期末考试了，所以没什么时间，只能用半中文记笔记了 

let $$x = (x_1, x_2, x_3, ..., x_m)$$and define Multi-index（多重指标）

$$\\alpha=(\\alpha_1 , \\alpha_2, ... , \\alpha_m),|\\alpha|=\\alpha_1+...+\\alpha_m$$

$|\\alpha|$^[阶数]$=\\alpha_1+...+\\alpha_m$, then can define this symbol

$$D^{\\alpha}u=\\frac{\\partial^{|\\alpha|}u}{\\partial x_1^{\\alpha_1}...\\partial x_m^{\\alpha_m}}$$

linear: $\\sum_{|\\alpha| \\le N}A_{\\alpha}(x)D^{\\alpha}u=g(x)$

nonlinear:
1. semi-linear 主部线性
2. quasi-linear 最高阶导数本身是线性的
3. fully-nonlinear 对u的最高阶导数非线性

齐次方程-只包含u及其导数的是齐次方程

------------
三类基本的二阶PDE
1.双曲型方程： 波动方程
$$\\frac{\\partial^2u}{\\partial t^2}-a^2\\bigtriangleup u=f(t,x)$$
2.抛物型方程： 热传导方程
$$\\frac{\\partial u}{\\partial t}-a^2\\bigtriangleup u=f(t,x)$$
3.椭圆型方程： 位势方程
$$-\\bigtriangleup u=f(x)$$

1,2 u depends on time $t:u(t,x)$ [发展方程]

3 u only depends on spatial variables $x:u(x)$ [稳态方程]

$$\\bigtriangleup = \\sum_{i=1}^{m} \\frac{\\partial ^2}{\\partial x_i^2}$$

------------

Gradient

$$gradu=(\\frac{\\partial u}{\\partial x}, \\frac{\\partial u}{\\partial y}, \\frac{\\partial u}{\\partial z})$$

u -> 必须为数量场 $u(x ,y , z)$, $u(x ,y , z , t)$

Gradient field

$$\\nabla=(\\frac{\\partial }{\\partial x}, \\frac{\\partial }{\\partial y}, \\frac{\\partial   }{\\partial z})$$

1. if u , v is scalar function

$$\\nabla(u + v) = \\nabla u + \\nabla v$$
> Becuase $\\nabla$ is linear
$$\\nabla(u \\cdot v) = u(\\nabla v) + (\\nabla u) v$$
$$\\(u^2)=2u(\\nabla u)$$

2. if $r = (x , y , z), \\varphi = \\varphi(x, y , z)$
$$d\\varphi = dr \\cdot \\nabla \\varphi$$

> $$d\\varphi = \\varphi_x dx + \\varphi_y dy + \\varphi_z dz$$
>
> $$=(\\varphi_x,\\varphi_y, \\varphi_z)\\cdot(dx, dy, dz)$$

3. if $f=f(u) , u=u(x, y, z)$
$$\\nabla=f^{'}(u) \\nabla u$$

>$$ \\nabla(x, y, z)f=(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z})$$
>
>$$=(f^{'}\\frac{\\partial u}{\\partial x}, f^{'}\\frac{\\partial u}{\\partial y}, f^{'}\\frac{\\partial u}{\\partial z})$$

---------

Divergence 散度

let$$A(x, y , z) = (P(x , y, z) , Q(x, y, z) , R(x, y, z))$$ is vector function on the spatial region V, define
$$D(x , y , z) = \\frac{\\partial P}{\\partial x}, \\frac{\\partial Q}{\\partial y}, \\frac{\\partial R}{\\partial z}$$
is defined as the Divergence of A in (x, y, z)

令$n = (cos\\alpha , cos\\beta , cos\\gamma)$为曲面的单位法向量，则$dS=ndS$称为面积元素向量
Gauss formula 可写作如下向量形式
$$\\iiint\\limits_{V} divAdV=\\oiint_S A\\cdot dS$$

`);