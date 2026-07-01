# AILA República Dominicana Dashboard

Dashboard independiente para explorar el diagnóstico AILA de República Dominicana.

Ruta pública prevista:

`https://sandyramirezp.com/AILA-DR-Dashboard`

## Fuente de datos

La única fuente usada para esta versión es:

`C:\Proyectos\PNUD\CI\AILA\AILA\AILA_Country_Brief_RD con comentarios acceptados.md`

No se agregaron datos externos ni métricas inventadas. Cuando el brief no aporta una serie numérica, la información se presenta como lectura cualitativa.

## Qué incluye

- KPIs principales del diagnóstico AILA.
- Exploración por tres pilares y sus subpilares.
- Panel de detalle con fortalezas, brechas y oportunidades.
- Navegación por diagnóstico, áreas prioritarias y vías de acción.
- Diseño responsive para desktop y mobile.
- Cambio de idioma ES/EN.

## Desarrollo

```powershell
npm.cmd install
npm.cmd run dev
```

## Build

```powershell
npm.cmd run lint
npm.cmd run build
```

El proyecto está configurado con base `/AILA-DR-Dashboard/` para poder servirse bajo esa ruta.
