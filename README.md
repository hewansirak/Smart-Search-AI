# AI Answer Engine

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/team-headstart/ai-answer-engine.git
```

Navigate to the project directory:

```bash
cd ai-answer-engine
```

Then, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks

- Take a look at the TODOs throughout the repo, namely:

  - `src/app/page.tsx`: Update the UI and handle the API response as needed
  - `src/app/api/chat/route.ts`: Implement the chat API with Groq and web scraping with Cheerio and Puppeteer
  - `src/middleware.ts`: Implement the code here to add rate limiting with Redis

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## References

- [Build a Web Scraper API with Puppeteer
](https://www.youtube.com/watch?v=kOdIzhPfLuo&ab_channel=ColbyFayock)
- [API Routes with Next.js ](https://www.youtube.com/watch?v=gEB3ckYeZF4&ab_channel=Codewithguillaume)
- [Rate Limiting APIs using Redis
](https://www.youtube.com/watch?v=6QhLdQlyZJc&ab_channel=RasMic)
- [Redis Caching](https://www.youtube.com/watch?v=-5RTyEim384&ab_channel=Joshtriedcoding)
