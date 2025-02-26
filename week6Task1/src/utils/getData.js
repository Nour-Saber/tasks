import fs from 'fs/promises'


export const getStudentsData = async()=>{
    try{
    const data = await fs.readFile("students.json","utf-8");
    return  JSON.parse(data);
    }
    catch(err){
     console.log(`ERROR ${err.message}`);
    }

}
export const getFakeData = ()=>{
   const fakeData= Array.from({length:20},()=>{
        return {
           book_format:faker.book.format() ,
           book_genre:faker.book.genre() 

        }

    })

}
export const getUsersData = async()=>{
    try{
    const data = await fs.readFile("users.json","utf-8");
    return  JSON.parse(data);
    }
    catch(err){
     console.log(`ERROR ${err.message}`);
    }

}