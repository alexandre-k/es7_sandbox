import fetch from 'node-fetch'


async function* fetchPosts() {

    let URL = 'https://jsonplaceholder.typicode.com';

    try {

        let posts = await fetch(URL + '/posts')
                        .then(
                            posts => posts.json()
                        )
        console.log(posts);
        for ( let i=0; i < posts.length; i++ ) {
            yield posts[i]
        } 

    } catch (err) {
        throw err;
    }
};

(async function displayPosts () {

    let posts = await fetchPosts()
    posts.next()

    return posts;

})();

