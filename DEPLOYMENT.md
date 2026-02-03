# Deployment Guide

## Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `animekompiweb`
   - Set as Private or Public
   - Don't initialize with README
   - Click "Create repository"

2. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/animekompiweb.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Automatic (Recommended)

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
5. Add Environment Variables (if needed)
6. Click "Deploy"

### Option B: Manual via CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

## Important Notes

### Database (SQLite)
- SQLite database (`prisma/dev.db`) will NOT work on Vercel
- You need to migrate to PostgreSQL or MySQL for production

### Recommended: Switch to PostgreSQL

1. Create a PostgreSQL database (Vercel Postgres, Supabase, or Neon)

2. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

3. Add to Vercel Environment Variables:
   ```
   DATABASE_URL=your_postgresql_connection_string
   ```

4. Run migrations:
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

### Initialize Admin User

After deployment, visit:
```
https://your-domain.vercel.app/api/admin/init
```

This will create the default admin user (admin/admin123).
**Change the password immediately!**

## Post-Deployment Checklist

- [ ] Database migrated to PostgreSQL
- [ ] Environment variables set in Vercel
- [ ] Admin user initialized
- [ ] Admin password changed
- [ ] SEO settings configured in admin panel
- [ ] Custom domain configured (optional)
- [ ] Analytics working (Histats)

## Troubleshooting

### Build Errors
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally first

### Database Errors
- Verify DATABASE_URL is correct
- Run `npx prisma generate` after schema changes
- Check Prisma migrations

### 404 Errors
- Ensure dynamic routes are correct
- Check file naming in `app/` directory
