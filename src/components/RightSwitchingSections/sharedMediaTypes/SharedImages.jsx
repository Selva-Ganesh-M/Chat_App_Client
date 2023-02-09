import { faker } from '@faker-js/faker'
import { Grid } from '@mui/material'
import React from 'react'

const SharedImages = () => {
    return (
        <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => {
                return (
                    <Grid item xs={4} key={item}>
                        <img src={faker.image.image()} alt={faker.name.firstName()} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default SharedImages