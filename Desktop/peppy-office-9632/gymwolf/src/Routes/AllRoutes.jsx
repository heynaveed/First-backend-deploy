import { Route, Routes } from "react-router-dom";
import Exercises from "../Pages/Exercises";
import MyPersonalTrainer from "../Pages/MyPersonalTrainer";
import Progress from "../Pages/Progres";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Progress/>}/>
            <Route path="/exercises" element={<Exercises/>}/>
            <Route path="/mytrainer" element={<MyPersonalTrainer/>}/>
        </Routes>
    )
}