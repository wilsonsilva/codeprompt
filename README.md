# CodePrompt

> CodePrompt is the code repository loader interface that consumes your relevant code and turns it into a GPT prompt — allowing the GPT to write more complex code for you.

<div align="center">
    <img src="https://codeprompt.xyz/ogimage.jpeg" width="100%" />
</div>
<br/>

CodePrompt is an experiment and an attempt to let GPT write more complex code while taking into consideration of the project's context. This includes tasks such as implementing a function that evolves edits on multiple files, creating new components while reusing existing functions, etc.

The inspiration and ideas for this project were primarily drawn from [mpoon/gpt-repository-loader](https://github.com/mpoon/gpt-repository-loader). However, due to its limitations in loading all files into the prompt and encountering token context limit issues, using gpt-repository-loader is currently impractical.

So in CodePrompt, we add functionalities such as file selection and code editing, which enable developers to selectively choose relevant files and specific portions of code to build a GPT prompt based on their requirements.

[Try it yourself](https://codeprompt.xyz), [Report a Bug / Request a Feature](https://github.com/chunrapeepat/codeprompt/issues)

## 📖 How to use:

1. Choose a GPT model from the available options, such as GPT-3.5, GPT-4, Claude, Llama, Mistral and more.
2. Select a public repository that you want to work with.
3. Choose the relevant files from the repository that you want to include into the prompt.
4. Remove any irrelevant code and add specific instructions as needed.
5. Copy the prompt to your chosen GPT model to generate the desired output.

## 🛠️ Installation

### Local Development Environment

1. Clone the repository:

   ```bash
   git clone git@github.com:chunrapeepat/codeprompt.git
   ```

2. Install the required packages:

   ```bash
   cd codeprompt && bun
   ```

3. Build the application:

   ```bash
   bun run build
   ```

4. Start the development server:

   ```bash
   bun start
   ```

## 👥 Contributing

Contributions to CodePrompt are welcome and encouraged! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Push your changes to your fork
5. Submit a pull request

Or, if you have any fun ideas, go to [the issues page](https://github.com/chunrapeepat/codeprompt/issues) and post them there 🔥

---

Crafted with 💖 by [@chunrapeepat](https://twitter.com/chunrapeepat)
