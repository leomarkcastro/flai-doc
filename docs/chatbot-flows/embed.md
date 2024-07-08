---
sidebar_position: 5
---

# Embed Chatbot

## Embed Editor

Now that we have setup the Chatbot, we can now proceed to embed the chatbot in our own websites.

FLAI offers a page to tweak the configuration and style of the floating chat window.

![embed](/img/flai-chat-embed.png)

In this page, you can select the API Key to use, Template to use, the userID, theme colors and an iframe page to see how the chatbot floater will appear.

![embed](/img/flai-chat-code.png)

To copy the code, click the _Code_ tab on the preview panel, you will see the code you'll need to copy and paste into your website.

## Sample HTML

### Code

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <script src="http://localhost:3001/api/embed/widget"></script>
    <script defer>
      async function checkStart(args) {
        setTimeout(() => {
          if (window["loadWidget"]) {
            window.loadWidget({
              templateID: "clycjxl5t00chrp40ea933h0r",
              userID: "testuser",
              themeColor: "#7a7aff",
              themeDarkColor: "#fff",
              theme2Color: "#eee",
              theme2DarkColor: "#333",
              bgColor: "#f9f9f9",
              darkColor: "#333",
              btnImage:
                'url("https://media.istockphoto.com/id/1010001882/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=1jeAr9KSx3sG7SKxUPR_j8WPSZq_NIKL0P-MA4F1xRw=")',
              apiKey: "0ffab90f-8a6c-4719-b3f7-25b43db9db9d",
            });
          } else {
            checkStart({
              retries: args.retries - 1,
              delay: args.delay,
            });
          }
        }, args.delay ?? 1000);
      }
      checkStart({
        retries: 5,
      });
    </script>
  </body>
</html>
```

### Preview

![sample](/img/flai-embed-page.png)
