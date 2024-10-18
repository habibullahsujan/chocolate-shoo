export const uploadStagedFile = async (stagedFile: File | Blob) => {
  const form = new FormData();
  form.set("file", stagedFile);

  // here /api/upload is the route of my handler
  const res = await fetch("/api/cloudinary", {
    method: "POST",
    body: form,
    headers: {},
  });

  const data = await res.json();

  // we will return the uploaded image URL from the API to the client
  return data;
};
