import { IconButton, InputAdornment, Stack, TextField } from "@mui/material"
import { styled } from "@mui/material/styles"
import { LinkSimple, Smiley } from "phosphor-react"

// styled inputBase
const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"
    }
}))

const InputBase = ({ setIsEmojiPickerOpen }) => {
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
                        <InputAdornment >
                            <IconButton>
                                <LinkSimple />
                            </IconButton>
                        </InputAdornment>
                    </Stack>
                ),
                endAdornment: (
                    <Stack>
                        <InputAdornment>
                            <IconButton onClick={() => setIsEmojiPickerOpen(prev => !prev)}>
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