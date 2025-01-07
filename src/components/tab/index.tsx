import classNames from "classnames";
import { ReactNode } from "react";

export interface TabProps {
  tabsData: Array<{
    title: string;
    content: ReactNode;
  }>;
  activeTab: number;
  onTabChange: (tab: number) => void;
  disabledTabIndexes?: number[];
  direction?: "horizontal" | "vertical";
}

const Tab = ({
  tabsData,
  activeTab,
  onTabChange,
  disabledTabIndexes = [],
  direction = "horizontal",
}: TabProps) => {
  return (
    <div
      className={classNames("flex gap-5", {
        "flex-row justify-start": direction === "vertical",
        "flex-col": direction === "horizontal",
      })}
    >
      <div
        className={classNames(
          "flex gap-5 border-0 border-solid border-gray-300",
          {
            "flex-col border-r": direction === "vertical",
            "flex-row border-b": direction === "horizontal",
          }
        )}
      >
        {tabsData.map((tab, idx) => (
          <div
            key={idx}
            className={classNames("px-1 py-2 pr-2 cursor-pointer", {
              "border-primary border-solid border-b-4 border-0":
                activeTab === idx && direction === "horizontal",
              "border-primary border-solid border-r-4 border-0":
                activeTab === idx && direction === "vertical",
              "opacity-50 cursor-not-allowed pointer-events-none":
                disabledTabIndexes.includes(idx),
            })}
            onClick={() => onTabChange(idx)}
          >
            <span
              className={classNames("text-sm", {
                "text-primary": activeTab === idx,
              })}
            >
              {tab.title}
            </span>
          </div>
        ))}
      </div>

      <div className="text-sm">{tabsData[activeTab].content}</div>
    </div>
  );
};

export default Tab;
