// https://sentry.io/cheree-nielson/googlebooks/getting-started/javascript-react/
import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    // dsn: "https://fa0decdead19444b936a31077451d6ca@sentry.io/1432560"
    dsn: "https://c060a25040344214b50b022db61e7ef5@sentry.io/1375248"
  });
}

function log(error) {
  Sentry.captureException(error);
  console.log(error);
}

// Interface of logService has two methods -- init and log
export default {
  init,
  log
};