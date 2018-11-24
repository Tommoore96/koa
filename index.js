const Koa = require("koa");

const app = new Koa();

app.use(ctx => (ctx.body = "hello world"));

app.listen(3000, () => console.log(`Server working on port: 3000`));
