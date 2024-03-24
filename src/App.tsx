import { useState, useContext, useEffect } from 'react'
import './App.css'
import MyContext from './context/MyContext'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'
import { Product } from './context/MyContext'



function App() {


  const { Product, setProduct } = useContext(MyContext);

  const [step, setStep] = useState(1);


  const products = [
    { id: 1, step: 1, name: 'Mouse', price: 60 },
    { id: 2, step: 1, name: 'Monitor', price: 70 },
    { id: 4, step: 2, name: 'Keyboard', price: 80 },
    { id: 5, step: 2, name: 'Headset', price: 90 },
    { id: 6, step: 3, name: 'Tablet', price: 100 },
    { id: 7, step: 3, name: 'Hub', price: 110 }
  ];


  //const[currrentInfo, setCurrentInfo] = useState <Product[]>([])


  function changeInfo() {



    if (step >= 1 && step <= 3) {

      const newInfo = products.filter((item) => item.step === step);
      // console.log(newInfo)
      setProduct(newInfo);


    } else {

      setProduct(products);

    }


  }





  useEffect(() => {

    const newInfo = products.filter((item) => item.step === 1);
    setProduct(newInfo);
  }, [])


  useEffect(() => {

    changeInfo();
  }, [step])





  return (
    <>


      <h1>Quiz 02</h1>
      <Stepper step={step} />
      <Content />
      <div className='flex'>
        <button onClick={() => { setStep(step - 1) }} type="button">Prev</button>
        <button onClick={() => { setStep(step + 1) }} type="button">Next</button>
      </div>

    </>
  )
}

export default App
