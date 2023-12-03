import { Box, Fade, useScrollTrigger } from "@mui/material";

function HideOnScroll() {
    const trigger = useScrollTrigger();
    return (
        <div>
            {trigger ?
                <Fade in={trigger}>
                    <Box
                        // onClick={handleClick}
                        role="presentation"
                        sx={{ position: 'fixed', bottom: 16, right: 16 }}
                    >
                    </Box>
                </Fade> :
                null}
        </div>

    );
}

export default HideOnScroll;
