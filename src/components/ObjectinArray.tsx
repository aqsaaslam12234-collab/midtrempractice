const ObjectinArray = () => {
  const users = [
    { firstName: "Aqsa", lastName: "Aslam", age: 25 },
    { firstName: "Hadia", lastName: "Harmain", age: 23 },
    { firstName: "Gulam", lastName: "Mustafa", age: 16 }
  ];

  function fullName(user) {
    return user.firstName + " " + user.lastName;
  }

  return (
    <div>
      <h1>Person Details</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {fullName(user)} is {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectinArray;
