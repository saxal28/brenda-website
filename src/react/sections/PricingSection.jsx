import React from "react";
import { observer } from "mobx-react";
import {Card} from "../components/Card";
import {GridContainer} from "../components/GridContainer";
import {Column} from "../components/Column";
import {Hero} from "../components/Hero";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";



export class PricingSection extends React.Component {


    render() {

        return (

            <div>

                <Header title="Gallery" height="30vh" color="transparent" />

                <GridContainer spacing>

                    <Column columnSize="4">
                        <Card  title="A" subtitle="package a"  />
                    </Column>

                    <Column columnSize="4">
                        <Card  title="B" subtitle="package b" />
                    </Column>

                    <Column columnSize="4">
                        <Card  title="C" subtitle="package c"  />
                    </Column>

                </GridContainer>

                {/*<Footer />*/}

            </div>

        )
    }
}