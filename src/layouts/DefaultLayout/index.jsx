/* eslint-disable prettier/prettier */
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer, ContentContainer, MainContainer } from "./styles";
import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { FormRegister } from "../../components/FormRegister";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Sidebar />
        <MainContainer>
          <main>
            <Outlet />
          </main>
        </MainContainer>
      </ContentContainer>

    </LayoutContainer >
  )
}