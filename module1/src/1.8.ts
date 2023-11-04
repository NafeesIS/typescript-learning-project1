{
  //destructuring

  const user = {
    id: 345,
    name: {
      firstName: "Nafees",
      middleName: "Imtiaz",
      lastName: "Shawon",
    },
    contactNo: 1715409191,
    address: "Cumilla",
  };
  const {
    contactNo,
    name: { middleName: midName },
  } = user;

  //array destructuring

  const myFriends = ["Shakib", "Shamim", "Dhiman", "Pronob", "Rabbil", "Mehedi"];

  const [, , Bestfriend, ...rest] = myFriends;
}
