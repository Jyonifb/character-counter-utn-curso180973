# Character Counter UTN curso 180973

## 





## Anexo:

#### Agrego datos de Commit realizado en local que no se subieron al repositorio por error: 

```PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git add .
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'eslint.config.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'public/icons.svg', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/App.jsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/assets/vite.svg', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/index.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/main.jsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vite.config.js', LF will be replaced by CRLF the next time Git touches it

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "First commit Web Base"
[master (root-commit) e02cc4d] First commit Web Base
 15 files changed, 2618 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 eslint.config.js
 create mode 100644 index.html
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/favicon.svg
 create mode 100644 public/icons.svg
 create mode 100644 src/App.jsx
 create mode 100644 src/assets/hero.png
 create mode 100644 src/assets/react.svg
 create mode 100644 src/assets/vite.svg
 create mode 100644 src/index.css
 create mode 100644 src/main.jsx
 create mode 100644 vite.config.js

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git remote add origin https://github.com/Jyonifb/character-counter-utn-curso180973.git

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push -u origin master
Enumerating objects: 20, done.
Counting objects: 100% (20/20), done.
Delta compression using up to 12 threads
Compressing objects: 100% (20/20), done.
Writing objects: 100% (20/20), 41.26 KiB | 10.32 MiB/s, done.
Total 20 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/Jyonifb/character-counter-utn-curso180973.git
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "add: Header component"
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.jsx

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/components/

no changes added to commit (use "git add" and/or "git commit -a")

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git add .
warning: in the working copy of 'src/App.jsx', LF will be replaced by CRLF the next time Git touches it

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   src/App.jsx
        new file:   src/components/Header.jsx


PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push
Everything up-to-date

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "add: Header component"
[master 355abe8] add: Header component
 2 files changed, 17 insertions(+), 1 deletion(-)
 create mode 100644 src/components/Header.jsx

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 12 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 709 bytes | 709.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Jyonifb/character-counter-utn-curso180973.git
   e02cc4d..355abe8  master -> master

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "add: Excluir espacios y Cantidad de caracteres"
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.jsx
        modified:   src/components/Header.jsx

no changes added to commit (use "git add" and/or "git commit -a")

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push
Everything up-to-date

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "add: Characters limit"
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.jsx
        modified:   src/components/Header.jsx

no changes added to commit (use "git add" and/or "git commit -a")

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push
Everything up-to-date

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "add: Words counter"
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.jsx
        modified:   src/components/Header.jsx

no changes added to commit (use "git add" and/or "git commit -a")

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push
Everything up-to-date

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "add: Sentences counter"
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.jsx
        modified:   src/components/Header.jsx

no changes added to commit (use "git add" and/or "git commit -a")

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push
Everything up-to-date

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "add: Reading time"
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.jsx
        modified:   src/components/Header.jsx

no changes added to commit (use "git add" and/or "git commit -a")

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push
Everything up-to-date

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "add: Letter density"
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.jsx
        modified:   src/components/Header.jsx
        modified:   src/index.css

no changes added to commit (use "git add" and/or "git commit -a")

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push
Everything up-to-date

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "change: show all by see more"
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.jsx
        modified:   src/components/Header.jsx
        modified:   src/index.css

no changes added to commit (use "git add" and/or "git commit -a")

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push
Everything up-to-date

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "change: Componentized TextArea"
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   src/App.jsx
        modified:   src/components/Header.jsx
        modified:   src/index.css

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/components/ControlChecks.jsx
        src/components/LetterDensity.jsx
        src/components/Stats.jsx
        src/components/WriteArea.jsx

no changes added to commit (use "git add" and/or "git commit -a")

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git add .
warning: in the working copy of 'src/App.jsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/index.css', LF will be replaced by CRLF the next time Git touches it

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git commit -m "change: Componentized TextArea"
[master 0217c2f] change: Componentized TextArea
 7 files changed, 166 insertions(+), 9 deletions(-)
 create mode 100644 src/components/ControlChecks.jsx
 create mode 100644 src/components/LetterDensity.jsx
 create mode 100644 src/components/Stats.jsx
 create mode 100644 src/components/WriteArea.jsx

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git push
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 12 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 2.39 KiB | 2.39 MiB/s, done.
Total 9 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/Jyonifb/character-counter-utn-curso180973.git
   355abe8..0217c2f  master -> master

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean

PC Two Remaster@DESKTOP-8LUG3VI MINGW64 ~/Desktop/clase-21/character-counter-utn-curso180973 (master)
$ ```