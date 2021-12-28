/* 
  ## Promises
*/

const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ res: 'Success!' })
    // reject({ error: 'Error!' })
  }, 2000);
})

// Then Catch -> follow with the code execution

apiCall
  .then((response) => {
  console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })

/* 
  ## Async Await -> pauses code execution until the apiAsyncCall ends
*/  

async function apiAsyncCall () {
  try {
    const response = await apiCall;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

apiAsyncCall()
