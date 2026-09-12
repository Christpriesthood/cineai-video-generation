# CineAI — Phase 1

A Next.js starter for an admin-first AI text-to-video platform.

## Run locally
1. Install Node.js 20+.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000

## Important
The UI and API endpoint are working, but the actual AI video model is deliberately not faked. `app/api/generate/route.js` is the integration point for the GPU worker/open-source video model.

Next build steps:
- Supabase authentication and admin role
- Database for generations
- Supabase Storage
- GPU worker + open-source text-to-video model
- Job queue/progress
- Story/scene mode
- User credits
