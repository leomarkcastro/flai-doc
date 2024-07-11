---
sidebar_position: 4
---

# Special Flags

In FLAI, there are special variables that you can set in the user's chat session that could affect their conversation experience one way or another.

## Variables

### history

An array that stores the displayed conversation history. This was used by ChatGPT whenever it accesses its Chat History to infer context about it.

### lastPrompt

The lastPrompt of the user from any input nodes. This was used on input nodes if you enable _Check Last Prompt_ option.

**Note** that lastPrompt saves the only updates if the user provided a new non-empty answer to a prompt. So if you have 3 consecutive input nodes, assuming this would be the flow: the first prompt will receive the prompt from user, then the 2nd will take the _lastPrompt_, then would proceed to the 3rd node will still use the prompt from the 1st node as it was not updated by the 2nd node.

### nodeID

The current nodeID.

Modifying this is not recommended and is not designed to be updated manually. If for some case, the nodeID is modified manually, then the next convesation engine run would start either on the specified node if valid, or the whole conversation would just crash.

### globalContext

You can set this to set a global prompt to be used by all _Text Output_ nodes in the chatbot flow. Although, you will still have to put something on the _GPT Prompt_ field of each text input to enabled (GPT Prompt would act like a switch to enable global context addition). If you want to enable global context automatically for all Text Output prompt, consider setting _forceGlobalContext_ flag to 'true'.

### forceGlobalContext

Setting this to true will add the 'globalContext' prompt to all chat nodes automatically. Essentially making all of the conversation ChatGPT Prowered.

### pendingAction

This is used by _Options Input_ to indicate that an existing Options list were to be presented to user as they haven't selected anything yet.

### maxTimeout

A safeguard for when a conversation looped due to bad flow logic. Conversations will pre-terminate if the current session exceed 60 seconds. If for some reason you are expecting an API call from a service and that a single session might take more the 60 seconds. You can set this variable to have higher value (in seconds).

### maxRecursion

A safeguard for when the engine detected that you are running on a node for too many times. By default, the chatbot will throw an error if it detected that a node was run more than a 100 times. For example, you looped a Text Output and it looped the same node for a 100 times, this will throw an error. If you like to modify this behavior, you can set this behavior.
