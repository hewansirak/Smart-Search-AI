// TODO: Implement the chat API with Groq and web scraping with Cheerio and Puppeteer
// Refer to the Next.js Docs on how to read the Request body: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// Refer to the Groq SDK here on how to use an LLM: https://www.npmjs.com/package/groq-sdk
// Refer to the Cheerio docs here on how to parse HTML: https://cheerio.js.org/docs/basics/loading
// Refer to Puppeteer docs here: https://pptr.dev/guides/what-is-puppeteer
import { NextResponse } from "next/server";
import { getGroqResponse } from "@/app/utils/groqClient";
import { urlPattern, scrapeUrl } from "@/app/utils/scraper";

export async function POST(req: Request) {
  try {
    const { message, messages } = await req.json();

    console.log("message received", message);
    console.timeLog("messages", messages);

    const url = message.match(urlPattern);

    let scrappedContent = "";
    if (url) {
      console.log("URL Found", url);
      const scraperResponse = await scrapeUrl(url);
      console.log("Scrapped Content", scrappedContent);
      if (scraperResponse) {
        scrappedContent = scraperResponse.content;
      }
    }

    // Extract the user's query by removing the URL if present
    const userQuery = message.replace(url ? url[0] : "", "").trim();

    const userPrompt = `
    Answer my question: "${userQuery}"

    Based on the following content: 
    <content>
    ${scrappedContent}
    </content>

    If the content is empty, respond with "I don't know."    
    `;

    const llmMessages = [
      ...messages,
      {
        role: "user",
        content: userPrompt,
      },
    ];

    console.log("LLM Messages", llmMessages);

    const response = await getGroqResponse(llmMessages);

    return NextResponse.json({ message: response });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({ message: "Error" });
  }
}
