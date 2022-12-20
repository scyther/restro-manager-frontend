export const SaveCategory = async (name) => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
  
    let bodyContent = JSON.stringify({
      name,
    });
  
    let response = await fetch(
      `${process.env.REACT_APP_API_URL}/category/create`,
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

  export const GetCategories = async () => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/categories`, {
      method: "GET",
    });
  
    let data = await response.json();
    console.log(response);
    return data;
  };
  