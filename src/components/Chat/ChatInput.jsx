import { Fab, IconButton, InputAdornment, Stack, TextField, Tooltip } from "@mui/material"
import { styled } from "@mui/material/styles"
import { LinkSimple, Smiley } from "phosphor-react"
import { Actions } from "../../data"
import { useTheme } from "@mui/material/styles"
import React from "react"


// styled inputBase
const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"
    }
}))

const InputBase = ({ setIsEmojiPickerOpen }) => {
    const [isLinksOpen, setIsLinksOpen] = React.useState(false)

    const theme = useTheme()
    return (
        < StyledInput
            placeholder={'send a message...'}
            fullWidth
            variant='filled'
            sx={{ display: "flex", alignItems: "center" }}
            InputProps={{
                disableUnderline: true,
                // Adornment: are things that you can add to the start and end of an input InputBase
                startAdornment: (
                    <Stack>
                        {/* floater */}
                        {
                            isLinksOpen && (
                                <Stack sx={{ position: "relative" }}>
                                    <Stack sx={{ position: "absolute", bottom: 40, right: "-20px", backgroundColor: theme.palette.background.default }} spacing={3} p={1} borderRadius={5}>
                                        {
                                            Actions.map(item => (
                                                <Tooltip title={item.title} placement="right">
                                                    <Fab key={item.title} >
                                                        {item.icon}
                                                    </Fab>
                                                </Tooltip>

                                            ))
                                        }

                                    </Stack>
                                    {/* {Actions.map(item => (
                            <Fab sx={{ position: "absolute", top: -item.y }}>
                                {item.icon}
                            </Fab>
                            ))} */}
                                </Stack>
                            )
                        }

                        {/* the link emoji */}
                        <InputAdornment >
                            <IconButton onClick={() => setIsLinksOpen(prev => !prev)} onBlur={() => setIsLinksOpen(prev => !prev)} >
                                <LinkSimple />
                            </IconButton>
                        </InputAdornment>
                    </Stack>
                ),
                endAdornment: (
                    <Stack>
                        <InputAdornment>
                            <IconButton onClick={() => setIsEmojiPickerOpen(prev => !prev)} onBlur={() => setIsEmojiPickerOpen(prev => !prev)}>
                                <Smiley />
                            </IconButton>
                        </InputAdornment>
                    </Stack>
                ),
            }
            } />
    )
}

export default InputBase