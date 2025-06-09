
const urlCombo = (url, ID) =>{
    return `${url}/${ID}`; 
}

const getPosts = async (url, elementIdPost, elementIdTitle, postID) => {
    const elementForPost = document.getElementById(elementIdPost); 
    const elementForTitle = document.getElementById(elementIdTitle); 
    const ourURL = urlCombo(url, postID); 
    try {
        const response = await fetch(ourURL); 
        const data = await response.json(); 
        console.log(data); 
        const post = data.body; 
        const title = data.title; 
        console.log(
            "Here's our Post:", post, 
            "Here's our title", title
        ); 
        elementForPost.innerText = post; 
        elementForTitle.innerText = title; 

    } catch (error) {
        console.log("Error Detected:", error); 
    }
}

const createPost = async (url, userID, ID, title, body, postTitleID, postParaID) => {

    try {
        const response = await fetch(url, {
            method: 'POST', 
            body: JSON.stringify({
                userId: userID,
                id: ID,
                title: title,
                body: body
            }), 
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        
        }); 
            console.log(response)
            const newPostData = await response.json()
            console.log(newPostData);
            const postTitle = document.getElementById(postTitleID); 
            const postPara = document.getElementById(postParaID); 
            postTitle.innerText = newPostData.title; 
            postPara.innerText = newPostData.body; 
    } catch (error) {
        console.log("Error:", error)
    }
}

//ID for Post: postID
getPosts("https://jsonplaceholder.typicode.com/posts", "postID", "title", 100); 
createPost("https://jsonplaceholder.typicode.com/posts", 2, "101", "The Fall Of Man", "Now we can change our new post!", "postTitle", "postPara"); 