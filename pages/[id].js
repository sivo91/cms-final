
import { getAllIds, getData } from '../lib/data';
import Link from 'next/link'


export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths, 
    fallback: false
  };
}


export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData 
    }
  };
}




export default function Entry({ itemData }) {

  
  return (
   
    <>

        <div className="box">
       
         <div className="card vstack mx-auto mt-5">
            <div className="card-body">
              
              <h3 className="card-text text-center fs-3 mb-2"> 
                      {itemData.post_title}</h3>

              
               

               <p className="text-center">Post ID: {itemData.ID}</p>
             

               <p className="text-center"> Post Name: {itemData.post_title}</p>
              

               <div className="text-center" dangerouslySetInnerHTML={{__html: itemData.post_title}}/>
              
            </div>
          </div>

       
       {
         <Link href="/">
           <button type="button" className="btn btn-outline-warning vstack mx-auto">Back Home</button>
          </Link>
       }

         
       
     </div>
        
     



       <style jsx>{`
        .box{
          position:relative;
          width:100%;
          height:250px;
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