//cannot figure out how to get page to recognize person logged in 

function Login(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext); 
    
function validate(field, label){
    if (!field) {
    setStatus('Error: please provide your  ' + label);
    setTimeout(() => setStatus(''),3000);
    return false;
    }
    return true;
}

function handleLogin(){
     console.log(email,password);
     console.log(ctx.users);
     if (!validate(email, 'email')) return; 
     if (!validate(password, 'password')) return;
     const user = ctx.users.find((user) => user.email == email); 
     if (!user) {
        setStatus('User not found');
        setTimeout(() => setStatus(''), 3000);
        return
     }
     if (user.password == password) {
        setShow(false);
       // ctx.loggedIn.push({user}); how to impliment
        console.log(ctx);
        return;
     } else {
        setStatus('Password not recognized, try again.')
        setTimeout(() => setStatus(''), 3000);
        return;
     }
}

function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
}

    return (
        <Card
         bgcolor="info"
         txtcolor="white"
         header="Login"
         status={status}
         body={show ? (  
            <>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-dark" onClick={handleLogin}>Login</button>
            </>
          ):(
            <>
            <h5>Welcome Back!</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>Log in</button>
            </>
          )}

        />
    )
}