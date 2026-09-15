# Academy Class Spinner — GitHub Pages edition

This folder contains a standalone `index.html` that runs directly on GitHub Pages. It does not require Node.js, npm, a database, or a server.

## Upload to the `main` branch

1. Open your repository: `https://github.com/saadabusaif-star/Class-Spinner-wheel/`
2. Select **Add file → Upload files**.
3. Upload **`index.html`** from this folder. Do not upload the whole `/home/ubuntu/github-pages-spinner` folder itself; upload the file inside it.
4. Select **Commit directly to the `main` branch** and commit.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch **`main`**, folder **`/ (root)`**, then click **Save**.
8. Wait for the Pages deployment to finish, then open:
   `https://saadabusaif-star.github.io/Class-Spinner-wheel/`

The repository root must look like this:

```text
Class-Spinner-wheel/
└── index.html
```

If `index.html` is inside another folder, GitHub Pages will show an empty/error page.

## Privacy note

GitHub Pages is static hosting. This edition encrypts roster data in the current browser before saving it to `localStorage`; names are not uploaded to GitHub Pages. It does not provide shared teacher accounts or server-side database storage. For school-wide shared access, use the full WebDev version on a Node/database host instead of GitHub Pages.
