{
    // contraints

    const addCourseToStudent= <T extends {id: number; name: string; email: string}>(student : T)=>{
        const course = 'Next Level web development'
        return{
            ...student,
            course
        }
    }
    
    const student3 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id:111,
        name: 'Mr. X' ,
        email: 'x@gmail.com' ,
        devType: 'NLWD'})

    const student1 = addCourseToStudent({id:111,name: 'Mr. X' , email: 'x@gmail.com' , devType: 'NLWD'})

    const student2 = addCourseToStudent({id:222,name: 'Mr. Y' , email: 'Y@gmail.com' , devType:'NLWD' , hasWatch: 'Apple watch'})












    //
}