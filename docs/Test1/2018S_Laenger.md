# Länger 2018S

## Hilfreiches

## Aufgabe 1

siehe [2019S Länger 2](./2019S_Laenger2#aufgabe-1)

## Aufgabe 2

Zeigen Sie, dass $\displaystyle \sum_{n=1}^{\infin} \frac{3^n}{\binom{2n}{n}}$ konvergiert. $\displaystyle \left(\binom{n}{k}=\frac{n!}{k!\cdot(n-k)!}\right)$

$\displaystyle \sum_{n=1}^{\infin} \frac{3^n}{\binom{2n}{n}}$

$\displaystyle =\sum_{n=1}^{\infin} \frac{3^n}{\frac{(2n)!}{n!\cdot(2n-n)!}}$

$\displaystyle = \sum_{n=1}^{\infin}\frac{3^n \cdot n!\cdot n!}{(2n)!}$

**Quotientenkriterium**:

$\displaystyle \lim_{n \to \infin} \left|\frac{\frac{3^{n+1} \cdot (n+1)!\cdot (n+1)!}{(2(n+1))!}}{\frac{3^n \cdot n!\cdot n!}{(2n)!}}\right|$

$\displaystyle = \lim_{n \to \infin} \frac{(n+1)!\cdot (n+1)!\cdot3^{n+1} \cdot (2n)!}{3^n \cdot (2n+2)!\cdot n!\cdot n!}$

$\displaystyle = \lim_{n \to \infin} \frac{(n+1)\cancel{!}\cdot (n+1)\cancel{!}\cdot3^{\cancel{n}+1} \cdot \cancel{(2n)!}}{\cancel{3^n}\cdot (2n+2)\cancel{!}\cdot \cancel{n!}\cdot \cancel{n!}}$

$\displaystyle = \lim_{n \to \infin} \frac{3 \cdot (n+1)\cdot (n+1)}{(2n+2)\cdot(2n+1)}$

$\displaystyle = \lim_{n \to \infin} \frac{3 \cdot \cancel{(n+1)}\cdot (n+1)}{2\cancel{(n+1)}\cdot(2n+1)}$

$\displaystyle = \lim_{n \to \infin} \frac{3n+3}{4n+4}$

$\displaystyle = \lim_{n \to \infin} \frac{\cancel{n}(3+\frac{3}{n})}{\cancel{n}(4+\frac{4}{n})}$

$\displaystyle = \lim_{n \to \infin} \frac{3+\frac{3}{n}}{4+\frac{4}{n}}=\frac{3}{4} < 1 \implies$Die Reihe ist absolut konvergent.