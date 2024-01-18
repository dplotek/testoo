import { TabsEnum } from "@src/popup/types/tabs.types"
import Tab from "../tab/Tab"

interface TabsProps {
  activeTab: TabsEnum,
  onClick: (val: TabsEnum) => void;
}

const Tabs = ({ activeTab, onClick }: TabsProps) => {
  const tabs = [
    {
      tab: TabsEnum.FAVOURITES,
      title: "Ulubione"
    },
    {
      tab: TabsEnum.COMPANY,
      title: "Firma"
    },
    {
      tab: TabsEnum.PERSONAL_DATA,
      title: "Dane osobowe"
    }
  ]

  return (
    <div class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {tabs.map(({ tab, title }) => (
        <Tab
          title={title}
          active={activeTab === tab}
          tab={tab}
          onClick={onClick}
        />
      ))}
    </div>
  )
}

export default Tabs