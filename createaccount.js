function CreateAccount(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext); 

    function validate(field, label){
        if (!field) {
          setStatus('Error: please provide your ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        if (true) {
          setStatus('For choosing us as your bank, we have deposited $100 dollars into your account to show our gratitude.')
        return true;
        }
    }

    function handleCreate(){
        console.log(name,email,password);
        if (!validate(name, 'name'))     return;
        if (!validate(email, 'email'))    return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name,email,password,balance:100});
        setShow(false);
      }   

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
      }

    return (
        <Card
         bgcolor="info"
         txtcolor="white"
         header="Create Account"
         status={status}
         body={show ? (  
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-dark" onClick={handleCreate}>Create Account</button>
            </>
          ):(
            <>
            <h5>Success, Welcome to Bad Bank</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>Add Additional Account</button>
            </>
          )}

        />
    );
}