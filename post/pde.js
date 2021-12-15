



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
## 三类基本的二阶PDE
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

## Gradient

$$gradu=(\\frac{\\partial u}{\\partial x}, \\frac{\\partial u}{\\partial y}, \\frac{\\partial u}{\\partial z})$$

u -> 必须为数量场 $u(x ,y , z)$, $u(x ,y , z , t)$

### Gradient field

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

## Divergence 散度

let$$A(x, y , z) = (P(x , y, z) , Q(x, y, z) , R(x, y, z))$$ is vector function on the spatial region V, define
$$D(x , y , z) = \\frac{\\partial P}{\\partial x}, \\frac{\\partial Q}{\\partial y}, \\frac{\\partial R}{\\partial z}$$
is defined as the Divergence of A in (x, y, z)

令$n = (cos\\alpha , cos\\beta , cos\\gamma)$为曲面的单位法向量，则$d\\vec{S}=ndS$称为面积元素向量
Gauss law 可写作如下向量形式


$$\\iiint\\limits_{V} divAdV=\\oiint_S A\\cdot dS$$



在V中任取一点$M_0$，对上式左边使用中值定理
$$\\iiint\\limits_{v} divAdV = divA(M^{*}\\cdot \\bigtriangleup V = \\oiint_{S} A\\cdot dS)$$

$$divA(M_0)=\\lim_{V \\to M_0} \\frac{\\oiint_{S}A\\cdot dS}{\\bigtriangleup V}$$

![不同的向量场的散度。向量场自点(x,y)的散度等于它在这个点上的x分量关于x的偏导数与y分量关于y的偏导数的和： $\\nabla \\cdot (V(x,y))=\\frac{\\partial V_x(x,y)}{\\partial x}+\\frac{V_y}{}$](../img/pde/D.png)

### Divergence Basic Nature

1. if u , v is scalar function

$$\\nabla \\cdot (u + v) = \\nabla \\cdot u + \\nabla \\cdot v$$

2. if $\\varphi$ is scalar function , F is vector function , then 
$$\\nabla \\cdot (\\varphi F) = \\varphi \\nabla \\cdot F + F \\cdot \\nabla \\varphi$$

3. if $\\varphi=\\varphi(x , y , z)$is a scalar function
$$\\nabla\\cdot\\nabla\\varphi=\\frac{\\partial^{2} \\varphi}{\\partial x}+ \\frac{\\partial^{2} \\varphi}{\\partial y}+\\frac{\\partial^2 \\varphi}{\\partial z} = \\nabla \\varphi$$


----------- 

## Curl field

let $A(x , y , z) = (P(x , y, z) , Q(x, y, z) , R(x, y, z))$ is vector function in $V^3$, for evey point (x , y , z) in $V^3$, define function

$$F(x , y , z) = (\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z} , \\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x} , \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}) = $$ $$ \\begin{vmatrix}
&i  &j &k \\\\
&\\frac{\\partial}{\\partial x}  &\\frac{\\partial}{\\partial y}  &\\frac{\\partial}{\\partial z} \\\\
&P  &Q  &R
\\end{vmatrix}$$

This is Curl of vector in (x , y , z) , note as

$$F(x , y , z) = curlA$$

the vector version

$$curlA=\\nabla \\times A$$

![set](../img/12_13.png)

$P(x,y),Q(x,y) \\in C(\\overline{\\Omega}) \\bigcup C^2(\\Omega)$

$$\\iint\\limits_{\\Omega} \\frac{\\partial Q}{\\partial x} + \\frac{\\partial P}{\\partial y} d\\sigma = \\oint\\limits_{\\partial \\Omega}Pdx + QdxdS$$

becuase $dx = -cos(n , y)dS , dy=cos(n , x)dS$

$$\\iint\\limits_{\\Omega} \\frac{\\partial Q}{\\partial x} + \\frac{\\partial P}{\\partial y} d\\sigma = \\oint\\limits_{\\partial \\Omega}Pcos(n,x) + Qcos(n,y)dS$$

$\\overline{\\Omega}$ -> $\\Omega$的闭包 $\\Omega \\cap \\partial \\Omega$.

$C(\\overline{\\Omega})$在$\\overline{\\Omega}$上的所有连续函数集合

$C^2(\\Omega)$在$\\Omega$上直到二阶导数连续的函数集合

### Gauss's theorem(Divergence theorem)

let $P,Q,R in C^1(V),S=\\partial V$, then

$$\\iiint\\limits_{V}(\\frac{\\partial P}{\\partial x}  + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z})dxdydz = \\oiint\\limits_{\\partial V}Pdydz+Qdzdx+Rdxdy$$

vector variant

$$\\iiint\\limits_{V} divAdv = \\oiint\\limits_{\\partial V} A\\cdot dS = \\oiint\\limits_{\\partial V} A\\cdot ndS$$
> $n=(cos(n,x),cos(n,y),cos(n,z))$

### Gauss' theorem variants

1. let $A=\\nabla u$

$$\\iiint\\limits_{V} \\nabla\\cdot \\vec{A}dV=\\iiint\\limits_{V}\\nabla\\cdot\\nabla u dV = \\iiint\\limits_{V}\\triangle u dv = \\oiint\\limits_{\\partial V} \\nabla u \\cdot \\vec{n}dS$$

$$\\iiint\\limits_{V}\\triangle udV = \\oiint\\limits_{\\partial V}\\nabla u \\cdot dS = \\oiint\\limits_{\\partial V}\\nabla u \\cdot n dS = \\oiint\\limits_{\\partial S} \\frac{\\partial u}{\\partial n} dS$$

