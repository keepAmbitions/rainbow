'use client'
import { useMemo, useState } from 'react';

// import CurrencySelect from '@/components/currencySelect';

import style from './index.module.less';

const rateMap = {
  CNY: {
    CNY: 1,
    SGD: 7,
    USD: 6,
    EUR: 5,
    GBP: 4,
    JPY: 3,
  },
  SGD: {
    CNY: 1,
    SGD: 71,
    USD: 61,
    EUR: 51,
    GBP: 41,
    JPY: 31,
  },
  USD: {
    CNY: 1,
    SGD: 17,
    USD: 16,
    EUR: 15,
    GBP: 14,
    JPY: 13,
  },
  EUR: {
    CNY: 1,
    SGD: 17,
    USD: 16,
    EUR: 15,
    GBP: 14,
    JPY: 13,
  },
  GBP: {
    CNY: 1,
    SGD: 7,
    USD: 6,
    EUR: 5,
    GBP: 4,
    JPY: 3,
  },
  JPY: {
    CNY: 1,
    SGD: 7,
    USD: 6,
    EUR: 5,
    GBP: 4,
    JPY: 3,
  },
};

const CurrencyConvertor = () => {
  const [fromCurrency, setFromCurrency] = useState('CNY');
  const [toCurrency, setToCurrency] = useState('USD');
  const [toAmount, setToAmount] = useState(1);
  const [fromAmount, setFromAmount] = useState(1);

  // const rate = useMemo(() => rateMap[fromCurrency][toCurrency], [fromCurrency, toCurrency]);
  const rate = useMemo(() => {
    console.log(fromCurrency, toCurrency, 'kkkkk');
    // 汇率改变时调用,重新计算toAmount
    const tempRate = rateMap[fromCurrency][toCurrency];
    setToAmount(fromAmount * tempRate);
    return tempRate;
  }, [fromCurrency, toCurrency, fromAmount]);

  const handleFromAmountChange = (e) => {
    setFromAmount(e.target.value);
    setToAmount(e.target.value * rate);
  };

  const handleToAmountChange = (e) => {
    setToAmount(e.target.value);
    setFromAmount(e.target.value / rate);
  };

  const swapCurrency = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
  };

  return (
    <>
      <input type="number" className={style.input} value={fromAmount} onChange={handleFromAmountChange} />
      <div className={style.equals}>=</div>
      <input type="number" className={style.input} value={toAmount} onChange={handleToAmountChange} />
      <div className={style.equals}>=</div>
      {/* <CurrencySelect value={fromCurrency} onSelect={(e) => setFromCurrency(e.value)} selectedWithFlag /> */}
      <button onClick={swapCurrency}>swap</button>
      {/* <CurrencySelect value={toCurrency} onSelect={(e) => setToCurrency(e.value)} selectedWithFlag /> */}
    </>
  );
};

export default CurrencyConvertor;
