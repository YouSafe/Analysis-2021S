# Länger 2019S

## Hilfreiches

**Satz 4.53 (Limesform des Quotientenkriteriums)**:
Aus $\displaystyle \limsup_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| < 1$ folgt die absolute Konvergenz der Reihe $\displaystyle \sum_n a_n$ und aus $\displaystyle \limsup_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| > 1$ deren Divergenz.

## Aufgabe 1

(Achtung Folge; keine Reihe)

Berechnen Sie $\displaystyle \lim_{n \to \infin} \left(\sqrt{\frac{n^2+1}{n^4+1}}+\sqrt{\frac{n^2+2}{n^4+2}}+ … + \sqrt{\frac{n^2+n}{n^4+n}}\right)$.

$\displaystyle \lim_{n \to \infin} \sum_{k=1}^n \sqrt{\frac{n^2+k}{n^4+k}}$

**Sandwich-Theorem**

$\displaystyle \sum_{k=1}^n \sqrt{\frac{n^2+k}{n^4+k}}$

**kleiner**:

$\displaystyle \sum_{k=1}^n \sqrt{\frac{n^2}{n^4+n}}=n \cdot \sqrt{\frac{n^2}{n^4+n}}= \sqrt{\cancel{n^2}\cdot \frac{\frac{1}{\cancel{n^2}}}{1+\frac{1}{n^3}}}=\sqrt{\frac{1}{1+\frac{1}{n^3}}}$

$\displaystyle \lim_{n \to \infin} \sqrt{\frac{1}{1+\frac{1}{n^3}}}=1$

**größer**:

$\displaystyle \sum_{k=1}^n \sqrt{\frac{n^2+n}{n^4}}=n\cdot\sqrt{\frac{n^2+n}{n^4}}=\sqrt{\cancel{n^2}\cdot\frac{\frac{1}{\cancel{n^2}}+\frac{1}{\cancel{n^3}}}{1}}=\sqrt{1+\frac{1}{n}}$ 

$\displaystyle \lim_{n \to \infin} \sqrt{1+\frac{1}{n}}=1$


$\displaystyle \implies \lim_{n \to \infin} \sum_{k=1}^n \sqrt{\frac{n^2+k}{n^4+k}} =1$

## Aufgabe 2

Zeigen Sie, dass $\displaystyle \sum_{n=0}^{\infin}\frac{3^n\cdot n! \cdot n!}{(2n)!}$ konvergiert.

**Quotientenkriterium**:

$\displaystyle \lim_{n \to \infin} \left|\frac{a_{n+1}}{a_n}\right|$

$\displaystyle =\lim_{n \to \infin} \left|\frac{\frac{3^{(n+1)}\cdot (n+1)! \cdot (n+1)!}{(2(n+1))!}}{\frac{3^n\cdot n! \cdot n!}{(2n)!}}\right|$

$\displaystyle = \lim_{n \to \infin}\frac{3^{(\cancel{n}+1)}\cdot (n+1)\cancel{!} \cdot (n+1)\cancel{!}\cdot \cancel{(2n)!}}{(2n+2)\cancel{!}\cdot \cancel{3^n}\cdot \cancel{n!} \cdot \cancel{n!}}$

$\displaystyle= \lim_{n \to \infin}\frac{3\cdot(n+1)\cdot(n+1)}{(2n+2)\cdot(2n+1)}$

$\displaystyle=\lim_{n \to \infin} \frac{3\cdot\cancel{(n+1)}\cdot(n+1)}{2\cancel{(n+1)}\cdot(2n+1)}$

$\displaystyle=\lim_{n \to \infin} \frac{3\cdot(n+1)}{2\cdot(2n+1)}$

$\displaystyle=\lim_{n \to \infin} \frac{3n+3}{4n+2}$

$\displaystyle=\lim_{n \to \infin} \frac{\cancel{n}\cdot(3+\frac{3}{n})}{\cancel{n}\cdot(4+\frac{2}{n})}$

$\displaystyle=\lim_{n \to \infin}\frac{3+\frac{3}{n}}{4+\frac{2}{n}}=\frac{3}{4}$

$\displaystyle \frac{3}{4} < 1 \implies$ Reihe konvergiert.