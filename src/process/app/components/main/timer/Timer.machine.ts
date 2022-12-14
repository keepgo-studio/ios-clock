import { createMachine } from "xstate";

const TimerMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBcCWBbMAnA+ughgMYAWqAdmAHSoQA2YAxLMvlsgNoAMAuoqAA4B7WKjSCyfEAA9EAJgDsANkqzZAZgCcADnkBGACz7FuzroA0IAJ6JFAVkprHa2xvmytGxZ0UaAvr4s0TFwCEnIqLABXMjJyKCZkQX4uXiQQIRExCTSZBDVZfUp5eU4tRXlPd1ldWwtrBFlOWUp9XUUfE041RS1OYv9AjGw8IlIKSn58SNhGLDhIzBTJDNFUcUlc1WbDBXzbHv2yurkmlraOzi6evvkBkCDh0LGqSenGQnwyQjBaJbSVrIbRAlBxORqcWycfSOfQaY4IXSIoqwjQaWxaRy6TQVO4PEKjcKUKIxOIMD5fH5-ATCVbrHLAzigxzgyHQtRGeGI3TI1FojFqLGuPx3MiCCBwSR4kZhCjLGmA+kNZpOfKXVkw2zyeEAWg0zVkkMuW30EK0ulkuKG+JlVBo9DlmTW2VAm0UzS0WlshjUfQMtl0nh19nkKO0Gn0WnUqItAXuVulzyJ0ViZCgDtpzukcjdlA9Xuhvv0-rhVkQWO5l0rdn9im6alusalT0Jrxm6YVLuz7s93sL-s98IUjIq501JjdxX0-n8QA */
  createMachine({
    id: "timer_machine",
    predictableActionArguments: true,
    tsTypes: {} as import("./Timer.machine.typegen").Typegen0,
    schema: {
      context: {} as {
        hour: number;
        min: number;
        sec: number;
        siId: any;
      },
      events: {} as
        | { type: "start"; numbers: Array<number> }
        | { type: "resume" }
        | { type: "stop" }
        | { type: "cancel" },
    },
    context: {
      hour: 0,
      min: 0,
      sec: 0,
      siId: -1,
    },
    states: {
      idle: {
        on: {
          start: "running",
        },
      },

      running: {
        entry: (context, event) => {
          if (event.type !== "start") return;

          context.hour = event.numbers[0];
          context.min = event.numbers[1];
          context.sec = event.numbers[2];

          context.siId = setInterval(() => {
            context.sec -= 1;

            if (context.sec < 0) {
              context.min -= 1;
              context.sec = 0;
            }

            if (context.min < 0) {
              context.hour -= 1;
              context.min = 0;
            }

            if (context.hour === 0) {
              clearInterval(context.siId);
            }
          }, 1000);
        },
        on: {
          stop: "pause",
          cancel: "idle",
        },
      },

      pause: {
        on: {
          resume: "running",
          cancel: "idle",
        },
      },
    },

    initial: "idle",
  });

export default TimerMachine;
