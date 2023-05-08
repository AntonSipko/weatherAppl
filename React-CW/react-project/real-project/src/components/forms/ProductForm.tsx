import { Avatar, Box, Button, Grid, InputLabel, MenuItem, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ProductType } from "../../model/ProductType"
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { CategoryType } from "../../model/CategoryType";
import parametersConfig from "../../config/parameters-config.json"
type Props = {
    submitFn: (product: ProductType) => string
}
const initialProduct: ProductType = {
    category: '', image: '', cost: 0,
    title: '', unit: ''
};
export const ProductForm: React.FC<Props> = ({ submitFn }) => {
    const [product, setProduct] = useState<ProductType>(initialProduct);
    const image = useRef<string>('');
    const categories: string[] = useSelector<any, string[]>(state => state.categoriesState.categories);
    const parameters = parametersConfig;
    function onSubmitFn(event: any) {
        event.preventDefault(); //canceling default form submit
        const errorMessage = submitFn(product);
        if (!errorMessage) {
            document.querySelector("form")!.reset();
        } else {

        }

        //TODO error handling
    }
    function imageHandler(event: any) {
        const urlImage = event.target.value;
        image.current=urlImage;
        setProduct({ ...product, image: urlImage });

    }
    function titleHandler(event: any) {
        const productTitle = event.target.value;
        setProduct({ ...product, title: productTitle });

    }
    function getCategoryMenuItems() {
        return categories.map(cat => {
            return <MenuItem value={cat}>{cat}</MenuItem>
        })
    }
    function getUnitMenuItems() {
        return parametersConfig.units.map(param => {
            return <MenuItem value={param} >{param}</MenuItem>
        })

    }

    function categoryHandler(event: any) {
        const productCategory = event.target.value;
        setProduct({ ...product, category: productCategory })

    }
    function unitHandler(event: any) {
        const productUnit = event.target.value;
        setProduct({ ...product, unit: productUnit })


    }
    function costHandler(event: any) {
        const productCost = event.target.value;
        setProduct({ ...product, cost: productCost })

    }
    return <Box>
        <form onSubmit={onSubmitFn}>
            <Grid container spacing={4} justifyContent={'center'}>
                <Grid item xs={8} md={7} >
                    <TextField label='URL image'
                        required fullWidth value={product.image}
                        onChange={imageHandler} />
                </Grid>
                <Grid item xs={8} md={7}>
                    <TextField label='Product Name'
                        fullWidth required
                        onChange={titleHandler} />
                </Grid>
                <Grid item xs={8} md={7}>
                    <InputLabel>Category</InputLabel>
                    <Select label="Category"
                        required fullWidth value={product.category}
                        onChange={categoryHandler}>
                        {getCategoryMenuItems()}
                    </Select>
                </Grid>
                <Grid item xs={8} md={7}>
                <InputLabel>Unit</InputLabel>
                    <Select
                        label="Unit"
                        required fullWidth value={product.unit}
                        onChange={unitHandler} >
                        {getUnitMenuItems()}
                    </Select>
                </Grid>
                <Grid item xs={8} md={7}>
                    <TextField label='Cost' fullWidth required
                        type="number" onChange={costHandler}
                        helperText={`enter the price in range ["${parameters.minCost} - ${parameters.maxCost}]`}
                        inputProps={{
                            min: `${parameters.minCost}`,
                            max: `${parameters.maxCost}`
                        }} />
                </Grid>
                <Grid item xs={5} md={12} display={"flex"} flexDirection={"row"} justifyContent={"center"}>
                    {image.current && <Avatar src={image.current} sx={{
                        width: "20vw",
                        height: "20vw"
                    }} />}
                </Grid>
                <Grid item container spacing={65}  justifyContent={'center'} xs={12}>
                    <Grid item xs={4} >
                        <Button type='submit'>Submit</Button>
                    </Grid>
                    <Grid item xs={4} >
                        <Button type='reset'>Reset</Button>
                    </Grid>
                </Grid>
            </Grid>

        </form>
    </Box>
}