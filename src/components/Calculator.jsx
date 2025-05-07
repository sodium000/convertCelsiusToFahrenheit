

 import React from "react";
 import TemperatureInput from "./TemperatureInput";
 import {convert,toCelsius,toFahrenhit} from "../lib/Convertor"

 export default class Calclator extends React.Component {
        state = {
            temperature :"",
            scale : "c"
        };
         
        handlechange = (e,scale)=>{
            this.setState ({
                temperature: e.target.value,
                scale,
            });
        };
        render(){
            const {temperature,scale}= this.state;
            const celsius = scale === 'f' ? convert(temperature,toCelsius):temperature ;
            const fahrenheit = scale === 'c' ? convert(temperature,toFahrenhit):temperature ;

            return (
                <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handlechange}
                    />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handlechange}
                    />

            </div>
        );
    }
}
