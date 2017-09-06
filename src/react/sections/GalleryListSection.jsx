import React from "react";
import firebase from "firebase";
import _ from "lodash";
import { observer } from "mobx-react";
import {ImageStore} from "../../stores/ImageStore";
import FileUploader from 'react-firebase-file-uploader';
import {Card} from "../components/Card";
import {GridContainer} from "../components/GridContainer";
import {Column} from "../components/Column";
import {Hero} from "../components/Hero";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";

// import {UploadButton} from "./common/UploadButton";

const store = new ImageStore();

export default observer(class GalleryListSection extends React.Component {

    componentWillMount() {

        firebase.database().ref("images").on("value", snapshot => {
            store.content = snapshot.val();
        })

    }

    render() {

        let { content } = store;
        const uids = _.keys(content);
        const values = _.values(content);

        values.map((x, index) => {
            x.uid = uids[index];
        })


        return (

            <div>

              <Hero title="Gallery" height="30vh" image="http://i.imgur.com/jhkoXzR.jpg" />

              <GridContainer spacing>

                  {values.map(x => {
                      return (

                         <Column columnSize="6">

                            <Card  title="title" subtitle="this is a subtitle"  image={x.url}/>

                         </Column>

                      )
                  })}

              </GridContainer>

                <Footer />

            </div>

        )
    }
})