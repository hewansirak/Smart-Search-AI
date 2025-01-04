# AI Answer Engine
AI Answer Engine with Next.js and TypeScript that can scrape content from websites and mitigates hallucinations by citing its sources when providing answers. This project is inspired by Perplexity.ai

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

## Requirements

A chat interface where a user can:
Paste in a set of URLs and get a response back with the context of all the URLs through an LLM
Ask a question and get an answer with sources cited
Share their conversation with others, and let them continue with their conversation

### Challenges

- Build a comprehensive solution to extract content from any kind of URL or data source, such as YouTube videos, PDFs, CSV files, and images
- Generate visualizations from the data such as bar charts, line charts, histograms, etc.
- Implement a hierarchical web crawler that starts at a given URL and identifies all relevant links on the page (e.g., hyperlinks, embedded media links, and scrapes the content from those links as well 

## References

- [Build a Web Scraper API with Puppeteer
](https://www.youtube.com/watch?v=kOdIzhPfLuo&ab_channel=ColbyFayock)
- [API Routes with Next.js ](https://www.youtube.com/watch?v=gEB3ckYeZF4&ab_channel=Codewithguillaume)
- [Rate Limiting APIs using Redis
](https://www.youtube.com/watch?v=6QhLdQlyZJc&ab_channel=RasMic)
- [Redis Caching](https://www.youtube.com/watch?v=-5RTyEim384&ab_channel=Joshtriedcoding)
