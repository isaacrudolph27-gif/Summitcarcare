# Put this on GitHub (no terminal needed)

These files are laid out as a repo root: `package.json` is at the top level, nothing is
nested inside another folder. Vercel will find it automatically.

## Upload through the GitHub website

1. Unzip `summit-car-care-for-github.zip`. You get one folder with `package.json` right inside it.
2. **Show hidden files** so nothing gets skipped (`.gitignore` and `.env.local.example` are hidden):
   - Mac: open the folder in Finder and press **Cmd + Shift + .**
   - Windows: File Explorer, View, Show, Hidden items
3. Go to your repo on github.com (`isaacrudolph27-gif/summit-car-care`).
4. Click **Add file**, then **Upload files**.
5. Open the unzipped folder, press **Cmd/Ctrl + A** to select everything inside it, and
   **drag it all** into the browser window. (Drag the contents, not the outer folder.)
6. Wait for the upload bars to finish, then scroll down.
7. Leave **Commit directly to the main branch** selected and click **Commit changes**.
8. Vercel sees the new commit and redeploys by itself in about a minute.

Check: on your repo's main page you should see `package.json`, `src`, and `README.md`
listed directly, not inside another folder. If you see one single folder instead, you
dragged the outer folder. Delete it and upload the contents again.

## Delete old files (uploads add and replace, but never delete)

If these still exist in your repo from earlier versions, delete them. On github.com open the
file, click the **...** menu, then **Delete file**, then **Commit changes**.

- `src/components/booking/steps/StepPayment.tsx` (replaced by `StepConfirm.tsx`)
- `src/app/api/stripe/webhook/route.ts` (removed; it caused a build error)

## Then turn on the emails

Open `SETUP-NOTIFICATIONS.md` in this folder. The site will not send booking emails until
you add the Gmail app password in Vercel.

## Never upload secrets

The `.gitignore` already blocks `.env.local`. Passwords go in Vercel's Environment
Variables, never in GitHub.
