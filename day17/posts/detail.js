// detail.js (포스트 상세 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 상세 정보 표시
async function displayPostDetail() {
    // URL에서 postId 가져오기
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("postId");
        if (!postId) throw new Error("No post ID provided");

        const cacheKey = `post_${postId}`;
        const cache = localStorage.getItem(cacheKey);
        let post = null;

        if (cache) {
            const parsed = JSON.parse(cache);
            const now = Date.now();
            const FIVE_MIN = 5 * 60 * 1000;

            if (now - parsed.timestamp < FIVE_MIN) {
                post = parsed.data;
                console.log("Post loaded from localStorage");
            }
        }

        if (!post) {
            post = await fetchPostFromAPI(postId);
        }

        renderPost(post);
    } catch (error) {
        console.error("Error:", error.message);
        document.getElementById("post-detail").innerHTML = "<p>Error loading post details</p>";
    }
}

// 포스트 렌더링 함수
function renderPost(post) {
    const postDetail = document.getElementById("post-detail");
    postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// API 호출 및 캐시 저장 담당 함수
async function fetchPostFromAPI(postId) {
    const response = await fetch(`${apiUrl}/posts/${postId}`);
    if (!response.ok) throw new Error("Failed to fetch post");
    const post = await response.json();

    // localStorage에 저장
    localStorage.setItem(`post_${postId}`, JSON.stringify({ data: post, timestamp: Date.now() }));
    console.log("Post fetched from API");
    return post;

    // await fetch(`${apiUrl}/posts/${postId}`);

    // localStorage에서 캐시 확인 (도전 과제)
    // localStorage에서 캐시가 조건에 충족하면 캐시 사용하여 post 초기화 (도전 과제)
    // localStorage에서 캐시가 조건에 충족하지 않으면 상세 데이터 fetch하여 post 초기화
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
