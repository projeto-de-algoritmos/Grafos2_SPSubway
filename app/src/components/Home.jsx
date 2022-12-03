import { useState } from "react";
import { SelectStateButton } from "./SelectStateButton";

export function Home() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  return (
    <div className="w-full max-w-md space-y-5">
      <h1 className="font-bold text-4xl">Olá</h1>
      <p className="text-3xl">
        Nós iremos escolher o menor caminho da sua viagem.
      </p>
      <p className="text-3xl">Por favor, informe o destino:</p>
      <SelectStateButton
        localPoint={"partida"}
        onChange={(state) => setDeparture(state)}
        departure={departure}
        arrival={arrival}
      />
      <SelectStateButton
        localPoint={"chegada"}
        onChange={(state) => setArrival(state)}
        departure={departure}
        arrival={arrival}
      />
      <button
        className="w-full bg-green-500 h-[64px] rounded-lg text-white font-bold hover:bg-green-600 transition-colors disabled:bg-gray-400"
        disabled={!departure || !arrival}
      >
        Encontrar
      </button>
    </div>
  );
}
