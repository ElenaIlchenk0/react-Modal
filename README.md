# react-Modal
### Modal window confirming the agreement on the use of platform functionality.

### Requirements:

- The user clicks on the "Perform action" button on the page.
- A modal window opens with a text to confirm the action:
- There should be a heading: "Agree with the rules";
- There should be a cross in the upper right corner;
- Text in the main part of the window: “Special terms and conditions of use apply for this function, they must be confirmed by clicking on the Confirm button”;
- At the bottom of the window there are two buttons - "Cancel" and "Confirm".
- The "Confirm" button is blocked for the first 5 seconds of viewing the modal window.
- When reopening the modal window, the counter should start from 5 seconds.
- The button text should display the progress of the remaining time (For example, "Confirm (5)" ... "Confirm (1)", "Confirm").
- After confirmation, the window should be closed and a message should be displayed on the screen "Action completed" (For example, using alert).
- Pressing the "Perform action" button again should not open a dialog if the user clicked on the "Confirm" button, and immediately perform the action (showing the message "Action completed").
