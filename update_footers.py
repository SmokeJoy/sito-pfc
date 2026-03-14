import os
import glob

old_block = '''<div class="footer-col">
                    <h4>Zone Servite</h4>
                    <p>Frosinone • Ferentino • Roma</p>
                    <p>Latina • Viterbo • Rieti</p>
                    <p>E tutto il Lazio</p>
                </div>'''

files = glob.glob('**/*.html', recursive=True)
for filepath in files:
    if filepath.startswith('cartongesso-') or filepath.startswith('controsoffitti-cartongesso') or filepath.startswith('isolamento-termico-cartongesso') or filepath.startswith('velette-cartongesso'):
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    prefix = '../' if 'servizi\\' in filepath or 'servizi/' in filepath else ''
    
    new_block = f'''<div class="footer-col">
                    <h4>Zone Servite</h4>
                    <a href="{prefix}cartongesso-ferentino.html">Cartongesso Ferentino</a>
                    <a href="{prefix}cartongesso-frosinone.html">Cartongesso Frosinone</a>
                    <a href="{prefix}cartongesso-lazio.html">Cartongesso Lazio</a>
                </div>'''
    
    if old_block in content:
        content = content.replace(old_block, new_block)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {filepath}')
    else:
        # Try matching irrespective of exact indentation by removing spaces
        pass
