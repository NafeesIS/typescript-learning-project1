{
  //interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User2 & { role: string };
  //both works same one with type alias and one with interface
  interface UserWithRole2 extends User1 {
    role: string;
  }

  const user1: UserWithRole1 = {
    name: "Persian",
    age: 35,
    role: "manager",
  };

  type rollNumber = number;

  //we can use type alias for premitive but interface is not useable for premitive

  //js object --> , array -> object, function -> object
  //for array
  type Roll1 = number[];

  const rollNumber1: Roll1 = [1, 2, 3];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber2: Roll2 = [4, 5, 6];
  //for funtion
  type Add1 = (num1: number, num2: number) => number;

  const add1: Add1 = (num1, num2) => num1 + num2;

  interface Add2 {
    (num3: number, num4: number): number;
  }

  const add2: Add2 = (num3, num4) => num3 + num4;
}
