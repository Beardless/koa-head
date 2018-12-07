import test from "tape";
import koaHead from "./../src/index";
import { createCtx, createNext } from "./test-helpers";

test("middleware setup", async t => {
  const docHead = koaHead();
  const ctx = createCtx();
  const next = createNext();

  await docHead(ctx, next);

  t.assert(ctx.document);
  t.assert(ctx.state.document);
  t.end();
});

test("middleware setup with custom namespacee", async t => {
  const customCtxNmspc = "_custom_ctx";
  const customStateNmspc = "_custom_state";

  const docHead = koaHead({
    ctxNamespace: customCtxNmspc,
    stateNamespace: customStateNmspc
  });

  const ctx = createCtx();
  const next = createNext();

  await docHead(ctx, next);

  t.assert(ctx[customCtxNmspc]);
  t.assert(ctx.state[customStateNmspc]);
  t.end();
});
