# Länger 2019S

## Hilfreiches

### Potenzregel

$\displaystyle \lim_{n \to \infin} \sqrt[p]{a_n}=\sqrt[p]{\lim_{n \to \infin} a_n}=\sqrt[p]{a}$

### Satz 4.53 (Limesform des Quotientenkriteriums)

Aus $\displaystyle \limsup_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| < 1$ folgt die absolute Konvergenz der Reihe $\displaystyle \sum_n a_n$ und aus $\displaystyle \liminf_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| > 1$ deren Divergenz.

## 1. Aufgabe 

Berechnen Sie $\displaystyle \lim_{n \to \infin} (\sqrt{n^2+3n+2}-\sqrt{n^2+n+1})$.

$\displaystyle \lim_{n \to \infin} \left((\sqrt{n^2+3n+2}-\sqrt{n^2+n+1})\cdot\frac{\sqrt{n^2+3n+2}+\sqrt{n^2+n+1}}{\sqrt{n^2+3n+2}+\sqrt{n^2+n+1}}\right)$

$\displaystyle \lim_{n \to \infin} \frac{2n+1}{\sqrt{n^2+3n+2}+\sqrt{n^2+n+1}}$

$\displaystyle \lim_{n \to \infin} \frac{n(2+\frac{1}{n})}{\sqrt{n^2(1+\frac{3}{n}+\frac{2}{n^2})}+\sqrt{n^2(1+\frac{1}{n}+\frac{1}{n^2})}}$

$\displaystyle \lim_{n \to \infin} \frac{\cancel{n}(2+\frac{1}{n})}{\cancel{n}\sqrt{1+\frac{3}{n}+\frac{2}{n^2}}+\cancel{n}\sqrt{1+\frac{1}{n}+\frac{1}{n^2}}}$

$\displaystyle \frac{\lim_{n \to \infin} (2+\frac{1}{n})}{\sqrt{\lim_{n \to \infin}(1+\frac{3}{n}+\frac{2}{n^2})}+\sqrt{\lim_{n \to \infin}(1+\frac{1}{n}+\frac{1}{n^2})}}$ (siehe Potenzregel)

$\displaystyle \frac{2}{\sqrt{1}+\sqrt{1}}=1$ 

$\displaystyle \lim_{n \to \infin} (\sqrt{n^2+3n+2}-\sqrt{n^2+n+1})=1$

## 2. Aufgabe

Zeigen Sie, dass $\displaystyle \sum_{n=1}^{\infin} \frac{n!}{n^{n-1}}$ konvergent ist. (Hinweis: $\displaystyle \lim_{n \to \infin} \left(1+\frac{1}{n}\right)^n=e\approx2,71$)

Quotientenkriterium:

$\displaystyle \lim_{n \to \infty} \left|\frac{\frac{(n+1)!}{(n+1)^{(n+1)-1}}}{\frac{n!}{n^{n-1}}}\right|$

$\displaystyle = \lim_{n \to \infty} \frac{\color{orange}\cancel{(n+1)}\color{red}\cancel{!}\color{reset}n^{n-1}}{(n+1)^{n\color{orange}-1\color{reset}} \color{red}\cancel{n!}\color{reset}}$ 

$\displaystyle=\lim_{n \to \infty} \frac{n^{n-1}}{(n+1)^{n-1}}$

$\displaystyle = \lim_{n \to \infin} \frac{1}{\frac{(n+1)^{n-1}}{n^{n-1}}}$

$\displaystyle = \lim_{n \to \infin} \frac{1}{\left(\frac{n+1}{n}\right)^{n-1}}$

$\displaystyle = \lim_{n \to \infin} \frac{\frac{n+1}{n}}{\left(\frac{n+1}{n}\right)^{n}}$

$\displaystyle = \lim_{n \to \infin} \frac{1+\frac{1}{n}}{\left(1+\frac{1}{n}\right)^{n}}$

$\displaystyle = \frac{1}{e}< 1 \implies \sum_{n=1}^{\infin} \frac{n!}{n^{n-1}} \text { ist konvergent}$


