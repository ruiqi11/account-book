import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

type Props = {
    value: number;
    onChange: (value: number) => void;
    onOk?: () => void;
}
const NumberPadSection: React.FC<Props> = (props)=> {
    //const output = props.value.toString()
    const [output, _setOutput] = useState(props.value.toString())
    useEffect(()=>{
      _setOutput(props.value.toString())
    },[props.value.toString()])
    // 修改金额
    const setOutput = (output: string) => {
        // 输入判断
        let newOutput: string;
        if(output.length > 16){
            newOutput = output.slice(0, 16);
        } else if (output.length === 0) {
            newOutput = '0';
        } else {
            newOutput = output
        }
        // 修改金额
        _setOutput(newOutput)
        // 触发父组件Change事件
        props.onChange(parseFloat(newOutput));
    };
    // 点击事件
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if(text === null) {return;}
        // 点击ok
        if(text === 'OK'){
            if(props.onOk) {props.onOk();}
            return;}
        // 点击其他按钮
        if('0123456789.'.split('').concat(['⟵', 'C']).indexOf(text)>=0){
            setOutput(generateOutput(text, output));
        }
    };
    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>⟵</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>C</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </Wrapper>
    )
}

export {NumberPadSection};
