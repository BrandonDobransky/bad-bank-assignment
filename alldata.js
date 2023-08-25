function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <>
     <h1>All Data</h1>
      <table className="table" key="table">
    <thead>
      <tr>
        <th scope="col" key="user">User</th>
        <th scope="col" key="email">Email</th>
        <th scope="col" key="password">Password</th>
        <th scope="col" key="balance">Balance</th>
      </tr>
    </thead>
      <tbody>
          {ctx.users.map((user) => {
            return (
              <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.balance}</td>
              </tr>
            )
          })}
      </tbody>
  </table>
      </>
    );
  }
