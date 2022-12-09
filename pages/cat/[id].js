
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


   function obj(str) {
    return str
      .split(",")
      .map((keyVal) => {
        return keyVal.split(":").map((_) => _.trim());
      })
      .reduce((accumulator, currentValue) => {
        accumulator[currentValue[0]] = currentValue[1];
        return accumulator;
      }, {});
  }

    const x = obj(itemData.acf_box)
    console.log(x)
   
  
  return (
   
    <>
      
        <div className="box">
       
         <div className="card vstack mx-auto mt-5">
            <div className="card-body">
              
              <h3 className="card-text text-center fs-3 mb-2 fw-bold"> 
                      {itemData.post_title}</h3>

              

              <p className="text-center"> 
               <span className='fw-semibold'>Breeds: </span> {x.breeds}
              </p>

               <p className="text-center">
                  <span className='fw-semibold'>Age: </span> {x.age}
                 </p>

                 <p className="text-center"> 
                    <span className='fw-semibold'>Color: </span> {x.color}
                 </p> 
               

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