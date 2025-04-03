const categorySchema = {
  name: {
    notEmpty: {
      errorMessage: "name must not be empty",
    },
    isString: {
      errorMessage: "name must be a string",
    },
    isLength: {
      options: { min: 5 },
      errorMessage: "name must be atleast 5 characters",
    },
  },
};

export default categorySchema;
