## Aufgabe 1

$\displaystyle \lim_{x \to 0+}(\ln{(x)}\cdot \ln{(1-x)})$ ($$)

$\displaystyle \lim_{x \to 0+}\left(\frac{\ln{(x)}}{\frac{1}{\ln{(1-x)}}}\right)$ ($\frac{-\infin}{\frac{1}{0}}=\frac{-\infin}{\infin }$)

de l'Hospital

$\displaystyle \lim_{x \to 0+}\left(\frac{(\ln{(x))'}}{((\ln{(1-x))^{-1})'}}\right)$

$\displaystyle \lim_{x \to 0+}\left(\frac{\frac{1}{x}}{-((\ln{(1-x))^{-2})\cdot \frac{1}{1-x} \cdot (-1)}}\right)$

$\displaystyle \lim_{x \to 0+}\left(\frac{\frac{1}{x}}{\frac{1}{\ln^{2}{(1-x)}  \cdot (1-x)}}\right)$

$\displaystyle \lim_{x \to 0+}\left( \frac{\ln^{2}{(1-x)}  \cdot (1-x)}{x} \right)$ ($\frac{0}{0}$)

de l'Hospital

$\displaystyle \lim_{x \to 0+}\left( \frac{((\ln{(1-x)})^{2}  \cdot (1-x))'}{(x)'} \right)$

$\displaystyle \lim_{x \to 0+}\left( \frac{(2(\ln{(1-x)})^{1} \cdot \frac{1}{\cancel{1-x}} \cdot (-1)  \cdot \cancel{(1-x)} + (\ln^{2}{(1-x)}) \cdot (-1)}{1} \right)$

$\displaystyle \lim_{x \to 0+}\left( \frac{(-2\ln{(1-x)} - (\ln^{2}{(1-x)})}{1} \right)$

$\displaystyle \frac{-2 \cdot 0 - 0^2}{1}=0$



## Aufgabe 2

$\displaystyle \lim_{x \to 0+} \frac{\ln{(\sin{x})}}{\ln{x}}$ ($\frac{-\infin}{-\infin }$)

$\displaystyle \lim_{x \to 0+} \frac{(\ln{(\sin{x})})'}{(\ln{x})'}$

$\displaystyle \lim_{x \to 0+} \frac{(\frac{1}{\sin{x}} \cdot (\cos{x}))}{(\frac{1}{x})}$

$\displaystyle \lim_{x \to 0+} \frac{(\frac{\cos{x}}{\sin{x}})}{(\frac{1}{x})}$

$\displaystyle \lim_{x \to 0+} \frac{\cos{(x)}\cdot x}{\sin{x}}$ ($\frac{1\cdot 0}{0}=\frac{0}{0}$)

$\displaystyle \lim_{x \to 0+} \frac{(\cos{(x)}\cdot x)'}{(\sin{x})'}$

$\displaystyle \lim_{x \to 0+} \frac{(-\sin{x})\cdot x + \cos{x} \cdot 1}{\cos{x}}$

$\displaystyle \frac{-0\cdot 0+1\cdot 1}{1}=1$

## Aufgabe 3

$\displaystyle \lim_{x \to 1} \frac{x-1-\ln{x}}{(x-1)\ln{x}}$