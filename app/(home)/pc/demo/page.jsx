"use client";
import { useMemo, useState, useEffect } from "react";
import { TextField, IconButton } from "@mui/material";
import { rateMap } from "./tinyMap";
import CurrencySelect from "./components/CurrencySelecet";
import { SwapVert, SwapHoriz } from "@mui/icons-material";

import style from "./index.module.css";

const CurrencyConvertor = () => {
  const [fromCurrency, setFromCurrency] = useState("CNY");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromAmount, setFromAmount] = useState("1");
  const [toAmount, setToAmount] = useState("");
  // const [rateMap, setRateMap] = useState(rateMap);

  // useEffect(() => {
  //   getExchangeRate({ effectiveDate: '2023-09-27' })
  //     .then((res) => {
  //       const { code, data, msg } = res;
  //       if (code === 10000) {
  //         console.log(data, 'getExchangeRate');
  //         setRateMap(data);
  //       } else {
  //         message.error(msg);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log('查询汇率接口报错', err);
  //     });
  // }, []);

  // rateMap 取自接口，一开始没有，所以先不计算, 汇率改变时调用,重新计算toAmount
  const rate = useMemo(
    () => (rateMap ? rateMap[fromCurrency][toCurrency] : ""),
    [fromCurrency, toCurrency]
  );

  useMemo(() => {
    // 监听 汇率变化，然后改变 toAmount
    setFromAmount((preFrom) => {
      // let calc = toFixed(Number(preFrom * rate), 4);
      let calc = preFrom * rate;
      calc = calc === "0.0000" ? "0" : calc;
      setToAmount((pre) => (calc === "NaN" ? pre : calc));
      return preFrom;
    });
  }, [rate]);

  const swapCurrency = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
  };

  const notNumber = (value) => /[^(\d|.)]/g.test(value);
  // 检查数值中是否有多个小数点
  const checkValDecimalPoint = (value) =>
    value.split("").filter((i) => i === ".").length > 1;

  const hitRules = (value) => {
    console.log(value, "eee");
    const rules = [notNumber, checkValDecimalPoint];
    return rules.some((rlue) => rlue(value));
  };

  const handleFromInput = (e) => {
    // 命中规则的输入不进去
    if (hitRules(e.target.value)) {
      return;
    }
    setFromAmount(e.target.value);
    // 结果保留4位小数
    // let calc = toFixed(Number(e.target.value * rate), 4);
    let calc = e.target.value * rate;
    calc = calc === "0.0000" ? "0" : calc;
    setToAmount((pre) => (calc === "NaN" ? pre : calc));
  };

  const handleToInput = (e) => {
    if (hitRules(e.target.value)) {
      return;
    }
    setToAmount(e.target.value);
    // let calc = toFixed(Number(e.target.value / rate), 4);
    let calc = e.target.value / rate;
    calc = calc === "0.0000" ? "0" : calc;
    setFromAmount((pre) => (calc === "NaN" ? pre : calc));
  };

  return (
    <>
      <div className={style.wrap}>
        <div className={style.topRate}>
          {`1 ${fromCurrency}`}{<IconButton onClick={swapCurrency}><SwapHoriz/></IconButton>}{`${rate} ${toCurrency}`}
        </div>
        <CurrencySelect currency={fromCurrency} onSelect={setFromCurrency} />
        <TextField
          placeholder="请输入金额"
          onInput={handleFromInput}
          onChange={handleFromInput}
          value={fromAmount}
        />
        <div className={style.swap}>
          <SwapVert />
        </div>
        <CurrencySelect currency={toCurrency} onSelect={setToCurrency} />
        <TextField
          placeholder="请输入金额"
          onInput={handleToInput}
          onChange={handleToInput}
          value={toAmount}
        />
      </div>
      {/* 这里特殊处理成了绝对定位 */}
      <div className={style.updateTime}>更新时间: 2023-08-10 19:20:00</div>
    </>
  );
};

export default CurrencyConvertor;
