import { faker } from '@faker-js/faker'
import fs from 'fs/promises'

 const getDataFromFile = async () => {
    try {
        const data = await fs.readFile('data.json', 'utf-8');
        return JSON.parse(data);

    } catch (error) {
        console.log(error)
    }

}


 const getFakeData = () => {

  const fakeData =  Array.from({ length: 20 }, ()=>{
        return {
             name:faker.food.dish() ,
             ingredients: faker.food.ingredient(),
             description:faker.food.description() 
        }
    })

  return fakeData
}


export { getDataFromFile , getFakeData }