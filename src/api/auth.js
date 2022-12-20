export const Login = async (email, password) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email,
    password,
  });

  let response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  console.log(response);

  return data;
};

export const signup = async (email, password) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    email,
    password,
  });

  let response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  console.log(response);

  return data;
};
