
import { getAllIds, getData } from '../../lib/data3'
import Link from 'next/link'



// dava id a vytvara novu page
export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths, // represent id
    fallback: false
  };
}


 // vytahuje data 
export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData 
    }, 
    revalidate: 10
  };
}





// data novej stranke
export default function Entry({ itemData }) {


  let x = itemData.acf_box
  console.log(x)

 /*  function a (item)  {
      let x = '{"' + item.acf_box + '"}'
      x = x.replace(/,/g,'","')
      x = x.replace(/:/g,'":"')
      const y = JSON.parse(x)
      item.acf_box = y
  }
  */
  
  //console.log(itemData.acf_box)

   /*    let x = '{"' + itemData.acf_box + '"}'
      x = x.replaceAll(',','","')
      x = x.replaceAll(',','":"')
      const y = JSON.parse(x)
      console.log(y)
      console.log(y.breeds)
      itemData.acf_box = y */
   
  
  return (
   
    <>
      
        <div className="box">
       
         <div className="card vstack mx-auto mt-5">
            <div className="card-body">
              
              <h3 className="card-text text-center fs-3 mb-2"> 
                      {itemData.post_title}</h3>

              

              {/* */}


               {/*  <p className="text-center"> acf-field : {itemData.acf_box}</p> */} 

                  {/*  {console.log(itemData)} */}

                  
              <p className="text-center">acf_fields : {itemData.acf_box}</p> 


               {/* <p className="text-center"> Post Name: {itemData.post_title}</p>
                <p className="text-center"> status: {itemData.post_status}</p>   */}
               

               <div className="text-center" dangerouslySetInnerHTML={{__html: itemData.post_title}}/>
              
            </div>
          </div>

       
       {
         // link na domovsku stranky
         <Link href="/cat">
           <button type="button" className="btn btn-outline-warning vstack mx-auto">Back Home</button>
          </Link>
       }

         
       
     </div>
        
     



       <style jsx>{`
        .box{
          position:relative;
          width:100%;
          height:250px;
          margin-bottom: 155px;
        }
         
          .card {
            position:relative;
            width:15rem;
            heigth:22rem !important;
            margin:10px;
            
            background-color:yellow;
          }
         .btn {
           color:black;
           
         }
          
        `}</style>
    
    </> 
  
  );
}