import { SelectStateButton } from "./SelectStateButton";

export function Home() {
  return (
    <div className="w-full max-w-md space-y-5">
      <h1 className="font-bold text-4xl">Olá</h1>
      <p className="text-3xl">
        Nós iremos escolher o menor caminho da sua viagem.
      </p>
      <p className="text-3xl">Por favor, informe o destino:</p>
      <SelectStateButton localPoint={"partida"} />
      <SelectStateButton localPoint={"chegada"} />
      <button className="w-full bg-green-500 h-[64px] rounded-lg text-white font-bold hover:bg-green-600 transition-colors">
        Encontrar
      </button>
    </div>
  );
}
