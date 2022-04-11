

import { Title, TitleOrder, useMantineTheme } from "@mantine/core";
import { ReactChild } from "react";

type GradientTitleProps = {
    order: TitleOrder,
    children: ReactChild
}
const GradientTitle = ({ order, children }: GradientTitleProps) => {

    const theme = useMantineTheme();
    return (
        <Title order={order} style={{
            backgroundColor: "#34288d",
            backgroundImage: "radial-gradient(ellipse at 30% 10%, #34288d 0%, #983c91 73%, #e4b963 89%, #ffffff 100%)",
            backgroundClip: "text",
            color: "white",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }}>{children}</Title>
    )
};

export default GradientTitle;
