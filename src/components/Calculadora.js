import { Btn } from './Btn';
import { Screen } from './Screen';
import React, {useState} from 'react'
import "../App.css";

export const Calculadora = () => {

    const [data, setData] = useState(0);
    const [predata, setPredata] = useState(0);

    const [resetBtn, setReset] = useState(false);

   const calculate = () => {
        try {
            const result = eval(predata);
            setData(result);
        } catch (e) {
            setData('error')
        }
    };

    const handleClick = e => {
       
        const value = e.target.getAttribute('data-value');
        switch(value) {
            case 'clear':
                setData(0);
                setPredata(0);
                break;
            case 'equal':
                calculate();
                setReset(true);
                setPredata(0);
                break;
            default:
                resetBtn != true ? 
                setPredata(predata !== 0 ? predata + value : value) :
                setReset(false);
                setData(0);
                setPredata(0);
                setPredata(predata !== 0 ? predata + value : value);
        }
    };


    return (
      <div>
        <p className="tittle">JCalculadora using React</p>
<div className="container">
        <p>{predata}</p>
      <div className="wrapper">   
      <Screen data={data} />

        <Btn label="C" value="clear" styles="btn red" onClick={handleClick}/>   
        <Btn label="( )" value="()" styles="btn green disabled" onClick={handleClick}/>
        <Btn label="%" value="%" styles="btn green" onClick={handleClick}/>
        <Btn label="÷" value="/" styles="btn green" onClick={handleClick}/>

        <Btn label="7" value="7"  styles="btn" onClick={handleClick} />
        <Btn label="8" value="8" styles="btn" onClick={handleClick}/>
        <Btn label="9" value="9" styles="btn" onClick={handleClick} />
        <Btn label="X" value="*" styles="btn green" onClick={handleClick} />

        <Btn label="4" value="4" styles="btn" onClick={handleClick} />
        <Btn label="5" value="5" styles="btn" onClick={handleClick} />
        <Btn label="6" value="6" styles="btn" onClick={handleClick} />
        <Btn label="-" value="-" styles="btn green" onClick={handleClick} />

        <Btn label="1" value="1" styles="btn" onClick={handleClick} />
        <Btn label="2" value="2" styles="btn" onClick={handleClick} />
        <Btn label="3" value="3" styles="btn" onClick={handleClick} />
        <Btn label="+" value="+" styles="btn green" onClick={handleClick}/>

        <Btn label="+/-" value="+/-" styles="btn disabled" onClick={handleClick} />
        <Btn label="0" value="0" styles="btn" onClick={handleClick} />
        <Btn label="." value="." styles="btn" />
        <Btn label="=" value="equal" styles="btn equal" onClick={handleClick} />
        </div>
        </div>
        </div>
    )
}
