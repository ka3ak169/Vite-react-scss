import React, { useState } from 'react';

function Calc() {
  // Создаем отдельное состояние для каждого поля ввода
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  // Функция для обработки изменений в полях ввода
  function handleChange(event, setValue) {
    const newValue = event.target.value;
    setValue(newValue); // Обновляем состояние соответствующего поля ввода
  }

  function isValidNumber(value) {
    return value !== undefined && value !== null && value !== '' && !isNaN(value);
  }

  function manipulateIfOneMissing(num1, num2, num3, num4) {
    const numbers = [num1, num2, num3, num4];
    const validNumbersCount = numbers.filter(isValidNumber).length;
  
    if (validNumbersCount === 3) {
      const missingIndex = numbers.findIndex(n => !isValidNumber(n));
      // Теперь missingIndex содержит индекс числа, которого нет
      // Вы можете провести манипуляции с этим числом
      // Например, вызвать функцию для этого числа (если это имеет смысл)
      console.log(missingIndex);
      // Здесь можно вызвать функцию для обработки отсутствующего числа      
      if (missingIndex === 0) {
        setValue1(value3 * value4 / value2)
        console.log(value1);
      } else if (missingIndex === 1) {
        setValue2(value3 * value4 / value1)
        console.log(value2);
      } else if (missingIndex === 2) {
        setValue3(value1 * value2 / value4)
        console.log(value3);
      } else if (missingIndex === 3) {
        setValue4(value1 * value2 / value3)
        console.log(value4);
      }
    } else {
      console.log('не так числа стоят');
    }
  }

  return (
    <div className='calc'>
      <div className='calc__container'>
        <input
          className='calc__input'
          type="number"
          value={value1}
          onChange={(e) => handleChange(e, setValue1)}
        />
        <span className='calc__sign'>x</span>
        <input
          className='calc__input'
          type="number"
          value={value2}
          onChange={(e) => handleChange(e, setValue2)}
        />
        <span className='calc__sign'>=</span>
        <input
          className='calc__input'
          type="number"
          value={value3}
          onChange={(e) => handleChange(e, setValue3)}
        />
        <span className='calc__sign'>x</span>
        <input
          className='calc__input'
          type="number"
          value={value4}
          onChange={(e) => handleChange(e, setValue4)}
        />
        <button
          className='calc__confirm'
          type='submit'
          onClick={() => {manipulateIfOneMissing(value1, value2, value3, value4)}}
        >GO!</button>
      </div>
    </div>
  );
}

export default Calc;
