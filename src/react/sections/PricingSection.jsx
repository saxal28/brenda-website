import React from "react";
import { observer } from "mobx-react";
import {Card} from "../components/Card";
import {GridContainer} from "../components/GridContainer";
import {Column} from "../components/Column";
import {Hero} from "../components/Hero";
import {Footer} from "../components/Footer";



export class PricingSection extends React.Component {


    render() {

        return (

            <div>

                <Hero title="Gallery" height="30vh" image="http://i.imgur.com/jhkoXzR.jpg" />

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