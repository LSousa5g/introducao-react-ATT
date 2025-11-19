import { useState } from "react";

const Formulario = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const calculaIMC = () => {
        const media = peso / (altura * altura);

        if (altura <= 0 || peso <= 0) {
            return <p>Preencha altura e peso com valores válidos</p>;
        } 

        if (media < 18.5) {
            return (
                <p>
                    Abaixo do peso - IMC: {media.toFixed(2)}
                </p>
            );
        } else if (media >= 18.5 && media < 24.9) {
            return (
                <p>
                    Peso normal - IMC: {media.toFixed(2)}
                </p>
            );
        } else if (media >= 25 && media < 29.9) {
            return (
                <p>
                    Sobrepeso - IMC: {media.toFixed(2)}
                </p>
            );
        } else {
            return (
                <p>
                    Obesidade - IMC: {media.toFixed(2)}
                </p>
            );
        }
    }

    return (
        <form className="container">
            <input type="number" placeholder="Altura" onChange={({ target }) => setAltura(parseFloat(target.value))} />
            <input type="number" placeholder="Peso" onChange={({ target }) => setPeso(parseFloat(target.value))} />
            {calculaIMC()}
        </form>
    )
}

export default Formulario;