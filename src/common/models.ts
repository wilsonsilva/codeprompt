const MODELS: { [key: string]: any } = {
  "claude-3": {
    name: "Claude 3",
    description:
      "Offers the best combination of speed and performance for enterprise use cases, at a lower cost than other models on the market.",
    maxTokens: 200000,
    trainingData: "Up to Dec 2023",
  },
  "command-r+": {
    name: "Command R+",
    description:
      "Cohere's newest large language model, optimized for conversational interaction and long-context tasks.",
    maxTokens: 128000,
    trainingData: "Up to Mar 2024",
  },
  "gpt-3.5": {
    name: "GPT-3.5-TURBO",
    description:
      "Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration.",
    maxTokens: 16385,
    trainingData: "Up to Sep 2021",
  },
  "gpt-4": {
    name: "GPT-4",
    description:
      "More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Will be updated with our latest model iteration.",
    maxTokens: 128000,
    trainingData: "Up to Dec 2023",
  },
  "llama-3": {
    name: "Llama 3",
    description:
      "The next generation of our state-of-the-art open source large language model from Meta.",
    maxTokens: 8192,
    trainingData: "Up to Dec 2023",
  },
  "mistral-large": {
    name: "Mistral Large",
    description:
      "Mistral AI's flagship model, with top-tier reasoning capacities. It is also available on Azure.",
    maxTokens: 32000,
    trainingData: "Unknown",
  },
};

export default MODELS;
