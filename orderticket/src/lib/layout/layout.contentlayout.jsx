import React from "react";

const ContentLayout = ({ children }) => {
  return (
    <div className="h-full overflow-scroll w-full px-[64px] pt-[40px] bg-[##bae7ff] overflow-x-hidden">
      {children}
    </div>
  );
};

export default ContentLayout;
