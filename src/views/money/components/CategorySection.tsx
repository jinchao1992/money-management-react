import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  
  > .tabs-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    position: relative;
    &.selected {
      &::after{
        width: 100%;
        height: 4px;
        background: #333;
        content: "";
        position: absolute;
        bottom: 0;
      }
    }
  }
`;

type Props = {
  value: string;
  onChange: (newValue: '-' | '+') => void;
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {
    '-': '支出',
    '+': '收入'
  };

  type Keys = keyof typeof categoryMap; // 获取某一个对象的类型

  const [categoryList] = useState<Keys[]>(['-', '+']);
  const category = props.value;
  return (
    <Wrapper>
      {
        categoryList.map(item => {
          return (
            <li
              className={category === item ? 'tabs-item selected' : 'tabs-item'}
              onClick={() => props.onChange(item)}
              key={item}
            >
              {categoryMap[item]}
            </li>
          );
        })
      }
    </Wrapper>
  );
};

export {
  CategorySection
};