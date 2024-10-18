
type SignUpUserProps = {
  email: string;
  password: string;
  role?:string
}

export const SignUpUser = async ({email, password,role='user'}:SignUpUserProps) => {

  const response = await fetch("/api/auth/signup", {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password,role }),
  });

  const data = await response.json();
  return data;
};
