# Fischl 2019S

## Hilfreiches

### Satz 4.41 (Konvergenzkriterium von Leibniz):
Eine alternierende Reihe $\sum_{n \ge 0}(-1)^n a_n$, für die $(a_n)_{n \ge0}$ eine monoton fallende Nullfolge ist, ist konvergent.

## 1. Aufgabe

Untersuchen Sie die Reihe auf Konvergenz.

$\displaystyle \sum_{n \ge 1}(-1)^n \frac{n^2+3n}{n^3+n}$ 

**Monotonie überprüfen**:

Zähler niedrigerer Grad als Nenner (und Vorzeichen passen)$\implies$Monoton fallend

**Nullfolge checken**:

$\displaystyle \lim_{n \to \infin}  \frac{n^3(\frac{1}{n}+\frac{3}{n^2})}{n^3(1+\frac{1}{n^2})}$

$\displaystyle = \lim_{n \to \infin}  \frac{\frac{1}{n}+\frac{3}{n^2}}{1+\frac{1}{n^2}}$

$\displaystyle = \frac{\lim_{n \to \infin}(\frac{1}{n}+\frac{3}{n^2})}{\lim_{n \to \infin} (1+\frac{1}{n^2})}$

$\displaystyle = \frac{0}{1}=0$

$\implies$ Nullfolge

Nach dem Leibnizkriterium konvergiert die Reihe $\displaystyle \sum_{n \ge 1}(-1)^n \frac{n^2+3n}{n^3+n}$.

## 2. Aufgabe

Gegeben Sei die Folge $a_n=1+\frac{1}{n}-\sin{(\frac{n\pi}{2})}$

i) Beschreiben Sie mathematisch präsize, was ein Häufungspunkt $a$ einer reellen Folge $(a_n)_{n\in\N}$ ist.

$a \text{ Häufungspunkt von } (a_n)_{n\ge0} :\iff \forall \varepsilon > 0 \text { unendlich viele } a_n \in U_{\varepsilon}(a)$

ii) Geben Sie alle Häufungspunkte von $(a_n)_{n\in\N}$ an.

$HP=\{0,1,2\}$

iii) Zeigen Sie anhand der Definition, dass die Punkte tatsächlich Häufungspunkte sind.

Für $n \ge 1$:

$\displaystyle \lim_{n \to \infin} a_{4n}=1+\frac{1}{4n}-\sin{\left(\frac{4n\pi}{2}\right)}=1+0-0=1$

$\displaystyle \lim_{n \to \infin} a_{4n+1}=1+\frac{1}{4n+1}-\sin{\left(\frac{(4n+1)\pi}{2}\right)}=1+0-1=0$

$\displaystyle \lim_{n \to \infin} a_{4n+2}=1+\frac{1}{4n+2}-\sin{\left(\frac{(4n+2)\pi}{2}\right)}=1+0-0=1$

$\displaystyle \lim_{n \to \infin} a_{4n+3}=1+\frac{1}{4n+3}-\sin{\left(\frac{(4n+3)\pi}{2}\right)}=1+0+1=2$

## 3. Aufgabe

i) Untersuchen Sie die Folge $(b_n)_{n\ge1}$ gegeben durch $b_0=10$ und $b_{n+1}=2\sqrt{b_n-1}$ auf Monotonie, Beschränktheit und Konvergenz.

**Monotonie**:

$b_0=10$ \
$b_1=2\sqrt{10-1}=6$ \
$b_2 = 2 \sqrt{6 -1} = 2\sqrt{5}$ 

$b_n=2\sqrt{b_{n-1}-1}$

**Vollständige Induktion**:

IV: $b_n > b_{n+1}$
IA: $n = 0: 10 > 6 \checkmark$
IS:
$2\sqrt{b_n-1}> 2\sqrt{b_{n+1}-1}$ \
$\sqrt{b_n-1}> \sqrt{b_{n+1}-1}$ \
$b_n-1> b_{n+1}-1$ \
$b_n > b_{n+1}$ (IV) $\checkmark$\

**Beschränktheit**:

nach oben beschränkt mit $b_0 = 10$ (streng monoton fallend)

Die Diskrimante von der Wurzel $\sqrt{b_n-1}$ ist immer größer als 1 und damit wird der Wert der Wurzel nie kleiner als 1. Da bei jedem $b_{n+1}$ der Wert von der Wurzel verdoppelt wird, ist die Folge nach unten mit $2$ beschränkt. 

**Vollständige Induktion**:

IV: $b_n > 2$
IA: $n=0: 10 > 2 \checkmark$
IB: $b_{n+1} > 2$


ii) Geben Sie gegebenenfalls den Grenzwert an. Ist dieser auch ein Häufungspunkt? (Begründen Sie Ihre Antwort)

Den Grenzwert gibt es, weil die Folge Beschränkt und monoton ist.

**Konvergenz**:

$\displaystyle \lim_{n \to \infin} b_n=\lim_{n \to \infin} b_{n+1}=b$

$\displaystyle b=\lim_{n \to \infin} 2\sqrt{b_n-1}$

$\displaystyle b=2\sqrt{b-1}$ \
$b^2=4(b-1)$ \
$b^2=4b-4$ \
$b^2-4b+4=0$ \
$(b-2)^2=0$ \
$b-2=0$ \
$b=2$