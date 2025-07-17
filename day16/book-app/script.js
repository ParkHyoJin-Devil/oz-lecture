// 도서 데이터를 저장할 배열
const books = [];
// 대여 상태를 관리할 배열
const rentals = [];

// 도서 추가 기능
function addBook() {
    const titleInput = document.getElementById("bookTitle");
    const priceInput = document.getElementById("bookPrice");
    const title = titleInput.value.trim();
    const price = Number(priceInput.value);

    if (title === "" || isNaN(price) || price <= 0) {
        alert("도서 제목과 유효한 가격(0 이상)을 입력하세요!");
        return;
    }

    const book = { title, price };
    books.push(book);

    // 대여 상태 클로저 객체 생성 및 저장
    const rental = createBookRental(title);
    rentals.push(rental);

    const bookList = document.getElementById("bookList");
    const li = document.createElement("li");
    li.className = "book-item";
    li.innerHTML = `
        <span>${title} - ${price}원 (대여 가능)</span>
        <button onclick="removeBook(this)">삭제</button>
        <button onclick="toggleRental(this)">대여/반납</button>
    `;
    bookList.appendChild(li);

    titleInput.value = "";
    priceInput.value = "";
}

// 삭제 기능
function removeBook(button) {
    // li 요소와 제목 추출
    const li = button.parentElement;
    const text = li.querySelector("span").textContent; // 예: "책1 - 5000원 (대여 가능)"
    const title = text.split(" - ")[0]; // 제목: "책1"

    // TODO : books 배열에서 도서 제거 (findIndex, splice 사용)
    let bookIndex = books.findIndex((book) => book.title === title);
    books.splice(bookIndex, 1);

    // TODO(도전과제) : rentals 배열에서 대여 상태 제거 (findIndex, splice 사용)
    let rentalsIndex = rentals.findIndex((rental) => rental.getStatus().title === title);
    rentals.splice(rentalsIndex, 1);

    // DOM에서 li 제거
    li.remove();
}

// 도서 데이터 처리
function processBooks() {
    // TODO : map 제목에 "Book: " 접두사 추가
    const prefixedBooks = books.map((book) => {
        book.title = "Book: " + book.title;
        return book;
    });

    // TODO : filter 10000원 이상 도서
    const highPriceBooks = books.filter((book) => {
        return book.price >= 10000;
    });

    // TODO : reduce 총 가격 계산
    const totalPrice = books.reduce((acc, book) => {
        return acc + book.price;
    }, 0);

    // 결과 표시
    const resultsDiv = document.getElementById("results");
    let html = "<h3>상위 가격 도서:</h3><ul>";
    if (prefixedBooks.length === 0) {
        html += "<li>도서가 없습니다.</li>";
    } else {
        prefixedBooks.forEach((book) => {
            html += `<li>${book.title} - ${book.price}원</li>`;
        });
    }
    html += "</ul>";

    html += "<h3>고가 도서:</h3><ul>";
    if (highPriceBooks.length === 0) {
        html += "<li>고가 도서가 없습니다.</li>";
    } else {
        highPriceBooks.forEach((book) => {
            html += `<li>${book.title} - ${book.price}원</li>`;
        });
    }
    html += "</ul>";

    html += `<h3>총 가격:</h3><p>${totalPrice}원</p>`;
    resultsDiv.innerHTML = html;
}

// 클로저로 대여 상태 관리
const createBookRental = (bookTitle) => {
    let isBorrowed = false;
    let borrowCount = 0;
    return {
        borrow: () => {
            if (isBorrowed) {
                alert(`${bookTitle}은 이미 대여 중입니다.`);
                return false;
            }
            isBorrowed = true;
            borrowCount++;
            return true;
        },
        returnBook: () => {
            isBorrowed = false;
        },
        getStatus: () => ({
            title: bookTitle,
            isBorrowed,
            borrowCount,
        }),
    };
};

// 대여/반납 토글
function toggleRental(button) {
    const li = button.parentElement;
    const text = li.querySelector("span").textContent;
    const title = text.split(" - ")[0];

    // TODO(도전과제) : rentals에서 title과 동일한 요소 찾기
    const rental = rentals.find((book) => {
        return title === book.getStatus().title;
    });
    if (!rental) return;

    const status = rental.getStatus();
    // TODO(도전과제) : books에서 title과 동일한 요소 찾기
    const book = books.find((book) => {
        return "Book: " + title === book.title;
    });

    if (!book) return;

    if (status.isBorrowed) {
        rental.returnBook();
        li.querySelector("span").textContent = `${title} - ${book.price}원 (대여 가능)`;
    } else {
        if (rental.borrow()) {
            li.querySelector("span").textContent = `${title} - ${book.price}원 (대여 중)`;
        }
    }

    console.log(rentals);
}

// 모든 대여 상태 표시
function showAllRentalStatus() {
    const resultsDiv = document.getElementById("results");
    let html = "<h3>대여 상태:</h3><ul>";
    if (rentals.length === 0) {
        html += "<li>대여 정보가 없습니다.</li>";
    } else {
        rentals.forEach((rental) => {
            const status = rental.getStatus();
            html += `<li>${status.title}: ${status.isBorrowed ? "대여 중" : "대여 가능"}, 대여 횟수: ${
                status.borrowCount
            }</li>`;
        });
    }
    html += "</ul>";
    resultsDiv.innerHTML = html;
}

