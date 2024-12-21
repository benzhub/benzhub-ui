import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../index";

describe("Button Component", () => {
  // 基本功能測試
  test("應該正確渲染按鈕文字和處理點擊事件", () => {
    const handleClick = vi.fn();
    render(<Button title="Click Me" onClick={handleClick} />);
    
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // 變體測試 - 只測試關鍵差異
  test("應該根據variant渲染不同外觀", () => {
    const { rerender } = render(<Button title="按鈕" variant="outlined" />);
    expect(screen.getByRole("button")).toHaveClass("border-black", "bg-white");

    rerender(<Button title="按鈕" variant="contained" />);
    expect(screen.getByRole("button")).toHaveClass("bg-black");
  });

  // 禁用狀態測試
  test("禁用狀態應該無法點擊", () => {
    const handleClick = vi.fn();
    render(<Button title="禁用" onClick={handleClick} disabled />);
    
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Loading狀態測試
  test("Loading狀態應該顯示載入指示器", () => {
    render(<Button title="載入中" isLoading />);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  // Icon功能測試
  test("應該能正確顯示圖標", () => {
    const TestIcon = () => <span data-testid="test-icon">icon</span>;
    render(<Button title="帶圖標" icon={<TestIcon />} />);
    
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    expect(screen.getByText("帶圖標")).toBeInTheDocument();
  });

  // 組合功能測試 - 只測試關鍵互動
  test("loading和disabled狀態組合", () => {
    render(
      <Button
        title="載入禁用"
        disabled
        isLoading
      />
    );
    
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  // 在現有的測試後添加以下三個組合測試

  test("點擊事件在loading狀態下應該被禁用", () => {
    const handleClick = vi.fn();
    render(
      <Button
        title="載入中"
        onClick={handleClick}
        isLoading
      />
    );
    
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  test("圖標和loading同時存在時應該都能顯示", () => {
    const TestIcon = () => <span data-testid="test-icon">icon</span>;
    render(
      <Button
        title="載入中"
        icon={<TestIcon />}
        isLoading
      />
    );

    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    expect(screen.getByText("載入中")).toBeInTheDocument();
  });

  test("variant切換時應保持其他功能正常", () => {
    const TestIcon = () => <span data-testid="test-icon">icon</span>;
    const { rerender } = render(
      <Button
        title="測試按鈕"
        variant="outlined"
        icon={<TestIcon />}
        disabled
      />
    );

    let button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();

    rerender(
      <Button
        title="測試按鈕"
        variant="contained"
        icon={<TestIcon />}
        disabled
      />
    );

    button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });
});
