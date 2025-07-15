const postIds = document.getElementById("postIds");

let postsData = []; // 여기에 저장할 변수 선언

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => {
//         postsData = data;
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("에러 발생:", error);
//     });

function fetchPost() {
    //console.log(postIds.value);
    postsData;
}

// 가져오기 버튼 클릭 이벤트 적용
const handleFetchPosts = () => fetchPost(postIds.value);
////////////////////////////////////////////////////////////////

// 3. **기능 요구사항**
//     - **목표**: 사용자가 HTML 입력란에 쉼표로 구분한 게시물 ID(1~100)를 입력하여 JSONPlaceholder API에서 데이터를 가져오고, HTML 화면에 렌더링.
//     - **프로그램 흐름**:
//         - 제공된 HTML의 입력란(`#postIds`)에 ID 입력(예: "1,2,3"), 가져오기 버튼(`#fetchPosts`) 클릭.
//         - 유효한 ID(1~100)만 필터링, `fetch`로 데이터 가져와 객체에 저장.
//         - 결과를 `#output`에 렌더링(각 게시물은 `.post` 클래스로 구분).
//         - 유효하지 않은 입력(숫자 아님, 범위 외, 빈 값) 시 `#output`에 에러 메시지 출력.
//         - 데이터 가져오는 동안 버튼 비활성화, 완료 후 재활성화.
//         - 모든 출력은 HTML 화면(`#output`)에서만 표시, 콘솔 출력 사용 금지.
//     - **출put 정보**:
//         - HTML:
//             - 성공: `<div class="post">post1: [제목]</div>`
//             - 에러: `<div class="post">postX: 에러: [메시지]</div>` 또는 `유효한 ID(1-100)를 입력하세요!` (`.error` 클래스로 빨간색 표시)
//     - **구현 요구사항**:
//         - **변수 선언**: `var`, `let`, `const` 각각 최소 1회 사용.
//         - **함수**:
//             - 화살표 함수(`fetchMultiplePosts`)로 데이터 가져오기, `...rest`로 ID 처리.
//             - 함수 표현식(`runChallenge`)로 메인 로직 구현.
//         - **반복문**: `for...of`로 ID 순회, `for...in`로 결과 객체 순회.
//         - **비동기 처리**: `fetch`와 `async/await` 사용, `try/catch`로 에러 처리.
//         - **DOM 조작**:
//             - 입력값: `document.getElementById("postIds").value`
//             - 출력: `document.getElementById("output").innerHTML`
//             - 버튼 비활성화: `document.getElementById("fetchPosts").disabled = true`
//             - 에러 스타일: `document.getElementById("output").classList.add("error")`
//         - **...rest**: 여러 ID를 배열로 처리.
//         - **출력 예시**:

//             ```
//             [입력: 1,2,3, 버튼 클릭]
//             HTML:
//             post1: sunt aut facere...
//             post2: qui est esse...
//             post3: ea molestias...
//             [입력: abc 또는 101]
//             HTML: 유효한 ID(1-100)를 입력하세요! (빨간색)

//             ```

//     - **구현 선택**:
//         - 입력은 쉼표로 구분, `split()`과 `map(Number)`로 처리.
//         - 부트스트랩 클래스(`form-control`, `btn-primary`, `post`) 유지 또는 커스텀.
//         - CSS로 출력 영역의 테두리, 간격, 색상 등 자유롭게 개선(예: 게시물 호버 효과, 에러 애니메이션).
// 4. **실행 환경**
//     - 브라우저에서 `index_challenge.html` 실행.
//     - 개발자 도구(F12)로 디버깅 가능하지만, 출력은 HTML 화면에서만 확인.
// 5. **제출 방식**
//     - GitHub 레포지토리에 프로젝트 업로드.
//     - 레포지토리 링크 제출.

// ## 주의사항

// - **JavaScript 문법**: `var`, `let`, `const`, 기본 자료형, 연산자, 조건문, 반복문, 함수, 배열, 객체, `Promise`, `async/await`, `fetch`만 사용. DOM 조작 필수. 콘솔 출력 금지.
// - **코드 가독성**: 들여쓰기와 주석(`//`)으로 로직 설명(예: `// 데이터 가져오기`, `// 결과 렌더링`).
// - **테스트**: 입력 처리, 데이터 출력, 버튼 비활성화/활성화, 에러 메시지가 HTML 화면에서 정확히 작동하는지 확인.
// - **입력 처리**: 입력값을 `split(",")`로 분리, `Number()`로 변환, 유효하지 않은 입력(빈 값, 1~100 외) 처리 필수.
