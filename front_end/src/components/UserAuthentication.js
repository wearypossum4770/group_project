import React from 'react'
//import Cookies from 'js-cookie'
/**
 * const testuser2 = { "usernmae": "testuser2", 'password': '6vfnEGv@V6hk4Bt' }
const testuser3 = { "usernmae": "testuser3", 'password': 'vVhfEHj@dkXkwH8' }
const testuser4 = { "usernmae": "testuser4", 'password': 'KBw@GnwvPgP99yM' }
const testuser5 = { "usernmae": "testuser5", 'password': 'UBVfn@3@jAhnknu' }
const user1 = { "usernmae": "user1", 'password': 'STrfJni873!PKc.' }
const dragoomdoc = { "usernmae": "dragoomdoc", 'password': 'fWvWzV!JGrrH3Za' }
*/
class UserAuthentication extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authenticationObject: {
                accessJWT: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU4NjczMjY3NiwianRpIjoiZmZhOGFkYmY5YjE1NGM3OGFkZjU4MzQxYTQ0ZjBkOTciLCJ1c2VyX2lkIjo1fQ.RqtnVpS1jArqeUYbEu-7ln3z_KBj6vUzs_fDnGWSC3w",
                refreshJWT: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg2NjQ2NTc2LCJqdGkiOiI1Y2YyZDI1NTllODk0YWZjYmQ2MzIxZjUyN2IxYThhNSIsInVzZXJfaWQiOjV9.hBd4-Gfm5w9EfEy4BoVt-tGsZ6ixJ5cOwr-e7g-8Vaw",
                isLoggedIn: false,
                isLoading: false,
            }
        }
    }
    async componentDidMount() {
        const payload ={ "usernmae": "testuser5", 'password': 'UBVfn@3@jAhnknu' }
        let myHeaders = new Headers()
        myHeaders.append('Content-Type', 'text/plain')
        myHeaders.append('Origin', 'http://localhost:3000')
        const myInit = {
            method:'POST',
            headers:myHeaders,
            mode:'no-cors',
           credentials:'same-origin'
        }
        let url = `http://0.0.0.0:8000/api/token/`
        //const csrftoken = Cookies.get('csrftoken')
        
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }

    

    render() {
        return (<div>USERT AUTHENICATED</div>)
    }
}

export default UserAuthentication;


//"csrftoken":"fInIw8rxxmKkQ3ZvTiUqgVWmh1bkIzNwyFzzONXpqjhIa3n3XCykfVcWiapvS03q"	
