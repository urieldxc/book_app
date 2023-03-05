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
                <Grid item sx={{marginLeft:"10px", marginTop: "20px"}} container width="100%" spacing={2} justifyContent="space-between">
                    <Hidden smDown>
                        <Button sx={{ width: '18%', height: '40px', paddingRight: '40px', paddingLeft: '40px' }} size="large" component={Link} variant="contained" href={`${bookDetails.website}`}>
                            Website
                        </Button>
                    </Hidden>
                    <Hidden smDown>
                        <Button sx={{ width: '40%', height: '40px', paddingRight: '10px', paddingLeft: '10px' }} size="large" variant="contained">
                            Add to favourites
                        </Button>
                    </Hidden>
                    <Hidden smDown>
                        <Button sx={{ width: '30%', height: '40px', paddingRight: '10px', paddingLeft: '10px' }} size="large" onClick={handleOpen} variant="contained">
                            Delete book
                        </Button>
                    </Hidden>
                </Grid>
            </Hidden>
        </Grid>
    )
}

export default BookDetailActions
