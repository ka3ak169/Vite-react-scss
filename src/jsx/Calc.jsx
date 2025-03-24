import React, { useState } from 'react';
import '../scss/App.scss';

function Calc() {
  const [values, setValues] = useState(['', '', '', '']);

  // Функция для проверки валидности числа
  const isValidNumber = (value) => {
    return value !== '' && !isNaN(value) && value !== '0';
  };

  // Функция для расчета пропорции a*x=b*y
  const calculateProportion = () => {
    const numbers = values.map(val => isValidNumber(val) ? parseFloat(val) : null);
    const validCount = numbers.filter(num => num !== null).length;
    
    if (validCount === 3) {
      const missingIndex = numbers.findIndex(num => num === null);
      
      // a*x=b*y
      if (missingIndex === 0) { // если отсутствует a
        return (numbers[2] * numbers[3]) / numbers[1];
      } else if (missingIndex === 1) { // если отсутствует x
        return (numbers[2] * numbers[3]) / numbers[0];
      } else if (missingIndex === 2) { // если отсутствует b
        return (numbers[0] * numbers[1]) / numbers[3];
      } else if (missingIndex === 3) { // если отсутствует y
        return (numbers[0] * numbers[1]) / numbers[2];
      }
    }
    return null;
  };

  // Обработчик изменения значений
  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  // Обработчик удаления значения
  const handleDelete = (index) => {
    const newValues = [...values];
    newValues[index] = '';
    setValues(newValues);
  };

  // Обработчик расчета
  const handleCalculate = () => {
    const result = calculateProportion();
    if (result !== null) {
      const newValues = [...values];
      newValues[values.findIndex(val => !isValidNumber(val))] = result.toFixed(2);
      setValues(newValues);
    }
  };

  // Обработчик очистки всех полей
  const handleClear = () => {
    setValues(['', '', '', '']);
  };

  return (
    <div className='calc'>
      <div className='calc__container'>
        <div className='calc__row'>
          <div className='calc__input-group'>
            <input
              className='calc__input'
              type="number"
              value={values[0]}
              onChange={(e) => handleChange(0, e.target.value)}
              placeholder="Введите число"
            />
            <button
              className='calc__delete'
              onClick={() => handleDelete(0)}
            >
              ×
            </button>
          </div>
          <span className='calc__sign'>x</span>
          <div className='calc__input-group'>
            <input
              className='calc__input'
              type="number"
              value={values[1]}
              onChange={(e) => handleChange(1, e.target.value)}
              placeholder="Введите число"
            />
            <button
              className='calc__delete'
              onClick={() => handleDelete(1)}
            >
              ×
            </button>
          </div>
          <span className='calc__sign'>=</span>
          <div className='calc__input-group'>
            <input
              className='calc__input'
              type="number"
              value={values[2]}
              onChange={(e) => handleChange(2, e.target.value)}
              placeholder="Введите число"
            />
            <button
              className='calc__delete'
              onClick={() => handleDelete(2)}
            >
              ×
            </button>
          </div>
          <span className='calc__sign'>x</span>
          <div className='calc__input-group'>
            <input
              className='calc__input'
              type="number"
              value={values[3]}
              onChange={(e) => handleChange(3, e.target.value)}
              placeholder="Введите число"
            />
            <button
              className='calc__delete'
              onClick={() => handleDelete(3)}
            >
              ×
            </button>
          </div>
          <button
            className='calc__confirm'
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
        <button
          className='calc__confirm'
          onClick={handleClear}
        >
          C
        </button>
      </div>
    </div>
  );
}

export default Calc;
