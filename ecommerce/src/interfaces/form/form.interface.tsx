export interface IForm {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const initialFormState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export const initialFormErrorState = () => ({
  name: "",
  email: "",
  phone: "",
  address: "",
});
