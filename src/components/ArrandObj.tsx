
const ArrandObj = () => {
    const fruits = ["Apple", "Banana", "Orange"]
    const users = {firstName:"Aqsa", lastName:"Aslam", age:25}

    function fullname (users){
        return users.firstName + " " + users.lastName
    }
  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruits, index) => (
            <li>{index} - {fruits}</li>
        )
    )}
      </ul>
      <br />
      <div>

      <h1>Person Details</h1>
      <p>First Name: {users.firstName}</p>
      <p>Last Name: {users.lastName}</p>
      <p>Age: {users.age}</p>
      <br />
      <p>Full Name: {fullname(users)}</p>
      </div>



    </div>
  )
}

export default ArrandObj
