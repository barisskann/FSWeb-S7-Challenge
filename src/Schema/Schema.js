import * as yup from "yup";

let schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  number: yup.number().required().typeError('Phone number must be number')
});
export default schema;
