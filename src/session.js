export const redirectUser = (navigate) => {
 

        navigate('/home');
   
}

export const protectedRoute = (navigate) => {
    const userSession = sessionStorage.getItem('user');
    if (!userSession) {
        navigate('/');
    }
}