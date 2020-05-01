const fastify = require("fastify")({
  logger: {
    level: "info",
  },
});
const formater = require("./formater");

fastify.register(require("fastify-cors"), {
  origin: (or, cb) => {
    cb(null, true);
  },
});

fastify.post(
  "/list",
  {
    schema: {
      body: {
        type: "object",
        required: ["numbers"],
        properties: {
          numbers: { type: "string", minLength: 1 },
        },
      },
    },
  },
  (request, reply) => {
    const { numbers } = request.body;
    const numbersFormated = formater(numbers);
    reply.code(200).send(numbersFormated);
  }
);

fastify.listen(3005, (err) => {
  if (err) {
    console.error({ err });
    process.exit(1);
  }

  console.log("Running Port 3005");
});
