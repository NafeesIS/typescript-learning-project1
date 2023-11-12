{
    //function with generics
 
    const createArray= (param: string): string[]=>{
        return [param]
    }
    const createArrayWithGeneric= <T>(param: T): T[]=>{
        return [param]
    }

    type User = {id: number; name:string};

const res1 = createArray('Bangladesh')
const res2 = createArrayWithGeneric<string>('Newzwland') 
const res3 = createArrayWithGeneric<User>({id:589, name: 'Mr. Nafees'})






    const createArrayWithTuple= <T,Q>(param1: T , param2: Q) : [T,Q]=>{
        return [param1, param2]
    }


const resTuple = createArrayWithTuple<string , number>('Bangladesh' , 222)
const resTuple2 = createArrayWithTuple<string,{name: string}>('Newzwland' , {name: 'Asia'}) 
// const res3 = createArrayWithGeneric<User>({id:589, name: 'Mr. Nafees'})


const addCourseToStudent= <T>(student : T)=>{
    const course = 'Next Level web development'
    return{
        ...student,
        course
    }
}

const student1 = addCourseToStudent({name: 'Mr. X' , email: 'x@gmail.com' , devType: 'NLWD'})
const student2 = addCourseToStudent({name: 'Mr. Y' , email: 'Y@gmail.com' , devType: 'NLWD' , hasWatch: 'Apple watch'})


    //
}