exports.handler = async (event, context) => {
  const guides = [
    { title: "je moeder vriend", author: "Robert Mooiboy" },
    { title: "je vader vriend", author: "Achmet Bledder" },
    { title: "konjo", author: "chupapie manjayo" },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides)
    }
  }

  return {
    statusCode: 401,
    body: JSON.stringify({mssg: 'jammer vriend'})
  }
};
