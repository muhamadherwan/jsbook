// post object array
const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post)=> {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// create the new post and callback the getPosts function:
const newPost = {title: 'Post three', body: 'This is post three'};

createPost(newPost, getPosts);