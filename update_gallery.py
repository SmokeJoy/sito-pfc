import os
import json
import re

def generate_gallery():
    # Cartelle in cui cercare le foto
    base_dirs = [
        'Foto di lavori realizzati',
        'Foto di lavori realizzati/Nuove foto',
        'images' # Cartella consigliata per il caricamento da smartphone
    ]
    
    extensions = ('.jpg', '.jpeg', '.png', '.webp')
    photos = []
    
    print("Scansione cartelle per nuove immagini...")
    
    for directory in base_dirs:
        if not os.path.exists(directory):
            continue
            
        for filename in os.listdir(directory):
            if filename.lower().endswith(extensions):
                filepath = os.path.join(directory, filename)
                # Normalizza il percorso per il web (slash anziché backslash)
                web_path = filepath.replace('\\', '/')
                
                # Genera un titolo leggibile partendo dal nome file se possibile
                # Rimuove date e stringhe tipo "WhatsApp Image"
                title = "Realizzazione PFC"
                if "WhatsApp Image" not in filename:
                    # Rimuove estensione e pulisce il nome
                    clean_name = os.path.splitext(filename)[0]
                    clean_name = re.sub(r'[-_]', ' ', clean_name).capitalize()
                    if clean_name:
                        title = clean_name
                
                photos.append({
                    "url": web_path,
                    "title": title,
                    "description": "Dettaglio eccellenza PFC"
                })
    
    # Rimuovi duplicati basati sull'URL
    unique_photos = []
    seen_urls = set()
    for photo in photos:
        if photo['url'] not in seen_urls:
            unique_photos.append(photo)
            seen_urls.add(photo['url'])
    
    # Ordina: le ultime aggiunte per prime (basato sul tempo di modifica se disponibile, o semplicemente inverti)
    # Per semplicità ora invertiamo l'ordine della lista
    unique_photos.reverse()
    
    with open('photos.json', 'w', encoding='utf-8') as f:
        json.dump(unique_photos, f, indent=4, ensure_ascii=False)
    
    print(f"Successo! Trovate {len(unique_photos)} immagini. File photos.json aggiornato.")

if __name__ == "__main__":
    generate_gallery()
