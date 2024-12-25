import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "../index";

describe("Input Component", () => {
  // 基本渲染和輸入測試
  test("應該正確渲染並處理輸入", () => {
    const handleChange = vi.fn();
    render(
      <Input
        value=""
        onChange={handleChange}
        placeholder="請輸入"
        label="用戶名"
      />
    );

    const input = screen.getByRole("textbox");
    const label = screen.getByText("用戶名");

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "請輸入");

    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledWith("test");
  });

  // 錯誤狀態測試
  test("應該顯示錯誤信息", () => {
    render(
      <Input
        value=""
        onChange={() => {}}
        error="這是一個錯誤信息"
      />
    );

    expect(screen.getByText("這是一個錯誤信息")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("border-red-500");
  });

  // 禁用狀態測試
  test("禁用狀態應該無法輸入", () => {
    const handleChange = vi.fn();
    render(
      <Input
        value=""
        onChange={handleChange}
        disabled
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("bg-gray-100");
  });

  // 不同類型測試
  test("應該支持不同的輸入類型", () => {
    const { rerender } = render(
      <Input
        value=""
        onChange={() => {}}
        type="password"
        placeholder="密碼"
      />
    );

    expect(screen.getByPlaceholderText("密碼")).toHaveAttribute("type", "password");

    rerender(
      <Input
        value=""
        onChange={() => {}}
        type="number"
        placeholder="數字"
      />
    );

    expect(screen.getByPlaceholderText("數字")).toHaveAttribute("type", "number");
  });

  // 組合功能測試
  test("應該正確處理多個屬性的組合", () => {
    render(
      <Input
        value="test"
        onChange={() => {}}
        label="測試"
        disabled
        error="錯誤"
        size="large"
        rounded="medium"
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("h-12", "rounded-md");
    expect(screen.getByText("錯誤")).toBeInTheDocument();
  });
});
