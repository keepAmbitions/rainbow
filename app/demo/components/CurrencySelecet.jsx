"use client";
import { Select, MenuItem } from "@mui/material";

const options = [
  { value: "CNY" },
  { value: "SGD" },
  { value: "USD" },
  { value: "EUR" },
  { value: "GBP" },
  { value: "JPY" },
];

const CurrencySelect = ({ currency, onSelect }) => {
  // const [currency, setCurrency] = useState("");
  const handleChange = (event) => {
    // setCurrency(event.target.value);
    onSelect(event.target.value)
  };

  return (
    <Select
      value={currency}
      // label="Currency"
      displayEmpty
      sx={{ minWidth: 120 }}
      onChange={handleChange}
    >
      {options.map(({ value, icon }) => (
        <MenuItem key={value} value={value}>
          {
            <>
              <img src={`/assets/currency/${value}.png`} width="22" />
              <span>{value}</span>
            </>
          }
        </MenuItem>
      ))}
    </Select>
  );
};

export default CurrencySelect;
