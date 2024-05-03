import React from "react";
import {Row} from "@/components/container/Flex/Row";
import {Column} from "@/components/container/Flex/Column";

export interface BaseFlexProps {
    children: React.ReactNode,
    classNames?: string
}

interface FlexProps extends BaseFlexProps {
    type?: "row" | "col"
}

const Flex = ({type = "row", children, classNames}: FlexProps) => {
    if (type === "row") {
        return (
            <Row classNames={classNames}>
                {children}
            </Row>
        );
    }

    return (
        <Column classNames={classNames}>
            {children}
        </Column>
    );
}
export default Flex
export {Column, Row}