import React, { FC, memo, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { Path } from "@enums";
import { RoadSignsRegistryPage } from "./RoadSignsRegistryPage/RoadSignsRegistryPage";
import { PointersRegistryPage } from "./PointersRegistryPage/PointersRegistryPage";

// import { useAppDispatch, useAppSelector } from "@hooks";
// import {
//   fetchUserData,
//   fetchAuthorizedUserData,
//   getUserInfoById,
// } from "@store/userSlice";

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path={"/registry"} element={<RoadSignsRegistryPage />} />
      <Route path={"/pointers"} element={<PointersRegistryPage />} />
      {/* <Route path="/" element={<Navigate to={Path.MainPage} replace />} />
      <Route path={Path.All} element={<PageNotFound />} /> */}
    </Routes>
  );
};