// ## 기본 과제 요구사항

// 1. **제공된 파일**
//     - `index.html`: HTML 구조 및 버튼 추가
//     - `styles.css`: CSS 스타일
//     - `script.js`: `addBook()` 함수와 학생이 구현할 함수(`removeBook`, `processBooks`) 포함
//     - 학생들은 `script.js`에서 `removeBook`와 `processBooks`를 구현하고, `index.html`에서 버튼 추가
// 2. **구현해야 할 기능**
//     - **삭제 기능 (`removeBook(button)`)**
//         - **목표**: 삭제 버튼 클릭 시 해당 도서 항목(`li.book-item`)과 `books` 배열에서 도서 제거
//         - **요구사항**:
//             - `button`은 클릭된 삭제 버튼
//             - `button.parentElement`로 `li` 요소 접근, `remove()`로 DOM에서 제거
//             - `li`의 텍스트(`<span>` 내용)를 기반으로 `books` 배열에서 도서 제거
//             - 예: "책1 - 5000원" 삭제 시 DOM과 `books` 배열에서 제거
//     - **도서 데이터 처리 (`processBooks()`)**
//         - **목표**: `map`, `filter`, `reduce`를 사용해 도서 데이터를 처리하고 결과를 `<div id="results">`에 표시
//         - **요구사항**:
//             - **map**: 각 도서 제목에 "Book: " 접두사 추가
//             - **filter**: 가격이 10,000원 이상인 도서 필터링
//             - **reduce**: 모든 도서 가격의 합계 계산
//             - 결과를 `<div id="results">`에 HTML로 표시:

//                 ```html
//                 <h3>상위 가격 도서:</h3><ul>...</ul>
//                 <h3>고가 도서:</h3><ul>...</ul>
//                 <h3>총 가격:</h3><p>...</p>

//                 ```

//         - **HTML 수정**:
//             - `<div class="book-container">` 아래에 `<button onclick="processBooks()">도서 처리</button>` 추가
// 3. **수정 규칙**
//     - `script.js`에서 `removeBook`와 `processBooks` 구현
//     - `index.html`에서 `<button onclick="processBooks()">도서 처리</button>` 추가
//     - CSS와 `addBook()` 함수는 수정 불필요
//     - 결과는 `<div id="results">`에 표시
// 4. **실행 방법**
//     - `index.html`을 브라우저에서 열어 테스트
//     - 도서 추가, 삭제, 처리 버튼 클릭 시 화면에 결과 표시
//     - 동작 예시:

//         ```
//         [입력: 제목 "책1", 가격 5000]
//         [입력: 제목 "책2", 가격 15000]
//         → 목록: "책1 - 5000원", "책2 - 15000원"
//         [삭제 버튼 클릭] → 해당 도서 제거
//         [도서 처리 버튼 클릭]
//         상위 가격 도서: Book: 책1 - 5000원, Book: 책2 - 15000원
//         고가 도서: Book: 책2 - 15000원
//         총 가격: 20000원

//         ```

// 5. **파일 구조**

//     ```
//     book-app/
//     ├── index.html
//     ├── styles.css
//     ├── script.js

//     ```

// 6. **주의사항**
//     - **코드 가독성**: 주석(`//`)으로 주요 코드 설명
//     - **테스트**: 브라우저에서 추가, 삭제, 데이터 처리 기능 확인
//     - **입력 처리**: `addBook()`에서 유효성 검사 포함

// ## 도전 과제 (선택)

// 기본 과제를 완료한 학생들은 클로저를 활용해 도서별 대여 상태를 관리합니다.

// 1. **추가 기능 구현**
//     - **클로저로 대여 상태 관리**
//         - **목표**: 각 도서의 대여 상태(대여됨/대여 가능)와 대여 횟수를 클로저로 관리
//         - **요구사항**:
//             - `createBookRental(bookTitle)` 화살표 함수로 클로저 생성
//             - 클로저는 다음 기능 제공:
//                 - `borrow()`: 도서 대여, 대여 횟수 증가, 이미 대여 중이면 경고
//                 - `returnBook()`: 도서 반납
//                 - `getStatus()`: 대여 상태와 횟수 반환
//             - `...rest`를 사용해 여러 도서의 상태를 `<div id="results">`에 표시
//             - HTML에 `<button onclick="toggleRental(this)">대여/반납</button>` 추가
//             - `<span>`에 대여 상태 표시(예: "책1 - 5000원 (대여 가능)")
//         - **HTML 수정**:
//             - `addBook()` 내 `li.innerHTML`에 대여/반납 버튼 추가
//             - `<div id="results">` 위에 `<button onclick="showAllRentalStatus()">대여 상태 보기</button>` 추가
// 2. **도전 과제 파일 구조**
//     - 동일한 `index.html`, `styles.css`, `script.js` 사용
// 3. **주의사항**
//     - 클로저 객체를 별도 배열로 관리
//     - 테스트: 대여/반납 버튼 클릭 시 상태와 화면 출력 확인
