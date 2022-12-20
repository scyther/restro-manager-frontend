export const SaveDishDetails = async (name, category) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name,
    category,
  });

  let response = await fetch(`${process.env.REACT_APP_API_URL}/dish/create`, {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  console.log(response);

  return data;
};
