    `diff --git a/tweets/hello-world.tweet b/tweets/hello-world.tweet
  tap.equal(code, 1);
  tap.same(nock.pendingMocks(), []);

  // above code exits with 1 (error), but tap expects 0.
  // Tap adds the "process.exitCode" property for that purpose.