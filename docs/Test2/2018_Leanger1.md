# Länger 2018S

## Aufgabe 1


Berechnen Sie $\displaystyle \int \sin{(x)\cdot \cos{(x)}}\;dx$

$u=\sin{(x)}$ \
$\frac{du}{dx}=\cos{(x)}$ \
$dx=\frac{du}{\cos{(x)}}$

$\displaystyle \int u \cdot \cancel{\cos{(x)}}\cdot \frac{du}{\cancel{\cos{(u)}}}$

$\displaystyle \int u \cdot du$

$\displaystyle  \frac{u^2}{2}+c$

## Aufgabe 2

Berechnen Sie $\displaystyle \int \frac{5x+7}{x^2+3x+2}\; dx$

Zählergrad < Nennergrad → keine Polynomdivision

$\displaystyle \int \frac{5x+7}{(x+1)(x+2)}\; dx$

$\displaystyle \frac{5x+7}{(x+1)(x+2)}=\frac{A}{x+1}+\frac{B}{x+2}$

$5x+7=A(x+2)+B(x+1)$ \
$5x+7=Ax+2A+Bx+B$ 

$5x+7=x(A+B)+2A+B$

$A+B=5$ \
$2A+B=7$

$A=2$ \
$B=3$

$\displaystyle \int \frac{2}{x+1}+\frac{3}{x+2}\; dx$

$2\cdot \ln{|x+1|}+3\cdot \ln{|x+2|}+c$ 
