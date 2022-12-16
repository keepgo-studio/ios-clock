// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: "actions2";
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    actions2: "resume" | "start";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {};
  matchesStates: "idle" | "pause" | "running";
  tags: never;
}
