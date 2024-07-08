---
sidebar_position: 4
---

# Create a Flow

In this section, we will be creating now the chatbot flow.

## Common Strategy

Most of the time, you will be following the following pattern when dealing with the user's interaction with the bot.

1. Take the immediate input
2. Process or do something
3. Return the output
4. Repeat or Jump to Other Section

:::tip

It is **important that you take input** on sections of the chat as this is the only time that the chatbot will stop on its flow and wait for user's input.

:::

## Create a new Flow

Go to the Chatbot Flow Page, and click Add New Flow.

![create](/img/flai-flow-createpng.png)

Put anything on the Flow Name and Description. Leave the Template Snippet for now. Then click, _Create Flow_

## Building your Chatbot

After creating a new Flow, or clicking an existing one, you will now be inside the Visual Chatbot Editor

![create](/img/flai-flow-cleaneditor.png)

You can click **right click to open the Nodes Window**

![create](/img/flai-flow-nodeslist.png)

:::note

The Nodes List have **Simple View** and **Pro view**. **Simple Mode** shows a simplified list of Chatbot builder like the Input, Output, Restart and so on. For more experienced user, you can toggle into **Pro Mode** to see more elaborate options to build more complex flows. In this tutorial, we will be sticking with the **Simple Mode** first. You can check further in this documentation to see what each nodes do.

:::

### Add an Input

On the _Add A Node_ Menu, click the **Input** Node. It should create a new **Direct Input** Node in your canvas

![input](/img/flai-flow-directinput.png)

Set the _Variable to Set_ field into '_message_' for now.

Then from the **Start** Node, there would be a green handle on the right side of the node, click and drag it towards the gray handle on the left of the **Direct Input** node. You will see a line be drawn between them.

This is how we will define, configure and connect nodes in the visual editor.

![input](/img/flai-flow-input-done.png)

### Print an Output

Open the _Add A Node_ Menu again, click the **Output**. It should create a **Response** Node.

For now, toggle the _Use Conversation History_ to active, and on _the GPT Prompt_ field, put '_reply to the user's query_'. Then connect the green handle from **Direct Input** to **Reponse**

![input](/img/flai-response.png)

### Looping

Before we start the chat, we should also put a **Back to Start** Node, so that when the user reaches the end, it would start again at the beginning. To do this, Open the _Add A Node_ menu again, click the **Restart** options. It should create a **Back to Start** Node. Connect the end of the **Response** node to the **Back To Start** node.

![input](/img/flai-flow-simplerestart.png)

### Testing the Chatbot

We can now test the chatbot. To do this, you should see a Floating Button on the bottom left, clicking it will open a Chatbot Window where you can do the chat testing with the current bot.

![input](/img/flai-flow-chatwindow.png)

You can now test how the bot wil react based on your input.

![input](/img/flai-flow-test.png)

From the current context, it should be able to reply to you, along with remember what you had already talked about. The bot in this window should update immediate after saving the current bot editor. To clear the chatbot history, click _Clear Chat_ on the bottom of the window.

### Add A Context

To add a new knowledge to the chatbot, we can add a **Knowledge Search** Node in the canvas so that the bot will have a context to use to reply to the user.

To do this, open the _Add A Node_, and click **Knowledge**.

First, let's delete the connection between Direct Input and Response first by clicking the 'x' button in their line. Then we connect the following: Direct Input -> Knowledge Search -> Response. Both Success and Fail Handles should be connected to the Response.

![flow](/img/flai-flow-knowledge.png)

Then on the **Knowledge Search** modal, put '\{\{message\}\}' on the _Context_ input.
On the _Index To Search_, select the context knowledge we created earlier.
Then on *Variable to Set\*\* put '*context*'.
On the *To Take\*, put 3

![flow](/img/flai-flow-contextconfig.png)

Finally, update the **Response** Node with the _GPT Prompt_ field into this value '_reply to the user's query with the help of this context: \{\{context\}\}_'

![flow](/img/flai-flow-final.png)

## Testing your Chatbot

![flow](/img/flai-flow-finaltest.png)

With all of the configurations, we now have a smart chatbot that can reply with custom knowledge.
