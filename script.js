import fetch from 'node-fetch'

//https://api.github.com/users/alexandre-k
//https://api.github.com/users/alexandre-k/repos

const username = 'alexandre-k'

const getProfile = () => fetch(`http://api.github.com/users/${username}`);

const getRepos = () => fetch(`http://api.github.com/users/${username}/repos`);

/*
 * getProfile()
 *     .then((profileResponse) => profileResponse.json())
 *     .then((profile) => {
 *         return getRepos()
 *                     .then((reposResponse) => reposResponse.json())
 *                     .then((repos) => {
 *                         return {
 *                             repos,
 *                             profile
 *                         };
 *                     });
 *     })
 *     .then((combined) => {
 *         console.log(combined);
 *     })
 *     .catch((err) => {
 *         console.log(err);
 *     });
 */

async function getCombined() {
    const profileResponse = await getProfile();
    const profile = await profileResponse.json();
    const reposResponse = await getRepos();
    const repos = await reposResponse.json();

    return {
        repos,
        profile
    };
}

(async function() {
    try{
        const combined = await getCombined();
        console.log(combined);
    }
    catch(err) {
        console.log(err);
    }
}());
