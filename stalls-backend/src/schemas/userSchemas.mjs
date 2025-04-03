const userSchema = {
  username: {
    notEmpty: {
      errorMessage: "name must not be empty",
    },
    isLength: {
      options: { min: 3 },
      errorMessage: "name must be atleast 3 characters",
    },
    isString: {
      errorMessage: "name must be a string",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "password must not be empty",
    },
    isLength: {
      options: { min: 8, max: 16 },
      errorMessage: "password must be between 8 and 16 characters",
    },
    isString: {
      errorMessage: "password must be a string",
    },
  },
  // isAdmin: {
  //   notEmpty: {
  //     errorMessage: "isAdmin must not be empty",
  //   },
  //   isBoolean: {
  //     errorMessage: "isAdmin must be a boolean",
  //   },
  // },
  email: {
    notEmpty: {
      errorMessage: "email must not be empty",
    },
    isLength: {
      options: { min: 5 },
      errorMessage: "email must be atleast 5 characters",
    },
    isString: {
      errorMessage: "email must be a string",
    },
  },

  phone: {
    notEmpty: {
      errorMessage: "phone must not be empty",
    },
    isNumeric: {
      errorMessage: "phone must be a string",
    },
    isLength: {
      options: { min: 10, max: 14 },
      errorMessage: "phone must be between 10 and 14 characters",
    },
  },
  address: {
    notEmpty: {
      errorMessage: "address must not be empty",
    },
    isString: {
      errorMessage: "address must be a string",
    },
  },
  gender: {
    notEmpty: {
      errorMessage: "gender must not be empty",
    },
    isString: {
      errorMessage: "gender must be a string",
    },
  },
};

export default userSchema;
