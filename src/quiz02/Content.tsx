import { useContext } from "react";
import MyContext from "../context/MyContext";


const Content = ({ }) => {

  const { Product } = useContext(MyContext);

  return (
    <div className='card'>

      {Product?.map((item: any) => (

        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.price}</div></div>
      ))}
    </div>
  )
}

export default Content