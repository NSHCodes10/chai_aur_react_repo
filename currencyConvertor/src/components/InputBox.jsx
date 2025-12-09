import React, {useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], 
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className ="",
}) {
    const amountInputId = useId()

    return(
        <div className={`bg-white p-4 rounded-xl text-sm grid grid-cols-3 gap-4 ${className}`}>
            <div className="w-full flex flex-col">
            <label htmlFor= {amountInputId} className="text-black/40 mb-2 inline-block">
            {label} 
            </label>
            <input
            id= {amountInputId}
            className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount"
            disabled = {amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
            </div>
            <div className="flex flex-col items-end text-right">
            <p className="text-black/40 mb-2">Currency Type</p>
            <select className="rounded-lg px-2 py-2 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange = {(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled = {currencyDisable}
            >
                {currencyOptions.map((Currency) => (
                    <option key={Currency} value={Currency}>{Currency}</option>

                ))}
                
            </select>

            </div>
           
        </div>
    );



}

export default InputBox