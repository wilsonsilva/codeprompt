import { Radio, Button, Select, RadioChangeEvent } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { StepHeading } from "../common/components";
import MODELS from "../common/models";
import { numberWithCommas } from "../utils/helper";

const ModelInfo = styled.div`
  background: #e5f3f3;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 15px 0;

  & p > span {
    margin-right: 15px;
  }
`;

interface SelectModelProps {
  onSelectionChange: (value: string) => void;
}
const SelectModel = ({ onSelectionChange }: SelectModelProps) => {
  const [selectedItem, setSelectedItem] = useState("claude-3");

  const handleChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    setSelectedItem(value);
  };
  const handleSubmit = () => {
    if (!selectedItem) return;
    onSelectionChange(selectedItem);
  };

  return (
    <div>
      <StepHeading>1. Select Model</StepHeading>

      <Radio.Group
        defaultValue="claude-3"
        buttonStyle="solid"
        onChange={handleChange}
      >
        <Radio.Button value="claude-3">Claude 3</Radio.Button>
        <Radio.Button value="command-r+">Command R+</Radio.Button>
        <Radio.Button value="gpt-3.5">GPT-3.5</Radio.Button>
        <Radio.Button value="gpt-4">GPT-4</Radio.Button>
        <Radio.Button value="llama-3">Llama 3</Radio.Button>
        <Radio.Button value="mistral-large">Mistral Large</Radio.Button>
      </Radio.Group>

      {selectedItem && (
        <>
          <ModelInfo>
            <p>
              <span>
                <b>Model:</b> {MODELS[selectedItem].name}
              </span>
              <span>
                <b>Max Tokens:</b>{" "}
                {numberWithCommas(MODELS[selectedItem].maxTokens)}
              </span>
            </p>
            <p>{MODELS[selectedItem].description}</p>
            <p>
              <b>Training Data:</b> {MODELS[selectedItem].trainingData}
            </p>
          </ModelInfo>

          <Button onClick={handleSubmit}>Next →</Button>
        </>
      )}
    </div>
  );
};

export default SelectModel;
