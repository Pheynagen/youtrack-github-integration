import { extend } from "vee-validate";
import { required, email, min, max } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required!"
});

extend('email', {
  ...email,
  message: "This email field!"
});


extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max'],
  message: 'The {_field_} field must have at least {min} characters and {max} characters at most'
});
