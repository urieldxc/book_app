import { Button, Grid, Hidden, Stack, Link } from '@mui/material'
import React from 'react'

const BookDetailActions = ({ bookDetails, handleOpen }) => {
    return (
        <Grid container spacing={2}>
            <Hidden smUp>
                
                    <Grid item xs={12}>
                        <Button sx={{ width: '100%', height: '40px', marginTop: "20px" }} size="small" component={Link} variant="contained" href={`${bookDetails.website}`}>
                            Website 🌐
                        </Button>
                        <Button sx={{ width: '100%', height: '40px', marginTop: "20px" }} size="small" variant="contained">
                            Add to favourites ❤️
                        </Button>
                        <Button sx={{ width: '100%', height: '40px', marginTop: "20px" }} size="small" onClick={handleOpen} variant="contained">
                            Delete book 🗑️
                        </Button>
                    </Grid>
                
            </Hidden>
            <Hidden xsDown>
                <Grid item>
                    <Stack direction="row" width="100%">
                        <Hidden smDown>
                            <Button sx={{ width: '20%', height: '40px', paddingRight: '20px', paddingLeft: '20px' }} size="small" component={Link} variant="contained" href={`${bookDetails.website}`}>
                                Website
                            </Button>
                        </Hidden>
                        <Hidden smDown>

                            <Button sx={{ width: '50%', height: '40px', paddingRight: '20px', paddingLeft: '20px' }} size="small" variant="contained">
                                Add to favourites
                            </Button>
                        </Hidden>
                        <Hidden smDown>
                            <Button sx={{ width: '40%', height: '40px', paddingRight: '20px', paddingLeft: '20px' }} size="small" onClick={handleOpen} variant="contained">
                                Delete book
                            </Button>
                        </Hidden>
                    </Stack>
                </Grid>
            </Hidden>
        </Grid>
    )
}

export default BookDetailActions
