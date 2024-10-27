import { ADDRGETNETWORKPARAMS } from "dns/promises";
import headerStyle from "./header.module.css"

//const multiplyby2=(attr:number) =>{
  //  console.log(attr*2)
//}

    

const Header =( props :any) => {
    console.log( props.taimoor)
  //  multiplyby2(3)
    //multiplyby2(2)
    //multiplyby2(9)


    return(
         <div style ={ {backgroundColor : "blue",
    border : "10px solid black"}}> 

    <h1 className={ headerStyle.h1}  >
        This is a header componen
         </h1>

    <h2> This is a header component 2</h2>

    <h3> This is a header component 3</h3>
    </div>
    

    )
};
export default Header;
