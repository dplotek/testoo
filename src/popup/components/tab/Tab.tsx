import { TabsEnum } from "@src/popup/types/tabs.types";

interface TabProps {
  title: string;
  active: boolean;
  tab: TabsEnum;
  onClick: (val: TabsEnum) => void;
}

const Tab = ({ title, active, tab, onClick }: TabProps) => {
  const activeClasses = "text-blue-500 bg-gray-800 active"
  const inactiveClasses = "hover:bg-gray-800 hover:text-gray-300"

  return (
    <div class="me-2">
      <button
        onClick={() => onClick(tab)}
        class={`inline-block p-2 rounded-t-lg ${active ? activeClasses : inactiveClasses}`}
      >
        {title}
      </button>
    </div>
  )
}

export default Tab