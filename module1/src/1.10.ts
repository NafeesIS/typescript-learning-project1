{
  //
  //union types
  type FrontendDeveloper = "chillDeveloper" | "JuniorDeveloper";
  type FullStackDeveloper = "frontedDeveloper" | "expertDeveloper";
  type Developer = FrontendDeveloper | FullStackDeveloper;
  const newDeveloper: FrontendDeveloper = "JuniorDeveloper";
  const newDeveloper2: Developer = "JuniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const user1: User = {
    name: "Nafees",
    gender: "male",
    bloodGroup: "O+",
  };
  //Intersection Types

  //   type FrontendDeveloper = {
  //     skills: string[];
  //     designation1: "Frontend Developer";
  //   };
  //   type BackendDeveloper = {
  //     skills: string[];
  //     designation2: "Backend Developer";
  //   };

  //   type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  //   const fullstackDeveloper: FullStackDeveloper = {
  //     skills: ["HTML", "CSS", "EXPRESS"],
  //     designation1: "Frontend Developer",
  //     designation2: "Backend Developer",
  //   };
}
