export const setAuthToken = (user) =>{

    // jwt create---------------------------
    const currentUser = {
        email : user?.email
    }
    

    fetch('https://genius-car-server-ten.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // local storage is easiest but not the best for safe jwt token
            localStorage.setItem('genius-token', data.token)
        });


}