---
sidebar_position: 3
---

# Create a Context

If you need to build a knowledge base AI assistant, it is recommended first to create a knowledge base first.

But if you don't need a Knowledge Context, you can continue to [create the chatbot flow](/docs/chatbot-flows/create-a-flow)

Your knowledge base can either:

1. Manually Inputted
2. From a document (pdf, docx, xlsx)
3. From a website

## About Context

FLAI uses Redisearch and OpenAI Embeddabings to score each of the documents provided and store the vector values of each text document.

Each Text Search (and Chatbot Knowledge Search) calls OpenAI Embeddings to convert a string of text to vector values that later will be compared to all of the stored vector values from documents.

## Creating a Context

You can go to the Contexts page to create a new context

![list](/img/flai-context-list.png)

Click **Create New Context** to create a new Context Definition.

![list](/img/flai-context-createnew.png)

## Embedding Information

You can embed any text information in the current context.

### Manually Inputted Context

You can go to page and paste the text context.

![list](/img/flai-context-traintext.png)

A new context entry will be created upon your submission.

![list](/img/flai-context-contextlist.png)

### Document-based Context

You can upload the following file types to build your codebase: DOCX, PPTX, XLSX, ODT, ODP, ODS, PDF

![list](/img/flai-context-document.png)

Under the hood, FLAI uses [**officeParser**](https://www.npmjs.com/package/officeparser) to parse the files and fetch the text uploaded in the system.

Due to LLM's having token limitations and the knowledge base having the possibility of being large, the parsed text were also being chunkified into sets of 2000 words with overlapping text of 1000. That's why you can see a document having multiple chunks. (e.g 0 to 2000 character then next batch is 1000 to 3000)

### Web-based Context

FLAI can scrap text from websites assuming that the website allows bot crawlers. You can either provide a sitemap.xml or a list of urls (with the option to fetch child links).

To test if FLAI correctly parsed the urls in your provided url, you can use the _Check URL_ function before starting to scrape the website.

In the example below, a sitemap is provided, and it fetched that it has 100 fetchable links (was limitted by 100 due to Max URL Count limit)
![sitemap](/img/flai-context-sitemap.png)

In the next example, a single URL was provided. At first, it has 1 url fetchable, then when the _Fetch CHild of Links_ is toggled, 100 links was scanned to be fetchable, then when the URL count limit was increased to 10000, then a total of 3000+ links was scanned to be scrappable.

![sitemap](/img/flai-context-manual.png)

:::warning

Note that web scrapping takes a considerable resource and time, so plan it accordingly if you already have a deployed chat bot.

:::

After clicking _Start Scraping_, the scrap job would begin. DO NOT go outside of the page as you might not be abele to track the progress of the scrapping if you did. The job will still go however.

![sitemap](/img/flai-context-webfetch.png)

## Testing Knowledge Search

After succesfully parsing the documents you provided, you can see the context list on the context dashboard.

![sitemap](/img/flai-context-embedlist.png)

You can then visit the _Test Search_ tab to input sample prompts and see which documents would be returned by the Context Engine, along with the metadata, and score of the document.

![sitemap](/img/flai-context-testsearch.png)

For the score of the document, the lower the value, the more closer (or related) the provided document is to the user input. You can test it and see that a document would have a lower score as you provide more exact input comparable to the source context.
