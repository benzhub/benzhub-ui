import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../index";

describe("Button Component", () => {
  // 基本渲染測試
  test("應該正確渲染按鈕文字", () => {
    render(<Button title="點擊我" />);
    expect(screen.getByText("點擊我")).toBeInTheDocument();
  });

  // 變體樣式測試
  test("應該根據variant渲染正確的樣式", () => {
    const { rerender } = render(<Button title="按鈕" variant="contained" />);
    expect(screen.getByRole("button")).toHaveClass("bg-black text-white");

    rerender(<Button title="按鈕" variant="outlined" />);
    expect(screen.getByRole("button")).toHaveClass(
      "border border-solid border-black bg-white text-black"
    );
  });

  // 尺寸測試
  test("應該根據size渲染不同的按鈕大小", () => {
    const { rerender } = render(<Button title="按鈕" size="small" />);
    expect(screen.getByRole("button")).toHaveClass("h-8");

    rerender(<Button title="按鈕" size="medium" />);
    expect(screen.getByRole("button")).toHaveClass("h-10");

    rerender(<Button title="按鈕" size="large" />);
    expect(screen.getByRole("button")).toHaveClass("h-12");
  });

  // 圓角測試
  test("應該根據rounded渲染不同的圓角樣式", () => {
    const { rerender } = render(<Button title="按鈕" rounded="none" />);
    expect(screen.getByRole("button")).toHaveClass("rounded-none");

    rerender(<Button title="按鈕" rounded="medium" />);
    expect(screen.getByRole("button")).toHaveClass("rounded-md");
  });

  // 點擊事件測試
  test("應該正確觸發點擊事件", () => {
    const handleClick = vi.fn();
    render(<Button title="點擊我" onClick={handleClick} />);

    fireEvent.click(screen.getByText("點擊我"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // 禁用狀態測試
  test("禁用狀態應該有正確的樣式", () => {
    render(<Button title="禁用" disabled />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("pointer-events-none bg-gray-300");
    expect(button).toBeDisabled();
  });

  // Loading狀態測試
  test("Loading狀態應該顯示loading spinner", () => {
    render(<Button title="載入中" isLoading />);
    expect(screen.getByRole("button")).toHaveClass("flex gap-3 items-center");
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  // Icon位置測試
  test("應該根據iconPosition正確放置圖標", () => {
    const TestIcon = () => <span data-testid="test-icon">icon</span>;

    const { rerender } = render(
      <Button title="帶圖標" icon={<TestIcon />} iconPosition="left" />
    );
    expect(screen.getByRole("button")).not.toHaveClass("flex-row-reverse");
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();

    rerender(
      <Button title="帶圖標" icon={<TestIcon />} iconPosition="right" />
    );
    expect(screen.getByRole("button")).toHaveClass("flex-row-reverse");
  });

  // 組合狀態測試
  test("應該正確處理多個props的組合", () => {
    render(
      <Button
        title="組合測試"
        variant="outlined"
        size="large"
        rounded="medium"
        disabled
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("h-12", "rounded-md", "pointer-events-none");
    expect(button).toBeDisabled();
  });

  // 在原有的組合狀態測試後添加以下測試

  test("應該正確處理loading和icon的組合", () => {
    const TestIcon = () => <span data-testid="test-icon">icon</span>;
    render(
      <Button
        title="載入圖標"
        icon={<TestIcon />}
        iconPosition="right"
        isLoading
        variant="contained"
      />
    );
    
    const button = screen.getByRole("button");
    expect(button).toHaveClass("flex", "gap-3", "items-center", "flex-row-reverse");
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("應該正確處理圓角和variant的組合", () => {
    const { rerender } = render(
      <Button
        title="樣式組合"
        variant="outlined"
        rounded="large"
        size="small"
      />
    );
    
    let button = screen.getByRole("button");
    expect(button).toHaveClass(
      "border", 
      "border-solid", 
      "border-black",
      "rounded-lg",
      "h-8"
    );

    rerender(
      <Button
        title="樣式組合"
        variant="contained"
        rounded="large"
        size="small"
      />
    );
    
    button = screen.getByRole("button");
    expect(button).toHaveClass("bg-black", "text-white", "rounded-lg", "h-8");
  });

  test("應該正確處理disabled和loading的組合", () => {
    render(
      <Button
        title="禁用載入"
        disabled
        isLoading
        variant="outlined"
      />
    );
    
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "pointer-events-none",
      "bg-gray-300",
      "flex",
      "gap-3",
      "items-center"
    );
    expect(button).toBeDisabled();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
