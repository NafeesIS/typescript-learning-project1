{
  //spread operator
  //rest operator

  //1/learn spread operator

  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros12: string[] = ["Shamim", "Shakib", "Pronob"];

  bros1.push(...bros12);

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  //2/learn rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Babul");
}
