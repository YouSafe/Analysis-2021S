# Länger 2018S

## Hilfreiches

## Aufgabe 1

Zeigen Sie, dass die Folge $\displaystyle \left(\frac{1}{n}+\frac{1}{n+1}+...+\frac{1}{2n}\right)$ monoton ist und konvergent. \
$\displaystyle \left(\frac{1}{n}=\frac{1}{2n}+\frac{1}{2n}\right)$

$\displaystyle \sum_{k=0}^{n}\frac{1}{n+k}$

**Monotonie**:

$\displaystyle \sum_{k=0}^{n+1}\frac{1}{n+1+k}<\sum_{k=0}^{n}\frac{1}{n+k}$

$\displaystyle \cancel{\frac{1}{n+1}}+\cancel{\frac{1}{n+2}}+...+\frac{1}{2n+1}+\frac{1}{2n+2}<\frac{1}{n}+\cancel{\frac{1}{n+1}}+...+\cancel{\frac{1}{2n}}$

$\displaystyle \frac{1}{2n+1}+\frac{1}{2n+2}<\frac{1}{n}\iff \frac{1}{2n+1}+\frac{1}{2n+2} < \frac{1}{2n}+\frac{1}{2n}$

Die Folge ist damit streng monoton fallend.

**Konvergenz**:
Sandwich-Theorem:



## Aufgabe 2

Zeigen Sie, dass $\displaystyle \sum_{n=1}^{\infin}\left(\sqrt{n^2+2n}-\sqrt{n^2+n}\right)^n$ konvergiert.

$\displaystyle \sum_{n=1}^{\infin}\left(\sqrt{n^2+2n}-\sqrt{n^2+n}\cdot \frac{\sqrt{n^2+2n}+\sqrt{n^2+n}}{\sqrt{n^2+2n}+\sqrt{n^2+n}}\right)^n$

$\displaystyle \sum_{n=1}^{\infin}\left(\frac{(n^2+2n)-(n^2+n)}{\sqrt{n^2+2n}+\sqrt{n^2+n}}\right)^n$

$\displaystyle \sum_{n=1}^{\infin}\left(\frac{n}{\sqrt{n^2+2n}+\sqrt{n^2+n}}\right)^n$

**Wurzelkriterium**:

$\displaystyle \lim_{n \to \infin} \sqrt[n]{\left|\left(\frac{n}{\sqrt{n^2+2n}+\sqrt{n^2+n}}\right)^n\right|}$

$\displaystyle = \lim_{n \to \infin} \sqrt[n]{\left|\left(\frac{n}{\sqrt{n^2+2n}+\sqrt{n^2+n}}\right)\right|^n}$

$\displaystyle =\lim_{n \to \infin} \left(\frac{n}{\sqrt{n^2+2n}+\sqrt{n^2+n}}\right)$

$\displaystyle = \lim_{n \to \infin} \left(\frac{\cancel{n}}{\cancel{n}\left(\sqrt{1+\frac{2}{n}}+\sqrt{1+\frac{1}{n}}\right)}\right)$

$\displaystyle =\lim_{n \to \infin} \left(\frac{1}{\sqrt{1+\frac{2}{n}}+\sqrt{1+\frac{1}{n}}}\right)$

$\displaystyle =\frac{1}{\lim_{n \to \infin} \left(\sqrt{1+\frac{2}{n}}\right)+\lim_{n \to \infin}\left(\sqrt{1+\frac{1}{n}}\right)}$

$\displaystyle = \frac{1}{\sqrt{\lim_{n \to \infin}(1+\frac{2}{n})}+\sqrt{\lim_{n \to \infin} (1+\frac{1}{n})}}$

$\displaystyle = \frac{1}{\sqrt{1}+\sqrt{1}}=\frac{1}{2}<1 \implies$ die Reihe ist absolut konvergent.