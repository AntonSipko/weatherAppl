import { Typography, Box, Avatar } from "@mui/material"
import {DataGrid, GridColDef} from "@mui/x-data-grid"
import { ProductType } from "../../model/ProductType"
import { useSelector } from "react-redux"
import { ShoppingProductType } from "../../model/ShoppingProductType"
import { useMemo } from "react"
import { ShoppingProductDataType } from "../../model/ShoppingProductDataType"
export const ShoppingCart: React.FC = () => {
    const cartProducts: ShoppingProductType[] =
     useSelector<any, ShoppingProductType[]>(state => state.shoppingState.shopping);
     const products = useSelector<any, ProductType[]> (state => state.productsState.products);
     const shopping = useSelector<any,ShoppingProductType[]> (state => state.shoppingState.shopping);

     const tableData=useMemo(()=>getTableData(),[products,shopping])
     function getTableData():ShoppingProductDataType[] {
        const cartProducts= products.map(product=>{
            const id=product.id!
            const count=shopping.reduce((res,p)=>{
              return p.id==id?p.count:res
            },0)
            const cost=count*product.cost
            return {...product,count,cost}
        })
        return cartProducts.filter(p=>{
            return p.count>0;

        });
     }
     const totalCost = tableData.reduce((acc, product) => acc + product.cost, 0);
     
    const columns: GridColDef[] = [
        {field:"image", headerName: '', flex: 0.3,
         renderCell: (params) => <Avatar src={`images/${params.value}`} 
         sx={{width: "90%", height: "80px"}}/>, align: "center", headerAlign: "center"},
        {field: "title", headerName: 'Title', flex: 0.8, align: "center", headerAlign: "center"},
        {field: "category", headerName: "Category", flex: 0.5},
        {field: "count", headerName: "Count", flex: 0.5},
        {field: "unit", headerName: "UnitCategory", flex: 0.4},
        {field: "cost", headerName: "Cost (ILS)", flex: 0.3}
    ]
    return <Box sx={{width: "100vw",display: "flex", justifyContent:"center"}}>
        <Box sx={{width: "80vw",height: "80vh"}}>
        <DataGrid columns={columns} rows={tableData} getRowHeight={() => 'auto'}/>
        <Typography>Total Cost:{totalCost}</Typography>
    </Box>
    </Box>
    
}