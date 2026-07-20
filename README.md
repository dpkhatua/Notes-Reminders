# Notes & Reminders

A single-file, mobile-friendly notes/reminders app. No install, no server, no account — just one HTML file.

## Features

- Checkbox on every reminder — check it and it moves to that category's **Completed** list.
- Every item tracks both its **creation date** and **completion date**.
- Categories (Personal, Work, Job applications, Health) are expandable/collapsible.
- Unlimited **subcategories** — add a subcategory under any category (or under a subcategory) to organize further.
- Every category has its own **Completed** section you can open anytime to review what you've finished.
- **Export** your data as a JSON file (e.g. to save to Google Drive, email to yourself, or AirDrop) and **Import** it on another device to carry your notes with you.
- All data is stored locally in the browser (`localStorage`) — nothing is sent anywhere.

## Using it on your phone

1. Open `index.html` in your phone's browser (works best once hosted — see GitHub Pages below).
2. Tap the browser's Share/menu button → **Add to Home Screen**. It'll behave like a normal app icon.
3. Use **Export** occasionally to back up your data, and **Import** to load it on another phone/browser.

## Hosting on GitHub Pages (so you have a stable link for "Add to Home Screen")

1. Push this repo to GitHub (see below).
2. On GitHub: Settings → Pages → Source → Deploy from branch → `main` / `(root)` → Save.
3. GitHub gives you a URL like `https://<username>.github.io/<repo-name>/`. Open that on your phone and add it to your home screen.

## Pushing this to your GitHub repo

From a terminal in this folder:

```bash
git remote add origin https://github.com/<your-username>/notes-and-reminders.git
git branch -M main
git push -u origin main
```

(Replace `<your-username>` with your GitHub username. If the repo was created with a different name, adjust the URL.)
