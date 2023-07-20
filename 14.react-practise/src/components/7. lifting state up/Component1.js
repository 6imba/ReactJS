import { useState } from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}



export default function Calculator(){
    const [temperature, setTemp] = useState("1")
    const [scale, setScale] = useState("c")
    
    const handleInputCeciusTemp = (e) => {
        setScale("c")
        setTemp(e.target.value)
    }
    const handleInputFahrenheitTemp = (e) => {
        setScale("f")
        setTemp(e.target.value)
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    
    return(
        <>
            <TemperatureInput scale="c" temperature={celsius} handleTempInputChanged={handleInputCeciusTemp}/>
            <TemperatureInput scale="f" temperature={fahrenheit} handleTempInputChanged={handleInputFahrenheitTemp}/>
            <BoilingVerdict celsius={celsius}/>
        </>
    )
}

function TemperatureInput(props){
    return(
        <fieldset>
                <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
                <input value={props.temperature} onChange={props.handleTempInputChanged} />
        </fieldset>
    )
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}



// # Lifting up state in react:
//     - In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.

// Here Calculator is the ancestor_parent_component for child_TemperatureInput_component.
// here we have two child_TemperatureInput_component with dynamic props.
// temperature and scale is the state maintained in ancestor_parent_component which is shared between child_TemperatureInput_component.

// 