# React Training - Challenge #004c

## Description

**Challenge goal**: The goal of this challenge is to consolidate the knowledge on the usage of a Reducer in a react-redux context.

**Target level**: It's expected to understand the context of react-redux and how to use a reducer.

**Final accomplishment**: You’ll be able to understand how valuable is to properly use a reducer on an application.

## Resources:

**Design:**

- **Main Page:**
  1. [Design](https://www.figma.com/file/8ldMjBkOU2nKJu3RlMRWbg/React-Transition---Challenge-6C)

## Acceptance criteria

- You must create the complete UI from the design, EXPECT the switch buttons on there (the usage of an external library will be allowed);
- The form must be filled with an initial state
<pre><code>
{
  name: 'Jane Doe',
  company: 'Jungle Devs',
  title: 'Software Engineer',
  location: 'Fpolix',
  emailMessages: true,
  emailCourseAdd: true,
  emailSummaryAddedToChannels: false,
  emailSummaryMessagesInChannels: true,
  emailSummaryPostComments: false,
  emailSummaryPostLikes: false,
  emailSummaryGoalLikes: false,
  emailSummaryNewFollowers: true,
  emailSummaryFriendSuggestions: false,
  disableAll: false,
}
</code></pre>
- The information must persist only when changing the tabs, if you store want to persist the data will be an extra;
- The SAVE CHANGES button must dispatch an action to the reducer, which will update the initial state with the new values;
- The user must be able to render the view without warning/errors on the console.

## Prerequisites

- Use an Integrated development environment (IDE) or code editor.
- Suggested Editor: Virtual Studio Code - VS Code (code.visualstudio.com/download);
- Use Class Components;
- Have Yarn installed;
- Have some knowledge on redux;

## Instructions to Run

- Clone the repository and run yarn to install dependencies.
- Not all Javascript ES6+ features work on all browsers. For more information, you can check on Can I Use if the feature is supported (caniuse.com);

## Additional Information

1. If you're using chrome to develop your app, check out this cool extension that allows you to see the state of your application: [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en). Be sure to check if the browser of your choice has some extensions that might help you out.
