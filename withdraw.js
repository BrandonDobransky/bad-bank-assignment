/// cannot access user info to display account total and make functional

function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [withdraw, setWithdraw] = React.useState('');
  const [update, setUpdate] = React.useState('false');
  let data = ctx.users[0].balance;

  const handleTextChange = (event) => {
    setWithdraw(event.target.withdraw);
  }

  function withdrawMoney() {
    console.log(withdraw);
    let balance = document.getElementById('balance').value;
    if (balance > 0 && data >= balance && !isNaN(balance)) {
      data -= Number(balance);
      setUpdate(true);
      setShow(false);
      ctx.users[0].balance = data
      setValue('')
      alert('Your transaction is complete.');
    } else {
      alert('Not enough available funds, please try again.')
    }
   

  }

  function validate(field, label) {
      if (!field) {
        setStatus('Error:' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (balance - withdraw < 0) {
        setStatus('Error: Cannot withdraw more than is in the account')
        return false;
      }
      if (withdraw =!Number) {
        setStatus('Error: Please enter a valid number');
        return false;
      }
      return true;
  }


  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="danger"
      txtcolor="white"
      header="Withdraw"
      status={status}
      body={show ? (  
            <>
            <div text="card-body" >{update ? 'Current Balance: ' + data : 'Current Balance: ' + data}</div><br/>
            <div text="card-body">Withdrawal amount</div>
              <input type="number" className="form-control" id="balance" placeholder="$0.00" value={withdraw} onChange={handleTextChange} /><br/>
              <button type="submit" className="btn btn-light" onClick={withdrawMoney}>Withdraw</button>
            </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
              </>
            )}
    />
  )
}