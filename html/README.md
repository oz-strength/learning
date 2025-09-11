# HTML

## 요소를 구성하는 3가지

- **시작 태그(Opening Tag)**: `<tagname>`
- **내용(Content)**: 태그 사이의 텍스트나 다른 요소들
- **종료 태그(Closing Tag)**: `</tagname>`

```html
<h1>제목 내용</h1>
<!-- 시작태그: <h1>, 내용: 제목 내용, 종료태그: </h1> -->
```

## 링크를 생성하는 태그와 필수 속성

**태그**: `<a>` (anchor)

**필수 속성**: `href` (hypertext reference)

```html
<a href="https://example.com">링크 텍스트</a>
<a href="mailto:test@example.com">이메일 링크</a>
<a href="#section1">페이지 내 이동</a>
```

## id 속성 용도

- **고유 식별자 제공**: 페이지 내에서 특정 요소를 유일하게 식별
- **CSS/JavaScript 타겟팅**: 스타일링이나 스크립트에서 해당 요소 선택
- **앵커 링크**: 페이지 내 특정 위치로 이동하는 링크 생성
- **폼 연결**: label의 for 속성과 연결

```html
<h2 id="section1">섹션 1</h2>
<input type="text" id="username" />
<label for="username">사용자명</label>
```

## class 속성 용도

- **그룹화**: 여러 요소를 동일한 클래스로 분류
- **CSS 스타일링**: 동일한 스타일을 여러 요소에 적용
- **JavaScript 선택**: 특정 클래스를 가진 요소들을 일괄 처리
- **재사용성**: 동일한 디자인 패턴을 여러 곳에서 사용

```html
<div class="card">카드1</div>
<div class="card">카드2</div>
<p class="highlight important">중요한 텍스트</p>
```

## form 태그와 input의 역할

### form 태그 역할

- **데이터 수집 컨테이너**: 사용자 입력을 받는 요소들을 그룹화
- **전송 설정**: 데이터를 어디로(`action`), 어떻게(`method`) 보낼지 정의
- **유효성 검증**: HTML5 기본 검증 기능 제공

### input 태그 역할

- **사용자 입력 인터페이스**: 다양한 형태의 데이터 입력 받기
- **데이터 타입 지정**: type 속성으로 입력받을 데이터 형태 정의

```html
<form action="/submit" method="POST">
  <input type="text" name="username" required />
  <input type="submit" value="전송" />
</form>
```

## input 태그의 type 속성과 용도

**속성명**: `type`

### 주요 type 종류와 용도

| type       | 용도                   | 예시                      |
| ---------- | ---------------------- | ------------------------- |
| `text`     | 일반 텍스트 입력       | `<input type="text">`     |
| `password` | 비밀번호 입력 (마스킹) | `<input type="password">` |
| `email`    | 이메일 주소 입력       | `<input type="email">`    |
| `number`   | 숫자 입력              | `<input type="number">`   |
| `tel`      | 전화번호 입력          | `<input type="tel">`      |
| `url`      | URL 입력               | `<input type="url">`      |
| `date`     | 날짜 선택              | `<input type="date">`     |
| `time`     | 시간 선택              | `<input type="time">`     |
| `checkbox` | 체크박스 (다중선택)    | `<input type="checkbox">` |
| `radio`    | 라디오버튼 (단일선택)  | `<input type="radio">`    |
| `file`     | 파일 업로드            | `<input type="file">`     |
| `hidden`   | 숨겨진 값 전송         | `<input type="hidden">`   |
| `submit`   | 폼 전송 버튼           | `<input type="submit">`   |
| `reset`    | 폼 초기화 버튼         | `<input type="reset">`    |
| `button`   | 일반 버튼              | `<input type="button">`   |

### 실제 사용 예시

```html
<form>
  <input type="text" placeholder="이름을 입력하세요" />
  <input type="email" placeholder="이메일 주소" />
  <input type="password" placeholder="비밀번호" />
  <input type="checkbox" id="agree" />
  <label for="agree">약관에 동의합니다</label>
  <input type="submit" value="가입하기" />
</form>
```
