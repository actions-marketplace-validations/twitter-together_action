    `diff --git a/tweets/hello-world.tweet b/tweets/hello-world.tweet
@@ -0,0 +1,7 @@
    tap.same(body.output, {
  tap.equal(code, 0);
  tap.same(nock.pendingMocks(), []);