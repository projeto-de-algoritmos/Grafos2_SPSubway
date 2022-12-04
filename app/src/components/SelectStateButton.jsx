import Select from "react-select";
import States from "../assets/states.json";

export function SelectStateButton({
  localPoint,
  onChange,
  departure,
  arrival,
}) {
  const options = States;

  const customFilter = (state) => {
    if (state && departure){
      if (state.label !== departure.label && state.label !== arrival.label) {
        return state;
      }
    }else{
      return state
    }
  };

  return (
    <div>
      <p>Local de {localPoint}</p>
      <Select
        options={options}
        placeholder="Selecione um estado"
        components={{ IndicatorSeparator: null }}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            height: 64,
            borderRadius: 8,
          }),
          option: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "white",
            color: "black",
            ":hover": {
              backgroundColor: "#2395FF",
            },
          }),
        }}
        onChange={onChange}
        isClearable
        filterOption={customFilter}
        tabSelectsValue={false}
        backspaceRemovesValue={false}
      />
    </div>
  );
}
