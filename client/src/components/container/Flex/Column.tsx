import React from "react";

export const Column = ({children, classNames}: { children: React.ReactNode, classNames?: string }) => {
    return (
        <div className={`flex flex-col gap-4 ${classNames}`}>
            {children}
        </div>
    );
}