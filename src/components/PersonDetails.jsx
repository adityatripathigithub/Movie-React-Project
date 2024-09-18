import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { asynceloadeperson, removeperson } from "../store/actions/personActions";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loding from "./Loding";

const PersonDetails = () => {

    const persondetails = () => {
        const { pathname } = useLocation();
        const navigate = useNavigate();
        const { id } = useParams();
        const { info } = useSelector((state) => state.person);
        const dispatch = useDispatch();
        console.log(info);

        useEffect(() => {
            dispatch(asynceloadeperson(id));
            return () => {
                dispatch(removeperson());
            };
        }, [id]);

        return info ? <div>PersonDetails</div>:<Loding />;
    };
};
export default PersonDetails;
