export function update(inputs: any, name: string, newValue: any) {
  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

// pega somente o valor do input ou seja oque foi alterado pelo user
export function toValues(inputs: any) {
  const data: any = {};
  for (var name in inputs) {
    data[name] = inputs[name].value;
  }
  return data;
}
