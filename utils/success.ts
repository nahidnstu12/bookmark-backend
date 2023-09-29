export const successResponse = (message = "Success", data = null) => {
  // @ts-ignore
  if (Array.isArray(data) && data?.length !== 0) {
    if (message) {
      // @ts-ignore
      return { message, data, total: data.length };
    } else {
      // @ts-ignore
      return { data, total: data.length };
    }
  } else if (typeof data === "object" && data !== null) {
    if (message) {
      return { message, data };
    } else {
      return { data };
    }
  } else {
    // Handle other data types here if needed
    return { message };
  }
};
