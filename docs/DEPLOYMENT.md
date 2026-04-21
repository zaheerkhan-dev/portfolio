# zak-dev (iamzak.xyz) — Deployment Guide

> **For:** Zaheer (ADHD-friendly step-by-step guide)
> **Last updated:** April 21, 2026
> **Hosting:** Vercel

---

## ⚡ Quick Reference (99% of the time you need this)

### Push to GitHub (auto-deploys to Vercel)
```powershell
cd C:\Users\user\Desktop\Orunk\zak-dev
git add .
git commit -m "your change description"
git push origin main
```
Vercel auto-builds your portfolio in ~30 seconds. Done.

---

## 1. PORTFOLIO & /250 CHALLENGE — GitHub Auto-Deploy

> [!IMPORTANT]
> The portfolio deploys **automatically via GitHub**. Do NOT use manual deployment tools.
> Just push to `main` and Vercel builds it automatically.

### When to deploy
- After ANY visual changes (portfolio layout, about section, projects, etc.)
- After making a comment during the 250 Comments Challenge (see `src/views/challenge/build-docs/README.md`)
- After fixing bugs

### How to deploy

**Step 1: Commit your changes**
```powershell
cd C:\Users\user\Desktop\Orunk\zak-dev
git add .
git commit -m "describe what you changed"
```

**Step 2: Push to GitHub**
```powershell
git push origin main
```

**Step 3: Wait ~30 seconds**
Vercel auto-detects the push and rebuilds.

**Step 4: Verify**
Open https://iamzak.xyz or https://iamzak.xyz/250 in a new tab (or hard-refresh with Ctrl+Shift+R).

### URLs
| URL | What |
|-----|------|
| `https://iamzak.xyz` | ✅ Live production portfolio |
| `https://iamzak.xyz/250` | ✅ Live 250 comments challenge page |

### Rollback (if something breaks)
1. Go to your Vercel Dashboard → `zak-dev` project → Deployments
2. Find the last working deployment
3. Click the three dots (•••) → **"Promote to Production"** or **"Rollback"**
4. Done in seconds

---

## 2. TROUBLESHOOTING

### "Build failed"
Run this locally to check what went wrong:
```powershell
npm run build
```
Fix the type errors or syntax issues, then commit and push again.

### Something broke and you're panicking
1. Vercel Dashboard → find `zak-dev`
2. Click "Deployments"
3. Find the last working deployment → click "Promote to Production" / "Assign Custom Domains" (depending on Vercel UI updates).

---

## 3. DEPLOYMENT CHEAT SHEET

```
┌─────────────┬─────────────────────────┬───────────────────────┐
│ Service     │ How to deploy           │ URL                   │
├─────────────┼─────────────────────────┼───────────────────────┤
│ zak-dev     │ git push origin main    │ iamzak.xyz            │
│ /250 route  │ git push origin main    │ iamzak.xyz/250        │
└─────────────┴─────────────────────────┴───────────────────────┘
```
