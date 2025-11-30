// lambda/index.ts
export const handler = async (event: any) => {
  console.log("Lambda invoked", { event });
  const message = process.env.MY_ENV_VAR || "No env var set";
  console.log("Env Var:", message);
  return {
    statusCode: 200,
    body: `Message: ${message}`,
  };
};
