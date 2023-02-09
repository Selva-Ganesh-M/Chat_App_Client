import { useTheme } from "@mui/material/styles"

export const useNeutralBg = () => {
    const theme = useTheme()

    return theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper
}