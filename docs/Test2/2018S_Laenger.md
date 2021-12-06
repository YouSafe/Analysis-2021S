# Länger 2018S

## Aufgabe 1

Berechnen Sie mit Hilfe von Riemannschen Obersummen bei äquidistanten Teilung $\displaystyle \int_0^1 x \;dx$

(Hinweis: $\displaystyle \sum_{i=1}^n i = \frac{n(n+1)}{2}$)

$\Delta x = \frac{b-a}{n}=\frac{1}{n}$

$\displaystyle \sum_{i=1}^n f(a+\Delta x \cdot i) \cdot \Delta x$


$\displaystyle \frac{1}{n} \cdot \sum_{i=1}^n f(\frac{i}{n})$

$\displaystyle \frac{1}{n} \cdot \sum_{i=1}^n \frac{i}{n}$

$\displaystyle \frac{1}{n^2} \cdot \sum_{i=1}^n i$

$\displaystyle \frac{1}{n^2} \cdot \frac{n(n+1)}{2}$

$\displaystyle \frac{n(n+1)}{2n^2}$

$\displaystyle \frac{\cancel{n^2}(1+\frac{1}{n})}{2\cancel{n^2}}$

$\displaystyle \lim_{n \to \infin}\frac{(1+\frac{1}{n})}{2}=\frac{1}{2}$ 


## Aufgabe 2


Berechnen Sie mittels impliziten Differenzierens die Gleichungen der Tangenten an die Kurve $x^2+xy+y^2=1$ mit der Steigung $\pm 1$.

### implizites Differenzieren

Quelle: ANA Karigl VO 2020W vom 2021-01-12 circa 00:52:26

$F(x,y(x))=0 \xrightarrow{\frac{d}{dx}} F_x\cdot \frac{dx}{dx}+F_y\cdot \frac{dy}{dx}=0$ (Kettenregel)

$F_x+F_y \cdot y'(x)=0$

### Punkte mit Steigung $\pm 1$

$F(x,y) =x^2+xy+y^2-1=0$

$F_x(x,y)=2x+y$ \
$F_y(x,y)=x+2y$

$(2x+y) + (x+2y) \cdot y'=0$ \
$2x+y+xy'+2yy'=0$

**Fall $y'=1$**

$2x+y+x+2y=0$ \
$3x=-3y$ \
$x=-y$

$x^2+xy+y^2=1$\
$(-y)^2+(-y)\cdot y +y^2=1$ \
$\cancel{y^2}-\cancel{y^2}+y^2=1$

$x=\pm 1$
$y =\mp1$

Punkte: $(1,-1),\quad (-1,1)$

**Fall $y'=-1$**

$2x+y+x\cdot (-1)+2y\cdot (-1)=0$ \
$2x+y-x-2y=0$ \
$x=y$

$x^2+xy+y^2=1$ \
$y^2+y^2+y^2=1$ \
$3y^2=1$ 

$x=y=\pm\frac{1}{\sqrt{3}}$

Punkte: $(\frac{1}{\sqrt{3}},\frac{1}{\sqrt{3}}), \quad (-\frac{1}{\sqrt{3}},-\frac{1}{\sqrt{3}})$

### Tangenten

$y=y_0+k\cdot (x-x_0)$

**Steigung $y'=1$**

im Punkt $(1,-1)$:\
$y=-1+1(x-1)$ \
$y=x-2$

im Punkt $(-1,1)$:\
$y=1+1(x+1)$ \
$y=x+2$

**Steigung $y'=-1$**

im Punkt $(\frac{1}{\sqrt{3}},\frac{1}{\sqrt{3}})$:\
$y=\frac{1}{\sqrt{3}}-1\cdot (x-\frac{1}{\sqrt{3}})$ \
$y=-x+\frac{2}{\sqrt{3}}$

im Punkt $(-\frac{1}{\sqrt{3}},-\frac{1}{\sqrt{3}})$:\
$y=-\frac{1}{\sqrt{3}}-1\cdot (x+\frac{1}{\sqrt{3}})$ \
$y=-x-\frac{2}{\sqrt{3}}$