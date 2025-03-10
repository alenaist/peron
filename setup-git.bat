@echo off
echo Initializing Git repository...
git init
echo.

echo Adding all existing files...
git add .
git commit -m "Initial commit of existing project"
echo.

echo Adding remote repository...
git remote add origin https://github.com/alenaist/peron.git
echo.

echo Fetching from remote repository...
git fetch
echo.

echo Setting up Git repository completed!
echo.
echo Next steps:
echo 1. Run: git push -u origin main --force
echo   (Use --force only if you want to overwrite what's on GitHub)
echo.
echo Note: You may need to authenticate with GitHub when pushing.
pause
