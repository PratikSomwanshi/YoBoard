import React from "react";
import SideBar from "./_components/sidebar";

interface DashBoardLayoutProps {
    children: React.ReactNode;
}

function layout({ children }: DashBoardLayoutProps) {
    return (
        <>
            <SideBar />
            <div>{children}</div>
        </>
    );
}

export default layout;
