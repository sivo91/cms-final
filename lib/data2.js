


import got from 'got'




  const dataURL = 'https://dev-cms-rest-api.pantheonsite.io/wp-json/twentytwentyone-child/v1/data'; 

 
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
    
     function obj(x) {
       x = '{"' + item.acf_box + '"}'
      x = x.replace(/,/g,'","')
      x = x.replace(/:/g,'":"')
      const y = JSON.parse(x)
      item.acf_box = y
      console.log(item.acf_box)
      return item.acf_box
    }
    

    return {
      id: item.ID.toString(),
      title: item.post_title,
      acf : obj(item.acf_box)
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



  console.log(' ********************************************* ')

  jsonObj.forEach(
    function(item) {
      let x = '{"' + item.acf_box + '"}'
      x = x.replace(/,/g,'","').replace(/:/g,'":"')
      let y = JSON.parse(x)
      console.log(y)
      console.log(y.age)
     // item.acf_box = y
    }
  )

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