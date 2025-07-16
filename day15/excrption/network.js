async function getPost(postNum) {
    try {
        let response = await fetch(`https://jsonplaceholderfdfdfdfdf.typicode.com/posts/${postNum}`);
        console.log(response);

        // let data = await response.json();
        // console.log(data);
    } catch (error) {
        console.log(error);
        alert("에러: " + error.message);
    }
}

getPost(fdfd);
