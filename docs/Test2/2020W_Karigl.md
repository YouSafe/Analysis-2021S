# Karigl 2020W

## Aufgabe 1

Man berechne das Integral$\displaystyle \int \frac{5x+6}{x^3-4x}\;dx$ mittels Partialbruchzerlegung.

$\displaystyle \int \frac{5x+6}{x(x-2)(x+2)}\;dx$


$\displaystyle \frac{5x+6}{x(x-2)(x+2)} = \frac{A}{x}+\frac{B}{x-2}+\frac{C}{x+2}$

$5x+6=A(x-2)(x+2)+B(x+2)x+C(x-2)x$ \
$5x+6=Ax^2-4A+Bx^2+2Bx+Cx^2-2Cx$

$A+B+C=0$ \
$2B-2C=5$ \
$-4A=6$

$A=-\frac{3}{2}, \quad B=2, \quad C=-\frac{1}{2}$


$\displaystyle \int \frac{5x+6}{x(x-2)(x+2)}\;dx=-\frac{3}{2}\int \frac{1}{x} \;dx +2 \int \frac{1}{x-2}\;dx - \frac{1}{2}\int \frac{1}{x+2}\;dx$

$\displaystyle \int \frac{5x+6}{x(x-2)(x+2)}\;dx=-\frac{3}{2} \ln{(|x|)} +2 \ln{(|x-2|)} - \frac{1}{2} \ln{(|x+2|)}+c$

## Aufgabe 2

Man bestimme $\alpha$ derart, dass $\int_0^\infin 6 \alpha e^{-3x} \; dx=\frac{2}{3}$.

$\displaystyle 6 \alpha \lim_{b \to \infin}\left((-\frac{e^{-3x}}{3}) \Big|_0^b\right)=\frac{2}{3}$

$\displaystyle 6 \alpha \lim_{b \to \infin}\left((-\frac{e^{-3b}}{3})-(-\frac{e^{-0}}{3})\right)=\frac{2}{3}$

$\displaystyle 6 \alpha \lim_{b \to \infin}\left(-\frac{1}{3e^{3b}}+\frac{1}{3}\right)=\frac{2}{3}$

$\displaystyle 6 \alpha \frac{1}{3}=\frac{2}{3}$

$\displaystyle\alpha=\frac{1}{3}$

## Aufgabe 3

Für die Funktion $\displaystyle f(x,y)=2021+\frac{5x+12}{y-1}$ berechne man den Gradienten $\operatorname{grad}{f(x,y)}$ und die Gleichung der Tangentialebene an der Stelle $(x_0,y_0)=(-1,0)$.

$f_x(x,y)=\frac{5}{y-1}$

$f_y(x,y)=\frac{-(5x+12)}{(y-1)^2}$

$\displaystyle \operatorname{grad}{f(x,y)} =\begin{pmatrix}\frac{5}{y-1} \\ \frac{-(5x+12)}{(y-1)^2}\end{pmatrix}$

$T(x)=f(x_0,y_0)+\operatorname{grad}{f(x_0,y_0)}\cdot \begin{pmatrix}x-x_0 \\y-y_0\end{pmatrix}$

$T(x)=2014-5(x+1)-7y$

