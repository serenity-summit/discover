# P4 Exercise Guide

A no-build, mobile-first progressive web app made from the supplied four-page home exercise handout. It is designed for a Pixel 8 / tall 20:9 phone display and works offline after the first visit.

## What it does
- Shows every exercise as a compact, scrollable rounded button.
- Expands one exercise at a time to show instructions, dosage, and the handout photo.
- Keeps the neighboring exercise buttons in the same scrolling list; there is no separate detail page.
- Can be installed on Android as a home-screen app.

## Publish with GitHub Pages
1. Create a new GitHub repository, for example `p4-exercises`.
2. Upload **all files and folders in this directory** to the repository root.
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose **main** and **/(root)**, then save.
6. GitHub will display the published URL after deployment finishes.

## Install on a Pixel 8
1. Open the GitHub Pages URL in Chrome.
2. Open Chrome's three-dot menu.
3. Choose **Install app** or **Add to Home screen**.

## Source notes
- The PDF contains two standing hip-abduction entries with different presentation and dosage. Both are retained and labeled separately.
- The handout does not show dosage for **Hip Extension - Standing**, so the app says that it was not listed rather than inventing one.
- Exercise wording was lightly normalized for phone readability without changing the intended instructions.
