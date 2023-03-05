import { Box, Button, Modal, Paper, Typography } from "@mui/material"
import { Stack } from "@mui/system";
import { useState } from "react"


const DeleteModal = ({handleClose, handleOpen, handleDelete, open, isbn}) => {
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "400px",
        bgcolor: 'background.paper',
        boxShadow: 24,
        textAlign: "center",
        borderRadius: "10px",
        pt: 2,
        px: 4,
        pb: 3,
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{ ...style, width: 495 }}>

                    <Typography variant="h6" pt={2} id="modal-description">Are you sure that you want to delete this book?</Typography>

                    <Stack mt={4} justifyContent={"center"} spacing={4} direction="row">
                        <Button variant="contained">
                            <Typography onClick={() =>handleDelete(isbn)}>Yes</Typography>
                        </Button>
                        <Button variant="contained">
                            <Typography onClick={handleClose}>I've changed my mind</Typography>
                        </Button>
                    </Stack>


                </Box>
            </Modal>
        </div>
    )
}

export default DeleteModal