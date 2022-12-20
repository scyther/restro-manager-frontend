export const SaveRestrauntDetails = async (name, from, to, address) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name,
    from,
    to,
    address,
  });

  let response = await fetch(
    `${process.env.REACT_APP_API_URL}/restraunt/create`,
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(response);

  return data;
};

export const SaveEmployeeDetails = async (name, from, to, address) => {
  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name,
    from,
    to,
    address,
  });

  let response = await fetch(
    `${process.env.REACT_APP_API_URL}/employee/create`,
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(response);

  return data;
};

export const GetEmployees = async () => {
  let response = await fetch(`${process.env.REACT_APP_API_URL}/employees`, {
    method: "GET",
  });

  let data = await response.json();
  console.log(response);
  return data;
};
