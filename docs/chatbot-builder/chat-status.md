---
sidebar_position: 3
---

# Chat Status

Each Session of FLAI Conversation has a Chat Status that tracks the status of the current chat session. It contains the chat history, last prompt, special flags and other variables that were declared during the conversation.

```js
{
    "node": "zji26hc2",
    "history": [
        {
            "role": "user",
            "content": "galaxy"
        },
        {
            "role": "assistant",
            "content": "Generating an image based\nof galaxy for you."
        },
        {
            "role": "assistant",
            "content": "![img](https://oaidalleapiprodscus.blob.core.windows.net/private/org-h1O1cSs8OJAQGQGXob4bMdf8/user-AVzmK4p1gEF4glWqLGKKLld8/img-cg4FfUMWvtsOLAJdi8O994TO.png?st&#x3D;2024-07-11T11%3A51%3A30Z&amp;se&#x3D;2024-07-11T13%3A51%3A30Z&amp;sp&#x3D;r&amp;sv&#x3D;2023-11-03&amp;sr&#x3D;b&amp;rscd&#x3D;inline&amp;rsct&#x3D;image/png&amp;skoid&#x3D;6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid&#x3D;a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt&#x3D;2024-07-11T02%3A22%3A51Z&amp;ske&#x3D;2024-07-12T02%3A22%3A51Z&amp;sks&#x3D;b&amp;skv&#x3D;2023-11-03&amp;sig&#x3D;iopuwht5WXsQLQXtRX5GbqgyjsyfXktEZrGSISi6hsQ%3D)"
        }
    ],
    "lastPrompt": "galaxy",
    "prompt": "galaxy",
    "images": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-h1O1cSs8OJAQGQGXob4bMdf8/user-AVzmK4p1gEF4glWqLGKKLld8/img-cg4FfUMWvtsOLAJdi8O994TO.png?st=2024-07-11T11%3A51%3A30Z&se=2024-07-11T13%3A51%3A30Z&sp=r&sv=2023-11-03&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-07-11T02%3A22%3A51Z&ske=2024-07-12T02%3A22%3A51Z&sks=b&skv=2023-11-03&sig=iopuwht5WXsQLQXtRX5GbqgyjsyfXktEZrGSISi6hsQ%3D"
}
```

In the example, we can see the following data types:

- **Node**: The current node in the conversation
- **History**: The log of chat history between the user and the bot (only shows the displayed chat log, not the prompt engineering behind pre-processings)
- **lastPrompt**: The last sent message of the user
- **prompt**: Custom variable from _Direct Input_
- **images**: Generated image from _Image Output_

## Notes

- Chat Status is a JSON type, so it should store any JSON-compatible types well. Assuming that you can properly access them via handlebar variables or JS script.

- On backend, there is a JSON object of the conversation stored in-memory. Every conversation end, the current stringified JSON object is saved to the database. On a fresh server run, the chat engine will first check if the chat session exists in memory, else it will load the latest saved JSON object.

- Due to this, Chat session was designed to be used on single concurrent sessions only. If you try to call a chat if an existing process is running, then your second request will be rejected.
