function Balance(){
    const [balance, setBalance] = React.useState(0);
    const ctx = React.useContext(UserContext);
    return (
        <h1>Your Current Balance is ${balance}<br/>
    </h1>
    );
}