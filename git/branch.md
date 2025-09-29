# git branch

## 브랜치 명령어

### `git branch`

- git 프로젝트의 브랜치 목록을 출력

### `git branch <branch-name>`

- 새로운 브랜치를 생성

### `git switch <branch-name>`

- 해당 브랜치로 이동

### `git branch -d <branch-name>`

- 해당 브랜치를 삭제 (병합된 브랜치만 삭제 가능)

### `git branch -D <branch-name>`

- 해당 브랜치를 강제로 삭제 (병합되지 않은 브랜치도 삭제 가능)

### 서브 브랜치 워크플로우

1. 브랜치 생성 : `git branch <branch-name>`
2. 브랜치 이동 : `git switch <branch-name>`
3. 작업 수행 및 커밋 : `git add .` -> `git commit -m "commit message"`
4. 메인 브랜치로 이동 : `git switch main`
5. 메인 브랜치에 서브 브랜치 병합 : `git merge <branch-name>`
6. (선택) 불필요한 서브 브랜치 삭제 : `git branch -d <branch-name>` => 추후 문제 발생 가능 : 동일한 브랜치 이름으로 재생성 불가
