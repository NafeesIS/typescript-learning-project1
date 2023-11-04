{
  //ternary operator || Optional Chaining || nullish coalescing operator

  //ternary operator
  const age: number = 11;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("child");
  }

  const isAdult = age >= 18 ? "adult" : "child";

  //nullish operator
  // null / undefiend ---> decision making

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  //Optional Chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      parmanentAddress?: string;
    };
  };

  const user: User = {
    name: "Persian",
    address: {
      city: "Cumilla",
      road: "Halishahar",
      presentAddress: "ctg",
    },
  };

  const parmanentAddress = user?.address?.parmanentAddress ?? "No Parmanent Address";

  console.log({ parmanentAddress });
}
