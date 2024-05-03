import React from "react";

export const Row = ({children, classNames}: { children: React.ReactNode, classNames?: string }) => {
    return (
        <div className={`flex flex-row gap-4 ${classNames}`}>
            {children}
        </div>
    );
}