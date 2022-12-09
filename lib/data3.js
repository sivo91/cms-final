


import got from 'got'




  const dataURL = 'https://dev-cms-rest-api.pantheonsite.io/wp-json/twentytwentyone-child/v1/cats'; 

 
export async function getAllIds() {



  let jsonString;
  try {
    jsonString = await got(dataURL)
    console.log(jsonString.body)
  } catch (error) {
    jsonString.body = []
    console.log(error)
  }

   const jsonObj = JSON.parse(jsonString.body)

  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  }); 
} 


 export async function getSortedList() {


  let jsonString;
  try {
    jsonString = await got(dataURL)
    console.log(jsonString.body)
  } catch (error) {
    jsonString.body = []
    console.log(error)
  }

  const jsonObj = JSON.parse(jsonString.body)
 
  return jsonObj.map(item => {
    
      /*  item.acf_field.forEach(
        function(item) {
          let x = '{"' + item.acf_field + '"}'
          x = x.replace(/,/g,'","')
          x = x.replace(/:/g,'":"')
          let y = JSON.parse(x)
          item.acf_field = y
         return item.acf_field
        }
      )  */
    

    return {
      id: item.ID.toString(),
      title: item.post_title,
     // acf : item.acf_field 
    }

  });
} 


export async function getData(id) {


  let jsonString;
  try {
    jsonString = await got(dataURL)

  } catch (error) {
    jsonString.body = []
    console.log(error)
  }

  const jsonObj = JSON.parse(jsonString.body);

  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === id;
  });


  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  return objReturned;
}