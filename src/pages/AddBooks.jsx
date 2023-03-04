import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const AddBooks = ({ updatedList, setUpdatedList }) => {
    const [values, setValues] = useState(
        {
            "isbn": "",
            "title": "",
            "subtitle": "",
            "author": "",
            "published": "",
            "publisher": "",
            "pages": "",
            "description": "",
            "website": "",
            "category": ""  
        }
    )

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newList = [values, ...updatedList]
        setUpdatedList(newList)
        navigate("/books")
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
    }

    return (
        <div>
            <Container component="main" maxWidth="md" >
                <form>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Add new book
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="title"
                                        required
                                        fullWidth
                                        id="title"
                                        label="Title"
                                        autoFocus
                                        value={values.title || ""}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="subtitle"
                                        label="Subtitle"
                                        name="subtitle"
                                        value={values.subtitle || ""}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="author"
                                        label="Author"
                                        name="author"
                                        value={values.author || ""}
                                        onChange={handleInputChange}

                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="isbn"
                                        label="ISBN"
                                        name="isbn"
                                        value={values.isbn || ""}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="publisher"
                                        label="Publisher"
                                        name="publisher"
                                        value={values.publisher || ""}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="number"
                                        id="pages"
                                        label="Pages"
                                        name="pages"
                                        value={values.pages || ""}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="published"
                                        label="Published"
                                        name="published"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        value={values.published || ""}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="website"
                                        label="Website"
                                        name="website"
                                        value={values.website || ""}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="category"
                                        label="Category"
                                        name="category"
                                        value={values.category || ""}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        fullWidth
                                        id="description"
                                        label="Description"
                                        name="description"
                                        multiline
                                        maxRows={4}
                                        value={values.description || ""}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Add book
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Container>
        </div>
    )
}

export default AddBooks