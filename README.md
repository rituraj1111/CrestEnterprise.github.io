# Crest Enterprise Website

## Project info

**URL**: https://lovable.dev/projects/2aa56bb4-2436-42f7-b664-9c4f21111a1b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2aa56bb4-2436-42f7-b664-9c4f21111a1b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory and then to the app folder:
cd <YOUR_PROJECT_NAME>/CrestEnterprise.github.io

# Step 3: Install the necessary dependencies (including react-helmet):
npm install

# Step 4: Start the development server with auto-reloading and instant preview:
npm run dev

# Step 5: To build for production (e.g., for Netlify):
npm run build

# Step 6: To preview the production build locally:
npm run preview

## Netlify Deployment

Set the build command to:

```
npm run build
```

Set the publish directory to:

```
dist
```

If you see errors about missing dependencies (e.g., `react-helmet`), run:

```
npm install react-helmet
```

If you use Bun, ensure all dependencies are installed with:

```
bun install
```

## Troubleshooting

- If you see `Missing script: "dev"`, make sure you are in the `CrestEnterprise.github.io` folder where the correct `package.json` is located.
- If you see `Cannot find module 'react-helmet'`, run `npm install react-helmet` in the same folder.
- For other dependency issues, run `npm install` or `bun install` as appropriate.
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- react-helmet


## How can I deploy this project?

You can deploy to Netlify, Vercel, or any static hosting provider. For Netlify, use the build and publish settings above.

## Custom Domain

To connect a custom domain, follow your hosting provider's instructions (e.g., Netlify or Vercel dashboard).
