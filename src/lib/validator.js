const checker = (key, element) => {
  //false= no error
  //true = error
  switch (key) {
    case "user_fName":
      if (element === "") {
        return {
          error: true,
          message: "cannot be empty",
        };
      }
      if (/[\d!@#$%^&*()_+={}[\]:;<>,.?~\\/-]/.test(element)) {
        return {
          error: true,
          message: "cannot contain numbers or special characters",
        };
      }
      return {
        error: false,
        message: "",
      };
    case "user_lName":
      if (element === "") {
        return {
          error: true,
          message: "cannot be empty",
        };
      }
      if (/[\d!@#$%^&*()_+={}[\]:;<>,.?~\\/-]/.test(element)) {
        return {
          error: true,
          message: "cannot contain numbers or special characters",
        };
      }
      return {
        error: false,
        message: "",
      };
    case "user_email":
      if (element === "") {
        return {
          error: true,
          message: "cannot be empty",
        };
      }
      if (element.includes(" ")) {
        return {
          error: true,
          message: "cannot contain spaces",
        };
      }
      const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(element)) {
        return {
          error: true,
          message: "Not a valid email",
        };
      }
      // if (!element.includes("@") || !element.includes(".")) {
      //   return {
      //     error: true,
      //     message: "Not a Valid email",
      //   };
      // }

      return {
        error: false,
        message: "",
      };
    default:
      break;
  }
};
export const validator = (props) => {
  let validObj = { ...props };
  for (const key in props) {
    const element = props[key];
    validObj = {
      ...validObj,
      [key]: checker(key, element),
    };
  }

  return validObj;
};
