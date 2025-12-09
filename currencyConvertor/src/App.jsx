import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'



function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) 
  const options = Object.keys(currencyInfo || {})

  const swap = () => {
    const tempFrom = from;
    const tempTo = to;
    const tempAmount = amount;
    const tempConverted = convertedAmount;
    
    setFrom(tempTo);
    setTo(tempFrom);
    setAmount(tempConverted)

  };

  const convert = () => {
    if (!currencyInfo || !currencyInfo[to]) return;
  setConvertedAmount(amount * currencyInfo[to]);
  };

  //Reset Function
  const resetAll = () => {
    setAmount (0);
    setFrom("usd");
    setTo("inr");
    setConvertedAmount(0);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/31750780/pexels-photo-31750780.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="flex flex-col items-center gap-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}


              />
            </div>
            <div className="relative w-full flex justify-center my-2">
              <button
                type="button"
                className="border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5"
                onClick={swap}
                              >
                swap
                
              </button>
            </div>
            <div className="flex gap-1 mt-1">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable

              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-4 rounded-lg mt-4">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

            <button type = "button" 
            onClick={resetAll}
            className='w-full bg-blue-500 text-white px-4 py-4 rounded-lg mt-4'
            >Reset</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App
