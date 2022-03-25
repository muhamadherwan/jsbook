// post object array
const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function createPost(post) {
    // use promises
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            posts.push(post);

            // error example
            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("error: something when wrong");
            }

        }, 2000);
    });
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

createPost(newPost)
.then(getPosts)
.catch(function(err){
    console.log(err);
});