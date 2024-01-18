import { useState } from 'preact/hooks';
import Layout from "./components/layout/Layout";
import Tabs from "./components/tabs/Tabs";
import { TabsEnum } from './types/tabs.types';
import Section from './components/section/Section';

const Popup = () => {
  const [tab, setTab] = useState<TabsEnum>(TabsEnum.FAVOURITES)
  const handleSetTab = (val: TabsEnum) => setTab(val)

  return (
    <Layout>
      <Tabs activeTab={tab} onClick={handleSetTab} />
      <Section title='Pesel' value='123456789'>
        <p>tutaj będzie formularz</p>
      </Section>
    </Layout>
  );
};

export default Popup;
