import { config } from "@config/index";

export const emailValidation = (email: string) => {
  if (!config.regex.email.test(email)) {
    return "Debes agregar un email válido";
  }

  return "";
};

export const defaultValidation = (value: string, type?: string) => {
  if (value === "") {
    return "Este campo es obligatorio";
  }

  return "";
};
