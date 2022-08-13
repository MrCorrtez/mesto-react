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
                    if (!res.ok) {
                        throw res;                        
                    }
                    return res.json();                    
                })
                .then(res => {
                    return res.data;
                }                    
                )                
    }  

    authorize({ password, email }) {
        return fetch(this._server + '/signin',
                    {method: 'POST',
                     headers: {'Content-Type': 'application/json'},
                     body: JSON.stringify({"password": password,
                                          "email": email})
                    }
                    )
                .then(res => {
                    if (!res.ok) {
                        throw res;                        
                    }
                    return res.json();                    
                })
                .then(res => {
                    return res.token;
                }                    
                )                
    }

    me(jwt) {
        return fetch(this._server + '/users/me',
                    {method: 'GET',
                     headers: {'Content-Type': 'application/json',
                               'Authorization': 'Bearer ' + jwt}                     
                    }
                    )
                .then(res => {
                    if (!res.ok) {
                        throw res;                        
                    }
                    return res.json();                    
                })                
    }

}

const Auth = new AuthApi('https://auth.nomoreparties.co');
export default Auth;