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

// funçao que pega um novo valor digitado pelo usuario no form
export function updateAll(inputs: any, newValue: any) {
  const newInputs: any = {};
  for (var name in inputs) {
    newInputs[name] = { ...inputs[name], value: newValue[name] };
  }
  return newInputs;
}

export function validate(inputs: any, name: string) {
  if (!inputs[name].validation) {
    return inputs;
  }

  const isInvalid = !inputs[name].validation(inputs[name].value);
  return {
    ...inputs,
    [name]: { ...inputs[name], invalid: isInvalid.toString() },
  };
}

export function toDirty(inputs: any, name: string) {
  return { ...inputs, [name]: { ...inputs[name], dirty: "true" } };
}

export function updateAndValidate(inputs: any, name: string, newValue: any) {
  const dataUpdate = update(inputs, name, newValue);
  return validate(dataUpdate, name);
}

export function dirtyAndValidate(inputs: any, name: string) {
  const dataDirty = toDirty(inputs, name);
  return validate(dataDirty, name);
}
// sujando todos os inputs para validação
export function toDirtyAll(inputs: any) {
  const newInputs: any = {};
  for (var name in inputs) {
    newInputs[name] = { ...inputs[name], dirty: "true" };
  }

  return newInputs;
}

// validando todos inputs
export function validateAll(inputs: any) {
  const newInputs: any = {};

  for (var name in inputs) {
    if (inputs[name].validation) {
      const isInvalid = !inputs[name].validation(inputs[name].value);
      newInputs[name] = { ...inputs[name], invalid: isInvalid.toString() };
    } else {
      newInputs[name] = { ...inputs[name] };
    }
  }
  return newInputs;
}

//juntando as duas funçoes

export function dirtyAndValidateAll(inputs: any) {
  return validateAll(toDirtyAll(inputs));
}

// testo se existe algum input valido das funçoes acima

export function hasAnyInvalid(inputs: any) {
  for (var name in inputs) {
    if (inputs[name].dirty === "true" && inputs[name].invalid === "true") {
      return true;
    }
  }
  return false;
}

// erros do back-end validação

export function setBackendErros(inputs: any, erros: any[]) {
  const newInputs = { ...inputs };
  erros.forEach((item) => {
    newInputs[item.fieldName].message = item.message;
    newInputs[item.fieldName].dirty = "true";
    newInputs[item.fieldName].invalid = "true";
  });

  return newInputs;
}
