class AuthApi {

    constructor(server) {
      this._server = server;      
    }

    register({ password, email }) {
        return fetch(this._server + '/signup',
                    {method: 'POST',
                     headers: {'Content-Type': 'application/json'},
                     body: JSON.stringify({"password": password,
                                          "email": email})
                    }
                    )
                .then(res => {
                    if (res.status===400) {
                        throw res;                        
                    }
                    return res.json();                    
                })
                .then(res => {
                    return res.data;
                }                    
                )                
    }  

}

const Auth = new AuthApi('https://auth.nomoreparties.co');
export default Auth;