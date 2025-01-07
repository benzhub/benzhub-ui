import { Meta } from "@storybook/react/*";
import Modal, { type ModalProps } from ".";
import { useState } from "react";
import Button from "../button";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
} as Meta<ModalProps>;

const Template = (args: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        title="Open Modal"
        onClick={() => setShowModal(true)}
        variant="outlined"
        rounded="medium"
      />
      <Modal
        {...args}
        showModal={showModal}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
};

export const Basic = {
  args: {
    showModal: true,
    children: <p>Modal Content</p>,
    footerChildren: <Button title="Confirm" rounded="medium" variant="outlined" onClick={() => {console.log("Confirm")}} />,
    title: "Modal Title",
    size: "medium",
  },
  render: Template,
} as { args: ModalProps; render: () => JSX.Element };
