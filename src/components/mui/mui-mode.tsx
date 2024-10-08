import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const MuiMode = () => {
    const theme = useTheme();
    console.log(theme.palette.mode);
    return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
}