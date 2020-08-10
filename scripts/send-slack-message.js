const fetch = require("node-fetch");
const marked = require("marked");

const {
  CIRCLE_BUILD_NUM,
  CIRCLE_BUILD_URL,
  REPO_SLUG,
  PACKAGE_VERSION,
  SLACK_WEBHOOK_URL,
} = process.env;

const renderer = {
  link(href, _, text) {
    return `<${href}|${text}>`;
  },
  list(body) {
    return body;
  },
  listitem(text) {
    return `• ${text}\n`;
  },
};

marked.use({ renderer });

const getReleaseDetails = async () => {
  const releaseUrl = `https://api.github.com/repos/${REPO_SLUG}/releases/tags/v${PACKAGE_VERSION}`;
  try {
    const response = await fetch(releaseUrl);
    return await response.json();
  } catch (_) {
    console.error("Something went wrong.");
  }
};

const sendSlackMessage = async (notes, htmlUrl) => {
  const parsedNotes = marked(notes.trim());

  const body = {
    text: "A new *Times Components Native* release is now _available_.",
    attachments: [
      {
        text: parsedNotes,
        fallback: "And this is a fallback for the attachment.",
        callback_id: "tc_release_update",
        color: "#36a64f",
        attachment_type: "default",
        fields: [
          {
            title: "Version",
            value: `*<${htmlUrl}|v${PACKAGE_VERSION}>*`,
            short: true,
          },
          {
            title: "CircleCI Build",
            value: `*<${CIRCLE_BUILD_URL}|${CIRCLE_BUILD_NUM}>*`,
            short: true,
          },
        ],
        footer: "The released was published by the *times-tools* bot.",
        footer_icon: "https://avatars3.githubusercontent.com/u/32362030?v=4",
      },
    ],
  };

  try {
    await fetch(SLACK_WEBHOOK_URL, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return true;
  } catch (_) {
    console.error("Something went wrong.");
  }
};

(async () => {
  const { html_url, body } = await getReleaseDetails();
  const result = await sendSlackMessage(body, html_url);

  if (result) {
    console.log("📩 Release notes sent to Slack successfully");
  } else {
    console.log("❕ Release notes were not sent to Slack");
  }
})();
