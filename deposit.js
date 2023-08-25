/// cannot grab logged in status to display balance and make deposits functional


function Deposit(){
  const ctx = React.useContext(UserContext); 
  const [update, setUpdate] = React.useState('false');
  const [value, setValue] = React.useState('')
  const [show, setShow] = React.useState(true);
  let data = ctx.users[0].balance;
  
  const handleTextChange = (event) => {
    setValue(event.target.value);
  }; 

  function depositMoney(){
    console.log(data)
    let balance = document.getElementById('balance').value;
    if(balance > 0 && !isNaN(balance)) {
    data += Number(balance);
    setUpdate(true);
    setShow(false);
    ctx.users[0].balance = data
    setValue('')
    alert('Thank you for banking with us!');
    } else {
    alert('Please try again.')
    }
  };
  
    function validate(field, label){
      if (!field) {
        alert('Please enter deposit amount');
        setTimeout(() => setValue(''),3000);
        return false;
      }
      if (isNaN(field) === true) {
        alert('Please enter a numeric value');
        setTimeout(() => setValue(''),3000);
        return false;
      };
      if (field < 0) {
        amlert('Amount entered is not a valid request');
        setTimeout(() => setValue(''),3000);
        return false;
      };
    return true;
    }
  
    function clearForm(){
      setValue('');
      setShow(true);
    }
  
  
    return (
      <Card
        bgcolor="success"
        txtcolor="white"
        header="Deposit"
        body= {  
                <>
              <div text="card-body"> {update ? 'Current Balance: ' + data : 'Current Balance: ' + data}</div><br/>
              <div text="card-body"> Deposit Amount<br/></div> 
                <input  type="number" className="form-control" id="balance" placeholder="$0.00" value={value} onChange={handleTextChange} /><br/>
                <button type="submit" className="btn btn-dark" onClick={()=> depositMoney(value)} >Deposit</button>
                </>}
        />
    );
};
            
