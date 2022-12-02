import Select from "react-select";

export function SelectStateButton({ localPoint }) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      <p>Local de {localPoint}</p>
      <Select
        options={options}
        placeholder="Selecione um estado"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            height: 64,
            borderRadius: 8,
          }),
        }}
      />
    </div>
  );
}
