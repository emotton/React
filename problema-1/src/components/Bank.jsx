import { useState } from "react";

function Teste() {
  const [saldo, setSaldo] = useState(100);

  const deposito = () => {
    setTimeout(()=> {
      setSaldo(saldo + 15)
    }, 2000);
  };

  const saque = () => {
    setSaldo(saldo - 100)
  };

  return (
    <div className="App">
      <h1>Bank</h1>
      {saldo}
      <button onClick={deposito}>Depósito R$ 15,00</button>
      <button onClick={saque}>Saque R$ 100,00</button>
    </div>
  );
}

export default Teste;
