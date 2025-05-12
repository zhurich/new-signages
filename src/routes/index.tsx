import React, { FC, memo, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RoadSignsRegistryPage } from "./RoadSignsRegistryPage/RoadSignsRegistryPage";
import { PointersRegistryPage } from "./PointersRegistryPage/PointersRegistryPage";
import { PointerConstructorPage } from "./PointerConstructorPage/PointerConstructorPage";

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path={"/registry"} element={<RoadSignsRegistryPage />} />
      <Route path={"/pointers"} element={<PointersRegistryPage />} />
      <Route path={"/constructor"} element={<PointerConstructorPage />} />
      <Route path="/" element={<Navigate to="/pointers" replace />} />
      {/* <Route path={Path.All} element={<PageNotFound />} /> */}
    </Routes>
  );
};
