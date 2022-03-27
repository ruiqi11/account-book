import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background: #f4f4f4;
    > li {
      font-size: 20px;
      width: 50%;
      text-align: center;
      padding: 10px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 100%;
        background: rgba(124, 84, 255, 20%);
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        border-radius: 50px;
        font-weight: 600;
      }
    }
  }
`;

type Props = {
    value: '-' | '+',
    onChange: (value: '-' | '+') => void
}
const CategorySection: React.FC<Props> = (props) => {
    const categoryMap = {'-':'支出', '+':'收入'}
    type Keys = keyof typeof categoryMap
    const [categoryList] = useState<Keys[]>(['-', '+'])
    const category = props.value
    return (
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li key={c}
                        className={category === c ? 'selected' : ''}
                        onClick={()=>{props.onChange(c);}}
                    >{categoryMap[c]}
                    </li>
                )}
            </ul>
        </Wrapper>
    )
}

export {CategorySection};
