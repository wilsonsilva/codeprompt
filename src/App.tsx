import React from "react";
import { Steps } from "antd";
import styled from "styled-components";
import SelectModel from "./steps/SelectModel";
import MODELS from "./common/models";
import SelectRepo from "./steps/SelectRepo";
import { GithubFileObject } from "./common/github.interface";
import ConfigPrompt from "./steps/ConfigPrompt";
import {
  GithubOutlined,
  HeartFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import MonacoEditor from "@monaco-editor/react";
import { StepHeading } from "./common/components";
import CopyButton from "./common/CopyButton";

const Container = styled.div`
  width: 800px;
  margin: auto auto;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 30px;
`;
const Sticky = styled.div`
  position: sticky;
  top: 30px;
`;
const HeaderContainer = styled.div`
  padding: 50px 0;
  padding-top: 70px;

  & h1 {
    font-family: "Source Code Pro";
    margin: 0;
    color: #333;
  }
  & p {
    font-style: italic;
    font-weight: 500;
  }
  & .grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & div > a {
    border: 1px solid #ccc;
    padding: 8px 16px;
    border-radius: 5rem;
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <div className="grid">
        <h1>{`<CodePrompt />`}</h1>
        <div>
          <a
            href="https://github.com/wilsonsilva/codeprompt"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: 10 }}
          >
            <GithubOutlined style={{ marginRight: 5 }} /> Star on Github
          </a>
          <a
            href="https://twitter.com/wilsonsilva90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined />
          </a>
        </div>
      </div>
      <p>
        A code repository loader interface for generating GPT prompt.{" "}
        <a
          href="https://twitter.com/chunrapeepat/status/1641108704782356482"
          target="_blank"
          style={{ color: "#333" }}
        >
          See The Demo
        </a>
      </p>
    </HeaderContainer>
  );
};
const FooterContainer = styled.div`
  padding: 50px 0;
  text-align: center;
  color: #555;

  & p {
    font-style: italic;
    font-weight: 500;
  }
  & a {
    color: #555;
    text-decoration: none;
    font-weight: 700;
    font-family: "Source Code Pro";
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Made with <HeartFilled style={{ color: "#ff68b4" }} /> by{" "}
        <a
          href="https://twitter.com/chunrapeepat"
          target="_blank"
          rel="noopener noreferrer"
        >
          @chunrapeepat
        </a>
      </p>
      <p>
        Forked with <HeartFilled style={{ color: "#000" }} /> by{" "}
        <a
          href="https://twitter.com/wilsonsilva90"
          target="_blank"
          rel="noopener noreferrer"
        >
          @wilsonsilva90
        </a>
      </p>
    </FooterContainer>
  );
};

const stepItems = [
  {
    title: "Select Model",
    description: "Select the GPT model",
  },
  {
    title: "Select Repo",
    description: "Select the Github repo",
  },
  {
    title: "Config Prompt",
    description: "Config the prompt",
  },
  {
    title: "Finish",
    description: "Copy the prompt to GPT",
  },
];

function App() {
  const [step, setStep] = React.useState(0);
  const [selectedModel, setSelectedModel] = React.useState(null);
  const [files, setFiles] = React.useState<GithubFileObject[]>([]);
  const [prompt, setPrompt] = React.useState<string>("");

  return (
    <Container>
      <Header />

      <Grid>
        <div>
          <Sticky>
            <Steps
              direction="vertical"
              size="small"
              current={step}
              items={stepItems.map((item) => {
                return {
                  title: (
                    <b
                      style={{
                        fontFamily: "Source Code Pro",
                      }}
                    >
                      {item.title}
                    </b>
                  ),
                  description: (
                    <div style={{ fontStyle: "italic" }}>
                      {item.description}
                    </div>
                  ),
                };
              })}
            />
          </Sticky>
        </div>
        <div>
          <SelectModel
            onSelectionChange={(modelId) => {
              setSelectedModel(MODELS[modelId]);

              if (step > 1) return;
              setStep(Math.min(step + 1, 1));
            }}
          />

          {step >= 1 && (
            <SelectRepo
              onSubmit={(files) => {
                setFiles(files);

                if (step > 2) return;
                setStep(Math.min(step + 1, 2));
              }}
            />
          )}

          {step >= 2 && (
            <ConfigPrompt
              files={files}
              model={selectedModel}
              onSubmit={(prompt) => {
                setPrompt(prompt);

                if (step > 3) return;
                setStep(Math.min(step + 1, 3));
              }}
            />
          )}

          {step >= 3 && (
            <div style={{ marginTop: 40 }}>
              <StepHeading>Prompt Generated 🎉</StepHeading>
              <p
                style={{
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "#555",
                  fontSize: "0.875rem",
                }}
              >
                Copy the prompt below to feed the GPT on{" "}
                <a
                  target="_blank"
                  href="https://chat.openai.com/chat"
                  style={{ color: "#555" }}
                >
                  The Official ChatGPT interface
                </a>
                .
              </p>
              <div style={{ border: "1px solid #ccc", marginTop: 25 }}>
                <MonacoEditor
                  height={500}
                  value={prompt}
                  language="markdown"
                  options={{
                    fontSize: 14,
                    lineNumbers: "off",
                    readOnly: true,
                    minimap: { enabled: false },
                  }}
                />
              </div>

              <CopyButton text={prompt} />
            </div>
          )}
        </div>
      </Grid>
      <Footer />
    </Container>
  );
}

export default App;
