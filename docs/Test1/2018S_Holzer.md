# Holzer 2018S

## Hilfreiches

**Satz 4.48 (Minorantenkriterium)**:
Seien $\sum_n a_n$ und $\sum_n b_n$ zwei Reihen, so dass $0 \le a_n \le b_n$ für fast alle $n$. Falls $\sum_n a_n$ divergent ist, so ist auch die Reihe $\sum_n b_n$ divergent.

## Aufgabe 1

Man prüfe die gegebene Folge auf Monotonie, Konvergenz und Beschränktheit und gebe gegebenenfalls die obere und untere Schranke sowie den Grenzwert an. 

$\displaystyle a_n=\frac{3n^2 + 2n}{6n^2-2}$

**Monotonie**:

$a_0=0, \quad a_1=\frac{5}{4}=1,25, \quad a_3=\frac{16}{22}\approx 0,73$

$a_n > a_{n+1}$ für $n \ge 1$

$\frac{3n^2 + 2n}{6n^2-2} > \frac{3(n+1)^2 + 2(n+1)}{6(n+1)^2-2}$

$\frac{3n^2 + 2n}{6n^2-2} > \frac{3n^2+8n+5}{6n^2+12n+4}$

$\frac{(3n^2 + 2n)(6n^2+12n+4)}{(6n^2-2)(6n^2+12n+4)} > \frac{(3n^2+8n+5)(6n^2-2)}{(6n^2+12n+4)(6n^2-2)}$

$(3n^2 + 2n)(6n^2+12n+4) > (3n^2+8n+5)(6n^2-2)$

$\cancel{18n^4}+\cancel{36n^3}+12n^2+\cancel{12n^3}+24n^2+8n > \cancel{18n^4}-6n^2+\cancel{48n^3}-16n+30n^2-10$

$30n^2+8n>24n^2-16n-10$

$6n^2+24n+10> 0$

**Grenzwert**:

$\displaystyle \lim_{n \to \infin} \frac{3n^2 + 2n}{6n^2-2}=\lim_{n \to \infin} \frac{n^2(3+\frac{2}{n})}{n^2(6-\frac{1}{n^2})}=\lim_{n \to \infin} \frac{3+\frac{2}{n}}{6-\frac{1}{n^2}}=\frac{3+0}{6-0}=\frac{1}{2}$

**Beschränktheit**:

für $n \ge 1$ ist die Folge streng monoton fallend und konvergiert gegen den Wert $\frac{1}{2}$

Der kleinste Wert ist jedoch bei $n=0$, nämlich $a_0=0$.

Die Folge ist also durch $0$ von unten beschränkt.

## Aufgabe 2

Man suche alle (uneigentlichen) Häufungspunkte der Folge:

$(-1)^{(n\cdot(n+1))}\cdot3 - \frac{1} {n} - \sin(\frac{n\pi}{2})\cdot(1 + (-1)^n)\cdot n$

i) nein
ii) nein

## Aufgabe 3

Sind die folgenden Reihen konvergent und absolut konvergent?

**erste Reihe**

$\displaystyle \sum_{n=0}^\infty = \frac{(2n)!}{2^n\cdot(n!)^2}$

Quotientenkriterium:

$\displaystyle \lim_{n \to \infin} \left|\frac{a_{n+1}}{a_n}\right|$

$\displaystyle = \lim_{n \to \infin} \left|\frac{\frac{(2(n+1))!}{2^{(n+1)}\cdot((n+1)!)^2}}{\frac{(2n)!}{2^n\cdot(n!)^2}}\right|$

$\displaystyle = \lim_{n \to \infin} \frac{(2(n+1))!\cdot2^n\cdot(n!)^2}{2^{n+1}\cdot((n+1)!)^2\cdot(2n)!}$

$\displaystyle = \lim_{n \to \infin} \frac{(2n+2)\cancel{!}\cdot\cancel{2^n}\cdot \cancel{n!}\cdot \cancel{n!}}{2^{\cancel{n}+1}\cdot(n+1)\cancel{!}\cdot(n+1)\cancel{!}\cdot\cancel{(2n)!}}$

$\displaystyle = \lim_{n \to \infin} \frac{(2n+2)(2n+1)}{2\cdot(n+1)\cdot(n+1)}$

$\displaystyle = \lim_{n \to \infin} \frac{\cancel{2(n+1)}(2n+1)}{\cancel{2\cdot(n+1)}\cdot(n+1)}$

$\displaystyle = \lim_{n \to \infin} \frac{2n+1}{n+1}$

$\displaystyle = \lim_{n \to \infin} \frac{\cancel{n}(2+\frac{1}{n})}{\cancel{n}(1+\frac{1}{n})}$

$\displaystyle = \lim_{n \to \infin} \frac{2+\frac{1}{n}}{1+\frac{1}{n}}=\frac{2}{1}=2 > 1\implies$ die Reihe ist divergent


**zweite Reihe**:

$\displaystyle \sum_{n=2}^\infty = \frac{1}{\log{(n)}} \cdot (-1)^n$

Leibnizkriterium:

$\log{(x)}=\exp^{-1}(x)$
$\exp{(x)}$ ist streng monoton steigend, also ist auch $\log{(x)}$ streng monoton steigend
im Zähler steht also etwas konstantes und im Nenner etwas was gegen unendlich wächst.
Die Folge $\frac{1}{\log{(n)}}$ ist damit eine Nullfolge.

- alternierende Reihe $\checkmark$
- Nullfolge $\checkmark$
- streng monoton fallend $\checkmark$

Die Reihe ist damit konvergent.

**Absolute Konvergenz**:
$\displaystyle \sum_{n=2}^\infty = \left|\frac{1}{\log{(n)}} \cdot (-1)^n\right|=\sum_{n=2}^\infty\frac{1}{\log{(n)}}$

Es gilt $\log{(n)} < n$ (wegen $n=e^{\log{(n)}} < e^n$), also

$\displaystyle  \frac{1}{n} < \frac{1}{\log{(n)}}$

Minorantenkriterium:

$\displaystyle   0<\sum_{n=2}^\infty \frac{1}{n} <  \sum_{n=2}^\infty\frac{1}{\log{(n)}}$


