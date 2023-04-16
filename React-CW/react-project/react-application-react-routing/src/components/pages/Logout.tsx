import { useDispatch, useSelector } from "react-redux";

export const Logout :React.FC=()=>{
    const authUser = useSelector<any, string>(state=>state.auth.authUser)
    const dispatch = useDispatch();
    <Button onclick=
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign <output></output>
            </Button>
}