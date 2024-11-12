# chatbot-ux-explorations
A collection of prototypes and experiments designed to explore and enhance chatbot user experiences (UX). These explorations span from practical improvements to current chatbot interfaces and interactions—such as making conversations more intuitive and accessible—to more playful ideas that re-imagine how we might use chatbots.

Built with **TypeScript**, this repository leverages the **LangChain** software suite to bring these concepts to life.

## Table of Contents

- [**Getting Started**](#getting-started)
- [**Roadmap**](#roadmap)
- [**Explorations**](#explorations)
  - [*Conversational Bookmarking and Annotation*](#conversational-bookmarking-and-annotation)
    - Favoriting Conversations and Responses
    - Conversational Tagging
    - Intra-Conversation RAG
  - [*Stepwise Conversational AI*](#stepwise-conversational-ai)

## Getting Started
>
> **NOTE:** Eventually, these explorations will be *explorable* on a website, but for now, you can run them locally. Please reference the `env.example` file for the necessary environment variables.

### Local Development

1. **Clone the repository** and install dependencies:

   ```bash
   git clone https://github.com/your-username/chatbot-ux-explorations.git
   cd chatbot-ux-explorations
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```

## Roadmap

| Phase            | Task                                       | Status        |
|------------------|--------------------------------------------|---------------|
| **1.0**          | Initial Project Setup                      | ✅ Completed   |
| **2.0**          | Conversational Bookmarking and Annotation (Favoriting) | 🔄 In Progress |
| **2.5**          | Conversational Bookmarking and Annotation (Tagging) | 🔜 Upcoming    |
| **2.75**          | Conversational Bookmarking and Annotation (Intra-Conversation RAG) | 📝 Planned    |
| **3.0**          | Stepwise Conversational AI Explorations | 📝 Planned    |

## Explorations

Check the `docs` folder for detailed descriptions and technical information on each exploration and their related themes.

### Conversational Bookmarking and Annotation

Drawing inspiration from notetaking and journaling apps, this theme examines how UIs could better allow users to organize and manage conversations. It includes features that let users mark, categorize, and easily revisit key moments in chat histories, making conversations more structured and intuitive.

- **Favoriting Conversations and Responses**: This feature explores letting users mark specific responses or entire conversations as favorites, making it easier to revisit important sections during a session.

- **Conversational Tagging**: This feature explores allowing users to assign custom tags to responses, providing more control over how they organize and retrieve conversations.

- **Intra-Conversation RAG**: This feature explores allowing users quickly retrieve responses from earlier in the conversation that have fallen out of the AI’s context window, making it easier to reference past information.

#### Stepwise Conversational AI

This theme focuses on creating guided, step-by-step chatbot interactions. Inspired by educational modules, onboarding flows, and presentations, it helps users navigate complex topics or processes in manageable steps, with the option to ask follow-up questions and review previous steps.

- **Exploration**: Future projects in this theme will implement stepwise conversational design to guide users through processes, learning modules, or structured workflows.
