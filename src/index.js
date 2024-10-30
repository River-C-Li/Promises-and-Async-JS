// Importing database functions. DO NOT MODIFY THIS LINE.//
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(dbs) {   // should cover all id source???????????
 
return new Promise((resolve, reject)=> {
  console.log(`user id are + ${dbs}`)
  if (dbs ===" ") {
    resolve("  ")
  }else {
    reject("  ")
  }
})
}
function processDate(returnedValue){
  return new Promise((resolve, reject)=>{
    console.log("")
    resolve(`users id are processing + ${returnedValue}`)
  })
}

async function getid(){
  try { 
          
    const dbs = {
      db1: db1,
      db2: db2,
      db3: db3,
    };//how to cover all id source with one ????????
    dbs[valueReturnedFromCentral](id)
    
    const returnedValue = await central(id);  
    console.log()
    const returnedValue = await db1(id);
    console.log()
    const returnedValue = await db2(id);
    console.log()
    const returnedValue = await db3(id);
    console.log()
    const returnedValue = await vault(id);
    console.log()

    const  processedValue = await processDate(returnedValue)
    console.log(processedValue)
  }catch(err){
    console.log(err)
  }
}
getid()


// method:'post',
// body：JSON.stringify(),
// headers:{
//   'Content-type' : 'application/json; charset = UTF-8'
// }



{
  id: Number(),
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: ""
    }
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
}