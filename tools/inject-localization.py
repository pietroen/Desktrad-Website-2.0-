from pathlib import Path

ROOT = Path('nobo tesste')
SCRIPT = 'css/js/site-localization.js'

for path in ROOT.glob('*.html'):
    text = path.read_text(encoding='utf-8')
    tag = f'<script src="{SCRIPT}"></script>'
    if tag in text:
        continue
    marker = '</body>'
    if marker not in text:
        continue
    text = text.replace(marker, f'    {tag}\n{marker}', 1)
    path.write_text(text, encoding='utf-8')
    print(path)
