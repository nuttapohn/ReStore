import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, UseAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";


function ContactPage() {
    const dispatch = useAppDispatch()

    const { data, title } = UseAppSelector(state => state.counter)

    return (
        <>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h5">The data is: {data}</Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(decrement(1))} variant="contained" color="error" >Decrement</Button>
                <Button onClick={() => dispatch(increment(1))} variant="contained" color="primary" >Increment</Button>
                <Button onClick={() => dispatch(increment(5))} variant="contained" color="secondary" >Increment 5</Button>
            </ButtonGroup >
        </>

    );
}

export default ContactPage;

