{
  //Type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Nafees",
    age: 24,
    gender: "male",
    contactNo: "01715409191",
    address: "cumilla",
  };
  const student2: Student = {
    name: "Mir",
    age: 23,
    gender: "male",
    address: "cumilla",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
