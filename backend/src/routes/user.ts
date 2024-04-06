import { signinInputs, signupInputs } from "@aryashubhanshu/blogger-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_TOKEN: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signupInputs.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({ error: "Invalid Inputs" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body?.name || "",
      },
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_TOKEN);

    return c.json({
      jwt,
    });
  } catch (e) {
    c.status(403);
    return c.json({ error: "Error while signing up" });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinInputs.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({ error: "Invalid Inputs" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "Invalid Email/Password" });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_TOKEN);

  return c.json({ jwt });
});
