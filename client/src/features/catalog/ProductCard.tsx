import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    CardHeader,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";

import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { currencyFormat } from "../../app/util/util";
import { useAppDispatch, UseAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync } from "../basket/basketSlice";

interface Props {
    product: Product;
}

function ProductCard({ product }: Props) {
    const { status } = UseAppSelector(state => state.basket)
    const dispatch = useAppDispatch();

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "secondary.main" }}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: { fontWeight: "bold", color: "primary.main" },
                }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: "contain", bgcolor: "primary.main" }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color="secondary" variant="h5">
                    {currencyFormat(product.price)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton
                    loading={status.includes('pendingAddItem' + product.id)}
                    onClick={() => dispatch(addBasketItemAsync({ productId: product.id }))}
                    size="small"
                >
                    ADD TO CART
                </LoadingButton>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">
                    VIEW
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;