2. let $A=u\\nabla v$
>Green's identities 1th.
$$\\iiint\\limits_{V} u\\triangle v dV = \\oiint\\limits_{\\partial V} u\\frac{\\partial v}{\\partial n}dS - \\iiint\\limits_{V}\\nabla u \\cdot \\nabla v dV$$
$$\\iiint\\limits_{V}\\nabla\\cdot(u\\nabla v) = \\iiint\\limits_{V}\\nabla\\cdot\\nabla V+u\\triangle v = \\oiint\\limits_{\\partial V} u\\frac{\\partial v}{\\partial n} dS$$
The same , let $A=v\\nabla u$ available
$$\\iiint\\limits_V v\\triangle udV=\\oiint\\limits_{\\partial V} v\\frac{\\partial u}{\\partial n}dS - \\iiint\\limits_V\\nabla u \\cdot \\nabla v dV$$
Subtract to get

> Green's identities 2th.
$$\\iiint\\limits_V v\\triangle u - u\\triangle v dV = \\oiint\\limits_{\\partial V} v\\frac{\\partial u}{\\partial n} - u\\frac{\\partial v}{\\partial n}dS$$

## some inequalities

Cauchy inequality

$$ab \\le \\frac{a^2}{2} + \\frac{b^2}{2}$$

Cauchy inequality

$$ab \\le \\epsilon a^2 + \\frac{b^2}{4\\epsilon}$$

Holder inequality

set $1\\le q , q\\le \\infty, \\frac{1}{p} + \\frac{1}{q} = 1$ , then if $u \\in L^p(\\Omega) , v\\in L^q(\\Omega)$

$$\\int\\limits_{\\Omega} |uv|dx \\le u_{L^p(\\Omega)} v_{L^q(\\Omega)}$$

Cauchy-Schwarz inequality

$$|x\\cdot y| \\le |x||y| , x , y \\in R^n$$

### linear Functional Analysis 线性泛函分析

Let X denote a real linear space 

define norm(范数)

if a map $$\\left |  \\right | : X -> [0,\\infty)$$ meet the following conditions

$$\\left | u + v \\right | \\le \\left | u \\right | + \\left | v  \\right | , \\forall v, u \\in X$$

$$\\left | \\lambda u \\right | = |\\lambda|\\left | u  \\right | , \\forall u \\in X , \\lambda \\in R$$

$$\\left | u \\right | = 0$$, only u = 0 

then X is norm

we assume that X is Normed vector spaces

define 

if the sequence $\\{ [u_k]\\}_{k=1}^{\\infty}$ in X , meet

$$\\lim\\limits_{k->\\infty} \\left | u_k - u \\right | = 0$$

Then the sequence converges to $u\\in X$ , note as  
$$u_k -> u$$

define 

## conservation laws

### Momentum conservation and string vibration equation 

#### Physical model

两端固定 拉紧 均匀柔软 的长度为l的细弦 ， 在垂直与弦方向的外力作用下在平衡位置附近作微小的横震动，求弦上个点的运动规律

#### Ideal hypothesis

两端固定 Boundart conditions

拉紧 The length of the string = the length occupied by the x axis $u(x , y ) , x \\in [0,l]$

均匀柔软 line density $\\rho = const$，形变时不抵抗弯曲，各质点间的张力方向与弦的切线方向一致

细弦 横截面小，与长度相比可忽略

微小的横震动  震动小，震动过程中弦的长度没有变化

![0](../img/pde/string.png)

取弦上任意一段 x1 到 x2 作为研究对象，分析其受力情况，
设弦上 x 点处 t 时刻受到弦的张力为 T(x, t)，记
T(x, t) = |T(x, t)|

proof $T(x , t) \\equiv const$

#### T(x,t) = T(x)

proof the length of string does not change over time 

Hooke's law $$F=-kx$$

$$F(t_2) - F(t_1) = -k(S(t_2) - S(t_1))$$

then we kown the tension does not change over time

$$S(t) = \\int_{x_1}^{x_2} \\sqrt{1+(\\frac{\\partial u}{\\partial x})^2 }dx$$
(曲线长度积分公式)

due to $\\frac{\\partial u}{\\partial x}$ minimal , $o(x_2 - x_1)$

$$S(t) \\approx x_2 - x_1$$

#### T(x) == const

due to the string has no displacement in the x direction , the resultant force in this direction is zero.

$$\\textrm{in } x_1: T_x(x_1)=-T(x_1)cos(\\pi - \\alpha_1) = T(x_1)cos\\alpha_1$$

$$\\textrm{in }x_2: T_x(x_2)=T(x_2)cos\\alpha_2$$

resultant force: $T(x_1)cos\\alpha_1 + T(x_2)cos\\alpha_2 = 0$

$$cos(\\pi - \\alpha_1) = \\lim\\limits_{\\Delta x -> 0} \\frac{\\Delta x}{\\sqrt{\\Delta x^2 + \\Delta u^2}}$$
$$=\\frac{1}{\\sqrt{1+[\\frac{\\partial u(x,t)}{\\partial x}]^2}}\\approx 1 => \\alpha_1 \\approx \\pi$$

similar,$cos\\alpha_1 \\approx -1 . cos\\alpha_2 \\approx 1$ => $T(x_1) = T(x_2) \\equiv const$

![](../img/pde/dir.png)





`);