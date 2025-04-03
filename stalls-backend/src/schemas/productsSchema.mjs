export const productSchema = {
  id: {
    notEmpty: {
      errorMessage: "id must not be empty",
    },
    isNumeric: {
      errorMessage: "id must be a number",
    },
  },
  categoryId: {
    notEmpty: {
      errorMessage: "categoryId must not be empty",
    },
    isNumeric: {
      errorMessage: "categoryId must be a number",
    },
  },
  name: {
    notEmpty: {
      errorMessage: "name must not be empty",
    },
    isString: {
      errorMessage: "name must be a string",
    },
  },
  price: {
    notEmpty: {
      errorMessage: "price must not be empty",
    },
    isNumeric: {
      errorMessage: "price must be a number",
    },
  },
  imageUrl: {
    notEmpty: {
      errorMessage: "imageUrl must not be empty",
    },
    isString: {
      errorMessage: "imageUrl must be a string",
    },
  },

  description: {
    notEmpty: {
      errorMessage: "description must not be empty",
    },
    isString: {
      errorMessage: "decription must be a string",
    },
    isLength: {
      options: { min: 5 },
      errorMessage: "description must be atleast 5 characters",
    },
  },
};

export const fetchingProductsByQueryParams = {
  name: {
    notEmpty: {
      errorMessage: "Name must not be empty",
    },
    isLength: {
      options: { min: 4 },
      errorMessage: "Name must be atlest 4 characters.",
    },
    isString: {
      errorMessage: "Name must be a string",
    },
  },
  value: {
    notEmpty: {
      errorMessage: "value field must not be empty",
    },
    isLength: {
      options: { min: 1 },
      errorMessage: "value field must be between 5 and 12 characters",
    },
    isString: {
      errorMessage: "value field must be a string",
    },
  },
};
