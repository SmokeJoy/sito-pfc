@echo off
echo.
echo ======================================================
echo    PFC - AGGIORNAMENTO AUTOMATICO GALLERIA FOTO
echo ======================================================
echo.
echo Scansione delle cartelle in corso...
python update_gallery.py
echo.
echo Operazione completata! 
echo Se ci sono nuove foto, ora sono visibili sul sito locale.
echo Ricordati di fare il 'push' su GitHub per renderle pubbliche.
echo.
pause
