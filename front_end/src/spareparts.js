/**
 * <Route exact path='/login' 
        render = {
			props => 
			<LoginForm
			{...props} 
			isLoading={isLoading}
			username={username} 
			password={password}/>
			}/>
    
        <Route exact path='/auth' 
        render ={ 
			props => 
			<UserAuthentication
			{...props} 
			isLoading={isLoading}
			accessJWT={accessJWT} 
			refreshJWT={refreshJWT}
			username={username} 
			password={password}			
			/>}/>
        
        
 
 * 
 * constructor(props) {
        super(props)
        this.state = {
            username: "testuser5", 
            password: 'UBVfn@3@jAhnknu', 
            accessJWT: '',
                refreshJWT:'',
                isLoggedIn: false,
                isLoading: true,
            
        }
    }
 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * /
