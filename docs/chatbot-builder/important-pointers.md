---
sidebar_position: 1
---

# Important Pointers

These are some of the important pointers you need to know about the Visual Chatbot Builder

## Flow Nodes

There are multiple types of nodes that you can use to build the logic of your Chatbot, ranging from input taking, actions, response generation, data fetching, flow management and other features. Learning each of the node or atleast learning a couple of core nodes can help you greatly in building your logic from an idea.

## Chat Status

The second most important faeture of the chat bot is that each conversation has it own status object that tracks the current status of the conversation. These values are accessible via handlebars and JS eval()

## Special Flags

Special Flags are special variables in the Chatbot Flow that can have a global effect on the conversation. It can range from having a global prompt template towards the overall conversation, setting max timeout or recursion limit, getting the immediate last message and other future features too.

## Chat Starters

You can configure the chat bot so that it will show a list of options to help the conversation get started in the right direction.

## Multiple Pages

Your flow can span multiple pages. This can help you group a certain flow on its own and avoid clutering a single page with mixed logics

## Copy and Pasting

It is possible to manually copy a page of the flow or even copy the whole flow for safe-keeping, quick duplicating or manual JSON editing.

## Version Management

You can create a checkpoint version of the chatbot logic without the need to create a new chatbot flow. This could be useful if you want to have a 'stable' version for public use or you just want to backup a certain progress without losing everything if something goes wrong.
