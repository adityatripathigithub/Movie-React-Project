import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynceloadeperson, removeperson } from "../store/actions/personAction";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loding from "./Loding";

const PersonDetails = () => {
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

export default PersonDetails;
