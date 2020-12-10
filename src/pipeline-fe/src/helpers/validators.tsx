//TODO: use react hooks form

export const EMAILVALIDATOR = () => {
  return {
    required: true,
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Entered value does not match email format",
    },
  };
};

export const NAMEVALIDATOR = () => {
  return {
    required: true,
    min: 2,
    max: 255,
  };
};

export const REQUIREDVALIDATOR = () => {
  return {
    required: true,
  };
};

export const COMMENTVALIDATOR = () => {
  return {
    required: true,
    min: 2,
    max: 255,
  };
};

export const NUMBERVALIDATOR = () => {
  return {
    required: true,
    pattern: /[1-9999999]/,
  };
};

export const PASSWORDVALIDATOR = () => {
  return {
    required: true,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z!@#$%^&*\d]{8,}$/,
    max: 255,
  };
};
