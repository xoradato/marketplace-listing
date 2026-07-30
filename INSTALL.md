# Instalar marketplace-listing

El paquete funciona con Claude Code y Codex. Mejora publicaciones para Honduras y Estados Unidos (United States) a partir de fotos, capturas, texto existente y hechos confirmados.

Antes de instalarlo, recuerde que `datos-tienda.md` es un perfil local de Honduras. Puede contener datos públicos de entrega, pagos, cobertura o cierre que usted quiere reutilizar, pero el archivo real no debe publicarse ni copiarse al repositorio.

## Claude Code

En macOS o Linux:

```bash
git clone https://github.com/xoradato/marketplace-listing.git ~/.claude/skills/marketplace-listing
cd ~/.claude/skills/marketplace-listing
cp datos-tienda.example.md datos-tienda.md
```

En Windows PowerShell:

```powershell
git clone https://github.com/xoradato/marketplace-listing.git "$env:USERPROFILE\.claude\skills\marketplace-listing"
Copy-Item "$env:USERPROFILE\.claude\skills\marketplace-listing\datos-tienda.example.md" "$env:USERPROFILE\.claude\skills\marketplace-listing\datos-tienda.md"
```

## Codex

En macOS o Linux:

```bash
git clone https://github.com/xoradato/marketplace-listing.git ~/.agents/skills/marketplace-listing
cd ~/.agents/skills/marketplace-listing
cp datos-tienda.example.md datos-tienda.md
```

En Windows PowerShell:

```powershell
git clone https://github.com/xoradato/marketplace-listing.git "$env:USERPROFILE\.agents\skills\marketplace-listing"
Copy-Item "$env:USERPROFILE\.agents\skills\marketplace-listing\datos-tienda.example.md" "$env:USERPROFILE\.agents\skills\marketplace-listing\datos-tienda.md"
```

Después de copiar la plantilla, abra `datos-tienda.md` y complete solo el bloque público que quiere usar para Honduras. No incluya ese archivo real en issues, commits o capturas compartidas.

## Uso

Adjunte una captura de la publicación, fotos del producto, texto actual o hechos confirmados. Puede pedir:

- una nueva publicación;
- una auditoría de una captura o relistado;
- solo el copy final;
- una revisión de precio explícita.

La respuesta sigue este contrato:

1. **Qué cambiar** — 2–5 acciones de auditoría cuando aplica.
2. **Título mejorado** o **Improved title**.
3. **Descripción mejorada** o **Improved description**.
4. **Etiquetas** o **Search terms** — exactamente 20 términos distintos separados por comas cuando hay evidencia suficiente.

Las nuevas publicaciones y las solicitudes de solo copy entregan las secciones de título, descripción y términos. El skill conserva el precio suministrado salvo que se solicite investigar.

## Mercados y lenguaje

Para Honduras, use español natural y datos de Honduras. El precio se conserva en lempiras salvo que usted pida revisión de precio. Si pide revisión, la comparación debe usar referencias correctas para Honduras y reportarse en HNL.

For United States, the default response is natural US English. You can request Spanish while keeping the US market context: dollars, pickup, shipping, location, condition, and supplied transaction details. Price checks for United States must use US comparables and report in USD.

## Perfil local de Honduras

`datos-tienda.md` is local-only and Honduras-only. It may provide a reusable public shop block for Honduras listings, but it must not appear in United States outputs and must not be committed. If the file is absent or incomplete, the skill should continue with supplied facts and ask only for necessary missing details.

## Actualizaciones

Para actualizar el paquete:

```bash
cd ~/.agents/skills/marketplace-listing
git pull
```

Use la ruta `~/.claude/skills/marketplace-listing` si la instalación es de Claude Code. Su `datos-tienda.md` local debe quedarse fuera del commit.
