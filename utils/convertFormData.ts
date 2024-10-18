// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertToFormData(data:any) {
    const formData = new FormData();

    // Iterate over each key in the data object
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    return formData;
  }