import React from "react";
import MainLayout from "../../lib/layout/layout.mainlayout";
import { Navigation, SearchHeader } from "./ItemHeader";
import MenuItem from "../../lib/components/MenuItem";
import ContentLayout from "../../lib/layout/layout.contentlayout";
import IconHeader from "./IconHeader";
function HomePage({ children }) {
  return (
    <MainLayout
      IconHeader={IconHeader}
      Search={SearchHeader}
      Navigation={Navigation}
      MenuItem={MenuItem}
    >
      <ContentLayout>{children}</ContentLayout>
    </MainLayout>
  );
}
export default HomePage;
